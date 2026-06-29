from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


OUT = Path(__file__).with_name("strive_medication_scenario_cards.pdf")
BANNER_PATH = Path("/Users/joshua/Downloads/ChatGPT Image May 12, 2026, 09_39_17 PM.png")
COPYRIGHT = "(c) 2026 STRIVE Physical Therapy | Las Vegas. Authorized training use only."


@dataclass(frozen=True)
class ScenarioCard:
    code: str
    title: str
    front_text: str
    use_text: str
    activities: str
    accent: str


CARDS = [
    ScenarioCard(
        "S1",
        "STOPPED / DISCONTINUED",
        "STOPPED\nDo not include this medication on the active list.",
        "Place beside a bottle that should be removed from the active medication list.",
        "Activities 6, 11, 12",
        "#d62f2f",
    ),
    ScenarioCard(
        "S2",
        "NEW MEDICATION",
        "NEW MEDICATION\nAdd this medication to the active list.",
        "Place beside a bottle that should be added to the medication list.",
        "Activities 6, 11, 12",
        "#2f7d32",
    ),
    ScenarioCard(
        "S3",
        "CHANGED DOSE",
        "CHANGED DOSE\nThe instructions have changed.",
        "Use with one bottle when instructions changed from old to new.",
        "Activities 6, 12",
        "#ff7a00",
    ),
    ScenarioCard(
        "S4",
        "OLD INSTRUCTION",
        "OLD INSTRUCTION\nUse this as the prior direction.",
        "Pair with NEW INSTRUCTION to compare a prior direction with an updated direction.",
        "Activities 6, 7, 11, 12",
        "#6f7f91",
    ),
    ScenarioCard(
        "S5",
        "NEW INSTRUCTION",
        "NEW INSTRUCTION\nUse this as the updated direction.",
        "Pair with OLD INSTRUCTION. Patient updates the list from this card.",
        "Activities 6, 7, 11, 12",
        "#005a9c",
    ),
    ScenarioCard(
        "S6",
        "LOW SUPPLY",
        "LOW SUPPLY\nOnly a few pills remain.",
        "Attach to a bottle with limited pills remaining. Patient decides whether refill is needed.",
        "Activities 5, 10, 12",
        "#8b1f1f",
    ),
    ScenarioCard(
        "S7",
        "CALL PHARMACY / DOCTOR",
        "CALL PHARMACY OR DOCTOR\nDo not guess. Clarify first.",
        "Use when there is a conflict, low supply, or missed-dose uncertainty.",
        "Activities 5, 7, 9, 12",
        "#111111",
    ),
    ScenarioCard(
        "S8",
        "TAKE WITH FOOD",
        "TAKE WITH FOOD\nTake during or right after a meal.",
        "Add meal-planning demand without printing a separate bottle.",
        "Activities 10, 12",
        "#2c6e8f",
    ),
    ScenarioCard(
        "S9",
        "MISSED DOSE",
        "MISSED DOSE\nA dose may have been missed.",
        "Patient decides what to do after realizing a dose was missed.",
        "Activities 9, 12",
        "#7a4fb3",
    ),
    ScenarioCard(
        "S10",
        "DISTRACTION",
        "DISTRACTION\nAn interruption happens during the task.",
        "Add phone ring, conversation, or irrelevant paperwork during complex tasks.",
        "Activities 10, 12",
        "#b55a00",
    ),
]


def fit_text(text: str, font: str, size: float, width: float) -> str:
    if stringWidth(text, font, size) <= width:
        return text
    ellipsis = "..."
    trimmed = text
    while trimmed and stringWidth(trimmed + ellipsis, font, size) > width:
        trimmed = trimmed[:-1]
    return trimmed.rstrip() + ellipsis


def wrap_line(text: str, font: str, size: float, width: float) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if stringWidth(candidate, font, size) <= width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_wrapped(
    c: canvas.Canvas,
    text: str,
    x: float,
    y: float,
    width: float,
    font: str,
    size: float,
    leading: float,
    *,
    max_lines: int | None = None,
) -> float:
    c.setFont(font, size)
    lines: list[str] = []
    for raw_line in text.splitlines():
        lines.extend(wrap_line(raw_line, font, size, width) or [""])
    if max_lines and len(lines) > max_lines:
        lines = lines[:max_lines]
        lines[-1] = fit_text(lines[-1], font, size, width)
    for line in lines:
        c.drawString(x, y, line)
        y -= leading
    return y


def draw_image_fit(c: canvas.Canvas, path: Path, x: float, y: float, max_w: float, max_h: float) -> None:
    image = ImageReader(str(path))
    img_w, img_h = image.getSize()
    scale = min(max_w / img_w, max_h / img_h)
    c.drawImage(image, x, y, width=img_w * scale, height=img_h * scale, preserveAspectRatio=True, mask=None)


def draw_watermark(c: canvas.Canvas) -> None:
    width, height = letter
    c.saveState()
    c.translate(width / 2, height / 2)
    c.rotate(34)
    c.setFillColor(colors.Color(0.55, 0.55, 0.55, alpha=0.10))
    c.setFont("Helvetica-Bold", 34)
    c.drawCentredString(0, 16, "STRIVE Physical Therapy")
    c.setFont("Helvetica-Bold", 22)
    c.drawCentredString(0, -18, "Las Vegas")
    c.restoreState()


