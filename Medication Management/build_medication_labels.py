from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


OUT = Path(__file__).with_name("strive_medication_bottle_labels_john_doe.pdf")
LOGO_PATH = Path("/Users/joshua/Documents/Strive Website Pages/logo.png")
BANNER_PATH = Path("/Users/joshua/Downloads/ChatGPT Image May 12, 2026, 09_39_17 PM.png")


@dataclass(frozen=True)
class Medication:
    code: str
    name: str
    strength: str
    form: str
    sig: str
    quantity: str
    refills: str
    shape: str
    warnings: tuple[str, ...]
    rx: str
    ndc: str


MEDICATIONS = [
    Medication(
        "M1",
        "Metformin",
        "500 mg",
        "tablet",
        "Take 1 tablet by mouth twice daily with meals.",
        "60 tablets",
        "2",
        "White oval tablet",
        ("Take with food.", "Call doctor for severe stomach upset."),
        "654321",
        "68180-336-09",
    ),
    Medication(
        "M2",
        "Lisinopril",
        "10 mg",
        "tablet",
        "Take 1 tablet by mouth every morning.",
        "30 tablets",
        "3",
        "Pink round tablet",
        ("May cause dizziness.", "Rise slowly from sitting."),
        "654322",
        "68180-980-03",
    ),
    Medication(
        "M3",
        "Atorvastatin",
        "20 mg",
        "tablet",
        "Take 1 tablet by mouth at bedtime.",
        "30 tablets",
        "3",
        "White oval tablet",
        ("Avoid grapefruit products.", "Report unexplained muscle pain."),
        "654323",
        "60505-2578-08",
    ),
    Medication(
        "M4",
        "Aspirin",
        "81 mg",
        "tablet",
        "Take 1 tablet by mouth every morning.",
        "30 tablets",
        "1",
        "Yellow round tablet",
        ("May increase bleeding risk.", "Take only as directed."),
        "654324",
        "00904-7704-80",
    ),
    Medication(
        "M5",
        "Amoxicillin",
        "500 mg",
        "capsule",
        "Take 1 capsule by mouth every 12 hours until finished.",
        "20 capsules",
        "0",
        "Pink capsule",
        ("Finish all medication.", "Call doctor for rash or swelling."),
        "654325",
        "65862-0017-01",
    ),
    Medication(
        "M6",
        "Gabapentin",
        "300 mg",
        "capsule",
        "Take 1 capsule by mouth three times daily.",
        "90 capsules",
        "2",
        "Yellow capsule",
        ("May cause drowsiness.", "Avoid alcohol."),
        "654326",
        "67877-223-05",
    ),
    Medication(
        "M7",
        "Clopidogrel",
        "75 mg",
        "tablet",
        "Take 1 tablet by mouth once daily.",
        "30 tablets",
        "2",
        "Pink round tablet",
        ("May increase bleeding risk.", "Tell dentist or doctor before procedures."),
        "654327",
        "31722-872-30",
    ),
    Medication(
        "M8",
        "Melatonin",
        "5 mg",
        "tablet",
        "Take 1 tablet by mouth at bedtime as needed for sleep.",
        "30 tablets",
        "0",
        "White round tablet",
        ("May cause drowsiness.", "Use only when needed."),
        "654328",
        "70000-051-01",
    ),
]


PHARMACY = "STRIVE FAMILY PHARMACY"
PHARMACY_ADDRESS = "101 Wellness Way, Las Vegas, NV 89101"
PHARMACY_PHONE = "(702) 555-0188"
PATIENT = "DOE, JOHN"
PRESCRIBER = "DR. KATHLEEN LANCASTER"
FILL_DATE = "06/21/2026"
DISCARD_DATE = "06/21/2027"
COPYRIGHT = "(c) 2026 STRIVE Physical Therapy | Las Vegas. Authorized training use only."


