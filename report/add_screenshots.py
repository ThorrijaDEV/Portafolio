#!/usr/bin/env python3
"""Insert the real Engineering Showcase screenshots into the four editions.

Each capture is a PNG taken from the live showcase web application
(report/*.png). WeasyPrint resolves bare relative filenames when
`base_url` points at this directory, so the markup keeps using plain
names such as src="wtm.png".

Run after editing the editions, then regenerate the PDFs:

    python3 add_screenshots.py
    python3 generate_all.py
"""

import os
import re

REPORT_DIR = os.path.dirname(os.path.abspath(__file__))

CSS = """
.shot {
  display: block;
  width: 100%;
  margin: 10px 0 4px 0;
  border: 1px solid #2a2a2e;
  border-radius: 4px;
}
.shot-caption {
  font-size: 7.5pt;
  line-height: 1.4;
  color: #666;
  font-style: italic;
  margin: 0 0 12px 0;
}
"""

# (file, anchor, image, alt, caption)
INSERTS = [
    # ---------------- Quick EN ----------------
    ("showcase-quick-en.html",
     "  <div><strong>Status:</strong> Completed — 18 tests, Level 4 fidelity.</div>\n</div>\n",
     "wtm.png",
     "Wi-Fi Time Machine laboratory in the Engineering Showcase web application: a synthetic iw scan dump on the left, the time by channel heatmap on the right, and the intermediate processing stages below.",
     "Wi-Fi Time Machine laboratory — synthetic <code>iw</code> dump input, time \u00d7 channel heatmap, and the intermediate stages of the calculation."),
    ("showcase-quick-en.html",
     "  <div><strong>Status:</strong> Completed — 16 tests, Level 4 fidelity.</div>\n</div>\n",
     "ble.png",
     "BLE Radar laboratory in the Engineering Showcase web application: deterministic demo configuration on the left, the radar geometry on the right, and the device lifecycle state table below.",
     "BLE Radar laboratory — deterministic demo configuration, radar geometry, and the device lifecycle state."),
    ("showcase-quick-en.html",
     "  <div><strong>Status:</strong> Completed — 22 tests, Level 4 fidelity.</div>\n</div>\n",
     "pem.png",
     "Process Ecosystem Monitor laboratory in the Engineering Showcase web application: a synthetic /proc snapshot on the left and the process state table on the right.",
     "Process Ecosystem Monitor laboratory — synthetic <code>/proc</code> snapshot input and the derived process state table."),
    ("showcase-quick-en.html",
     "  <div><strong>Status:</strong> Completed — 24 tests, Level 4 fidelity.</div>\n</div>\n",
     "gen.png",
     "Terminal Generative Engine laboratory in the Engineering Showcase web application: seed, mode, canvas and frame controls on the left, the deterministic render on the right.",
     "Terminal Generative Engine laboratory — seed, mode, canvas and frame controls, with the deterministic render."),
    ("showcase-quick-en.html",
     "  <div><strong>Status:</strong> Completed — 102 tests (42+25+12+23), Level 3 fidelity (pure-TS BLAKE2b, not byte-compatible with Python).</div>\n</div>\n",
     "the-box.png",
     "The Box laboratory in the Engineering Showcase web application: the arc-incidence substrate configuration with node and arc counts, dimension, seed, steps, engine policy and tag spread.",
     "The Box laboratory — arc-incidence substrate configuration: node and arc counts, dimension, seed, steps, engine policy and tag spread."),

    # ---------------- Quick ES ----------------
    ("showcase-quick-es.html",
     "  <div><strong>Estado:</strong> Completado — 18 pruebas, Nivel 4 de fidelidad.</div>\n</div>\n",
     "wtm.png",
     "Laboratorio Wi-Fi Time Machine en la aplicación web del Engineering Showcase: volcado iw sintético a la izquierda, mapa de calor tiempo por canal a la derecha y etapas intermedias debajo.",
     "Laboratorio Wi-Fi Time Machine — entrada sintética <code>iw</code>, mapa de calor tiempo \u00d7 canal y etapas intermedias del cálculo."),
    ("showcase-quick-es.html",
     "  <div><strong>Estado:</strong> Completado — 16 pruebas, Nivel 4 de fidelidad.</div>\n</div>\n",
     "ble.png",
     "Laboratorio BLE Radar en la aplicación web del Engineering Showcase: configuración determinista a la izquierda, geometría del radar a la derecha y tabla de estados de dispositivos debajo.",
     "Laboratorio BLE Radar — configuración determinista, geometría del radar y estado del ciclo de vida de los dispositivos."),
    ("showcase-quick-es.html",
     "  <div><strong>Estado:</strong> Completado — 22 pruebas, Nivel 4 de fidelidad.</div>\n</div>\n",
     "pem.png",
     "Laboratorio Process Ecosystem Monitor en la aplicación web del Engineering Showcase: instantánea sintética de /proc a la izquierda y tabla de estado de procesos a la derecha.",
     "Laboratorio Process Ecosystem Monitor — entrada sintética de <code>/proc</code> y tabla de estado de procesos derivada."),
    ("showcase-quick-es.html",
     "  <div><strong>Estado:</strong> Completado — 24 pruebas, Nivel 4 de fidelidad.</div>\n</div>\n",
     "gen.png",
     "Laboratorio Terminal Generative Engine en la aplicación web del Engineering Showcase: controles de semilla, modo, lienzo y frame a la izquierda, render determinista a la derecha.",
     "Laboratorio Terminal Generative Engine — controles de semilla, modo, lienzo y frame, con el render determinista."),
    ("showcase-quick-es.html",
     "  <div><strong>Estado:</strong> Completado — 102 pruebas (42+25+12+23), Nivel 3 de fidelidad (BLAKE2b puro TS, no byte-compatible con Python hashlib.blake2b).</div>\n</div>\n",
     "the-box.png",
     "Laboratorio The Box en la aplicación web del Engineering Showcase: configuración del sustrato arc-incidencia con número de nodos y arcos, dimensión, semilla, pasos, política del motor y spread de etiquetas.",
     "Laboratorio The Box — configuración del sustrato arc-incidencia: nodos y arcos, dimensión, semilla, pasos, política del motor y spread de etiquetas."),

    # ---------------- Technical EN ----------------
    ("showcase-technical-en.html",
     "must be synthetic text.</p>\n",
     "wtm.png",
     "Wi-Fi Time Machine laboratory in the Engineering Showcase web application: a synthetic iw scan dump on the left, the time by channel heatmap on the right, and the intermediate processing stages below.",
     "Figure — Wi-Fi Time Machine laboratory: synthetic <code>iw</code> dump input, time \u00d7 channel heatmap, and the intermediate stages of the calculation."),
    ("showcase-technical-en.html",
     "convention, not orientation.</p>\n",
     "ble.png",
     "BLE Radar laboratory in the Engineering Showcase web application: deterministic demo configuration on the left, the radar geometry on the right, and the device lifecycle state table below.",
     "Figure — BLE Radar laboratory: deterministic demo configuration, radar geometry, and the device lifecycle state."),
    ("showcase-technical-en.html",
     "system's actual CPU.</p>\n",
     "pem.png",
     "Process Ecosystem Monitor laboratory in the Engineering Showcase web application: a synthetic /proc snapshot on the left and the process state table on the right.",
     "Figure — Process Ecosystem Monitor laboratory: synthetic <code>/proc</code> snapshot input and the derived process state table."),
    ("showcase-technical-en.html",
     "exported as data only); original project has 5 failing tests not reproduced\nhere.</p>\n",
     "gen.png",
     "Terminal Generative Engine laboratory in the Engineering Showcase web application: seed, mode, canvas and frame controls on the left, the deterministic render on the right.",
     "Figure — Terminal Generative Engine laboratory: seed, mode, canvas and frame controls, with the deterministic render."),
    ("showcase-technical-en.html",
     "Koopman analysis; no classifier gates (G1\u2013G4); no SQLite; no CLI or store API.</p>\n",
     "the-box.png",
     "The Box laboratory in the Engineering Showcase web application: the arc-incidence substrate configuration with node and arc counts, dimension, seed, steps, engine policy and tag spread.",
     "Figure — The Box laboratory: arc-incidence substrate configuration \u2014 node and arc counts, dimension, seed, steps, engine policy and tag spread."),

    # ---------------- Technical ES ----------------
    ("showcase-technical-es.html",
     "adaptación de tamaño de terminal. La entrada debe ser texto sintético.</p>\n",
     "wtm.png",
     "Laboratorio Wi-Fi Time Machine en la aplicación web del Engineering Showcase: volcado iw sintético a la izquierda, mapa de calor tiempo por canal a la derecha y etapas intermedias debajo.",
     "Figura — Laboratorio Wi-Fi Time Machine: entrada sintética <code>iw</code>, mapa de calor tiempo \u00d7 canal y etapas intermedias del cálculo."),
    ("showcase-technical-es.html",
     "convención visual, no orientación real.</p>\n",
     "ble.png",
     "Laboratorio BLE Radar en la aplicación web del Engineering Showcase: configuración determinista a la izquierda, geometría del radar a la derecha y tabla de estados de dispositivos debajo.",
     "Figura — Laboratorio BLE Radar: configuración determinista, geometría del radar y estado del ciclo de vida de los dispositivos."),
    ("showcase-technical-es.html",
     "deltas de jiffies, no la CPU real del sistema anfitrión.</p>\n",
     "pem.png",
     "Laboratorio Process Ecosystem Monitor en la aplicación web del Engineering Showcase: instantánea sintética de /proc a la izquierda y tabla de estado de procesos a la derecha.",
     "Figura — Laboratorio Process Ecosystem Monitor: entrada sintética de <code>/proc</code> y tabla de estado de procesos derivada."),
    ("showcase-technical-es.html",
     "pruebas fallantes no reproducidas aquí.</p>\n",
     "gen.png",
     "Laboratorio Terminal Generative Engine en la aplicación web del Engineering Showcase: controles de semilla, modo, lienzo y frame a la izquierda, render determinista a la derecha.",
     "Figura — Laboratorio Terminal Generative Engine: controles de semilla, modo, lienzo y frame, con el render determinista."),
    ("showcase-technical-es.html",
     "sin SQLite; sin CLI ni API de store.</p>\n",
     "the-box.png",
     "Laboratorio The Box en la aplicación web del Engineering Showcase: configuración del sustrato arc-incidencia con número de nodos y arcos, dimensión, semilla, pasos, política del motor y spread de etiquetas.",
     "Figura — Laboratorio The Box: configuración del sustrato arc-incidencia — nodos y arcos, dimensión, semilla, pasos, política del motor y spread de etiquetas."),
]

