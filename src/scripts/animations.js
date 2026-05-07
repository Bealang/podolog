/**
 * Zdrowe Stopy – Global Animations
 * 1. Dynamic Navbar (transparent → solid on scroll)
 * 2. Scroll-triggered reveal animations (IntersectionObserver)
 * 3. Page-load entrance animations (staggered)
 * Footer elements are excluded from all animations.
 */
(function () {
    'use strict';

    // ─── 1. DYNAMIC NAVBAR ───────────────────────────────────────────
    // CSS already sets nav.fixed to transparent by default.
    // We just toggle the .nav--scrolled class on scroll.
    const nav = document.querySelector('nav.fixed');
    if (nav) {
        let navScrolled = false;
        function handleNavScroll() {
            const scrollY = window.scrollY || window.pageYOffset;
            const threshold = 60;
            if (scrollY > threshold && !navScrolled) {
                navScrolled = true;
                nav.classList.add('nav--scrolled');
            } else if (scrollY <= threshold && navScrolled) {
                navScrolled = false;
                nav.classList.remove('nav--scrolled');
            }
        }
        handleNavScroll();
        window.addEventListener('scroll', handleNavScroll, { passive: true });
    }

    // ─── 2. SCROLL-TRIGGERED REVEAL ──────────────────────────────────
    // We animate: sections, cards, grid children, images, headings
    // Excluded: footer, nav, mobile-menu, and already-animated elements

    function getAnimatableElements() {
        const selectors = [
            'main section',
            'main .glass-surface',
            'main .grid > div',
            'main .grid > a',
            'main h1',
            'main h2',
            'main img:not(nav img)',
            'main .space-y-4',
            'main .space-y-6',
            'main .space-y-8',
            'main ul',
            'main .bg-white',
            'main .bg-slate-50',
            'main .border-l-4'
        ];

        const all = document.querySelectorAll(selectors.join(','));
        const results = [];
        all.forEach(function (el) {
            // Skip footer, nav, mobile-menu, and their children
            if (el.closest('footer') || el.closest('nav') || el.closest('#mobile-menu')) return;
            // Skip hero sections to avoid breaking background-attachment: fixed
            if (el.querySelector('.hero-desktop') || el.querySelector('.hero-mobile')) return;
            // Skip elements that are direct children of another animatable (to avoid double animation)
            results.push(el);
        });
        return results;
    }

    // Determine animation type based on element position / type
    function getAnimationType(el) {
        // Line-grow is special
        if (el.classList.contains('line-grow')) return 'line-grow';

        const rect = el.getBoundingClientRect();
        const viewportCenter = window.innerWidth / 2;
        const elCenter = rect.left + rect.width / 2;

        // Headings get fade-up or fade-right
        if (el.tagName === 'H1' || el.tagName === 'H2') {
            return el.classList.contains('text-center') ? 'fade-up' : 'fade-right';
        }

        // Images get zoom-in
        if (el.tagName === 'IMG' || el.classList.contains('status-badge')) return 'zoom-in';

        // Sections get fade-up
        if (el.tagName === 'SECTION') return 'fade-up';

        // Grid cards alternate sides for visual interest
        if (el.parentElement && (el.parentElement.classList.contains('grid') || el.classList.contains('glass-surface'))) {
            if (elCenter < viewportCenter - 50) return 'fade-right';
            if (elCenter > viewportCenter + 50) return 'fade-left';
        }

        return 'fade-up';
    }

    function applyScrollReveal() {
        const elements = getAnimatableElements();

        elements.forEach(function (el, i) {
            // Don't re-add if already has scroll-reveal class
            if (el.classList.contains('scroll-reveal')) return;

            const animType = getAnimationType(el);
            el.classList.add('scroll-reveal', animType);

            // Add base delay of 0.2s to everything as requested
            let delay = 0.2;

            // Stagger delay for grid siblings
            const parent = el.parentElement;
            if (parent) {
                const siblings = Array.from(parent.children).filter(function (c) {
                    return elements.indexOf(c) !== -1;
                });
                const sibIndex = siblings.indexOf(el);
                if (sibIndex > 0 && siblings.length > 1) {
                    delay += (sibIndex * 0.1);
                }
            }
            el.style.transitionDelay = delay + 's';
        });

        // IntersectionObserver for scroll reveal
        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('scroll-reveal--visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.01,
                rootMargin: '0px 0px -10px 0px'
            });

            document.querySelectorAll('.scroll-reveal').forEach(function (el) {
                observer.observe(el);
            });
        } else {
            // Fallback: just show everything
            document.querySelectorAll('.scroll-reveal').forEach(function (el) {
                el.classList.add('scroll-reveal--visible');
            });
        }
    }

    // ─── 3. PAGE LOAD ENTRANCE ───────────────────────────────────────
    function runPageLoadAnimations() {
        // Animate elements that are already in viewport on load
        var heroElements = document.querySelectorAll(
            'main > section:first-child h1, main > section:first-child p, main > section:first-child .btn-reserve, main > section:first-child .hero-btn-secondary, main > section:first-child img, main > section:first-child .status-badge, main > .relative > section:first-child h1, .page-enter'
        );

        heroElements.forEach(function (el, i) {
            if (el.closest('footer') || el.closest('nav') || el.closest('#mobile-menu')) return;
            el.classList.add('page-enter');
            // Max 200ms base delay as requested, plus small stagger
            el.style.animationDelay = (0.2 + i * 0.06) + 's';
        });
    }

    // ─── 4. STICKY MOBILE BUTTON AUTO-HIDE ─────────────────────────────
    function initStickyButton() {
        const stickyBtn = document.getElementById('sticky-mobile-reserve');
        if (!stickyBtn) return;

        function handleStickyScroll() {
            const scrollY = window.scrollY || window.pageYOffset;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Hide when close to bottom (footer area)
            if (scrollY + windowHeight >= documentHeight - 120) {
                stickyBtn.classList.add('translate-y-full', 'opacity-0');
                stickyBtn.classList.remove('translate-y-0', 'opacity-100');
            } else {
                stickyBtn.classList.remove('translate-y-full', 'opacity-0');
                stickyBtn.classList.add('translate-y-0', 'opacity-100');
            }
        }

        window.addEventListener('scroll', handleStickyScroll, { passive: true });
        handleStickyScroll();
    }

    // ─── INIT ────────────────────────────────────────────────────────
    // Wait for DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            runPageLoadAnimations();
            applyScrollReveal();
            initStickyButton();
        });
    } else {
        runPageLoadAnimations();
        applyScrollReveal();
        initStickyButton();
    }
})();
