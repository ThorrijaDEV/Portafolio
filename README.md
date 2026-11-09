# Portafolio de Thorrija

Sitio estático de una sola página, publicado con GitHub Pages en
<https://thorrijadev.github.io/Portafolio/>.

Sin build, sin dependencias y sin framework: HTML, CSS y JavaScript
planos, de modo que el repositorio se despliega tal cual.

## Estructura

```
index.html          página principal
styles.css          sistema de diseño y layout
main.js             tema, navegación, animaciones de entrada, copiado de email
admin.html          panel de mensajes (sin enlace público, robots lo bloquea)
admin.css           estilos del panel
admin.js            lógica del panel
assets/             capturas de los proyectos, iconos y tarjetas sociales
assets/certs/       documentos de las certificaciones
robots.txt          bloquea admin.html
sitemap.xml
```

## Decisiones de diseño

- Tema oscuro por defecto, con conmutador a claro. La preferencia se guarda
  en `localStorage` y se aplica antes del primer pintado para evitar el
  parpadeo.
- Los tres niveles de texto superan 4.5:1 de contraste sobre el fondo en
  ambos temas, y en puntero grueso todas las áreas interactivas miden al
  menos 44×44 px.
- `prefers-reduced-motion` desactiva las animaciones de entrada.
- Las animaciones de scroll usan `IntersectionObserver`, que degrada a
  contenido visible si el JavaScript no se ejecuta.

## Certificaciones

- **Math 101**: `assets/certs/math-101.png`, con variante `.webp` servida
  mediante `<picture>`.
- **Python 1**: pendiente de subir el documento original. En `index.html`
  hay un bloque comentado con el marcado exacto que hay que restaurar;
  basta con guardar el archivo en `assets/certs/`.

## Enlaces

- **GitHub**: <https://github.com/ThorrijaDEV>
- **Twitch**: <https://twitch.tv/thorrija_live>
- **Email**: thorrija.contact@gmail.com

---

© Thorrija
