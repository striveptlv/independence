from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


OUT = Path(__file__).with_name("strive_medication_management_easy_level_activity.pdf")
COPYRIGHT = "(c) 2026 STRIVE Physical Therapy | Las Vegas. Clinical simulation resource only."

NAVY = colors.HexColor("#132338")
BLUE = colors.HexColor("#1B4FA8")
TEAL = colors.HexColor("#0f766e")
GREEN = colors.HexColor("#15845f")
ORANGE = colors.HexColor("#F5820A")
PAPER = colors.HexColor("#f3f6fa")
SOFT_BLUE = colors.HexColor("#e8f1f8")
SOFT_GREEN = colors.HexColor("#e6f5ef")
SOFT_ORANGE = colors.HexColor("#fdebd8")
LINE = colors.HexColor("#cfd8e3")
TEXT = colors.HexColor("#1a2e44")
MUTED = colors.HexColor("#5f6f82")


@dataclass(frozen=True)
class Medication:
    med_id: str
    name: str
    label: str
    time: str


@dataclass(frozen=True)
class Activity:
    number: int
    title: str
    overview: str
    patient_prompt: str
    bottles: list[str]
    cards: str
    setup: str
    materials: list[str]
    steps: list[str]
    answers: list[tuple[str, str]]
    watch: list[str]
    struggle: list[str]
    success: str


MEDS: dict[str, Medication] = {
    "metformin": Medication("M1", "Metformin 500 mg", "Take 1 tablet twice daily with meals.", "Breakfast + dinner / with meals"),
    "lisinopril": Medication("M2", "Lisinopril 10 mg", "Take 1 tablet every morning.", "Morning"),
    "atorvastatin": Medication("M3", "Atorvastatin 20 mg", "Take 1 tablet at bedtime.", "Bedtime"),
    "aspirin": Medication("M4", "Aspirin 81 mg", "Take 1 tablet every morning.", "Morning"),
    "amoxicillin": Medication("M5", "Amoxicillin 500 mg", "Take 1 capsule every 12 hours until finished.", "Morning + evening, 12 hours apart"),
    "gabapentin": Medication("M6", "Gabapentin 300 mg", "Take 1 capsule three times daily.", "Morning + afternoon + bedtime"),
    "clopidogrel": Medication("M7", "Clopidogrel 75 mg", "Take 1 tablet once daily.", "Once daily, usually morning"),
    "melatonin": Medication("M8", "Melatonin 5 mg", "Take 1 tablet at bedtime as needed.", "Bedtime / PRN"),
}


