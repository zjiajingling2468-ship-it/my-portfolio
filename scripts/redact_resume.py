from pathlib import Path
import sys
import tempfile

from PIL import Image, ImageDraw
from pypdf import PdfReader
from reportlab.pdfgen import canvas


def main(source: Path, rendered_page: Path, destination: Path) -> None:
    source_page = PdfReader(str(source)).pages[0]
    width_pt = float(source_page.mediabox.width)
    height_pt = float(source_page.mediabox.height)

    with tempfile.TemporaryDirectory() as temp_dir:
        rendered = Image.open(rendered_page).convert("RGB")
        scale_x = rendered.width / width_pt
        scale_y = rendered.height / height_pt
        contact_line = (
            int(110 * scale_x),
            int(68 * scale_y),
            int(505 * scale_x),
            int(96 * scale_y),
        )
        ImageDraw.Draw(rendered).rectangle(contact_line, fill="white")

        raster_path = Path(temp_dir) / "resume-redacted.jpg"
        rendered.save(raster_path, "JPEG", quality=92, optimize=True)

        destination.parent.mkdir(parents=True, exist_ok=True)
        pdf = canvas.Canvas(str(destination), pagesize=(width_pt, height_pt), pageCompression=1)
        pdf.drawImage(str(raster_path), 0, 0, width=width_pt, height=height_pt)
        pdf.showPage()
        pdf.save()


if __name__ == "__main__":
    main(Path(sys.argv[1]), Path(sys.argv[2]), Path(sys.argv[3]))
