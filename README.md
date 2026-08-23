# Portfolio de Thorrija

https://thorrijadev.github.io/Portafolio/

Portfolio personal construido con **HTML, CSS y JavaScript vanilla** — sin frameworks, sin dependencias de runtime, sin imágenes externas.

## Diseño

Lenguaje visual minimalista inspirado en el diseño editorial premium: paleta neutra (blanco, negro, grises) con un único color de acento, tipografía Inter con jerarquía marcada, mucho espacio en blanco y superficies con bordes sutiles y sombras suaves.

- **Temas claro y oscuro** completos, con detección automática de `prefers-color-scheme`, toggle manual persistente en `localStorage` y script inline anti-flash.
- **Animaciones contenidas**: revelado al hacer scroll con `IntersectionObserver` y easing natural (`cubic-bezier(0.16, 1, 0.3, 1)`), microinteracciones en hover y respeto total a `prefers-reduced-motion`.
- **Progressive enhancement**: sin JavaScript todo el contenido es visible; las animaciones solo se activan si hay JS.
- **Responsive** verificado sin overflow horizontal en desktop, laptop, tablet y móvil.

## Estructura

```
├── index.html        # Página principal
├── admin.html        # Panel de administración de mensajes
├── styles.css        # Design tokens + estilos del sitio
├── admin.css         # Estilos del panel admin
├── main.js           # Tema, navegación, animaciones y formulario
├── admin.js          # Login y listado de mensajes
├── robots.txt
├── sitemap.xml
└── assets/           # Capturas de proyectos y favicon
```

## Desarrollo local

```bash
python3 -m http.server 8081
# http://localhost:8081
```

## Backend del formulario

El formulario de contacto envía `POST` a la API desplegada en Render:

```js
const BACKEND_URL = 'https://portafolio-backend-uq8p.onrender.com';
```

Endpoints utilizados:

| Endpoint | Método | Uso |
|---|---|---|
| `/api/contact` | POST | Enviar mensaje de contacto |
| `/api/admin/login` | POST | Autenticación del panel |
| `/api/admin/messages` | GET | Listar mensajes (Bearer token) |

## Despliegue

GitHub Pages desde la rama `main`. Cualquier push a `main` publica automáticamente.

## Auditoría

Comprobaciones realizadas antes de publicar:

- Sin overflow horizontal a 1440 / 1024 / 768 / 375 px
- Sin errores de consola JavaScript
- Contraste AA en texto principal y secundario
- Navegación por teclado, skip-link y estados de foco visibles
- `robots.txt`, `sitemap.xml`, Open Graph, canonical y favicon SVG

## Enlaces

- **GitHub**: https://github.com/ThorrijaDEV
- **Twitch**: https://twitch.tv/thorrija_live
- **Email**: thorrija.contact@gmail.com

---

© Thorrija
