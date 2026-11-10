/**
 * Thorrija Portfolio — Bilingual i18n (English default / Spanish)
 *
 * Translations applied via data-i18n attributes. Language persisted in
 * localStorage; default is English ('en') for international visitors.
 * Resolution: ?lang=en|es (strict whitelist) > localStorage 'thorrija-lang' > 'en'.
 */

const I18N = {
  en: {
    // Navigation
    nav_perfil: "Profile",
    nav_trabajo: "Work",
    nav_capacidades: "Capabilities",
    nav_certificaciones: "Certifications",
    nav_contacto: "Contact",

    // Hero
    hero_statement: "I build software that observes,<br>records, and explains living systems.",
    hero_lede: "Software developer focused on Linux, artificial intelligence, and cybersecurity. I design CLI and TUI tools that measure what normally goes unnoticed — the wireless environment, Bluetooth devices, process life — and record it so it can be studied calmly.",
    hero_work: "View the work",
    hero_profile: "Profile",

    // Hero foot
    hero_foot_stack1: "Arch Linux · CLI & TUI · Networks",
    hero_foot_stack2: "Python · Rust · C · C++ · Go",
    scroll_cue: "Scroll",

    // About
    about_title: "I learn by taking systems apart<br>and rebuilding them.",
    about_lead: "I'm a self-taught developer. My practical approach to understanding technology: take a system, open it, break it, and put it back together until the behavior makes sense.",
    about_p1: "That method became a collection of tools focused on observing what normally goes unnoticed — the wireless environment, Bluetooth devices, process life — and recording it so it can be studied calmly.",
    about_p2: "I apply the same approach to AI and cybersecurity: a modular neural network built from scratch, defensive log analysis tools, authorized asset discovery, and forensic utilities that read the real structure of files.",
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
    about_form: "Background",
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
    projects_showcase_desc: "Deterministic computational models reconstructed from source code. Change parameters, observe the calculations, explore the architecture.",
    projects_showcase_link: "Open showcase",
    projects_side_title: "Experiments and other work",

    // Project cards (EN descriptions live in data-i18n spans)
    proj_sigscan: "Sigscan",
    proj_sigscan_desc: "Forensic magic-byte scanner in Go: detects embedded JPEG/PNG/ELF and can carve them to disk. Stdlib only, static binary.",
    proj_dnsdrill: "Dnsdrill",
    proj_dnsdrill_desc: "DNS client that builds RFC 1035 packets by hand with struct: compression pointers, TCP fallback on truncation, 7 record types. The transparent box where you can see the wire.",
    proj_silicon: "Silicon",
    proj_silicon_desc: "8-bit CPU built from scratch in Rust: own ISA, assembler, disassembler, deterministic VM, 32×32 virtual screen. Zero dependencies.",
    proj_forja: "Forja",
    proj_forja_desc: "Rust compiler that translates a u8-like language to SILICON assembly: memory variables, ALU on the accumulator, flag-based jumps, print_num with division by subtraction, end-to-end tests on real VM.",
    proj_polea: "Polea",
    proj_polea_desc: "Dependency-free pub/sub messaging broker in C++17: own binary protocol with 13-byte header, length-delimited framing and CRC-32, ordered forwarding with a single thread over poll(2), bounded queues with backpressure, CLI client to publish and listen to topics.",
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
    proj_wtm_desc: "A time machine for your wireless environment: periodically captures the Wi-Fi spectrum, stores it in SQLite, and replays it to see how your network changed over time.",
    proj_ble: "BLE Radar",
    proj_ble_desc: "Real-time Bluetooth radar: nearby BLE devices, RSSI signal levels, history, recorded session playback.",
    proj_sysledger: "Sysledger",
    proj_sysledger_desc: "Ledger of your Linux machine: periodic snapshots of packages/services/kernel parameters in SQLite, diffs between instants.",
    proj_portauthority: "Port Authority",
    proj_portauthority_desc: "Network port historian for Linux: records who listened where/when in local SQLite ledger.",
    proj_pem: "Process Ecosystem Monitor",
    proj_pem_desc: "Turns system activity into a living ecosystem: processes, resources, state changes in real time from terminal.",

    // Side works
    side_work_1_title: "Modular Neural Network",
    side_work_1_desc: "Neural network architecture built from scratch in Python with a collaborator, extensible via plugins.",
    side_work_2_title: "Personal AI System",
    side_work_2_desc: "In development: automation of digital tasks and personal workflows.",
    side_work_3_title: "Personal Automations",
    side_work_3_desc: "Small scripts and tools that solve daily frictions on my Linux desktop.",
    side_work_4_title: "Video Editing",
    side_work_4_desc: "Productions with over 20,000 views across CapCut and DaVinci Resolve.",
    side_work_5_title: "OSINT Experience",
    side_work_5_desc: "Exploration of cybersecurity tools in controlled environments.",

    // Skills
    skills_eyebrow: "Capabilities",
    skills_title: "What I use<br>every week.",
    skills_lede: "Math provides the reasoning and Python provides the language. Everything else on this page builds on those two pillars.",
    skills_programming: "Programming",
    skills_systems: "Systems and networks",
    skills_creative: "Digital creativity",

    // Certificates
    certs_eyebrow: "Certifications",
    certs_title: "Two foundations<br>that support everything else.",
    certs_lede: "Math provides the reasoning and Python provides the language. Everything else on this page builds on those two pillars.",
    certs_field_math: "Mathematics",
    certs_name_math: "Math 101",
    certs_desc_math: "Mathematical foundations: algebra, functions, and logic. The basis for reasoning about algorithms, measuring complexity, and understanding cryptography internals.",
    certs_field_prog: "Programming",
    certs_name_prog: "Python 1",
    certs_desc_prog: "Introduction to programming in Python: syntax, variables, control structures, functions, and types. The first language everything here started with.",
    cred_visual_open: "Open file",

    // Contact
    contact_eyebrow: "Contact",
    contact_title: "Let's talk.",
    contact_lede: "Interesting project or technical question? Write to me.",
    contact_hint: "One address, no forms, no intermediaries.",
    copy_email: "Copy address",

    // Footer
    footer_brand_line: "Systems software, artificial intelligence and cybersecurity.",
    footer_nav_perfil: "Profile",
    footer_nav_trabajo: "Work",
    footer_nav_capacidades: "Capabilities",
    footer_nav_certificaciones: "Certifications",
    footer_nav_contacto: "Contact",
    footer_meta: "© <span id=\"year\">2026</span> Thorrija · Rubén N.",

    // Site meta
    meta_title: "Thorrija — Engineering Portfolio",
    meta_desc: "Engineering portfolio of Thorrija (Rubén N.): deterministic computational models, CLI/TUI tools, systems and cybersecurity software. Interactive demos and technical report.",
    og_title: "Thorrija — Engineering Portfolio",
    og_desc: "Engineering portfolio of Thorrija (Rubén N.): deterministic computational models, CLI/TUI tools, systems and cybersecurity software.",
    og_locale: "en_US",

    // UI controls
    lang_label_en: "EN",
    lang_label_es: "ES",
    menu_open: "Open menu",
    menu_close: "Close menu",
    toast_copied: "Address copied",
    toast_copy_failed: "Could not copy",
  },

  es: {
    // Navigation
    nav_perfil: "Perfil",
    nav_trabajo: "Trabajo",
    nav_capacidades: "Capacidades",
    nav_certificaciones: "Certificaciones",
    nav_contacto: "Contacto",

    // Hero
    hero_statement: "Construyo software que observa,<br>registra y explica sistemas vivos.",
    hero_lede: "Desarrollador de software centrado en Linux, inteligencia artificial y ciberseguridad. Diseño herramientas de línea de comandos y TUI que miden lo que normalmente pasa desapercibido — el entorno inalámbrico, los dispositivos Bluetooth, la vida de los procesos — y lo dejan registrado para poder estudiarlo con calma.",
    hero_work: "Ver el trabajo",
    hero_profile: "Perfil",

    // Hero foot
    hero_foot_stack1: "Arch Linux · CLI & TUI · Redes",
    hero_foot_stack2: "Python · Rust · C · C++ · Go",
    scroll_cue: "Desplazar",

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
    projects_side_title: "Experimentos y otros trabajos",

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

    // Side works
    side_work_1_title: "Red Neuronal Modular",
    side_work_1_desc: "Arquitectura de red neuronal construida desde cero en Python junto a un colaborador, extensible mediante plugins.",
    side_work_2_title: "Sistema de IA personal",
    side_work_2_desc: "En desarrollo: automatización de tareas digitales y flujos de trabajo propios.",
    side_work_3_title: "Automatizaciones personales",
    side_work_3_desc: "Scripts y herramientas pequeñas que resuelven fricciones diarias en mi escritorio Linux.",
    side_work_4_title: "Edición de vídeo",
    side_work_4_desc: "Producciones con más de 20.000 visualizaciones entre CapCut y DaVinci Resolve.",
    side_work_5_title: "Experiencia OSINT",
    side_work_5_desc: "Exploración de herramientas de ciberseguridad en entornos controlados.",

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
    cred_visual_open: "Abrir archivo",

    // Contact
    contact_eyebrow: "Contacto",
    contact_title: "Hablemos.",
    contact_lede: "¿Tienes un proyecto interesante o una pregunta técnica? Escríbeme y conversamos.",
    contact_hint: "Una sola dirección, sin formularios ni intermediarios.",
    copy_email: "Copiar dirección",

    // Footer
    footer_brand_line: "Software de sistemas, inteligencia artificial y ciberseguridad.",
    footer_nav_perfil: "Perfil",
    footer_nav_trabajo: "Trabajo",
    footer_nav_capacidades: "Capacidades",
    footer_nav_certificaciones: "Certificaciones",
    footer_nav_contacto: "Contacto",
    footer_meta: "© <span id=\"year\">2026</span> Thorrija · Rubén N.",

    // Site meta
    meta_title: "Thorrija — Portafolio de Ingeniería",
    meta_desc: "Portafolio de ingeniería de Thorrija (Rubén N.): modelos computacionales deterministas, herramientas CLI/TUI, software de sistemas y ciberseguridad. Demostraciones interactivas e informe técnico.",
    og_title: "Thorrija — Portafolio de Ingeniería",
    og_desc: "Portafolio de ingeniería de Thorrija (Rubén N.): modelos computacionales deterministas, herramientas CLI/TUI, sistemas y ciberseguridad.",
    og_locale: "es_ES",

    // UI controls
    lang_label_en: "EN",
    lang_label_es: "ES",
    menu_open: "Abrir menú",
    menu_close: "Cerrar menú",
    toast_copied: "Dirección copiada",
    toast_copy_failed: "No se pudo copiar",
  },
};

