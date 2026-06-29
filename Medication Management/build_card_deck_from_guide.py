from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


OUT = Path(__file__).with_name("strive_medication_card_deck_no_core_meds.pdf")
BANNER_PATH = Path("/Users/joshua/Downloads/ChatGPT Image May 12, 2026, 09_39_17 PM.png")
COPYRIGHT = "(c) 2026 STRIVE Physical Therapy | Las Vegas. Authorized training use only."


@dataclass(frozen=True)
class DeckCard:
    category: str
    code: str
    title: str
    body: str
    helper: str = ""
    accent: str = "#005a9c"


def c(category: str, code: str, title: str, body: str, helper: str = "", accent: str = "#005a9c") -> DeckCard:
    return DeckCard(category, code, title, body, helper, accent)


CARDS: list[DeckCard] = [
    # 2. Time Slot and Pillbox Cards
    c("Basic Time Slots", "T1", "MORNING", "Place medications taken in the morning here.", accent="#005a9c"),
    c("Basic Time Slots", "T2", "LUNCH", "Place medications taken at lunch here.", accent="#005a9c"),
    c("Basic Time Slots", "T3", "DINNER", "Place medications taken with dinner here.", accent="#005a9c"),
    c("Basic Time Slots", "T4", "BEDTIME", "Place medications taken at bedtime here.", accent="#005a9c"),
    c("One-Day Organizer", "T5", "AFTERNOON", "One-day organizer slot.", accent="#2c6e8f"),
    c("One-Day Organizer", "T6", "EVENING", "One-day organizer slot. Check whether label says evening, dinner, or bedtime.", accent="#2c6e8f"),
    c("Two-Column Routine", "T7", "MORNING ROUTINE", "Use for morning/evening routine planning.", accent="#1f4d78"),
    c("Two-Column Routine", "T8", "EVENING / BEDTIME ROUTINE", "Use for evening and bedtime routine planning.", accent="#1f4d78"),
]

for i, day in enumerate(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], start=1):
    CARDS.append(c("Weekly Pillbox", f"W{i}A", f"{day} Morning", "Weekly pillbox morning compartment.", accent="#6f7f91"))
    CARDS.append(c("Weekly Pillbox", f"W{i}B", f"{day} Evening", "Weekly pillbox evening compartment.", accent="#6f7f91"))

CARDS += [
    # 3. Optional Special Schedule Medication Cards
    c("Special Schedule", "A", "Medication A", "Take 1 pill every morning.", "Every day.", "#2f7d32"),
    c("Special Schedule", "B", "Medication B", "Take 1 pill every evening.", "Every day.", "#2f7d32"),
    c("Special Schedule", "C", "Medication C", "Take 1 pill Monday, Wednesday, and Friday mornings only.", "Skip Tuesday, Thursday, Saturday, and Sunday.", "#2f7d32"),
    c("Special Schedule", "D", "Medication D", "Take 2 pills on Sunday morning only.", "Once per week.", "#2f7d32"),
]

for idx, text in enumerate(
    [
        "Take once daily",
        "Take twice daily",
        "Take every 12 hours",
        "Take 3 times per day",
        "Take at bedtime",
        "Take with breakfast",
        "Take with meals",
        "Take every morning",
        "Take every evening",
        "Take Monday, Wednesday, Friday only",
        "Take Sunday morning only",
    ],
    start=1,
):
    CARDS.append(c("Frequency Modifier", f"F{idx}", text.upper(), text, "Place next to a medication bottle or overlay on label.", "#ff7a00"))

CARDS += [
    # 4. Instruction Modifier Cards / Doctor Change Cards
    c("Doctor Change", "C1", "NEW", "Add this medication to the medication list.", accent="#2f7d32"),
    c("Doctor Change", "C2", "STOP", "Remove or mark this medication as discontinued. Do not keep taking it.", accent="#d62f2f"),
    c("Doctor Change", "C3", "CONTINUE", "No change. Keep the same medication and directions.", accent="#005a9c"),
    c("Doctor Change", "C4", "INCREASE", "Take this more often or at the higher instructed frequency.", accent="#b55a00"),
    c("Doctor Change", "C5", "DECREASE", "Take this less often or at the lower instructed frequency.", accent="#7a4fb3"),
    c("Doctor Change", "C6", "CHANGE", "Update the direction exactly as written.", accent="#111111"),
    c("Doctor Change", "C7", "HOLD", "Pause and ask the doctor before restarting.", accent="#6f7f91"),
]

