/* ==========================================================================
   THORRIJA — interacciones
   Sin dependencias. Todo degradea con elegancia si el JS no está disponible.
   ========================================================================== */

(function () {
    'use strict';

    var root = document.documentElement;
    var motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    var prefersMotion = !motionQuery.matches;

    /* ---------------------------------------------------------------- Tema */

    var themeToggle = document.getElementById('themeToggle');
    var themeMeta = document.querySelector('meta[name="theme-color"]');

    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        if (themeMeta) {
            themeMeta.setAttribute('content', theme === 'dark' ? '#08090a' : '#f6f4f0');
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            try {
                localStorage.setItem('theme', next);
            } catch (e) {
                /* almacenamiento no disponible: el tema dura esta sesión */
            }
        });
    }

    /* ------------------------------------------------------------- Header */

    var header = document.getElementById('header');
    var hero = document.querySelector('.hero');

    function onScroll() {
        var y = window.scrollY || window.pageYOffset;

        if (header) {
            header.classList.toggle('scrolled', y > 16);
        }

        if (hero && prefersMotion && y < window.innerHeight * 1.2) {
            hero.style.setProperty('--hero-shift', (y * 0.14).toFixed(2) + 'px');
        }
    }

    var ticking = false;

    function requestScroll() {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(function () {
            onScroll();
            ticking = false;
        });
    }

    window.addEventListener('scroll', requestScroll, { passive: true });
    window.addEventListener('resize', requestScroll, { passive: true });
    onScroll();

    /* -------------------------------------------------------- Menú móvil */

    var menuBtn = document.querySelector('.menu-btn');
    var mobileNav = document.getElementById('mobileNav');

    function t(key, fallback) {
        var i18n = window.THORRIJA_I18N;
        return i18n && typeof i18n.t === 'function' ? i18n.t(key) : fallback;
    }

    function setMenu(open) {
        if (!menuBtn || !mobileNav) return;
        menuBtn.setAttribute('aria-expanded', String(open));
        menuBtn.setAttribute('aria-label', open ? t('menu_close', 'Cerrar menú') : t('menu_open', 'Abrir menú'));
        mobileNav.classList.toggle('open', open);
        document.documentElement.style.overflow = open ? 'hidden' : '';

        // El cierre se anima durante 0.45s; sin `inert` los enlaces siguen
        // siendo tabulables mientras el panel se desvanece.
        if ('inert' in HTMLElement.prototype) {
            if (open) {
                mobileNav.removeAttribute('inert');
            } else {
                mobileNav.setAttribute('inert', '');
            }
        }
        mobileNav.setAttribute('aria-hidden', String(!open));
    }

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', function () {
            setMenu(mobileNav.classList.contains('open') === false);
        });

        mobileNav.addEventListener('click', function (e) {
            if (e.target.closest('a')) setMenu(false);
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
                setMenu(false);
                menuBtn.focus();
            }
        });

        window.matchMedia('(min-width: 900px)').addEventListener('change', function (e) {
            if (e.matches) setMenu(false);
        });
    }

    /* ------------------------------------------------- Marca de sección (nav) */

    var navLinks = Array.prototype.slice.call(document.querySelectorAll('.desktop-nav a'));
    var sections = navLinks
        .map(function (link) {
            return document.querySelector(link.getAttribute('href'));
        })
        .filter(Boolean);

    if (sections.length && 'IntersectionObserver' in window) {
        var visible = new Map();

        var spy = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        visible.set(entry.target.id, entry.intersectionRatio);
                    } else {
                        visible.delete(entry.target.id);
                    }
                });

                var currentId = null;
                var best = -1;
                visible.forEach(function (ratio, id) {
                    if (ratio > best) {
                        best = ratio;
                        currentId = id;
                    }
                });

                navLinks.forEach(function (link) {
                    var isActive = currentId !== null && link.getAttribute('href') === '#' + currentId;
                    link.classList.toggle('is-active', isActive);
                    if (isActive) {
                        link.setAttribute('aria-current', 'true');
                    } else {
                        link.removeAttribute('aria-current');
                    }
                });
            },
            { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
        );

        sections.forEach(function (section) {
            spy.observe(section);
        });
    }

    /* ------------------------------------------------------- Reveal on scroll */

    var revealEls = document.querySelectorAll('.reveal');

    if (!prefersMotion || !('IntersectionObserver' in window)) {
        revealEls.forEach(function (el) {
            el.classList.add('visible');
        });
    } else {
        var reveal = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
        );

        revealEls.forEach(function (el) {
            reveal.observe(el);
        });
    }

    /* ------------------------------------------------- Foco del cursor (hero) */

    var spotlight = document.getElementById('heroSpotlight');

    if (spotlight && finePointer.matches) {
        hero.addEventListener(
            'pointermove',
            function (e) {
                if (!prefersMotion) return;
                var rect = hero.getBoundingClientRect();
                spotlight.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
                spotlight.style.setProperty('--my', (e.clientY - rect.top) + 'px');
            },
            { passive: true }
        );
    }

    /* ------------------------------------------------------ Copiar el email */

    var copyBtn = document.getElementById('copyEmail');
    var toast = document.getElementById('toast');
    var toastMessage = document.getElementById('toastMessage');
    var toastTimer;

    function showToast(message) {
        if (!toast || !toastMessage) return;
        toastMessage.textContent = message;
        toast.classList.remove('hidden');
        window.clearTimeout(toastTimer);
        toastTimer = window.setTimeout(function () {
            toast.classList.add('hidden');
        }, 2600);
    }

    if (copyBtn) {
        var labelEl = copyBtn.querySelector('.copy-btn-label');

        function refreshLabel() {
            originalLabel = copyBtn.textContent.trim();
        }

        var originalLabel = copyBtn.textContent.trim();

        // Re-capture label when language changes (copyBtn uses data-i18n)
        document.addEventListener('thorrija:lang', refreshLabel);

        copyBtn.addEventListener('click', function () {
            var value = copyBtn.getAttribute('data-copy') || '';

            function confirm() {
                if (labelEl) labelEl.textContent = t('toast_copied', 'Dirección copiada');
                showToast(t('toast_copied', 'Dirección copiada') + ' al portapapeles');
                window.clearTimeout(confirm.timer);
                confirm.timer = window.setTimeout(function () {
                    labelEl.textContent = originalLabel;
                }, 2400);
            }

            function fallback() {
                showToast(t('toast_copy_failed', 'No se pudo copiar') + ': ' + value);
            }

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(value).then(confirm).catch(fallback);
            } else {
                fallback();
            }
        });
    }

    /* ------------------------------------------------------------ Año footer */

    /* applyTranslations() reescribe el innerHTML del pie, así que el nodo
       #year se recrea en cada cambio de idioma: hay que volver a buscarlo. */
    function setFooterYear() {
        var year = document.getElementById('year');
        if (year) {
            year.textContent = String(new Date().getFullYear());
        }
    }

    setFooterYear();
    document.addEventListener('thorrija:lang', setFooterYear);
})();