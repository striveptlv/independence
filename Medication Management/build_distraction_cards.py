from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


OUT = Path(__file__).with_name("strive_medication_distraction_cards.pdf")
BANNER_PATH = Path("/Users/joshua/Downloads/ChatGPT Image May 12, 2026, 09_39_17 PM.png")
COPYRIGHT = "(c) 2026 STRIVE Physical Therapy | Las Vegas. Authorized training use only."


@dataclass(frozen=True)
class Card:
    code: str
    title: str
    patient_text: str
    setup: str
    observe: str
    accent: str


CARDS = [
    Card(
        "D1",
        "Pharmacy Notification",
        "New message from pharmacy:\nPlease call before 4:00 PM about a refill question.",
        "Introduce around the 5-minute mark while the patient is filling the organizer.",
        "Does the patient pause, save their place, handle the interruption, and return accurately?",
        "#ff7a00",
    ),
    Card(
        "D2",
        "Appointment Alarm",
        "Appointment reminder:\nYou need to leave in 10 minutes.",
        "Set a timer or phone alarm to sound around the 8-minute mark. Do not coach immediately.",
        "Do errors increase after the alarm? Does the patient rush or lose their place?",
        "#005a9c",
    ),
    Card(
        "D3",
        "Similar-Looking Bottles",
        "These two bottles look similar.\nCheck the medication name before placing pills.",
        "Use two bottles with similar labels, caps, or pill colors.",
        "Does the patient read labels or choose by appearance?",
        "#6f7f91",
    ),
    Card(
        "D4",
        "Nearly Empty Bottle",
        "This bottle has only 3 pills remaining.",
        "Place this card beside the low-supply bottle or tape it to the bottle.",
        "Does the patient identify refill need and plan to call before running out?",
        "#d62f2f",
    ),
    Card(
        "D5",
        "Take With Food",
        "TAKE WITH FOOD",
        "Place beside one medication bottle as an added instruction.",
        "Does the patient notice the special instruction and connect it to meals?",
        "#2f7d32",
    ),
    Card(
        "D6",
        "Therapist Timing Card",
        "Helper sequence:\nGive task -> observe -> pharmacy note -> alarm -> ask -> score.",
        "Keep this card for the helper, not the patient.",
        "Score accuracy, self-correction, label use, refill awareness, and interruption recovery.",
        "#111111",
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


def draw_footer(c: canvas.Canvas) -> None:
    width, _ = letter
    c.setStrokeColor(colors.HexColor("#c8c8c8"))
    c.setLineWidth(0.4)
    c.line(0.48 * inch, 0.36 * inch, width - 0.48 * inch, 0.36 * inch)
    c.setFillColor(colors.HexColor("#333333"))
    c.setFont("Helvetica", 6.8)
    c.drawString(0.48 * inch, 0.22 * inch, COPYRIGHT)
    c.drawRightString(width - 0.48 * inch, 0.22 * inch, "Medication distraction cards")


def draw_card(c: canvas.Canvas, card: Card, x: float, y: float, w: float, h: float) -> None:
    accent = colors.HexColor(card.accent)
    pale = colors.HexColor("#fff7d6")
    ink = colors.HexColor("#111111")

    c.setFillColor(colors.white)
    c.setStrokeColor(colors.black)
    c.setLineWidth(1.2)
    c.roundRect(x, y, w, h, 8, stroke=1, fill=1)

    c.setFillColor(accent)
    c.roundRect(x + 8, y + h - 33, 34, 21, 4, stroke=0, fill=1)
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 11)
    c.drawCentredString(x + 25, y + h - 27, card.code)

    c.setFillColor(ink)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(x + 50, y + h - 26, fit_text(card.title, "Helvetica-Bold", 11, w - 62))

    c.setFillColor(pale)
    c.roundRect(x + 12, y + h - 105, w - 24, 59, 5, stroke=0, fill=1)
    c.setFillColor(ink)
    draw_wrapped(c, card.patient_text, x + 20, y + h - 61, w - 40, "Helvetica-Bold", 8.8, 10.2, max_lines=5)

    c.setFillColor(accent)
    c.rect(x + 12, y + 60, 3, 30, stroke=0, fill=1)
    c.setFillColor(ink)
    c.setFont("Helvetica-Bold", 6.8)
    c.drawString(x + 20, y + 83, "SETUP")
    draw_wrapped(c, card.setup, x + 20, y + 73, w - 34, "Helvetica", 6.7, 7.8, max_lines=3)

    c.setFont("Helvetica-Bold", 6.8)
    c.drawString(x + 20, y + 42, "OBSERVE")
    draw_wrapped(c, card.observe, x + 20, y + 32, w - 34, "Helvetica", 6.7, 7.8, max_lines=3)

    c.setFillColor(colors.HexColor("#444444"))
    c.setFont("Helvetica", 5.8)
    c.drawString(x + 12, y + 9, "(c) 2026 STRIVE Physical Therapy | Las Vegas")


def build() -> None:
    c = canvas.Canvas(str(OUT), pagesize=letter)
    width, height = letter
    c.setTitle("STRIVE Medication Distraction Cards")
    draw_watermark(c)

    margin_x = 0.48 * inch
    draw_image_fit(c, BANNER_PATH, margin_x, height - 0.72 * inch, 2.6 * inch, 0.58 * inch)
    c.setFont("Helvetica-Bold", 15)
    c.drawString(margin_x + 2.78 * inch, height - 0.34 * inch, "Medication Distraction Cards")
    c.setFont("Helvetica", 7.5)
    c.drawRightString(width - margin_x, height - 0.34 * inch, "Activity 10 - real-world simulation")

    card_w = 3.62 * inch
    card_h = 2.36 * inch
    gap_x = 0.30 * inch
    gap_y = 0.14 * inch
    start_x = margin_x
    start_y = height - 1.03 * inch - card_h

    for idx, card in enumerate(CARDS):
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
    c.drawString(margin_x, 0.44 * inch, "Print at 100% scale. Cut along dotted lines. Use with Activity 10 or the capstone simulation.")
    draw_footer(c)
    c.save()
    print(OUT)


if __name__ == "__main__":
    build()