def draw_image_fit(
    c: canvas.Canvas,
    path: Path,
    x: float,
    y: float,
    max_w: float,
    max_h: float,
    *,
    mask: str | None = "auto",
) -> tuple[float, float]:
    image = ImageReader(str(path))
    img_w, img_h = image.getSize()
    scale = min(max_w / img_w, max_h / img_h)
    draw_w = img_w * scale
    draw_h = img_h * scale
    c.drawImage(image, x, y, width=draw_w, height=draw_h, preserveAspectRatio=True, mask=mask)
    return draw_w, draw_h


def fit_text(c: canvas.Canvas, text: str, font: str, size: float, width: float) -> str:
    if stringWidth(text, font, size) <= width:
        return text
    ellipsis = "..."
    trimmed = text
    while trimmed and stringWidth(trimmed + ellipsis, font, size) > width:
        trimmed = trimmed[:-1]
    return trimmed.rstrip() + ellipsis


def wrap_text(c: canvas.Canvas, text: str, font: str, size: float, width: float, max_lines: int) -> list[str]:
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
    if len(lines) <= max_lines:
        return lines
    kept = lines[:max_lines]
    kept[-1] = fit_text(c, kept[-1], font, size, width)
    return kept


def draw_barcode(c: canvas.Canvas, x: float, y: float, w: float, h: float, seed: str) -> None:
    c.setFillColor(colors.black)
    cursor = x
    pattern = [1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1]
    digits = [int(ch) for ch in seed if ch.isdigit()]
    if not digits:
        digits = [1, 2, 3, 4]
    i = 0
    while cursor < x + w:
        bar_w = pattern[(i + digits[i % len(digits)]) % len(pattern)]
        gap = 1 if i % 3 else 2
        c.rect(cursor, y, bar_w, h, stroke=0, fill=1)
        cursor += bar_w + gap
        i += 1


def draw_check_digit(c: canvas.Canvas, x: float, y: float, code: str) -> None:
    c.setLineWidth(1.2)
    c.circle(x + 11, y + 11, 11, stroke=1, fill=0)
    c.setFont("Helvetica-Bold", 9)
    c.drawCentredString(x + 11, y + 14, code)
    c.setFont("Helvetica-Bold", 6.5)
    c.drawCentredString(x + 11, y + 5, "ID")


def draw_page_footer(c: canvas.Canvas, page_number: int) -> None:
    width, _ = letter
    c.setStrokeColor(colors.HexColor("#c8c8c8"))
    c.setLineWidth(0.4)
    c.line(0.48 * inch, 0.36 * inch, width - 0.48 * inch, 0.36 * inch)
    c.setFillColor(colors.HexColor("#333333"))
    c.setFont("Helvetica", 6.8)
    c.drawString(0.48 * inch, 0.22 * inch, COPYRIGHT)
    c.drawRightString(width - 0.48 * inch, 0.22 * inch, f"Page {page_number}")


def draw_watermark(c: canvas.Canvas) -> None:
    width, height = letter
    c.saveState()
    c.translate(width / 2, height / 2)
    c.rotate(34)
    c.setFillColor(colors.Color(0.55, 0.55, 0.55, alpha=0.12))
    c.setFont("Helvetica-Bold", 34)
    c.drawCentredString(0, 16, "STRIVE Physical Therapy")
    c.setFont("Helvetica-Bold", 22)
    c.drawCentredString(0, -18, "Las Vegas")
    c.restoreState()


