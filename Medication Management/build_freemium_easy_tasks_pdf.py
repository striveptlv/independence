from __future__ import annotations

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas

from build_easy_level_activity_pdf import ACTIVITIES, MEDS, SAFETY_STATEMENTS


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "freemium" / "medication-management-easy"
OUT = OUT_DIR / "strive_medication_management_FREE_easy_tasks_1-3.pdf"
LOGO_PATH = ROOT / "Bill Pay" / "logo.png"

COPYRIGHT = "(c) 2026 STRIVE Physical Therapy | Las Vegas. FREE training use only."
PRODUCT = "STRIVE Independence"
EDITION = "FREE Edition"
PACKET = "Medication Management - Easy Tasks 1-3"

NAVY = colors.HexColor("#132338")
BLUE = colors.HexColor("#1B4FA8")
TEAL = colors.HexColor("#0f766e")
GREEN = colors.HexColor("#15845f")
ORANGE = colors.HexColor("#F5820A")
PAPER = colors.HexColor("#f3f6fa")
INK = colors.HexColor("#17283d")
MUTED = colors.HexColor("#5f6f82")
LINE = colors.HexColor("#cfd8e3")
SOFT_BLUE = colors.HexColor("#e8f1f8")
SOFT_GREEN = colors.HexColor("#e6f5ef")
SOFT_ORANGE = colors.HexColor("#fdebd8")
WHITE = colors.white


def wrap_text(text: str, font: str, size: float, width: float) -> list[str]:
    lines: list[str] = []
    for paragraph in text.splitlines():
        words = paragraph.split()
        current = ""
        for word in words:
            candidate = f"{current} {word}".strip()
            if stringWidth(candidate, font, size) <= width:
                current = candidate
            else:
                if current:
                    lines.append(current)
                current = word
        lines.append(current)
    return lines or [""]


def draw_wrapped(
    c: canvas.Canvas,
    text: str,
    x: float,
    y: float,
    width: float,
    font: str = "Helvetica",
    size: float = 9,
    leading: float = 11,
) -> float:
    c.setFont(font, size)
    for line in wrap_text(text, font, size, width):
        c.drawString(x, y, line)
        y -= leading
    return y


def draw_logo(c: canvas.Canvas, x: float, y: float, size: float) -> None:
    if LOGO_PATH.exists():
        c.drawImage(ImageReader(str(LOGO_PATH)), x, y, width=size, height=size, preserveAspectRatio=True, mask="auto")
        return
    c.setFillColor(ORANGE)
    c.circle(x + size / 2, y + size / 2, size / 2, stroke=0, fill=1)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", size * 0.32)
    c.drawCentredString(x + size / 2, y + size * 0.38, "S")


def watermark(c: canvas.Canvas) -> None:
    width, height = letter
    c.saveState()
    c.translate(width / 2, height / 2)
    c.rotate(35)
    c.setFillColor(colors.Color(0.08, 0.14, 0.22, alpha=0.045))
    c.setFont("Helvetica-Bold", 52)
    c.drawCentredString(0, 16, "STRIVE FREE")
    c.setFont("Helvetica-Bold", 22)
    c.drawCentredString(0, -24, "EASY TASKS 1-3")
    c.restoreState()


def header(c: canvas.Canvas, title: str, page_num: int) -> None:
    width, height = letter
    c.setFillColor(PAPER)
    c.rect(0, 0, width, height, stroke=0, fill=1)
    watermark(c)

    c.setFillColor(NAVY)
    c.rect(0, height - 0.92 * inch, width, 0.92 * inch, stroke=0, fill=1)
    c.setFillColor(ORANGE)
    c.rect(0, height - 0.92 * inch, width, 0.08 * inch, stroke=0, fill=1)
    draw_logo(c, 0.48 * inch, height - 0.71 * inch, 0.42 * inch)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 7.3)
    c.drawString(0.98 * inch, height - 0.35 * inch, PRODUCT.upper())
    c.setFont("Helvetica-Bold", 16)
    c.drawString(0.98 * inch, height - 0.62 * inch, title)

    c.setFillColor(ORANGE)
    c.roundRect(width - 2.12 * inch, height - 0.64 * inch, 1.56 * inch, 0.28 * inch, 4, stroke=0, fill=1)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 7.8)
    c.drawCentredString(width - 1.34 * inch, height - 0.55 * inch, "FREE")

    c.setFillColor(MUTED)
    c.setFont("Helvetica", 6.7)
    c.drawString(0.55 * inch, 0.24 * inch, COPYRIGHT)
    c.drawRightString(width - 0.55 * inch, 0.24 * inch, f"{EDITION} - page {page_num}")


