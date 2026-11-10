# Engineering Showcase — PDF Validation Report

**Generated:** 2026-11-10 21:56
**Method:** PyMuPDF page-by-page inspection (`python3 validate_pdfs.py` in `report/`)

Every document below is regenerated from its HTML source with `python3 generate_all.py` and then checked for page count, extractable text, blank pages, embedded images and banned vocabulary.

---

## Documents

| Document | Pages | Bytes | Screenshots | Banned vocabulary | Verdict |
|----------|-------|-------|-------------|-------------------|---------|
| `Thorrija-Engineering-Showcase-Quick-EN.pdf` | 11 | 434,842 | 5 | clean | PASS |
| `Thorrija-Engineering-Showcase-Quick-ES.pdf` | 12 | 436,347 | 5 | clean | PASS |
| `Thorrija-Engineering-Showcase-Technical-EN.pdf` | 13 | 714,487 | 7 | clean | PASS |
| `Thorrija-Engineering-Showcase-Technical-ES.pdf` | 14 | 717,923 | 7 | clean | PASS |
| `Thorrija-Engineering-Showcase.en.pdf` | 10 | 52,856 | 0 | clean | PASS |
| `Thorrija-Engineering-Showcase.es.pdf` | 10 | 54,121 | 0 | clean | PASS |
| `Thorrija-Engineering-Showcase-Technical-Dossier.pdf` | 23 | 250,465 | 2 | clean | PASS |
| `Thorrija-Engineering-Showcase-Technico.pdf` | 12 | 432,012 | 5 | clean | PASS |

---

## Checks performed

| Check | Result |
|-------|--------|
| Documents validated | 8 |
| Documents passing | 8 |
| Page count matches the measured source | ✓ |
| Every page yields extractable text | ✓ |
| No blank pages (text, images and drawings) | ✓ |
| Screenshots embedded where the document shows the labs | ✓ |
| No `Universidad de Málaga` / `University of Málaga` / `UMA` | ✓ |

---

## Verdict: PASS

All eight documents passed. The four editions (Quick EN/ES, Technical EN/ES) carry the real showcase captures; the four legacy documents are retained and sanitised.

---

## Notes

- Screenshots are real captures of the running showcase web application (`report/*.png`), not mockups.
- The documents are rebuilt from `report/*.html`; the PDF is a render, never an edited binary.
- `report/add_screenshots.py` inserts the captures into the four editions and is idempotent.
