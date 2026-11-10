# Engineering Showcase — document package

This folder holds the eight PDF editions of the Engineering Showcase, the
HTML sources they are rendered from, the screenshots they embed and the
scripts that build and validate them.

It is served by the portfolio at
`https://thorrijadev.github.io/Portafolio/report/`.

## The four current editions

| File | Pages | Audience |
|------|-------|----------|
| `Thorrija-Engineering-Showcase-Quick-EN.pdf` | 11 | Short meetings, general audience |
| `Thorrija-Engineering-Showcase-Quick-ES.pdf` | 12 | Short meetings, general audience |
| `Thorrija-Engineering-Showcase-Technical-EN.pdf` | 13 | Researchers, engineers, professors |
| `Thorrija-Engineering-Showcase-Technical-ES.pdf` | 14 | Researchers, engineers, professors |

Each edition covers the whole body of work — not only The Box — and states
for every project what it is, the problem it addresses, why it matters, how
it works, what was actually built, what evidence supports it, its
limitations and what could come next.

## The four previous editions (retained)

| File | Pages |
|------|-------|
| `Thorrija-Engineering-Showcase.en.pdf` | 10 |
| `Thorrija-Engineering-Showcase.es.pdf` | 10 |
| `Thorrija-Engineering-Showcase-Technical-Dossier.pdf` | 23 |
| `Thorrija-Engineering-Showcase-Technico.pdf` | 12 |

They remain available because the technical dossier is the most complete
single document, and because the quick editions superseded them.

## Rebuilding

```bash
cd report

# 1. insert the showcase captures into the four editions (idempotent)
python3 add_screenshots.py

# 2. render every PDF from its HTML source
python3 generate_all.py

# 3. validate and refresh TECHNICAL_PDF_VALIDATION.md
python3 validate_pdfs.py
```

Requirements: `weasyprint`, `pymupdf`. No other dependency.

### Why the PDFs are never edited by hand

`generate_all.py` renders each document from its HTML source with
`base_url` set to this directory, so relative `<img src="wtm.png">`
references resolve. WeasyPrint drops absolute filesystem paths silently, so
the sources must keep using bare relative filenames. Every published PDF is
a render of a source that lives in this folder.

## Sources

| File | Document |
|------|----------|
| `showcase-quick-en.html` / `showcase-quick-es.html` | Quick editions |
| `showcase-technical-en.html` / `showcase-technical-es.html` | Technical editions |
| `en.html` / `es.html` | Previous quick editions |
| `technical_dossier.html` | Previous technical dossier (EN) |
| `Tecnico_Showcase.html` | Previous technical dossier (ES) |

## Screenshots

`wtm.png`, `ble.png`, `pem.png`, `gen.png`, `the-box.png`, `overview.png`,
`fidelity.png` are real captures of the running showcase web application.

## Vocabulary rules applied to every document

- No university, institution or programme is named anywhere.
- The projects are presented as things that were built, not as work in
  progress: "construction", "implementation", "build", "implement".
- No capability, result or publication is claimed that is not implemented
  and tested. Fidelity level, limitations and pending revalidation are
  stated explicitly.
