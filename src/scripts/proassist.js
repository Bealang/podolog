window.openProassist = function openProassist() {
    // Close mobile menu first if open
    var mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && mobileMenu.classList.contains('pointer-events-auto')) {
        document.getElementById('mobile-menu-close').click();
    }

    // Try to open the side widget
    var widget = document.getElementById('proassistWidget-new');
    if (widget) {
        widget.classList.remove('proassist--folded-new');
        return;
    }

    // Fallback: if widget hasn't loaded yet, try clicking the handle
    var handle = document.getElementById('proassistHandle-new');
    if (handle) {
        handle.click();
        return;
    }

    // Ultimate fallback: open booking page directly
    window.open('https://system.proassist.pl/api/widget/specialist/view/specialist/ps-u285-1f8iyq', '_blank');
};