def draw_label(c: canvas.Canvas, med: Medication, x: float, y: float, w: float, h: float) -> None:
    yellow = colors.HexColor("#fff200")
    pale_yellow = colors.HexColor("#fff7a8")
    blue = colors.HexColor("#005a9c")
    light = colors.HexColor("#f7f7f2")

    c.setLineWidth(1)
    c.setStrokeColor(colors.black)
    c.setFillColor(colors.white)
    c.roundRect(x, y, w, h, 9, stroke=1, fill=1)

    pad = 8
    warning_w = 72
    barcode_w = 30
    left_w = w - warning_w - barcode_w - pad * 3

    c.setFillColor(yellow)
    c.rect(x + pad, y + h - 24, left_w, 18, stroke=0, fill=1)
    c.setFillColor(colors.black)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawString(x + pad + 4, y + h - 19, f"{med.code}  PATIENT NAME (LAST, FIRST)")

    c.setFont("Helvetica-Bold", 12)
    c.drawString(x + pad + 4, y + h - 37, PATIENT)

    sig_lines = wrap_text(c, med.sig.upper(), "Helvetica-Bold", 10.5, left_w - 4, 3)
    yy = y + h - 53
    for line in sig_lines:
        c.setFont("Helvetica-Bold", 10.5)
        c.drawString(x + pad + 4, yy, line)
        yy -= 12

    band_y = y + 60
    c.setFillColor(yellow)
    c.rect(x + pad, band_y, left_w, 18, stroke=0, fill=1)
    c.setFillColor(colors.black)
    c.setFont("Helvetica-Bold", 8.4)
    med_line = f"{med.name.upper()} {med.strength.upper()} {med.form.upper()}"
    c.drawString(x + pad + 4, band_y + 5, fit_text(c, med_line, "Helvetica-Bold", 8.4, left_w - 8))

    c.setFont("Helvetica", 7.2)
    c.drawString(x + pad + 4, y + 50, f"Rx# {med.rx}    Qty: {med.quantity}")
    c.drawRightString(x + pad + left_w - 4, y + 50, f"Refills: {med.refills}")
    c.drawString(x + pad + 4, y + 40, fit_text(c, PRESCRIBER, "Helvetica", 7.2, left_w - 8))
    c.drawString(x + pad + 4, y + 30, PHARMACY)
    c.setFont("Helvetica", 6.4)
    c.drawString(x + pad + 4, y + 20, f"{PHARMACY_PHONE}  NDC {med.ndc}")

    c.setFillColor(blue)
    c.roundRect(x + pad, y + 4, 22, 12, 2, stroke=0, fill=1)
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 7)
    c.drawCentredString(x + pad + 11, y + 7, "Rx")
    c.setFillColor(colors.black)
    c.setFont("Helvetica", 4.9)
    legal = "(c) 2026 STRIVE Physical Therapy | Las Vegas. Training prop only."
    c.drawString(x + pad + 27, y + 7, fit_text(c, legal, "Helvetica", 4.9, left_w - 30))

    bar_x = x + pad + left_w + 5
    draw_barcode(c, bar_x, y + 38, barcode_w, h - 66, med.rx)

    warn_x = x + w - warning_w - pad
    c.setFillColor(pale_yellow)
    c.roundRect(warn_x, y + 6, warning_w, h - 12, 7, stroke=0, fill=1)
    c.setFillColor(colors.black)
    c.setFont("Helvetica-Bold", 6.6)
    c.drawString(warn_x + 5, y + h - 20, "WARNINGS")
    c.setFont("Helvetica", 6.3)
    wy = y + h - 31
    for warning in med.warnings:
        for line in wrap_text(c, warning, "Helvetica", 6.3, warning_w - 10, 3):
            c.drawString(warn_x + 5, wy, line)
            wy -= 8
        wy -= 2

    c.setFillColor(light)
    c.roundRect(warn_x + 5, y + 33, warning_w - 10, 24, 4, stroke=0, fill=1)
    c.setFillColor(colors.black)
    c.setFont("Helvetica", 5.8)
    c.drawString(warn_x + 9, y + 48, f"Filled: {FILL_DATE}")
    c.drawString(warn_x + 9, y + 40, f"Discard: {DISCARD_DATE}")

    draw_check_digit(c, warn_x + 4, y + 7, med.code)
    c.setFont("Helvetica", 5.8)
    c.drawString(warn_x + 31, y + 22, med.shape)
    c.drawString(warn_x + 31, y + 14, "Training prop only")