for idx, text in enumerate(
    [
        "Take medicine only as prescribed by your doctor.",
        "Call the pharmacy if you are unsure about the instructions.",
        "Store medications away from children and heat.",
        "Keep a written list of all medications to share with doctors.",
        "Use a pill organizer after checking each medication label.",
        "Ask the pharmacist what to do if you miss a dose.",
    ],
    start=1,
):
    CARDS.append(c("Safety Judgment", f"SAFE{idx}", "SAFE", text, "Correct answer: Safe", "#2f7d32"))

unsafe = [
    ("Skip your blood pressure pill if you feel fine today.", "Blood pressure may be high without symptoms."),
    ("Use your neighbor's medication for the same symptoms.", "Dose, allergies, interactions, and diagnosis may differ."),
    ("Take double the dose to make up for a missed one.", "May cause overdose or serious side effects."),
    ("Stop your antibiotic early because you feel better.", "Medication may not be complete; call the prescriber for questions."),
    ("Take fewer pills each day to make the supply last longer.", "Never change prescribed dose without approval."),
    ("Follow whichever medication instruction looks newer without calling.", "Conflicting instructions require clarification."),
    ("Take both instructions together if the bottle and paperwork disagree.", "Combining directions may cause overdose or underdose."),
]
for idx, (text, why) in enumerate(unsafe, start=1):
    CARDS.append(c("Safety Judgment", f"UN{idx}", "UNSAFE", text, f"Why: {why}", "#d62f2f"))

for idx, text in enumerate(["3 pills left", "5 pills left", "8 pills left", "12 pills left", "14 pills left", "21 pills left", "30 pills left"], start=1):
    CARDS.append(c("Refill / Math", f"R{idx}", "PILLS REMAINING", text, "Pair with a medication bottle.", "#8b1f1f"))
for idx, text in enumerate(["Take 1 pill daily", "Take 1 pill twice daily", "Take 1 pill 3 times daily", "Take 2 pills once weekly", "Take 1 pill Monday, Wednesday, Friday only"], start=1):
    CARDS.append(c("Refill / Math", f"R{idx+7}", "DAILY USE", text, "Use for refill calculation.", "#8b1f1f"))
for idx, text in enumerate(["Today is June 10", "Today is Monday", "Today is Friday", "Doctor appointment is this Friday", "Refill may take 2-3 days"], start=1):
    CARDS.append(c("Refill / Math", f"R{idx+12}", "DATE / CONTEXT", text, "Use for planning ahead.", "#8b1f1f"))
for idx, text in enumerate(["A. Wait until empty", "B. Call pharmacy today/tomorrow", "C. Take fewer pills", "D. Stop medication"], start=1):
    CARDS.append(c("Refill / Math", f"R{idx+17}", "ACTION OPTION", text, "Choose the safest action.", "#8b1f1f"))
CARDS.append(c("Refill / Math", "R22", "EXAMPLE REFILL TASK", "Bottle: Gabapentin 300 mg. Pills remaining: 12. Directions: take 1 capsule 3 times per day. Today: June 10.", "12 divided by 3 = 4 days remaining. Best action: call pharmacy today or tomorrow.", "#8b1f1f"))

