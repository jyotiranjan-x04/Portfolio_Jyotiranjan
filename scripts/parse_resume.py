from pathlib import Path
from pypdf import PdfReader

pdf_path = Path(__file__).resolve().parents[2] / "portfolio-assets" / "Jyotiranjan_Sahoo_Resume.pdf"
reader = PdfReader(str(pdf_path))
text = "\n".join(page.extract_text() or "" for page in reader.pages)
print(text)
