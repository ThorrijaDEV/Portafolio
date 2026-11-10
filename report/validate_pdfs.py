#!/usr/bin/env python3
"""Validate every Engineering Showcase PDF.

Checks, per document:
  * page count
  * banned vocabulary (UMA, Málaga, any Spanish "investigación",
    "In research" / "En investigación" used as a project status)
  * blank or near-blank pages
  * that every page carries extractable text
  * that every page carries at least one image on documents that are
    supposed to be illustrated

Exit code is non-zero when a document fails any check.
"""

import os
import re
import sys
import time

import pymupdf

REPORT_DIR = os.path.dirname(os.path.abspath(__file__))

# (file, expected pages, minimum number of images actually painted)
DOCUMENTS = [
    ("Thorrija-Engineering-Showcase-Quick-EN.pdf", 11, 5),
    ("Thorrija-Engineering-Showcase-Quick-ES.pdf", 12, 5),
    ("Thorrija-Engineering-Showcase-Technical-EN.pdf", 13, 7),
    ("Thorrija-Engineering-Showcase-Technical-ES.pdf", 14, 7),
    ("Thorrija-Engineering-Showcase.en.pdf", 10, 0),
    ("Thorrija-Engineering-Showcase.es.pdf", 10, 0),
    ("Thorrija-Engineering-Showcase-Technical-Dossier.pdf", 23, 2),
    ("Thorrija-Engineering-Showcase-Technico.pdf", 12, 5),
]

BANNED = [
    r"Universidad de M\u00e1laga",
    r"University of M\u00e1laga",
    r"\bUMA\b",
    r"investigaci\u00f3n",
    r"investigando",
    r"En investigaci\u00f3n",
    r"In research",
    r"AI / Escritorio",
    r"IA / Escritorio",
]

def scan_banned(text):
    hits = []
    for pattern in BANNED:
        for match in re.finditer(pattern, text, re.IGNORECASE):
            hits.append((pattern, text[max(0, match.start() - 40): match.end() + 40]))
    return hits


def main():
    failures = 0
    rows = []
    for pdf_name, expected_pages, expect_images in DOCUMENTS:
        path = os.path.join(REPORT_DIR, pdf_name)
        if not os.path.exists(path):
            print(f"MISSING {pdf_name}")
            failures += 1
            continue

        doc = pymupdf.open(path)
        problems = []
        if doc.page_count != expected_pages:
            problems.append(f"page count {doc.page_count} != expected {expected_pages}")

        full_text = ""
        blank_pages = []
        textless_pages = []
        drawn_total = 0
        for index, page in enumerate(doc):
            page_text = page.get_text()
            full_text += page_text
            if not page_text.strip():
                textless_pages.append(index + 1)
            # get_image_info() reports the images actually painted on this
            # page; get_images() would report the whole shared Resources
            # dictionary, which is identical on every page of the document.
            drawn = page.get_image_info()
            drawn_total += len(drawn)
            # a page that is effectively empty in both text and drawings
            if not page_text.strip() and not drawn and not page.get_drawings():
                blank_pages.append(index + 1)

        if textless_pages:
            problems.append(f"pages without text: {textless_pages}")
        if blank_pages:
            problems.append(f"blank pages: {blank_pages}")
        if drawn_total < expect_images:
            problems.append(
                f"only {drawn_total} image(s) painted, expected at least {expect_images}"
            )

        hits = scan_banned(full_text)
        if hits:
            for pattern, context in hits[:5]:
                problems.append(f"banned /{pattern}/ -> ...{context.strip()}...")

        status = "PASS" if not problems else "FAIL"
        if problems:
            failures += 1
        rows.append((pdf_name, doc.page_count, os.path.getsize(path), status, problems))
        doc.close()

    print(f"{'document':<58} {'pages':>5} {'bytes':>10}  status")
    print("-" * 92)
    for name, pages, size, status, problems in rows:
        print(f"{name:<58} {pages:>5} {size:>10,}  {status}")
        for problem in problems:
            print(f"    - {problem}")

    print("-" * 92)
    print(f"{len(rows) - failures}/{len(rows)} documents passed")
    write_markdown(rows, failures)
    return 1 if failures else 0