ACTIVITIES: list[Activity] = [
    Activity(
        1,
        "Match Medication to Time of Day",
        "The patient reads four medication labels and matches each medication to the correct time slot.",
        "We are going to match each medication to the time of day it should be taken. Read the label, then place it in the right box.",
        ["metformin", "atorvastatin", "aspirin", "melatonin"],
        "None",
        "4 time boxes: Morning, Lunch, Dinner, Bedtime",
        ["This printed packet", "Four bottles from the 8-bottle medication bank", "A quiet room with no distractions", "5 to 10 minutes"],
        [
            "Orient the patient to Morning, Lunch, Dinner, and Bedtime boxes.",
            "Work through medications one at a time and ask the patient to read each label aloud.",
            "Let the patient self-check by reading each slot back before you review.",
            "Confirm correct answers and double-check errors by returning to the label.",
        ],
        [
            ("Morning", "Metformin 500 mg + Aspirin 81 mg"),
            ("Lunch", "Empty - no medication scheduled"),
            ("Dinner", "Metformin 500 mg"),
            ("Bedtime", "Atorvastatin 20 mg + Melatonin 5 mg as needed"),
        ],
        [
            "Atorvastatin placed in morning instead of bedtime",
            "Only one morning medication placed",
            "Selection by pill color instead of label reading",
            "Metformin missed as a twice-daily medication",
        ],
        [
            "Read the last line on this bottle. What time does it say?",
            "Count how many labels say morning. Let us count together.",
            "Ignore the colors. Just read the words on the label.",
        ],
        "Great work. You read every label before placing anything. That is exactly the habit that keeps you safe at home.",
    ),
    Activity(
        2,
        "Fill a One-Day Pill Organizer",
        "The patient fills a four-compartment pill organizer using three unique medication bottles.",
        "Each section is for a different time of day. Put the right medications in the right sections.",
        ["lisinopril", "gabapentin", "melatonin"],
        "PRN card optional",
        "One-day organizer with Morning, Afternoon, Evening, Bedtime",
        ["This printed packet or a real 4-slot pill organizer", "Three unique bottles from the medication bank", "Pen and paper if completing on paper", "About 10 minutes"],
        [
            "Show the pill organizer and read the four compartments aloud.",
            "Introduce medications one at a time and ask the patient to read the name and directions.",
            "Pause after each placement and ask the patient to re-check the label.",
            "Ask why the empty slot is okay.",
            "Use teach-back: have the patient explain the completed organizer.",
        ],
        [
            ("Morning", "Lisinopril 10 mg + Gabapentin 300 mg"),
            ("Afternoon", "Gabapentin 300 mg"),
            ("Evening", "Gabapentin 300 mg"),
            ("Bedtime", "Melatonin 5 mg as needed"),
        ],
        [
            "Melatonin placed in Evening instead of Bedtime",
            "Gabapentin not placed three times across the day",
            "Patient chooses by color before reading",
            "Patient rushes without reading each label",
        ],
        [
            "Does the label say evening or bedtime? Point to the exact word.",
            "Does any label say afternoon?",
            "Pretend all pills are the same color. Now where does the label say it goes?",
        ],
        "You filled a real pill organizer correctly by reading every label. This is exactly what you will do at home each week.",
    ),
    Activity(
        3,
        "Identify Medication Safety Mistakes",
        "The patient hears short medication behavior statements and decides whether each one is safe or unsafe.",
        "I am going to read things people do with medications. After each one, tell me safe or unsafe.",
        ["lisinopril", "amoxicillin", "gabapentin", "clopidogrel"],
        "Safety statements",
        "Safe / unsafe response sheet",
        ["This printed packet", "Read each statement aloud", "Patient responds verbally or by pointing", "About 10 to 15 minutes"],
        [
            "Explain that the patient only needs to answer safe or unsafe.",
            "Read each statement slowly and pause before prompting.",
            "Ask the patient to explain each answer before correcting.",
            "Return to missed items at the end for discussion.",
        ],
        [
            ("Safe", "Take Lisinopril exactly as prescribed; call pharmacy if Amoxicillin directions are unclear; store medications safely; keep a written medication list."),
            ("Unsafe", "Skip Lisinopril if you feel fine; use someone else's Gabapentin; double-dose Gabapentin; stop Amoxicillin early."),
        ],
        [
            "Skipping blood pressure medication viewed as safe",
            "Stopping antibiotics early when feeling better",
            "Fast answers without reasoning",
            "Double-dosing treated as not serious",
        ],
        [
            "What if blood pressure is high but there is no headache?",
            "What does your body experience when it suddenly gets twice the medication?",
            "What happens to bacteria that are still there when you stop early?",
        ],
        "You reviewed medication safety rules that protect you every day at home. Well done.",
    ),
]


SAFETY_STATEMENTS = [
    "Take Lisinopril exactly as prescribed.",
    "Skip Lisinopril if you feel fine today.",
    "Call the pharmacy if Amoxicillin directions are unclear.",
    "Use someone else's Gabapentin because it helped them.",
    "Take double the Gabapentin dose to catch up.",
    "Store medications away from children and heat.",
    "Stop Amoxicillin early because you feel better.",
    "Keep a written medication list for doctor visits.",
]


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


def draw_wrapped(c: canvas.Canvas, text: str, x: float, y: float, width: float, font: str = "Helvetica", size: float = 9, leading: float = 11) -> float:
    c.setFont(font, size)
    for line in wrap_text(text, font, size, width):
        c.drawString(x, y, line)
        y -= leading
    return y


def page_header(c: canvas.Canvas, title: str, eyebrow: str, page_num: int) -> None:
    width, height = letter
    c.setFillColor(PAPER)
    c.rect(0, 0, width, height, stroke=0, fill=1)
    c.setFillColor(NAVY)
    c.rect(0, height - 0.92 * inch, width, 0.92 * inch, stroke=0, fill=1)
    c.setFillColor(ORANGE)
    c.rect(0, height - 0.92 * inch, width, 0.08 * inch, stroke=0, fill=1)
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 17)
    c.drawString(0.55 * inch, height - 0.42 * inch, title)
    c.setFont("Helvetica-Bold", 7.4)
    c.drawRightString(width - 0.55 * inch, height - 0.39 * inch, eyebrow.upper())
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 7)
    c.drawRightString(width - 0.55 * inch, 0.24 * inch, f"Easy Level Activity - page {page_num}")
    c.drawString(0.55 * inch, 0.24 * inch, COPYRIGHT)