CARDS += [
    c("Medication List", "L1", "OLD MEDICATION LIST", "Metformin 500 mg - Take once daily\nLisinopril 10 mg - Take once daily\nAspirin 81 mg - Take once daily", accent="#005a9c"),
    c("Medication List", "L2", "UPDATED LIST BLANK", "Medication: ______ Dose: ______\nDirections: ______\nContinue / Stop / New / Changed: ______", accent="#005a9c"),
    c("Medication List", "L3", "COMPLETED ANSWER EXAMPLE", "Metformin - Take twice daily - Changed\nLisinopril - Take once daily - No change\nVitamin B12 - New\nAspirin - Removed - Stopped", accent="#005a9c"),
    c("Doctor Note", "N1", "DOCTOR NOTE 1", "Metformin: increase to twice daily. Same tablet, just more often.\nAspirin 81 mg: stop.\nLisinopril 10 mg: continue.\nVitamin B12: new. Add to list.", accent="#005a9c"),
    c("Doctor Note", "N2", "DOCTOR NOTE 2", "Old direction: Take 1 tablet once daily.\nNew direction: Take 1 tablet twice daily with meals.", "What changed is frequency, not tablet strength.", "#005a9c"),
    c("Conflict", "X1", "PRESCRIPTION BOTTLE", "Lisinopril 10 mg - Take 1 tablet once daily.", accent="#111111"),
    c("Conflict", "X2", "DISCHARGE PAPERWORK", "Lisinopril 10 mg - Take 1 tablet twice daily.", accent="#111111"),
    c("Conflict", "X3", "RESPONSE A", "Follow the prescription bottle.", "Unsafe: there is a conflict.", "#d62f2f"),
    c("Conflict", "X4", "RESPONSE B", "Follow the discharge paperwork.", "Unsafe: there is a conflict.", "#d62f2f"),
    c("Conflict", "X5", "RESPONSE C", "Combine both and take three tablets today.", "Unsafe.", "#d62f2f"),
    c("Conflict", "X6", "RESPONSE D", "Call the doctor or pharmacist before taking the next dose.", "Correct.", "#2f7d32"),
    c("Discharge Reconciliation", "H1", "PRE-HOSPITAL LIST", "Amlodipine 5 mg - once daily\nAspirin 81 mg - once daily\nMetformin 500 mg - twice daily\nFish Oil 1000 mg - once daily", accent="#6f7f91"),
    c("Discharge Reconciliation", "H2", "DISCHARGE INSTRUCTIONS", "CONTINUE: Amlodipine 5 mg\nSTOP: Aspirin 81 mg\nCONTINUE: Metformin 500 mg\nSTART: Clopidogrel 75 mg\nSUPPLEMENTS: Ask doctor before restarting.", accent="#6f7f91"),
    c("Discharge Reconciliation", "H3", "PHARMACY BAG CONTENTS", "Amlodipine 5 mg\nMetformin 500 mg\nClopidogrel 75 mg\nAspirin 81 mg", accent="#6f7f91"),
    c("Discharge Reconciliation", "H4", "SAFETY ISSUE", "Aspirin is in the pharmacy bag, but the discharge paperwork says to stop it.", "Correct action: do not take it until clarified. Call pharmacist or discharge team.", "#d62f2f"),
    c("Missed Dose", "M1", "MISSED DOSE SCENARIO 1", "You take your blood pressure medication every morning at 8:00 AM. It is now 10:00 AM and you forgot it.", "Safest training answer: check instructions or call pharmacist before deciding.", "#7a4fb3"),
    c("Missed Dose", "M2", "MISSED DOSE SCENARIO 2", "You think you may have missed your evening dose last night. It is now the next morning.", "Correct answer: call pharmacist/prescriber before deciding.", "#7a4fb3"),
    c("Distraction", "D1", "PHONE NOTIFICATION", "New message from pharmacy: Your prescription may be ready for refill. Please call us.", "Observe: does patient pause and return to correct place?", "#b55a00"),
    c("Distraction", "D2", "APPOINTMENT ALARM", "Reminder: Doctor appointment in 30 minutes.", "Observe: does patient rush or make more errors?", "#b55a00"),
    c("Distraction", "D3", "SIMILAR BOTTLE", "Two bottles have the same cap color and similar label design.", "Observe: read labels or guess by appearance?", "#b55a00"),
    c("Distraction", "D4", "NEARLY EMPTY BOTTLE", "Only 3 pills left.", "Observe: recognize refill need?", "#b55a00"),
    c("Distraction", "D5", "TAKE WITH FOOD", "Special instruction: Take with food.", "Observe: notice the special instruction?", "#b55a00"),
    c("Family Communication", "FC1", "DAUGHTER TEXT", "Did you take your morning pills?", accent="#2c6e8f"),
    c("Family Communication", "FC2", "GOOD RESPONSE", "Yes, I took my morning pills after breakfast. I am going to check my pillbox again tonight.", accent="#2f7d32"),
    c("Family Communication", "FC3", "VAGUE RESPONSE", "I am fine.", "Prompt for a specific answer.", "#ff7a00"),
    c("Family Communication", "FC4", "UNSAFE RESPONSE", "I think so, but I might take more just in case.", "Unsafe: never double-dose to guess.", "#d62f2f"),
    c("Appointment Prep", "AP1", "APPOINTMENT CARD", "Doctor appointment: Friday at 10:00 AM.", accent="#005a9c"),
    c("Appointment Prep", "AP2", "QUESTION PROMPT", "Write one question to ask your doctor about your medication schedule.", accent="#005a9c"),
    c("Appointment Prep", "AP3", "GOOD QUESTIONS", "What should I do if I miss a dose?\nShould I restart my supplements?\nWhich medication changed?\nWhat side effects should I watch for?", accent="#2f7d32"),
    c("Appointment Prep", "AP4", "WEAK RESPONSES", "I do not know.\nEverything is fine.\nDo I need medicine?\nI forgot.", accent="#d62f2f"),
]