def badge(c: canvas.Canvas, text: str, x: float, y: float, w: float, fill: colors.Color = GREEN) -> None:
    c.setFillColor(fill)
    c.roundRect(x, y, w, 0.25 * inch, 4, stroke=0, fill=1)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 7.4)
    c.drawCentredString(x + w / 2, y + 0.085 * inch, text.upper())


def label(c: canvas.Canvas, text: str, x: float, y: float, color: colors.Color = BLUE) -> None:
    c.setFillColor(color)
    c.setFont("Helvetica-Bold", 8.1)
    c.drawString(x, y, text.upper())


def branded_card(
    c: canvas.Canvas,
    x: float,
    y: float,
    w: float,
    h: float,
    title: str,
    body: str,
    accent: colors.Color = GREEN,
    fill: colors.Color = WHITE,
) -> None:
    c.setFillColor(fill)
    c.setStrokeColor(LINE)
    c.setLineWidth(0.85)
    c.roundRect(x, y, w, h, 6, stroke=1, fill=1)
    c.setFillColor(accent)
    c.rect(x, y + h - 0.14 * inch, w, 0.14 * inch, stroke=0, fill=1)
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 9.6)
    c.drawString(x + 0.13 * inch, y + h - 0.34 * inch, title)
    c.setFillColor(INK)
    draw_wrapped(c, body, x + 0.13 * inch, y + h - 0.53 * inch, w - 0.26 * inch, size=8.1, leading=9.5)
    if h >= 0.65 * inch:
        c.setFillColor(MUTED)
        c.setFont("Helvetica-Bold", 5.4)
        c.drawRightString(x + w - 0.12 * inch, y + 0.1 * inch, "STRIVE FREE")


def bullets(c: canvas.Canvas, items: list[str], x: float, y: float, width: float, size: float = 8.1, leading: float = 9.5) -> float:
    c.setFillColor(INK)
    for item in items:
        lines = wrap_text(item, "Helvetica", size, width - 0.18 * inch)
        c.setFont("Helvetica-Bold", size)
        c.drawString(x, y, "-")
        c.setFont("Helvetica", size)
        for idx, line in enumerate(lines):
            c.drawString(x + 0.14 * inch, y, line)
            if idx < len(lines) - 1:
                y -= leading
        y -= leading
    return y


def table(c: canvas.Canvas, rows: list[tuple[str, str]], x: float, y: float, w: float, col1: float, size: float = 8.2) -> float:
    for idx, (left, right) in enumerate(rows):
        right_lines = wrap_text(right, "Helvetica", size, w - col1 - 0.18 * inch)
        h = max(0.31 * inch, 0.15 * inch + len(right_lines) * 0.13 * inch)
        c.setFillColor(WHITE if idx % 2 == 0 else SOFT_BLUE)
        c.setStrokeColor(LINE)
        c.rect(x, y - h, w, h, stroke=1, fill=1)
        c.setFillColor(NAVY)
        c.setFont("Helvetica-Bold", size)
        c.drawString(x + 0.1 * inch, y - 0.2 * inch, left)
        c.setFillColor(INK)
        draw_wrapped(c, right, x + col1, y - 0.2 * inch, w - col1 - 0.12 * inch, size=size, leading=9.3)
        y -= h
    return y


def cover(c: canvas.Canvas) -> None:
    header(c, "Medication Management", 1)
    x = 0.62 * inch
    y = 9.58 * inch
    badge(c, "FREE Product", x, y, 1.72 * inch, ORANGE)
    badge(c, "Easy Tasks 1-3", x + 1.9 * inch, y, 1.55 * inch, GREEN)

    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 27)
    c.drawString(x, y - 0.56 * inch, "STRIVE FREE")
    c.drawString(x, y - 0.92 * inch, "Medication Management")
    c.setFillColor(GREEN)
    c.drawString(x, y - 1.28 * inch, "Easy Task Packet")
    c.setFillColor(INK)
    draw_wrapped(
        c,
        "A free STRIVE Independence sample packet for basic medication label reading, time-of-day matching, one-day pill organizer practice, and common safety mistake identification.",
        x,
        y - 1.7 * inch,
        6.78 * inch,
        size=10.2,
        leading=13,
    )

    cards_y = 6.46 * inch
    for idx, activity in enumerate(ACTIVITIES):
        branded_card(
            c,
            x + idx * 2.35 * inch,
            cards_y,
            2.1 * inch,
            1.08 * inch,
            f"Task {activity.number}",
            activity.title,
            GREEN,
            SOFT_GREEN,
        )

    label(c, "Included in this FREE PDF", x, 5.7 * inch, TEAL)
    rows = [
        ("Free tasks", "Task 1: Match Medication to Time of Day; Task 2: Fill a One-Day Pill Organizer; Task 3: Identify Medication Safety Mistakes."),
        ("Skill level", "Easy - label reading, basic sorting, simple organizer setup, and safety reasoning."),
        ("Branding", "STRIVE Independence FREE Edition. This packet is designed as a free starter product."),
    ]
    table(c, rows, x, 5.48 * inch, 6.84 * inch, 1.35 * inch, size=8.4)

    label(c, "Medication Bottle Bank Used in Easy Tasks", x, 4.02 * inch, TEAL)
    med_rows = [(f"{MEDS[key].med_id} {MEDS[key].name}", MEDS[key].label) for key in MEDS]
    table(c, med_rows, x, 3.82 * inch, 6.84 * inch, 1.78 * inch, size=7.7)

    c.setFillColor(SOFT_ORANGE)
    c.setStrokeColor(ORANGE)
    c.roundRect(x, 0.68 * inch, 6.84 * inch, 0.68 * inch, 6, stroke=1, fill=1)
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 8.7)
    c.drawString(x + 0.14 * inch, 1.11 * inch, "FREE clinical simulation resource")
    c.setFont("Helvetica", 8.1)
    c.drawString(x + 0.14 * inch, 0.93 * inch, "Not for real medication decisions. Direct real medication questions to a prescriber or pharmacist.")