def section_label(c: canvas.Canvas, text: str, x: float, y: float, color: colors.Color = BLUE) -> None:
    c.setFillColor(color)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(x, y, text.upper())


def draw_card(c: canvas.Canvas, x: float, y: float, w: float, h: float, title: str, body: str, fill: colors.Color = colors.white, accent: colors.Color = BLUE) -> None:
    c.setFillColor(fill)
    c.setStrokeColor(LINE)
    c.setLineWidth(0.8)
    c.roundRect(x, y, w, h, 6, stroke=1, fill=1)
    c.setFillColor(accent)
    c.rect(x, y + h - 0.12 * inch, w, 0.12 * inch, stroke=0, fill=1)
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(x + 0.13 * inch, y + h - 0.34 * inch, title)
    c.setFillColor(TEXT)
    draw_wrapped(c, body, x + 0.13 * inch, y + h - 0.53 * inch, w - 0.26 * inch, size=8.2, leading=10)


def bullets(c: canvas.Canvas, items: list[str], x: float, y: float, width: float, font_size: float = 8.6, leading: float = 11) -> float:
    c.setFillColor(TEXT)
    for item in items:
        lines = wrap_text(item, "Helvetica", font_size, width - 0.15 * inch)
        c.setFont("Helvetica-Bold", font_size)
        c.drawString(x, y, "-")
        c.setFont("Helvetica", font_size)
        for idx, line in enumerate(lines):
            c.drawString(x + 0.13 * inch, y, line)
            if idx < len(lines) - 1:
                y -= leading
        y -= leading
    return y


def draw_table(c: canvas.Canvas, rows: list[tuple[str, str]], x: float, y: float, w: float, col1: float, row_h: float = 0.36 * inch) -> float:
    for idx, (left, right) in enumerate(rows):
        line_count = max(len(wrap_text(right, "Helvetica", 8.3, w - col1 - 0.22 * inch)), 1)
        h = max(row_h, 0.18 * inch + line_count * 0.13 * inch)
        fill = colors.white if idx % 2 == 0 else SOFT_BLUE
        c.setFillColor(fill)
        c.setStrokeColor(LINE)
        c.rect(x, y - h, w, h, stroke=1, fill=1)
        c.setFillColor(NAVY)
        c.setFont("Helvetica-Bold", 8.5)
        c.drawString(x + 0.1 * inch, y - 0.22 * inch, left)
        c.setFillColor(TEXT)
        draw_wrapped(c, right, x + col1, y - 0.2 * inch, w - col1 - 0.12 * inch, size=8.3, leading=9.5)
        y -= h
    return y


def cover_page(c: canvas.Canvas) -> None:
    page_header(c, "Medication Management", "STRIVE Independence", 1)
    x = 0.62 * inch
    y = 9.55 * inch
    c.setFillColor(GREEN)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(x, y, "Easy Level Activity Packet")
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 28)
    c.drawString(x, y - 0.42 * inch, "Label Reading, Time Matching,")
    c.drawString(x, y - 0.78 * inch, "and Basic Safety")
    c.setFillColor(TEXT)
    draw_wrapped(
        c,
        "Use this standalone packet when the session goal is basic medication label reading, matching medication directions to daily time slots, filling a simple one-day organizer, and identifying common medication safety mistakes.",
        x,
        y - 1.25 * inch,
        6.7 * inch,
        size=10.2,
        leading=13,
    )

    draw_card(c, x, 6.55 * inch, 2.15 * inch, 1.2 * inch, "Activity 1", "Match Medication to Time of Day", SOFT_GREEN, GREEN)
    draw_card(c, x + 2.35 * inch, 6.55 * inch, 2.15 * inch, 1.2 * inch, "Activity 2", "Fill a One-Day Pill Organizer", SOFT_GREEN, GREEN)
    draw_card(c, x + 4.7 * inch, 6.55 * inch, 2.15 * inch, 1.2 * inch, "Activity 3", "Identify Medication Safety Mistakes", SOFT_GREEN, GREEN)

    section_label(c, "Medication Bottle Bank Used In Easy Level", x, 5.95 * inch, TEAL)
    rows = [(f"{MEDS[key].med_id}  {MEDS[key].name}", MEDS[key].label) for key in ["metformin", "lisinopril", "atorvastatin", "aspirin", "amoxicillin", "gabapentin", "clopidogrel", "melatonin"]]
    draw_table(c, rows, x, 5.76 * inch, 6.86 * inch, 1.85 * inch, row_h=0.3 * inch)

    c.setFillColor(SOFT_ORANGE)
    c.setStrokeColor(ORANGE)
    c.roundRect(x, 0.72 * inch, 6.86 * inch, 0.72 * inch, 6, stroke=1, fill=1)
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 8.8)
    c.drawString(x + 0.14 * inch, 1.19 * inch, "Clinical simulation resource only")
    c.setFont("Helvetica", 8.4)
    c.drawString(x + 0.14 * inch, 1.01 * inch, "Do not use this packet to make real medication changes. Real medication questions should go to a prescriber or pharmacist.")