# Extra blocks appended to a specific section (file, anchor, block)
EXTRAS = [
    ("showcase-technical-en.html",
     "</table>\n\n<div class=\"section-break\"></div>\n\n<!-- ================= 2. ENGINEERING PHILOSOPHY ================= -->",
     "<img class=\"shot\" src=\"overview.png\" alt=\"Overview of the four interactive laboratories in the Engineering Showcase web application, each card stating its domain, technology and test count.\">\n"
     "<p class=\"shot-caption\">Figure — The showcase overview: every interactive laboratory with its domain, technology and test count.</p>\n"
     "<img class=\"shot\" src=\"fidelity.png\" alt=\"Fidelity and methodology page of the Engineering Showcase web application: the fidelity level of each model on the left and the honest limitations of every laboratory on the right.\">\n"
     "<p class=\"shot-caption\">Figure — Fidelity classification per model and the honest limitations of every laboratory.</p>\n\n"
     "</table>\n\n<div class=\"section-break\"></div>\n\n<!-- ================= 2. ENGINEERING PHILOSOPHY ================= -->"),
    ("showcase-technical-es.html",
     "</table>\n\n<div class=\"section-break\"></div>\n\n<!-- ================= 2. FILOSOFÍA DE INGENIERÍA ================= -->",
     "<img class=\"shot\" src=\"overview.png\" alt=\"Vista general de los cuatro laboratorios interactivos de la aplicación web Engineering Showcase; cada tarjeta indica dominio, tecnología y número de pruebas.\">\n"
     "<p class=\"shot-caption\">Figura — Vista general del showcase: cada laboratorio interactivo con su dominio, tecnología y número de pruebas.</p>\n"
     "<img class=\"shot\" src=\"fidelity.png\" alt=\"Página de fidelidad y metodología de la aplicación web Engineering Showcase: el nivel de fidelidad de cada modelo a la izquierda y las limitaciones honestas de cada laboratorio a la derecha.\">\n"
     "<p class=\"shot-caption\">Figura — Clasificación de fidelidad por modelo y las limitaciones honestas de cada laboratorio.</p>\n\n"
     "</table>\n\n<div class=\"section-break\"></div>\n\n<!-- ================= 2. FILOSOFÍA DE INGENIERÍA ================= -->"),
]


