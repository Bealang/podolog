/**
 * Konfiguracja godzin otwarcia
 * Pozwala na łatwą zmianę bez ingerencji w logikę silnika.
 */
const SCHEDULE = {
    1: { open: "08:30", close: "17:00" }, // Poniedziałek
    2: { open: "08:30", close: "17:00" }, // Wtorek
    3: { open: "08:30", close: "17:00" }, // Środa
    4: { open: "08:30", close: "17:00" }, // Czwartek
    5: { open: "08:30", close: "17:00" }, // Piątek
    6: { open: "08:00", close: "13:00" }, // Sobota
    0: null // Niedziela (null = zamknięte)
};

function timeToMinutes(timeStr) {
    const [hrs, mins] = timeStr.split(':').map(Number);
    return hrs * 60 + mins;
}

function updateStatus() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hour * 60 + minutes;

    const todaySchedule = SCHEDULE[day];
    let isOpen = false;
    let statusText = "Zamknięte";
    let statusTime = "";
    
    // Logika wyznaczania statusu
    if (todaySchedule) {
        const openMin = timeToMinutes(todaySchedule.open);
        const closeMin = timeToMinutes(todaySchedule.close);

        if (currentTime >= openMin && currentTime < closeMin) {
            isOpen = true;
            statusTime = `do ${todaySchedule.close}`;
        } else if (currentTime < openMin) {
            statusTime = `otwarte dzisiaj od ${todaySchedule.open}`;
        } else {
            // Po zamknięciu dzisiaj, sprawdź kiedy otwarte jutro
            const nextDay = (day + 1) % 7;
            const nextSchedule = SCHEDULE[nextDay];
            if (nextSchedule) {
                statusTime = `otwarte jutro od ${nextSchedule.open}`;
            } else {
                statusTime = `otwarte w pon. od ${SCHEDULE[1].open}`;
            }
        }
    } else {
        // Dzisiaj (niedziela) zamknięte
        statusTime = `otwarte jutro od ${SCHEDULE[1].open}`;
    }

    if (isOpen) {
        statusText = "Otwarte";
    }

    // Kolory i style (Tailwind)
    const indicatorColor = isOpen ? "bg-emerald-500" : "bg-rose-500";
    const indicatorShadow = isOpen ? "rgba(16,185,129,0.6)" : "rgba(244,63,94,0.6)";
    const bgClass = isOpen ? "bg-emerald-50/80" : "bg-rose-50/80";
    const borderClass = isOpen ? "border-emerald-200/50" : "border-rose-200/50";

    document.querySelectorAll('.status-badge').forEach(badge => {
        const indicator = badge.querySelector('.status-indicator');
        const text = badge.querySelector('.status-text');
        const time = badge.querySelector('.status-time');
        
        if (indicator) {
            indicator.className = `status-indicator w-2.5 h-2.5 rounded-full ${indicatorColor}`;
            indicator.style.boxShadow = `0 0 8px ${indicatorShadow}`;
        }
        if (text) text.textContent = statusText;
        if (time) time.textContent = statusTime;

        badge.classList.remove('bg-white/40', 'bg-white', 'bg-emerald-50/80', 'bg-rose-50/80', 'border-white/50', 'border-emerald-100', 'border-emerald-200/50', 'border-rose-200/50');
        badge.classList.add(bgClass, borderClass);
    });
}

// Uruchomienie i interwał (co minutę)
updateStatus();
setInterval(updateStatus, 60000);