def activity_page(c: canvas.Canvas, activity: Activity, page_num: int) -> None:
    page_header(c, f"Activity {activity.number}: {activity.title}", "Easy Level", page_num)
    x = 0.55 * inch
    y = 9.58 * inch
    c.setFillColor(TEXT)
    draw_wrapped(c, activity.overview, x, y, 6.95 * inch, size=9.2, leading=11.2)

    c.setFillColor(SOFT_ORANGE)
    c.setStrokeColor(ORANGE)
    c.roundRect(x, 8.56 * inch, 6.95 * inch, 0.58 * inch, 6, stroke=1, fill=1)
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 8.6)
    c.drawString(x + 0.13 * inch, 8.91 * inch, "SAY")
    c.setFont("Helvetica", 8.6)
    draw_wrapped(c, f"\"{activity.patient_prompt}\"", x + 0.58 * inch, 8.91 * inch, 6.22 * inch, size=8.6, leading=10)

    section_label(c, "Pull These Bottles", x, 8.21 * inch, TEAL)
    bx = x
    by = 7.86 * inch
    for idx, key in enumerate(activity.bottles):
        med = MEDS[key]
        draw_card(c, bx + idx % 2 * 3.48 * inch, by - idx // 2 * 0.88 * inch, 3.22 * inch, 0.68 * inch, f"{med.med_id} {med.name}", med.label, colors.white, GREEN)

    section_label(c, "Setup", x, 6.08 * inch, BLUE)
    draw_card(c, x, 5.3 * inch, 3.32 * inch, 0.62 * inch, "Cards", activity.cards, colors.white, BLUE)
    draw_card(c, x + 3.55 * inch, 5.3 * inch, 3.4 * inch, 0.62 * inch, "Layout", activity.setup, colors.white, BLUE)

    section_label(c, "Patient Work Area", x, 4.95 * inch, GREEN)
    if activity.number in (1, 2):
        labels = ["Morning", "Lunch", "Dinner", "Bedtime"] if activity.number == 1 else ["Morning", "Afternoon", "Evening", "Bedtime"]
        for idx, label in enumerate(labels):
            col = idx % 2
            row = idx // 2
            px = x + col * 3.55 * inch
            py = 4.54 * inch - row * 1.38 * inch
            c.setFillColor(colors.white)
            c.setStrokeColor(LINE)
            c.roundRect(px, py - 1.04 * inch, 3.38 * inch, 1.04 * inch, 7, stroke=1, fill=1)
            c.setFillColor(GREEN)
            c.setFont("Helvetica-Bold", 10)
            c.drawString(px + 0.15 * inch, py - 0.25 * inch, label)
            c.setStrokeColor(colors.HexColor("#b9c6d3"))
            c.line(px + 0.15 * inch, py - 0.55 * inch, px + 3.2 * inch, py - 0.55 * inch)
            c.line(px + 0.15 * inch, py - 0.82 * inch, px + 3.2 * inch, py - 0.82 * inch)
    else:
        c.setFillColor(colors.white)
        c.setStrokeColor(LINE)
        c.roundRect(x, 1.45 * inch, 6.95 * inch, 3.3 * inch, 7, stroke=1, fill=1)
        c.setFillColor(NAVY)
        c.setFont("Helvetica-Bold", 8.8)
        c.drawString(x + 0.18 * inch, 4.5 * inch, "Statement")
        c.drawString(x + 5.25 * inch, 4.5 * inch, "Safe")
        c.drawString(x + 6.03 * inch, 4.5 * inch, "Unsafe")
        row_y = 4.25 * inch
        for idx, statement in enumerate(SAFETY_STATEMENTS, start=1):
            c.setStrokeColor(LINE)
            c.line(x + 0.15 * inch, row_y + 0.08 * inch, x + 6.8 * inch, row_y + 0.08 * inch)
            c.setFillColor(TEXT)
            draw_wrapped(c, f"{idx}. {statement}", x + 0.18 * inch, row_y, 4.68 * inch, size=7.9, leading=8.8)
            c.rect(x + 5.32 * inch, row_y - 0.07 * inch, 0.17 * inch, 0.17 * inch, stroke=1, fill=0)
            c.rect(x + 6.17 * inch, row_y - 0.07 * inch, 0.17 * inch, 0.17 * inch, stroke=1, fill=0)
            row_y -= 0.34 * inch


def therapist_activity_page(c: canvas.Canvas, activity: Activity, page_num: int) -> None:
    page_header(c, f"Therapist Guide: Activity {activity.number}", "Easy Level", page_num)
    x = 0.55 * inch
    y = 9.55 * inch
    section_label(c, f"Activity {activity.number}: {activity.title}", x, y, GREEN)
    y -= 0.26 * inch
    c.setFillColor(TEXT)
    draw_wrapped(c, activity.overview, x, y, 6.9 * inch, size=9.1, leading=11.5)
    y -= 0.54 * inch

    c.setFillColor(SOFT_ORANGE)
    c.setStrokeColor(ORANGE)
    c.roundRect(x, y - 0.56 * inch, 6.9 * inch, 0.56 * inch, 6, stroke=1, fill=1)
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawString(x + 0.12 * inch, y - 0.22 * inch, "SAY")
    draw_wrapped(c, f"\"{activity.patient_prompt}\"", x + 0.58 * inch, y - 0.22 * inch, 6.16 * inch, size=8.3, leading=9.7)
    y -= 0.88 * inch

    section_label(c, "What You Need", x, y, BLUE)
    y -= 0.16 * inch
    y = bullets(c, activity.materials, x, y, 6.9 * inch, font_size=8.1, leading=9.6)
    y -= 0.06 * inch

    section_label(c, "Step-by-Step Therapist Guide", x, y, BLUE)
    y -= 0.16 * inch
    y = bullets(c, activity.steps, x, y, 6.9 * inch, font_size=8.1, leading=9.7)
    y -= 0.08 * inch

    section_label(c, "Answer Key", x, y, NAVY)
    y -= 0.08 * inch
    y = draw_table(c, activity.answers, x, y, 6.9 * inch, 1.2 * inch, row_h=0.3 * inch)
    y -= 0.2 * inch

    section_label(c, "Watch For", x, y, ORANGE)
    y -= 0.16 * inch
    y = bullets(c, activity.watch, x, y, 6.9 * inch, font_size=8, leading=9.5)
    y -= 0.06 * inch

    section_label(c, "If They Struggle", x, y, TEAL)
    y -= 0.16 * inch
    y = bullets(c, activity.struggle, x, y, 6.9 * inch, font_size=8, leading=9.5)
    y -= 0.12 * inch

    c.setFillColor(SOFT_GREEN)
    c.setStrokeColor(GREEN)
    c.roundRect(x, y - 0.44 * inch, 6.9 * inch, 0.38 * inch, 4, stroke=1, fill=1)
    c.setFillColor(TEXT)
    draw_wrapped(c, activity.success, x + 0.12 * inch, y - 0.2 * inch, 6.65 * inch, size=7.9, leading=8.8)


def build() -> None:
    c = canvas.Canvas(str(OUT), pagesize=letter)
    c.setTitle("STRIVE Medication Management - Easy Level Activity")
    cover_page(c)
    c.showPage()
    for idx, activity in enumerate(ACTIVITIES, start=2):
        activity_page(c, activity, idx)
        c.showPage()
    for idx, activity in enumerate(ACTIVITIES, start=5):
        therapist_activity_page(c, activity, idx)
        if idx < 7:
            c.showPage()
    c.save()
    print(OUT)


if __name__ == "__main__":
    build()