def add_css(markup):
    if ".shot {" in markup:
        return markup
    marker = "</style>"
    index = markup.index(marker)
    return markup[:index] + CSS + markup[index:]


def main():
    by_file = {}
    for entry in INSERTS:
        by_file.setdefault(entry[0], []).append(entry)

    for fname, entries in by_file.items():
        path = os.path.join(REPORT_DIR, fname)
        markup = open(path, encoding="utf-8").read()
        markup = add_css(markup)
        for _, anchor, image, alt, caption in entries:
            if f'src="{image}"' in markup:
                continue
            if markup.count(anchor) != 1:
                raise SystemExit(
                    f"anchor in {fname} is not unique "
                    f"({markup.count(anchor)} matches): {anchor[:70]!r}"
                )
            block = (
                f'  <img class="shot" src="{image}" alt="{alt}">\n'
                f'  <p class="shot-caption">{caption}</p>\n'
            )
            markup = markup.replace(anchor, anchor + block, 1)
        open(path, "w", encoding="utf-8").write(markup)
        print(f"{fname}: {len(entries)} screenshots inserted")

    for fname, anchor, replacement in EXTRAS:
        path = os.path.join(REPORT_DIR, fname)
        markup = open(path, encoding="utf-8").read()
        if 'src="overview.png"' in markup:
            print(f"{fname}: figures already present, skipped")
            continue
        if anchor not in markup:
            raise SystemExit(f"extra anchor not found in {fname}")
        markup = markup.replace(anchor, replacement, 1)
        open(path, "w", encoding="utf-8").write(markup)
        print(f"{fname}: overview + fidelity figures inserted")


if __name__ == "__main__":
    main()
