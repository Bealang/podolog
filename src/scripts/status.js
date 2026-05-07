function updateStatus() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hour * 60 + minutes;

    let isOpen = false;
    let statusText = "Zamknięte";
    let statusTime = "";
    let indicatorColor = "bg-rose-500";
    let indicatorShadow = "rgba(244,63,94,0.6)";

    if (day >= 1 && day <= 4) {
        if (currentTime >= 8 * 60 + 30 && currentTime < 17 * 60) {
            isOpen = true;
            statusTime = "do 17:00";
        } else if (currentTime < 8 * 60 + 30) {
            statusTime = "otwarte dzisiaj od 08:30";
        } else {
            statusTime = "otwarte jutro od 08:30";
        }
    } else if (day === 5) {
        if (currentTime >= 8 * 60 + 30 && currentTime < 17 * 60) {
            isOpen = true;
            statusTime = "do 17:00";
        } else if (currentTime < 8 * 60 + 30) {
            statusTime = "otwarte dzisiaj od 08:30";
        } else {
            statusTime = "otwarte jutro od 08:00";
        }
    } else if (day === 6) {
        if (currentTime >= 8 * 60 && currentTime < 13 * 60) {
            isOpen = true;
            statusTime = "do 13:00";
        } else if (currentTime < 8 * 60) {
            statusTime = "otwarte dzisiaj od 08:00";
        } else {
            statusTime = "otwarte w pon. od 08:30";
        }
    } else {
        statusTime = "otwarte jutro od 08:30";
    }

    if (isOpen) {
        statusText = "Otwarte";
        indicatorColor = "bg-emerald-500";
        indicatorShadow = "rgba(16,185,129,0.6)";
    }

    const bgClass = isOpen ? "bg-emerald-50/80" : "bg-rose-50/80";
    const borderClass = isOpen ? "border-emerald-200/50" : "border-rose-200/50";

    document.querySelectorAll('.status-badge').forEach(badge => {
        const indicator = badge.querySelector('.status-indicator');
        const text = badge.querySelector('.status-text');
        const time = badge.querySelector('.status-time');
        indicator.className = `status-indicator w-2.5 h-2.5 rounded-full ${indicatorColor}`;
        indicator.style.boxShadow = `0 0 8px ${indicatorShadow}`;
        text.textContent = statusText;
        time.textContent = statusTime;

        badge.classList.remove('bg-white/40', 'bg-white', 'bg-emerald-50/80', 'bg-rose-50/80', 'border-white/50', 'border-emerald-100', 'border-emerald-200/50', 'border-rose-200/50');
        badge.classList.add(bgClass, borderClass);
    });
}

updateStatus();
setInterval(updateStatus, 60000);
