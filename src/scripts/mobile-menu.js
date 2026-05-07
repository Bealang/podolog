(function () {
    const btn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('mobile-menu-close');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !closeBtn || !menu) return;

    const bars = document.querySelectorAll('.hamburger-bar');
    const links = menu.querySelectorAll('.mobile-nav-link');

    function openMenu() {
        menu.classList.remove('pointer-events-none', 'opacity-0');
        menu.classList.add('pointer-events-auto', 'opacity-100');
        document.body.style.overflow = 'hidden';
        btn.setAttribute('aria-expanded', 'true');
        if (bars.length >= 3) {
            bars[0].style.transform = 'translateY(6.5px) rotate(45deg)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
        }
        links.forEach((link, i) => {
            setTimeout(() => {
                link.style.opacity = '1';
                link.style.transform = 'translateY(0)';
            }, 80 + i * 60);
        });
    }

    function closeMenu() {
        menu.classList.remove('pointer-events-auto', 'opacity-100');
        menu.classList.add('pointer-events-none', 'opacity-0');
        document.body.style.overflow = '';
        btn.setAttribute('aria-expanded', 'false');
        if (bars.length >= 3) {
            bars[0].style.transform = '';
            bars[1].style.opacity = '';
            bars[2].style.transform = '';
        }
        links.forEach(link => {
            link.style.opacity = '0';
            link.style.transform = 'translateY(20px)';
        });
    }

    btn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
})();