def draw_footer(c: canvas.Canvas, page_number: int) -> None:
    width, _ = letter
    c.setStrokeColor(colors.HexColor("#c8c8c8"))
    c.setLineWidth(0.4)
    c.line(0.48 * inch, 0.36 * inch, width - 0.48 * inch, 0.36 * inch)
    c.setFillColor(colors.HexColor("#333333"))
    c.setFont("Helvetica", 6.8)
    c.drawString(0.48 * inch, 0.22 * inch, COPYRIGHT)
    c.drawRightString(width - 0.48 * inch, 0.22 * inch, f"Scenario cards - page {page_number}")


def draw_header(c: canvas.Canvas, page_title: str, page_note: str) -> None:
    width, height = letter
    draw_watermark(c)
    margin_x = 0.48 * inch
    draw_image_fit(c, BANNER_PATH, margin_x, height - 0.72 * inch, 2.6 * inch, 0.58 * inch)
    c.setFont("Helvetica-Bold", 15)
    c.drawString(margin_x + 2.78 * inch, height - 0.34 * inch, page_title)
    c.setFont("Helvetica", 7.5)
    c.drawRightString(width - margin_x, height - 0.34 * inch, page_note)


def draw_card(c: canvas.Canvas, card: ScenarioCard, x: float, y: float, w: float, h: float) -> None:
    accent = colors.HexColor(card.accent)
    pale = colors.HexColor("#fff7d6")
    ink = colors.HexColor("#111111")

    c.setFillColor(colors.white)
    c.setStrokeColor(colors.black)
    c.setLineWidth(1.2)
    c.roundRect(x, y, w, h, 8, stroke=1, fill=1)

    c.setFillColor(accent)
    c.roundRect(x + 8, y + h - 34, 40, 22, 4, stroke=0, fill=1)
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 10)
    c.drawCentredString(x + 28, y + h - 28, card.code)

    c.setFillColor(ink)
    c.setFont("Helvetica-Bold", 10.2)
    c.drawString(x + 56, y + h - 27, fit_text(card.title, "Helvetica-Bold", 10.2, w - 68))

    c.setFillColor(pale)
    c.roundRect(x + 12, y + h - 98, w - 24, 50, 5, stroke=0, fill=1)
    c.setFillColor(ink)
    draw_wrapped(c, card.front_text, x + 20, y + h - 64, w - 40, "Helvetica-Bold", 8.5, 10.2, max_lines=4)

    c.setFillColor(accent)
    c.rect(x + 12, y + 60, 3, 31, stroke=0, fill=1)
    c.setFillColor(ink)
    c.setFont("Helvetica-Bold", 6.8)
    c.drawString(x + 20, y + 84, "HOW TO USE")
    draw_wrapped(c, card.use_text, x + 20, y + 74, w - 34, "Helvetica", 6.65, 7.8, max_lines=3)

    c.setFont("Helvetica-Bold", 6.8)
    c.drawString(x + 20, y + 42, "BEST ACTIVITIES")
    draw_wrapped(c, card.activities, x + 20, y + 32, w - 34, "Helvetica", 6.9, 8, max_lines=2)

    c.setFillColor(colors.HexColor("#444444"))
    c.setFont("Helvetica", 5.8)
    c.drawString(x + 12, y + 9, "(c) 2026 STRIVE Physical Therapy | Las Vegas")


def draw_card_page(c: canvas.Canvas, cards: list[ScenarioCard], page_number: int) -> None:
    width, height = letter
    draw_header(c, "Medication Scenario Cards", "Reusable cards from handbook index")

    margin_x = 0.48 * inch
    card_w = 3.62 * inch
    card_h = 2.36 * inch
    gap_x = 0.30 * inch
    gap_y = 0.14 * inch
    start_x = margin_x
    start_y = height - 1.03 * inch - card_h

    for idx, card in enumerate(cards):
        col = idx % 2
        row = idx // 2
        x = start_x + col * (card_w + gap_x)
        y = start_y - row * (card_h + gap_y)
        draw_card(c, card, x, y, card_w, card_h)

    c.setDash(3, 3)
    c.setStrokeColor(colors.HexColor("#999999"))
    c.setLineWidth(0.4)
    c.line(width / 2, start_y + card_h + 0.06 * inch, width / 2, start_y - 2 * (card_h + gap_y) - 0.05 * inch)
    for row in range(1, 3):
        y = start_y - row * gap_y - (row - 0.02) * card_h
        c.line(margin_x, y, width - margin_x, y)
    c.setDash()

    c.setFont("Helvetica-Bold", 8)
    c.setFillColor(colors.black)
    c.drawString(margin_x, 0.55 * inch, "Print note")
    c.setFont("Helvetica", 7.5)
    c.drawString(margin_x, 0.44 * inch, "Print at 100% scale. Cut along dotted lines. Place cards beside bottles only when listed.")
    draw_footer(c, page_number)


def build() -> None:
    c = canvas.Canvas(str(OUT), pagesize=letter)
    c.setTitle("STRIVE Medication Scenario Cards")
    draw_card_page(c, CARDS[:6], 1)
    c.showPage()
    draw_card_page(c, CARDS[6:], 2)
    c.save()
    print(OUT)


if __name__ == "__main__":
    build()