let currentLang = 'en';

function getStoredLang() {
  try {
    const stored = localStorage.getItem('thorrija-lang');
    if (stored === 'es' || stored === 'en') return stored;
  } catch (e) {}
  return 'en';
}

function resolveLang() {
  const params = new URLSearchParams(location.search);
  const raw = params.get('lang');
  if (raw === 'en' || raw === 'es') return raw;
  return getStoredLang();
}

function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem('thorrija-lang', lang); } catch (e) {}
  document.documentElement.lang = lang;

  // Page title + meta description
  document.title = I18N[currentLang].meta_title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', I18N[currentLang].meta_desc);

  // Open Graph / Twitter
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', I18N[currentLang].og_title);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', I18N[currentLang].og_desc);
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', I18N[currentLang].og_locale);
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', I18N[currentLang].og_title);
  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', I18N[currentLang].og_desc);

  applyTranslations();
  updateLangButtons();
  document.dispatchEvent(new Event('thorrija:lang'));
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
  // Alt-text images
  document.querySelectorAll('img[data-i18n-alt]').forEach(img => {
    const key = img.getAttribute('data-i18n-alt');
    const translation = dict[key];
    if (translation !== undefined) img.setAttribute('alt', translation);
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
  const lang = resolveLang();
  setLang(lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      setLang(btn.getAttribute('data-lang'));
    });
  });
}

// Expose for main.js (toasts / menu labels)
window.THORRIJA_I18N = {
  get: () => I18N[currentLang],
  t: (k) => I18N[currentLang][k] || k,
  currentLang: () => currentLang,
  onLangChange: (cb) => document.addEventListener('thorrija:lang', cb),
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
