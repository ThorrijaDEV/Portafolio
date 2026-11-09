/**
 * Thorrija Portfolio — Bilingual i18n (Spanish default / English)
 *
 * Translations applied via data-i18n attributes. Language persisted in
 * localStorage; default is Spanish ('es').
 */

const I18N = {
  es: {
    // Navigation
    nav_perfil: "Perfil",
    nav_trabajo: "Trabajo",
    nav_capacidades: "Capacidades",
    nav_certificaciones: "Certificaciones",
    nav_contacto: "Contacto",
    nav_showcase: "Demostraciones",
    nav_informe: "Informe PDF",

    // Hero
    hero_statement: "Construyo software que observa,<br>registra y explica sistemas vivos.",
    hero_lede: "Desarrollador de software centrado en Linux, inteligencia artificial y ciberseguridad. Diseño herramientas de línea de comandos y TUI que miden lo que normalmente pasa desapercibido — el entorno inalámbrico, los dispositivos Bluetooth, la vida de los procesos — y lo dejan registrado para poder estudiarlo con calma.",
    hero_work: "Ver el trabajo",
    hero_profile: "Perfil",
    hero_github: "GitHub",
    hero_showcase: "Demostraciones",
    hero_informe: "Informe PDF",

    // About
    about_title: "Aprendo desmontando<br>sistemas y reconstruyéndolos.",
    about_lead: "Soy desarrollador autodidacta. Mi forma de entender la tecnología es práctica: tomar un sistema, abrirlo, romperlo y volver a montarlo hasta que el comportamiento tiene sentido.",
    about_p1: "Ese método se convirtió en una colección de herramientas centradas en observar lo que normalmente pasa desapercibido — el entorno inalámbrico, los dispositivos Bluetooth, la vida de los procesos — y en registrarlo para poder estudiarlo con calma.",
    about_p2: "El mismo enfoque lo aplico a la inteligencia artificial y a la ciberseguridad: una red neuronal modular construida desde cero, herramientas de análisis defensivo sobre logs, reconocimiento de activos autorizados y utilidades forenses que leen la estructura real de los ficheros.",
    about_p3: "Entre proyecto y proyecto también edito vídeo y produzco audio. El código y la creatividad digital no son mundos separados para mí.",
    about_system: "Sistema principal",
    about_system_val: "Arch Linux",
    about_focus: "Enfoque",
    about_focus_val: "CLI & TUI · redes · automatización",
    about_languages: "Idiomas",
    about_languages_val: "Python · Rust · C · C++ · JavaScript · Bash",
    about_opensource: "Código abierto",
    about_opensource_val: "github.com/ThorrijaDEV",
    about_identity: "Identidad",
    about_identity_val: "Thorrija_Dev · Thorrija_Live · Thorrija_Games",
    about_form: "Forma",
    about_form_val: "Autodidacta · maker · por curiosidad",

    // Manifesto
    manifesto_quote: "Aprendo rompiendo sistemas, analizándolos y reconstruyéndolos.<br><em>La curiosidad es el motor de todo lo que creo.</em>",
    manifesto_exp: "Experimentación",
    manifesto_analysis: "Análisis",
    manifesto_reconstruction: "Reconstrucción",

    // Projects
    projects_eyebrow: "Trabajo seleccionado",
    projects_title: "Software real,<br>publicado y documentado.",
    projects_lede: "Una selección de las herramientas que mantengo públicamente en GitHub. Cada una nace de un problema propio y llega hasta el final: release, documentación y pruebas.",
    projects_showcase_title: "Demostraciones interactivas",
    projects_showcase_desc: "Modelos computacionales deterministas reconstruidos desde el código fuente de mis proyectos. Cambia parámetros, observa los cálculos y explora la arquitectura.",
    projects_showcase_link: "Abrir showcase",
    projects_pdf_title: "Informe técnico PDF",
    projects_pdf_desc: "Informe exhaustivo (español e inglés) que cubre todos los proyectos descubiertos, con arquitectura, algoritmos, experimentos y limitaciones documentadas.",
    projects_pdf_link_es: "Descargar PDF (ES)",
    projects_pdf_link_en: "Descargar PDF (EN)",
    projects_side_title: "Experimentos y otros trabajos",

    // Project cards
    proj_sigscan: "Sigscan",
    proj_sigscan_desc: "Escáner forense de firmas mágicas en Go: detecta JPEG/PNG/ELF embebidos y los puede tallar a disco. Solo stdlib, binario estático.",
    proj_dnsdrill: "Dnsdrill",
    proj_dnsdrill_desc: "Cliente DNS que construye los paquetes RFC 1035 a mano con struct: punteros de compresión, fallback TCP en truncados, 7 tipos de registro. La caja transparente donde se ve el cable.",
    proj_silicon: "Silicon",
    proj_silicon_desc: "CPU de 8 bits construida desde cero en Rust: ISA propia, ensamblador, desensamblador, VM determinista y pantalla virtual de 32×32. Cero dependencias.",
    proj_forja: "Forja",
    proj_forja_desc: "Compilador en Rust que traduce un lenguaje de tipo u8 a ensamblador SILICON: variables en memoria, ALU sobre el acumulador, saltos por banderas, print_num con división por restas y pruebas end-to-end sobre la VM real.",
    proj_polea: "Polea",
    proj_polea_desc: "Broker de mensajería pub/sub en C++17 sin dependencias: protocolo binario propio con cabecera de 13 bytes, delimitación por longitud y CRC-32, reenvío ordenado con un solo hilo sobre poll(2), colas acotadas con backpressure y cliente CLI para publicar y escuchar temas.",
    proj_cask: "Cask",
    proj_cask_desc: "Almacén content-addressable de solo-append escrito en C puro: formato binario propio con CRC32 + SHA-256, deduplicación por contenido y recuperación automática ante corrupción o truncamiento.",
    proj_neondrift: "Neondrift",
    proj_neondrift_desc: "Endless runner arcade en un solo HTML: física y colisiones propias, chiptune generado con WebAudio (cero assets), partículas y récord local. Juegable desde el portafolio.",
    proj_clickwheel: "Clickwheel + Console",
    proj_clickwheel_desc: "Dos reproductores, una idea: música que se opera. App Android estilo iPod con click-wheel háptico (Compose) que reproduce música local y busca en YouTube Music; y una consola web hi-fi vintage sin dependencias.",
    proj_syspeek: "Syspeek",
    proj_syspeek_desc: "Dashboard TUI de sistema en curses puro — cero dependencias. CPU por núcleo, memoria, tasas de red y top procesos leídos directamente de /proc con parsers hechos a mano.",
    proj_hackdeck: "Hackdeck",
    proj_hackdeck_desc: "Deck offline de utilidades pentest en un solo HTML (~15 KB): base64, hex, JWT, SHA-1/256/512, XOR, César, UUID. Cero red, cero telemetría — todo corre en tu navegador.",
    proj_canarytrap: "Canarytrap",
    proj_canarytrap_desc: "Canary tokens autoalojados: claves AWS falsas, .env señuelo y web bugs que disparan un webhook en el instante en que alguien los toca. Solo stdlib, tus logs nunca salen de tu VPS.",
    proj_loglens: "Loglens",
    proj_loglens_desc: "SIEM de bolsillo: detecta fuerza bruta SSH, enumeración de usuarios, escaneos web y picos de error directamente en tus logs — cero dependencias, 100% offline, informe HTML.",
    proj_reconkit: "Reconkit",
    proj_reconkit_desc: "Multi-tool de reconocimiento para activos autorizados: subdominios vía CT logs, escáner de puertos asíncrono y dir busting — todo en sesiones SQLite con informe HTML unificado.",
    proj_wtm: "Wi-Fi Time Machine",
    proj_wtm_desc: "Una máquina del tiempo para tu entorno inalámbrico: captura el espectro Wi-Fi periódicamente, guárdalo en SQLite y reprodúcelo después para ver cómo cambió tu red a lo largo del tiempo.",
    proj_ble: "BLE Radar",
    proj_ble_desc: "Radar Bluetooth en tiempo real: dispositivos BLE cercanos, niveles de señal RSSI, historial y reproducción de sesiones grabadas.",
    proj_sysledger: "Sysledger",
    proj_sysledger_desc: "El libro mayor de tu máquina Linux: fotografía periódica de paquetes, servicios y parámetros del kernel en SQLite, y diffs entre dos instantes para saber qué cambió y cuándo.",
    proj_portauthority: "Port Authority",
    proj_portauthority_desc: "Un historiador de puertos de red para Linux: registra quién escuchó dónde y cuándo en una bitácora SQLite local, para que puedas preguntar qué pasó mientras no mirabas.",
    proj_pem: "Process Ecosystem Monitor",
    proj_pem_desc: "Convierte la actividad del sistema en un ecosistema vivo: procesos, recursos y cambios de estado en tiempo real desde la terminal.",
    proj_genart: "Terminal Generative Engine",
    proj_genart_desc: "Arte generativo procedimental determinista en terminal: flowfield, plasma y atraxtor con semillas compartibles y búsqueda O(1) de frames.",

    // Skills
    skills_eyebrow: "Capacidades",
    skills_title: "Lo que uso<br>cada semana.",
    skills_lede: "La matemática da el razonamiento y Python da el lenguaje. Todo lo demás que hay en esta página se apoya en esas dos columnas.",
    skills_programming: "Programación",
    skills_systems: "Sistemas y redes",
    skills_creative: "Creatividad digital",

    // Certificates
    certs_eyebrow: "Certificaciones",
    certs_title: "Dos bases<br>que sostienen el resto.",
    certs_lede: "La matemática da el razonamiento y Python da el lenguaje. Todo lo demás que hay en esta página se apoya en esas dos columnas.",
    certs_field_math: "Matemáticas",
    certs_name_math: "Math 101",
    certs_desc_math: "Fundamentos matemáticos: álgebra, funciones y lógica. Es la base para razonar sobre algoritmos, medir complejidad y entender lo que ocurre bajo el capó de la criptografía.",
    certs_field_prog: "Programación",
    certs_name_prog: "Python 1",
    certs_desc_prog: "Introducción a la programación en Python: sintaxis, variables, estructuras de control, funciones y tipos. El primer lenguaje con el que empezó todo lo que hay aquí.",

    // Contact
    contact_eyebrow: "Contacto",
    contact_title: "Hablemos.",
    contact_lede: "¿Tienes un proyecto interesante o una pregunta técnica? Escríbeme y conversamos.",
    contact_email_label: "Correo electrónico",
    contact_email_val: "thorrija.contact@gmail.com",
    contact_github_label: "GitHub",
    contact_twitch_label: "Twitch",
    contact_footer: "© Thorrija",

    // Footer
    footer_showcase: "Demostraciones interactivas:",
    footer_pdf: "Informe PDF:",
    footer_year: "© 2026 Thorrija — Presentación técnica para UMA",
  },

  en: {
    // Navigation
    nav_perfil: "Profile",
    nav_trabajo: "Work",
    nav_capacidades: "Capabilities",
    nav_certificaciones: "Certificates",
    nav_contacto: "Contact",
    nav_showcase: "Demos",
    nav_informe: "PDF Report",

    // Hero
    hero_statement: "I build software that observes,<br>records and explains living systems.",
    hero_lede: "Software developer focused on Linux, AI, and cybersecurity. I design CLI and TUI tools that measure what normally goes unnoticed — the wireless environment, Bluetooth devices, process life — and record it so it can be studied calmly.",
    hero_work: "View work",
    hero_profile: "Profile",
    hero_github: "GitHub",
    hero_showcase: "Interactive demos",
    hero_informe: "PDF report",

    // About
    about_title: "I learn by dismantling<br>systems and rebuilding them.",
    about_lead: "I'm a self-taught developer. My practical approach to understanding technology: take a system, open it, break it, and reassemble it until the behavior makes sense.",
    about_p1: "That method became a collection of tools focused on observing what normally goes unnoticed — the wireless environment, Bluetooth devices, process life — and recording it to study calmly.",
    about_p2: "I apply the same approach to AI and cybersecurity: a modular neural network built from scratch, defensive log analysis tools, authorized asset reconnaissance, and forensic utilities that read the real structure of files.",
    about_p3: "Between projects I also edit video and produce audio. Code and digital creativity are not separate worlds for me.",
    about_system: "Main system",
    about_system_val: "Arch Linux",
    about_focus: "Focus",
    about_focus_val: "CLI & TUI · networks · automation",
    about_languages: "Languages",
    about_languages_val: "Python · Rust · C · C++ · JavaScript · Bash",
    about_opensource: "Open source",
    about_opensource_val: "github.com/ThorrijaDEV",
    about_identity: "Identity",
    about_identity_val: "Thorrija_Dev · Thorrija_Live · Thorrija_Games",
    about_form: "Form",
    about_form_val: "Self-taught · maker · out of curiosity",

    // Manifesto
    manifesto_quote: "I learn by breaking systems, analyzing them, and rebuilding them.<br><em>Curiosity is the engine of everything I create.</em>",
    manifesto_exp: "Experimentation",
    manifesto_analysis: "Analysis",
    manifesto_reconstruction: "Reconstruction",

    // Projects
    projects_eyebrow: "Selected work",
    projects_title: "Real software,<br>published and documented.",
    projects_lede: "A selection of tools I maintain publicly on GitHub. Each one starts from my own problem and goes all the way: release, documentation, and tests.",
    projects_showcase_title: "Interactive demos",
    projects_showcase_desc: "Deterministic computational models reconstructed from my projects' source code. Change parameters, observe the calculations, and explore the architecture.",
    projects_showcase_link: "Open showcase",
    projects_pdf_title: "Technical PDF report",
    projects_pdf_desc: "Exhaustive report (Spanish and English) covering all discovered projects, with architecture, algorithms, experiments, and documented limitations.",
    projects_pdf_link_es: "Download PDF (ES)",
    projects_pdf_link_en: "Download PDF (EN)",
    projects_side_title: "Experiments and other work",

    // Project cards
    proj_sigscan: "Sigscan",
    proj_sigscan_desc: "Forensic magic-byte scanner in Go: detects embedded JPEG/PNG/ELF and can carve them to disk. Stdlib only, static binary.",
    proj_dnsdrill: "Dnsdrill",
    proj_dnsdrill_desc: "DNS client that builds RFC 1035 packets by hand with struct: compression pointers, TCP fallback on truncation, 7 record types. The transparent box where you can see the wire.",
    proj_silicon: "Silicon",
    proj_silicon_desc: "8-bit CPU built from scratch in Rust: own ISA, assembler, disassembler, deterministic VM, 32×32 virtual screen. Zero dependencies.",
    proj_forja: "Forja",
    proj_forja_desc: "Rust compiler that translates a u8-like language to SILICON assembly: memory variables, ALU on the accumulator, flag-based jumps, print_num with division by subtraction, end-to-end tests on real VM.",
    proj_polea: "Polea",
    proj_polea_desc: "Dependency-free pub/sub messaging broker in C++17: own binary protocol with 13-byte header, length-delimited framing and CRC-32, ordered forwarding with a single thread over poll(2), bounded queues with backpressure, CLI client to publish/listen to topics.",
    proj_cask: "Cask",
    proj_cask_desc: "Append-only content-addressable store in pure C: own binary format with CRC32 + SHA-256, content deduplication, automatic recovery from corruption/truncation.",
    proj_neondrift: "Neondrift",
    proj_neondrift_desc: "Arcade endless runner in a single HTML: own physics/collisions, WebAudio chiptune (zero assets), particles, local high score. Playable from the portfolio.",
    proj_clickwheel: "Clickwheel + Console",
    proj_clickwheel_desc: "Two players, one idea: music you operate. iPod-style Android app with haptic click-wheel (Compose) playing local music + YouTube Music search; vintage hi-fi web console, no deps.",
    proj_syspeek: "Syspeek",
    proj_syspeek_desc: "Pure curses system TUI — zero deps. Per-core CPU, memory, network rates, top processes read directly from /proc with hand-written parsers.",
    proj_hackdeck: "Hackdeck",
    proj_hackdeck_desc: "Offline pentest utility deck in single HTML (~15 KB): base64, hex, JWT, SHA-1/256/512, XOR, Caesar, UUID. Zero network, zero telemetry — browser only.",
    proj_canarytrap: "Canarytrap",
    proj_canarytrap_desc: "Self-hosted canary tokens: fake AWS keys, .env decoys, web bugs firing webhook on touch. Stdlib only, logs never leave your VPS.",
    proj_loglens: "Loglens",
    proj_loglens_desc: "Pocket SIEM: detects SSH brute force, user enumeration, web scans, error spikes in logs — zero deps, 100% offline, HTML report.",
    proj_reconkit: "Reconkit",
    proj_reconkit_desc: "Multi-tool reconnaissance for authorized assets: subdomains via CT logs, async port scanner, dir busting — SQLite sessions, unified HTML report.",
    proj_wtm: "Wi-Fi Time Machine",
    proj_wtm_desc: "A time machine for your wireless environment: periodically captures Wi-Fi spectrum, stores in SQLite, replays to see network changes over time.",
    proj_ble: "BLE Radar",
    proj_ble_desc: "Real-time Bluetooth radar: nearby BLE devices, RSSI signal levels, history, recorded session playback.",
    proj_sysledger: "Sysledger",
    proj_sysledger_desc: "Ledger of your Linux machine: periodic snapshots of packages/services/kernel params in SQLite, diffs between instants.",
    proj_portauthority: "Port Authority",
    proj_portauthority_desc: "Network port historian for Linux: records who listened where/when in local SQLite ledger.",
    proj_pem: "Process Ecosystem Monitor",
    proj_pem_desc: "Turns system activity into living ecosystem: processes, resources, state changes in real time from terminal.",
    proj_genart: "Terminal Generative Engine",
    proj_genart_desc: "Deterministic procedural generative art for terminal: flowfield, plasma, attractor with shareable seeds and O(1) frame seeking.",

    // Skills
    skills_eyebrow: "Capabilities",
    skills_title: "What I use<br>every week.",
    skills_lede: "Math provides the reasoning and Python provides the language. Everything else on this page builds on those two pillars.",
    skills_programming: "Programming",
    skills_systems: "Systems and networks",
    skills_creative: "Digital creativity",

    // Certificates
    certs_eyebrow: "Certificates",
    certs_title: "Two foundations<br>that support the rest.",
    certs_lede: "Math provides the reasoning and Python provides the language. Everything else on this page builds on those two pillars.",
    certs_field_math: "Mathematics",
    certs_name_math: "Math 101",
    certs_desc_math: "Mathematical foundations: algebra, functions, logic. Basis for reasoning about algorithms, measuring complexity, understanding crypto internals.",
    certs_field_prog: "Programming",
    certs_name_prog: "Python 1",
    certs_desc_prog: "Intro to programming in Python: syntax, variables, control structures, functions, types. First language everything here started with.",

    // Contact
    contact_eyebrow: "Contact",
    contact_title: "Let's talk.",
    contact_lede: "Interesting project or technical question? Write to me.",
    contact_email_label: "Email",
    contact_email_val: "thorrija.contact@gmail.com",
    contact_github_label: "GitHub",
    contact_twitch_label: "Twitch",
    contact_footer: "© Thorrija",

    // Footer
    footer_showcase: "Interactive demos:",
    footer_pdf: "PDF report:",
    footer_year: "© 2026 Thorrija — Technical presentation for UMA",
  },
};

let currentLang = 'es';

function getStoredLang() {
  try {
    const stored = localStorage.getItem('thorrija-lang');
    if (stored === 'es' || stored === 'en') return stored;
  } catch (e) {}
  return 'es';
}

function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem('thorrija-lang', lang); } catch (e) {}
  document.documentElement.lang = lang;
  applyTranslations();
  updateLangButtons();
}

function applyTranslations() {
  const dict = I18N[currentLang];
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = dict[key];
    if (translation !== undefined) {
      el.innerHTML = translation;
    }
  });
}

function updateLangButtons() {
  const btns = document.querySelectorAll('.lang-btn');
  btns.forEach(btn => {
    if (btn.getAttribute('data-lang') === currentLang) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });
}

function initI18n() {
  const stored = getStoredLang();
  setLang(stored);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      setLang(btn.getAttribute('data-lang'));
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