def draw_index_page(c: canvas.Canvas) -> None:
    width, height = letter
    draw_watermark(c)
    draw_image_fit(c, BANNER_PATH, 0.65 * inch, height - 1.03 * inch, 4.6 * inch, 0.64 * inch, mask=None)
    c.setFont("Helvetica-Bold", 18)
    c.drawRightString(width - 0.65 * inch, height - 0.58 * inch, "Medication Label Set")
    c.setFont("Helvetica-Bold", 12)
    c.drawRightString(width - 0.65 * inch, height - 0.80 * inch, "Admin Index")
    c.setFont("Helvetica", 9.5)
    c.drawString(0.65 * inch, height - 1.24 * inch, "Default patient: John Doe. These are fictional training labels for medication-management practice tasks.")
    c.drawString(0.65 * inch, height - 1.41 * inch, "Labels include patient, pharmacy, drug details, directions, dates, Rx/refills, warnings, and barcode/legal details.")
    c.setFont("Helvetica-Bold", 8.5)
    c.drawString(0.65 * inch, height - 1.61 * inch, COPYRIGHT)

    x = 0.65 * inch
    y = height - 2.10 * inch
    col_widths = [0.45 * inch, 1.35 * inch, 2.6 * inch, 1.75 * inch]
    headers = ["ID", "Medication", "Printed direction", "Task timing"]
    row_h = 0.42 * inch
    c.setFillColor(colors.HexColor("#fff200"))
    c.rect(x, y, sum(col_widths), row_h, stroke=1, fill=1)
    c.setFillColor(colors.black)
    c.setFont("Helvetica-Bold", 8)
    xx = x
    for header, cw in zip(headers, col_widths):
        c.drawString(xx + 5, y + 11, header)
        xx += cw
    y -= row_h

    timing = {
        "M1": "Breakfast + dinner / with meals",
        "M2": "Morning",
        "M3": "Bedtime",
        "M4": "Morning",
        "M5": "Morning + evening, 12 hours apart",
        "M6": "Morning + afternoon + bedtime",
        "M7": "Once daily, usually morning",
        "M8": "Bedtime / as needed",
    }
    c.setFont("Helvetica", 7.4)
    for med in MEDICATIONS:
        line_h = 0.44 * inch
        c.setFillColor(colors.white)
        c.rect(x, y, sum(col_widths), line_h, stroke=1, fill=1)
        c.setFillColor(colors.black)
        c.drawString(x + 5, y + 13, med.code)
        c.drawString(x + col_widths[0] + 5, y + 13, f"{med.name} {med.strength}")
        c.drawString(x + col_widths[0] + col_widths[1] + 5, y + 13, fit_text(c, med.sig, "Helvetica", 7.4, col_widths[2] - 10))
        c.drawString(x + sum(col_widths[:3]) + 5, y + 13, fit_text(c, timing[med.code], "Helvetica", 7.4, col_widths[3] - 10))
        y -= line_h

    c.setFont("Helvetica-Bold", 9)
    c.drawString(x, y - 0.25 * inch, "Print note")
    c.setFont("Helvetica", 8)
    c.drawString(x, y - 0.43 * inch, "Print at 100% scale. Cut along the outer rounded label edges. Attach one label to each reusable bottle.")
    draw_page_footer(c, 2)


def build() -> None:
    c = canvas.Canvas(str(OUT), pagesize=letter)
    width, height = letter
    c.setTitle("STRIVE Medication Bottle Labels - John Doe")
    draw_watermark(c)

    margin_x = 0.48 * inch
    margin_top = 0.86 * inch
    gap_x = 0.18 * inch
    gap_y = 0.12 * inch
    label_w = (width - 2 * margin_x - gap_x) / 2
    label_h = 2.18 * inch

    draw_image_fit(c, BANNER_PATH, margin_x, height - 0.72 * inch, 2.6 * inch, 0.58 * inch, mask=None)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(margin_x + 2.78 * inch, height - 0.34 * inch, "Medication bottle labels - John Doe")
    c.setFont("Helvetica", 7)
    c.drawRightString(width - margin_x, height - 0.26 * inch, "Fictional labels for rehab training tasks")

    start_y = height - margin_top - label_h
    for idx, med in enumerate(MEDICATIONS):
        col = idx % 2
        row = idx // 2
        x = margin_x + col * (label_w + gap_x)
        y = start_y - row * (label_h + gap_y)
        draw_label(c, med, x, y, label_w, label_h)

    draw_page_footer(c, 1)
    c.showPage()
    draw_index_page(c)
    c.save()
    print(OUT)


if __name__ == "__main__":
    build()
