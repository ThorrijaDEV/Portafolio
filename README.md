# Portfolio Thorrija - Versión HTML Pura
https://thorrijadev.github.io/Portafolio/
Este es el portfolio completo de Thorrija convertido a **HTML, CSS y JavaScript vanilla** (sin frameworks).

## 📁 Archivos incluidos

```
html-version/
├── index.html          # Página principal del portfolio
├── admin.html          # Panel de administración
├── styles.css          # Estilos globales
├── admin.css           # Estilos específicos del admin
├── main.js             # JavaScript de la página principal
├── admin.js            # JavaScript del panel admin
└── README.md           # Este archivo
```

## 🚀 Cómo usar

### Opción 1: Servidor local simple (desarrollo)

Si tienes Python instalado:

```bash
# En la carpeta html-version/
python3 -m http.server 8000
```

Luego abre: `http://localhost:8000`

### Opción 2: Live Server (VSCode)

1. Instala la extensión "Live Server" en VSCode
2. Click derecho en `index.html` → "Open with Live Server"

### Opción 3: Subir a hosting

Puedes subir estos archivos a cualquier hosting estático:
- **Netlify**: Arrastra la carpeta a netlify.com/drop
- **Vercel**: Conecta con GitHub o sube directamente
- **GitHub Pages**: Sube a un repositorio y activa GitHub Pages
- **Hosting tradicional**: Sube vía FTP/SFTP

## ⚙️ Configuración del Backend

**IMPORTANTE**: El código HTML está configurado para usar el backend en el mismo dominio.

### En desarrollo local:

1. El backend debe estar corriendo en `http://localhost:8001`
2. Los archivos HTML usan `window.location.origin` para detectar el backend automáticamente

### En producción:

Si tu backend está en un dominio diferente, edita en:

**main.js** y **admin.js**:
```javascript
// Cambiar esta línea:
const BACKEND_URL = window.location.origin;

// Por tu URL de backend:
const BACKEND_URL = 'https://tu-backend.com';
```


## 📋 Funcionalidades

### Página Principal (index.html)
✅ 7 secciones completas
✅ Navegación suave entre secciones
✅ Header fijo con efecto scroll
✅ Menú móvil responsive
✅ Formulario de contacto funcional (conectado al backend)
✅ Animaciones y efectos hover
✅ Diseño responsive


## 🎨 Personalización

### Cambiar colores

Edita `styles.css` y busca los colores principales:
- Púrpura: `#a855f7`, `#9333ea`
- Azul: `#3b82f6`, `#60a5fa`

### Cambiar fuentes

En `index.html` y `admin.html`, modifica el link de Google Fonts y actualiza en `styles.css`:
```css
body {
    font-family: 'TuFuente', sans-serif;
}
```

### Modificar contenido

Todo el contenido está directamente en `index.html`:
- Textos
- Proyectos
- Habilidades
- Enlaces sociales

## 🔗 URLs importantes

- **GitHub**: https://github.com/ThorrijaDEV
- **Twitch**: https://twitch.tv/thorrija_live
- **Email**: thorrija.contact@gmail.com

## 🐛 Solución de problemas

### El formulario no envía mensajes

1. Verifica que el backend esté corriendo
2. Abre la consola del navegador (F12) y busca errores
3. Comprueba que la URL del backend sea correcta
4. Verifica que el backend tenga CORS habilitado

### El admin no carga mensajes

1. Verifica las credenciales
2. Comprueba la URL del backend
3. Mira la consola para errores de autenticación

### Estilos no se ven bien

1. Asegúrate de que `styles.css` y `admin.css` estén en la misma carpeta
2. Limpia la caché del navegador (Ctrl+F5)

## 📱 Compatibilidad

- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Responsive (móvil, tablet, desktop)

## 📝 Notas técnicas

- No usa jQuery ni ninguna librería externa
- JavaScript vanilla (ES6+)
- CSS puro con variables CSS
- Fetch API para las peticiones al backend
- LocalStorage para el token de admin
- Intersection Observer para animaciones
- SVG inline para los iconos

## 🚢 Despliegue recomendado

1. **Frontend (estos archivos HTML)**: Netlify, Vercel, GitHub Pages
2. **Backend (FastAPI)**: Railway, Render, Fly.io, o tu servidor propio

Asegúrate de configurar las variables de entorno y CORS en el backend para que acepte peticiones desde tu dominio de frontend.

---

**Desarrollado para Thorrija** © 2025
