#!/usr/bin/env python3
"""Generate every Engineering Showcase PDF from its HTML source.

Sources live next to this script. WeasyPrint is called with `base_url`
set to the report directory so that relative <img src="..."> references
resolve; absolute filesystem paths are silently dropped by WeasyPrint,
so the HTML must keep using bare relative filenames.

    python3 generate_all.py
"""

from weasyprint import HTML
import os
import sys

REPORT_DIR = os.path.dirname(os.path.abspath(__file__))

# (html source, pdf output)
DOCUMENTS = [
    ("showcase-quick-en.html", "Thorrija-Engineering-Showcase-Quick-EN.pdf"),
    ("showcase-quick-es.html", "Thorrija-Engineering-Showcase-Quick-ES.pdf"),
    ("showcase-technical-en.html", "Thorrija-Engineering-Showcase-Technical-EN.pdf"),
    ("showcase-technical-es.html", "Thorrija-Engineering-Showcase-Technical-ES.pdf"),
    ("en.html", "Thorrija-Engineering-Showcase.en.pdf"),
    ("es.html", "Thorrija-Engineering-Showcase.es.pdf"),
    ("technical_dossier.html", "Thorrija-Engineering-Showcase-Technical-Dossier.pdf"),
    ("Tecnico_Showcase.html", "Thorrija-Engineering-Showcase-Technico.pdf"),
]


def generate():
    failures = []
    for html_name, pdf_name in DOCUMENTS:
        html_path = os.path.join(REPORT_DIR, html_name)
        pdf_path = os.path.join(REPORT_DIR, pdf_name)
        if not os.path.exists(html_path):
            failures.append(f"{html_name}: source missing")
            print(f"  SKIP {pdf_name} (source missing)")
            continue
        with open(html_path, "r", encoding="utf-8") as fh:
            markup = fh.read()
        # Render to a temporary file first: a failed render must never
        # replace a good PDF with a truncated one.
        tmp_path = pdf_path + ".tmp"
        HTML(string=markup, base_url=REPORT_DIR).write_pdf(tmp_path)
        os.replace(tmp_path, pdf_path)
        size = os.path.getsize(pdf_path)
        print(f"  {pdf_name}: {size:,} bytes")
    if failures:
        for failure in failures:
            print(f"  ERROR {failure}")
        return 1
    print(f"\n{len(DOCUMENTS)} PDFs generated.")
    return 0


if __name__ == "__main__":
    sys.exit(generate())