errors = [
    ("Atorvastatin in morning", "Read the label again. What time does it say?"),
    ("Filled empty afternoon slot", "Does any label say afternoon?"),
    ("Kept Aspirin after doctor said stop", "Which medication did the doctor say to stop?"),
    ("Changed Metformin dose amount", "Did the doctor change the amount or how often?"),
    ("Guessed with conflicting instructions", "What could happen if you guessed wrong?"),
    ("Noticed 3 pills left but no reminder", "What will help you remember to call before you run out?"),
]
for idx, (title, prompt) in enumerate(errors, start=1):
    CARDS.append(c("Therapist Error Prompt", f"E{idx}", title.upper(), prompt, "Use as guided-discovery prompt.", "#111111"))

CARDS += [
    c("Therapist Scoring", "SC1", "ACCURACY", "Correct medication placed; correct time slot; correct number of pills; empty slots recognized; medication list updated correctly; conflicting instruction identified.", accent="#111111"),
    c("Therapist Scoring", "SC2", "CUEING", "Independent; verbal cue; visual cue; modeling; hand-over-hand; caregiver-assisted.", accent="#111111"),
    c("Therapist Scoring", "SC3", "ERROR TYPE", "Skipped label; guessed by color; missed empty slot; doubled dose; missed refill need; failed to update list; did not call for clarification.", accent="#111111"),
    c("Therapist Scoring", "SC4", "SAFETY AWARENESS", "Recognized unsafe option; asked for help; used pharmacist/doctor as resource; avoided double-dosing; created refill reminder.", accent="#111111"),
    c("Clinical Safety", "REM", "SAFETY REMINDER", "These cards are for cognitive rehabilitation simulation only. Do not use the cards to make real medication changes.", "Any real medication question should be directed to a licensed prescriber or pharmacist.", "#d62f2f"),
]


def fit_text(text: str, font: str, size: float, width: float) -> str:
    if stringWidth(text, font, size) <= width:
        return text
    trimmed = text
    while trimmed and stringWidth(trimmed + "...", font, size) > width:
        trimmed = trimmed[:-1]
    return trimmed.rstrip() + "..."


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


def wrapped_lines(text: str, font: str, size: float, width: float) -> list[str]:
    lines: list[str] = []
    for raw in text.splitlines():
        lines.extend(wrap_line(raw, font, size, width) or [""])
    return lines


def draw_wrapped(cn: canvas.Canvas, text: str, x: float, y: float, width: float, font: str, size: float, leading: float, max_lines: int) -> float:
    cn.setFont(font, size)
    lines = wrapped_lines(text, font, size, width)
    if len(lines) > max_lines:
        lines = lines[:max_lines]
        lines[-1] = fit_text(lines[-1], font, size, width)
    for line in lines:
        cn.drawString(x, y, line)
        y -= leading
    return y