def patient_page(c: canvas.Canvas, activity, page_num: int) -> None:
    header(c, f"Task {activity.number}: {activity.title}", page_num)
    x = 0.55 * inch
    y = 9.43 * inch
    badge(c, "STRIVE FREE", x, y, 1.55 * inch, ORANGE)
    badge(c, "Easy Level", x + 1.72 * inch, y, 1.25 * inch, GREEN)
    c.setFillColor(INK)
    draw_wrapped(c, activity.overview, x, y - 0.42 * inch, 6.92 * inch, size=9.1, leading=11.3)

    say_y = 8.52 * inch
    c.setFillColor(SOFT_ORANGE)
    c.setStrokeColor(ORANGE)
    c.roundRect(x, say_y - 0.56 * inch, 6.95 * inch, 0.56 * inch, 6, stroke=1, fill=1)
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawString(x + 0.12 * inch, say_y - 0.22 * inch, "SAY")
    draw_wrapped(c, f"\"{activity.patient_prompt}\"", x + 0.58 * inch, say_y - 0.22 * inch, 6.18 * inch, size=8.15, leading=9.3)

    by = 6.55 * inch
    for idx, key in enumerate(activity.bottles):
        med = MEDS[key]
        col = idx % 2
        row = idx // 2
        branded_card(
            c,
            x + col * 3.43 * inch,
            by - row * 0.78 * inch,
            3.22 * inch,
            0.65 * inch,
            f"{med.med_id} {med.name}",
            med.label,
            GREEN,
            WHITE,
        )

    setup_y = 4.42 * inch
    label(c, "FREE Setup", x, setup_y + 0.5 * inch, BLUE)
    branded_card(c, x, setup_y, 3.28 * inch, 0.62 * inch, "Cards", activity.cards, BLUE, WHITE)
    branded_card(c, x + 3.52 * inch, setup_y, 3.43 * inch, 0.62 * inch, "Layout", activity.setup, BLUE, WHITE)

    label(c, "Patient Work Area", x, 3.86 * inch, GREEN)
    if activity.number in (1, 2):
        labels = ["Morning", "Lunch", "Dinner", "Bedtime"] if activity.number == 1 else ["Morning", "Afternoon", "Evening", "Bedtime"]
        for idx, heading in enumerate(labels):
            col = idx % 2
            row = idx // 2
            px = x + col * 3.52 * inch
            py = 3.58 * inch - row * 1.02 * inch
            c.setFillColor(WHITE)
            c.setStrokeColor(LINE)
            c.roundRect(px, py - 0.86 * inch, 3.33 * inch, 0.86 * inch, 7, stroke=1, fill=1)
            c.setFillColor(GREEN)
            c.setFont("Helvetica-Bold", 9.8)
            c.drawString(px + 0.14 * inch, py - 0.24 * inch, heading)
            c.setStrokeColor(colors.HexColor("#b9c6d3"))
            c.line(px + 0.14 * inch, py - 0.53 * inch, px + 3.16 * inch, py - 0.53 * inch)
            c.line(px + 0.14 * inch, py - 0.74 * inch, px + 3.16 * inch, py - 0.74 * inch)
            c.setFillColor(MUTED)
            c.setFont("Helvetica-Bold", 5.2)
            c.drawRightString(px + 3.16 * inch, py - 0.12 * inch, "STRIVE")
    else:
        c.setFillColor(WHITE)
        c.setStrokeColor(LINE)
        c.roundRect(x, 1.24 * inch, 6.95 * inch, 2.52 * inch, 7, stroke=1, fill=1)
        c.setFillColor(NAVY)
        c.setFont("Helvetica-Bold", 8.2)
        c.drawString(x + 0.16 * inch, 3.58 * inch, "Statement")
        c.drawString(x + 5.23 * inch, 3.58 * inch, "Safe")
        c.drawString(x + 6.03 * inch, 3.58 * inch, "Unsafe")
        row_y = 3.39 * inch
        for idx, statement in enumerate(SAFETY_STATEMENTS, 1):
            c.setStrokeColor(LINE)
            c.line(x + 0.15 * inch, row_y + 0.09 * inch, x + 6.78 * inch, row_y + 0.09 * inch)
            c.setFillColor(INK)
            draw_wrapped(c, f"{idx}. {statement}", x + 0.18 * inch, row_y, 4.66 * inch, size=7.35, leading=8.3)
            c.rect(x + 5.32 * inch, row_y - 0.07 * inch, 0.17 * inch, 0.17 * inch, stroke=1, fill=0)
            c.rect(x + 6.17 * inch, row_y - 0.07 * inch, 0.17 * inch, 0.17 * inch, stroke=1, fill=0)
            row_y -= 0.27 * inch