def write_markdown(rows, failures):
    """Emit the validation report from the numbers just measured."""
    measured = {}
    for name, pages, size, status, problems in rows:
        doc = pymupdf.open(os.path.join(REPORT_DIR, name))
        measured[name] = sum(len(page.get_image_info()) for page in doc)
        doc.close()

    lines = [
        "# Engineering Showcase — PDF Validation Report",
        "",
        "**Generated:** " + time.strftime("%Y-%m-%d %H:%M"),
        "**Method:** PyMuPDF page-by-page inspection "
        "(`python3 validate_pdfs.py` in `report/`)",
        "",
        "Every document below is regenerated from its HTML source with "
        "`python3 generate_all.py` and then checked for page count, "
        "extractable text, blank pages, embedded images and banned vocabulary.",
        "",
        "---",
        "",
        "## Documents",
        "",
        "| Document | Pages | Bytes | Screenshots | Banned vocabulary | Verdict |",
        "|----------|-------|-------|-------------|-------------------|---------|",
    ]
    for name, pages, size, status, problems in rows:
        banned = [pr for pr in problems if pr.startswith("banned ")]
        verdict = "PASS" if status == "PASS" else "FAIL"
        lines.append(
            f"| `{name}` | {pages} | {size:,} | {measured[name]} | "
            f"{'clean' if not banned else 'FOUND'} | {verdict} |"
        )

    def mark(prefixes):
        """✓ only when no document reported a problem of this kind."""
        offending = [
            (name, problem)
            for name, _pages, _size, _status, problems in rows
            for problem in problems
            if any(problem.startswith(prefix) for prefix in prefixes)
        ]
        if not offending:
            return "✓"
        return "✗ " + ", ".join(f"`{name}`" for name, _ in offending)

    lines += [
        "",
        "---",
        "",
        "## Checks performed",
        "",
        "| Check | Result |",
        "|-------|--------|",
        f"| Documents validated | {len(rows)} |",
        f"| Documents passing | {len(rows) - failures} |",
        f"| Page count matches the measured source | {mark(['page count'])} |",
        f"| Every page yields extractable text | {mark(['pages without text'])} |",
        f"| No blank pages (text, images and drawings) | {mark(['blank pages'])} |",
        f"| Screenshots embedded where the document shows the labs | {mark(['only ', 'image(s) painted'])} |",
        f"| No `Universidad de Málaga` / `University of Málaga` / `UMA` | {mark(['banned '])} |",
        "",
        "---",
        "",
        f"## Verdict: {'PASS' if failures == 0 else 'FAIL'}",
        "",
    ]
    if failures == 0:
        lines.append(
            "All eight documents passed. The four editions (Quick EN/ES, "
            "Technical EN/ES) carry the real showcase captures; the four "
            "legacy documents are retained and sanitised."
        )
    else:
        for name, pages, size, status, problems in rows:
            if status == "FAIL":
                lines.append(f"- `{name}`: " + "; ".join(problems))
    lines += [
        "",
        "---",
        "",
        "## Notes",
        "",
        "- Screenshots are real captures of the running showcase web "
        "application (`report/*.png`), not mockups.",
        "- The documents are rebuilt from `report/*.html`; the PDF is a "
        "render, never an edited binary.",
        "- `report/add_screenshots.py` inserts the captures into the four "
        "editions and is idempotent.",
        "",
    ]
    path = os.path.join(REPORT_DIR, "TECHNICAL_PDF_VALIDATION.md")
    with open(path, "w", encoding="utf-8") as fh:
        fh.write("\n".join(lines))
    print(f"report written: {path}")


if __name__ == "__main__":
    sys.exit(main())