def draw_text_box(
    cn: canvas.Canvas,
    text: str,
    x: float,
    y_top: float,
    width: float,
    height: float,
    font: str,
    target_size: float,
    min_size: float,
) -> None:
    size = target_size
    while size >= min_size:
        leading = size * 1.16
        lines = wrapped_lines(text, font, size, width)
        if len(lines) * leading <= height:
            break
        size -= 0.3
    leading = size * 1.16
    max_lines = max(1, int(height // leading))
    draw_wrapped(cn, text, x, y_top - size, width, font, size, leading, max_lines)


def draw_image_fit(cn: canvas.Canvas, path: Path, x: float, y: float, max_w: float, max_h: float) -> None:
    image = ImageReader(str(path))
    img_w, img_h = image.getSize()
    scale = min(max_w / img_w, max_h / img_h)
    cn.drawImage(image, x, y, width=img_w * scale, height=img_h * scale, preserveAspectRatio=True, mask=None)


def draw_watermark(cn: canvas.Canvas) -> None:
    width, height = letter
    cn.saveState()
    cn.translate(width / 2, height / 2)
    cn.rotate(34)
    cn.setFillColor(colors.Color(0.55, 0.55, 0.55, alpha=0.09))
    cn.setFont("Helvetica-Bold", 34)
    cn.drawCentredString(0, 16, "STRIVE Physical Therapy")
    cn.setFont("Helvetica-Bold", 22)
    cn.drawCentredString(0, -18, "Las Vegas")
    cn.restoreState()


def draw_header(cn: canvas.Canvas, page_num: int, side: str) -> None:
    width, height = letter
    draw_watermark(cn)
    margin_x = 0.48 * inch
    draw_image_fit(cn, BANNER_PATH, margin_x, height - 0.72 * inch, 2.55 * inch, 0.58 * inch)
    cn.setFillColor(colors.black)
    cn.setFont("Helvetica-Bold", 14)
    cn.drawString(margin_x + 2.74 * inch, height - 0.34 * inch, "Medication Card Deck")
    cn.setFont("Helvetica", 7.3)
    cn.drawRightString(width - margin_x, height - 0.34 * inch, f"{side} - sheet {page_num}")


def draw_footer(cn: canvas.Canvas, page_num: int) -> None:
    width, _ = letter
    cn.setStrokeColor(colors.HexColor("#c8c8c8"))
    cn.setLineWidth(0.4)
    cn.line(0.48 * inch, 0.36 * inch, width - 0.48 * inch, 0.36 * inch)
    cn.setFillColor(colors.HexColor("#333333"))
    cn.setFont("Helvetica", 6.8)
    cn.drawString(0.48 * inch, 0.22 * inch, COPYRIGHT)
    cn.drawRightString(width - 0.48 * inch, 0.22 * inch, f"Page {page_num}")


def draw_card_front(cn: canvas.Canvas, card: DeckCard, x: float, y: float, w: float, h: float) -> None:
    accent = colors.HexColor(card.accent)
    pale = colors.HexColor("#fff7d6")

    cn.setFillColor(colors.white)
    cn.setStrokeColor(colors.black)
    cn.setLineWidth(1.1)
    cn.roundRect(x, y, w, h, 8, stroke=1, fill=1)

    cn.setFillColor(accent)
    cn.roundRect(x + 8, y + h - 31, 43, 20, 4, stroke=0, fill=1)
    cn.setFillColor(colors.white)
    cn.setFont("Helvetica-Bold", 8.8)
    cn.drawCentredString(x + 29.5, y + h - 25.5, fit_text(card.code, "Helvetica-Bold", 8.8, 36))

    cn.setFillColor(colors.black)
    cn.setFont("Helvetica-Bold", 6.1)
    cn.drawRightString(x + w - 10, y + h - 15, fit_text(card.category.upper(), "Helvetica-Bold", 6.1, w - 70))
    cn.setFont("Helvetica-Bold", 11.2)
    cn.drawString(x + 10, y + h - 47, fit_text(card.title, "Helvetica-Bold", 11.2, w - 20))

    cn.setFillColor(pale)
    cn.roundRect(x + 10, y + 42, w - 20, h - 105, 5, stroke=0, fill=1)
    cn.setFillColor(colors.black)
    draw_text_box(cn, card.body, x + 18, y + h - 66, w - 36, h - 122, "Helvetica-Bold", 9.8, 7.8)

    cn.setFillColor(colors.HexColor("#444444"))
    cn.setFont("Helvetica", 5.7)
    cn.drawString(x + 10, y + 9, "(c) 2026 STRIVE Physical Therapy | Las Vegas")


def draw_card_back(cn: canvas.Canvas, card: DeckCard, x: float, y: float, w: float, h: float) -> None:
    accent = colors.HexColor(card.accent)
    pale = colors.HexColor("#f1f6fb")
    helper = card.helper or "Use as a front-facing sorting or prompt card. No separate answer key needed."

    cn.setFillColor(colors.white)
    cn.setStrokeColor(colors.black)
    cn.setLineWidth(1.1)
    cn.roundRect(x, y, w, h, 8, stroke=1, fill=1)

    cn.setFillColor(accent)
    cn.roundRect(x + 8, y + h - 31, 43, 20, 4, stroke=0, fill=1)
    cn.setFillColor(colors.white)
    cn.setFont("Helvetica-Bold", 8.8)
    cn.drawCentredString(x + 29.5, y + h - 25.5, fit_text(card.code, "Helvetica-Bold", 8.8, 36))

    cn.setFillColor(colors.black)
    cn.setFont("Helvetica-Bold", 6.1)
    cn.drawRightString(x + w - 10, y + h - 15, "BACK")
    cn.setFont("Helvetica-Bold", 10.2)
    cn.drawString(x + 10, y + h - 47, fit_text(card.title, "Helvetica-Bold", 10.2, w - 20))

    cn.setFillColor(pale)
    cn.roundRect(x + 10, y + 42, w - 20, h - 105, 5, stroke=0, fill=1)
    cn.setFillColor(accent)
    cn.rect(x + 18, y + 52, 4, h - 125, stroke=0, fill=1)
    cn.setFillColor(colors.black)
    cn.setFont("Helvetica-Bold", 8)
    cn.drawString(x + 30, y + h - 70, "HELPER / ANSWER")
    draw_text_box(cn, helper, x + 30, y + h - 84, w - 48, h - 145, "Helvetica", 8.8, 6.8)

    cn.setFillColor(colors.HexColor("#444444"))
    cn.setFont("Helvetica", 5.7)
    cn.drawString(x + 10, y + 9, "(c) 2026 STRIVE Physical Therapy | Las Vegas")


def build() -> None:
    cn = canvas.Canvas(str(OUT), pagesize=letter)
    cn.setTitle("STRIVE Medication Card Deck - No Core Medication Cards")
    width, height = letter
    margin_x = 0.48 * inch
    card_w = 3.62 * inch
    card_h = 2.36 * inch
    gap_x = 0.30 * inch
    gap_y = 0.14 * inch
    per_page = 6
    total_sheets = (len(CARDS) + per_page - 1) // per_page

    for sheet_idx in range(total_sheets):
        sheet_num = sheet_idx + 1
        draw_header(cn, sheet_num, "FRONT")
        start_y = height - 1.03 * inch - card_h
        page_cards = CARDS[sheet_idx * per_page : (sheet_idx + 1) * per_page]
        for idx, card in enumerate(page_cards):
            col = idx % 2
            row = idx // 2
            x = margin_x + col * (card_w + gap_x)
            y = start_y - row * (card_h + gap_y)
            draw_card_front(cn, card, x, y, card_w, card_h)

        draw_footer(cn, sheet_num * 2 - 1)
        cn.showPage()

        draw_header(cn, sheet_num, "BACK - flip on long edge")
        for idx, card in enumerate(page_cards):
            front_col = idx % 2
            col = 1 - front_col
            row = idx // 2
            x = margin_x + col * (card_w + gap_x)
            y = start_y - row * (card_h + gap_y)
            draw_card_back(cn, card, x, y, card_w, card_h)

        draw_footer(cn, sheet_num * 2)
        if sheet_num < total_sheets:
            cn.showPage()

    cn.save()
    print(OUT)


if __name__ == "__main__":
    build()