def therapist_page(c: canvas.Canvas, activity, page_num: int) -> None:
    header(c, f"Clinician Key: Task {activity.number}", page_num)
    x = 0.55 * inch
    y = 9.48 * inch
    badge(c, "STRIVE FREE Clinician Page", x, y, 2.4 * inch, ORANGE)
    label(c, f"Task {activity.number}: {activity.title}", x, y - 0.42 * inch, GREEN)
    c.setFillColor(INK)
    draw_wrapped(c, activity.overview, x, y - 0.68 * inch, 6.9 * inch, size=9, leading=11)

    say_y = 8.18 * inch
    c.setFillColor(SOFT_ORANGE)
    c.setStrokeColor(ORANGE)
    c.roundRect(x, say_y - 0.52 * inch, 6.9 * inch, 0.52 * inch, 6, stroke=1, fill=1)
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 8.2)
    c.drawString(x + 0.12 * inch, say_y - 0.2 * inch, "SAY")
    draw_wrapped(c, f"\"{activity.patient_prompt}\"", x + 0.58 * inch, say_y - 0.2 * inch, 6.1 * inch, size=8, leading=9)
    y = 7.35 * inch

    label(c, "What You Need", x, y, BLUE)
    y = bullets(c, activity.materials, x, y - 0.16 * inch, 6.9 * inch)
    y -= 0.08 * inch
    label(c, "Step-by-Step Therapist Guide", x, y, BLUE)
    y = bullets(c, activity.steps, x, y - 0.16 * inch, 6.9 * inch)
    y -= 0.08 * inch
    label(c, "Answer Key", x, y, NAVY)
    y = table(c, activity.answers, x, y - 0.08 * inch, 6.9 * inch, 1.2 * inch, size=8)
    y -= 0.18 * inch
    label(c, "Watch For", x, y, ORANGE)
    y = bullets(c, activity.watch, x, y - 0.16 * inch, 6.9 * inch, size=7.8, leading=9.1)
    y -= 0.06 * inch
    label(c, "If They Struggle", x, y, TEAL)
    y = bullets(c, activity.struggle, x, y - 0.16 * inch, 6.9 * inch, size=7.8, leading=9.1)
    y -= 0.12 * inch
    c.setFillColor(SOFT_GREEN)
    c.setStrokeColor(GREEN)
    c.roundRect(x, y - 0.4 * inch, 6.9 * inch, 0.36 * inch, 5, stroke=1, fill=1)
    c.setFillColor(INK)
    draw_wrapped(c, activity.success, x + 0.12 * inch, y - 0.18 * inch, 6.65 * inch, size=7.7, leading=8.5)


def build() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUT), pagesize=letter)
    c.setTitle("STRIVE Medication Management FREE - Easy Tasks 1-3")
    cover(c)
    c.showPage()
    page_num = 2
    for activity in ACTIVITIES:
        patient_page(c, activity, page_num)
        c.showPage()
        page_num += 1
    for idx, activity in enumerate(ACTIVITIES):
        therapist_page(c, activity, page_num)
        page_num += 1
        if idx < len(ACTIVITIES) - 1:
            c.showPage()
    c.save()
    print(OUT)


if __name__ == "__main__":
    build()
