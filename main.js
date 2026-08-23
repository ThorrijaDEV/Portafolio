const BACKEND_URL = 'https://portafolio-backend-uq8p.onrender.com';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Theme toggle

function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
        localStorage.setItem('theme', next);
    } catch (e) {}
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    let stored = null;
    try {
        stored = localStorage.getItem('theme');
    } catch (err) {}
    if (!stored) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
});

// Header state

const header = document.getElementById('header');

function updateHeader() {
    header.classList.toggle('scrolled', window.scrollY > 24);
}

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// Mobile menu

const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.getElementById('mobileNav');

function setMenu(open) {
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    mobileNav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
}

function toggleMenu() {
    setMenu(!mobileNav.classList.contains('open'));
}

mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        setMenu(false);
        menuBtn.focus();
    }
});

// Smooth anchors

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        }
    });
});

function scrollToTop(e) {
    if (e) e.preventDefault();
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
}

// Scroll reveal

const revealEls = document.querySelectorAll('.reveal');

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('visible'));
} else {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
}

// Footer year

document.getElementById('year').textContent = new Date().getFullYear();

// Toast

let toastTimer;

function showToast(title, message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastTitle').textContent = title;
    document.getElementById('toastMessage').textContent = message;
    toast.classList.remove('hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.add('hidden'), 5000);
}

// Contact form

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const submitBtnText = document.getElementById('submitBtnText');
    const originalText = submitBtnText.textContent;

    submitBtn.disabled = true;
    submitBtnText.textContent = 'Enviando…';

    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        message: document.getElementById('message').value.trim()
    };

    try {
        const response = await fetch(`${BACKEND_URL}/api/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok && data.success) {
            showToast('Mensaje enviado', data.message || 'Gracias por escribir.');
            contactForm.reset();
        } else {
            throw new Error(data.detail || 'No se pudo enviar el mensaje');
        }
    } catch (error) {
        showToast('Error', error.message || 'Hubo un problema al enviar el mensaje');
    } finally {
        submitBtn.disabled = false;
        submitBtnText.textContent = originalText;
    }
});
