document.addEventListener('DOMContentLoaded', () => {
    const treatmentDetails = {
        "Podstawowy zabieg podologiczny": {
            description: "<p>To profesjonalny zabieg o charakterze profilaktyczno-leczniczym. Pozwala nie tylko zadbać o estetykę, ale przede wszystkim wyeliminować dyskomfort związany ze zmianami skórnymi. Jest szczególnie polecany osobom zmagającym się z bolesnymi modzelami, odciskami czy silnymi zrogowaceniami (hiperkeratozą). Z zabiegu regularnie korzystają diabetycy, seniorzy, osoby aktywne fizycznie oraz pracujące w trybie stojącym.</p><p>Podczas wizyty przeprowadzam szczegółowy wywiad i analizę stanu stóp, co pozwala dobrać odpowiednią terapię. Korzystam wyłącznie ze sterylnych narzędzi (autoklaw klasy medycznej) lub akcesoriów jednorazowych, co gwarantuje pełne bezpieczeństwo.</p>",
            image: "/images/zabiegi_zdjecia/podstawowy-zabieg-podologiczny.jpg"
        },
        "Badanie stopy cukrzycowej": {
            description: "<p>Cukrzyca może prowadzić do poważnych powikłań, w tym do Zespołu Stopy Cukrzycowej (zaburzenia czucia, niedokrwienie, owrzodzenia). W gabinecie przeprowadzam badanie przy pomocy monofilamentu, kamertonu oraz Tip Therm (test czucia temperatury).</p><p><strong>Najważniejsze zasady dla diabetyków:</strong></p><ul class='list-disc pl-5 mt-2 space-y-1'><li>Codziennie oglądaj stopy (również od spodu, np. przy użyciu lusterka).</li><li>Paznokcie obcinaj na prosto, niezbyt krótko.</li><li>Nigdy nie chodź boso i nie mocz stóp dłużej niż 5 minut.</li><li>Unikaj gorącej wody (max. 37°C) i nie używaj termoforów.</li><li>W razie rany – zdezynfekuj ją (np. Octeniseptem) i zgłoś się do specjalisty.</li></ul><p class='mt-4'>Profesjonalny pedicure podologiczny u osoby z cukrzycą to podstawa bezpieczeństwa – minimalizuje ryzyko infekcji i pozwala na wczesne wykrycie zmian patologicznych.</p>",
            image: "/images/zabiegi_zdjecia/stopa_cukrzycowa.png"
        },
        "Ortozy indywidualne": {
            description: "<p>Gdy gotowe rozwiązania ze sklepu nie pomagają, wykonuję ortozy indywidualne z trwałych mas silikonowych. Służą one do separacji palców, zmniejszenia ucisku i korekcji deformacji. Są bezpieczne dla skóry i bardzo wytrzymałe.</p>"
        },
        "Obcięcie i oszlifowanie paznokci zmienionych chorobowo": {
            description: "<p>Specjalistyczne opracowanie paznokci wymagających fachowej uwagi ze względu na toczące się procesy chorobowe. Bezpieczne dla pacjenta, z zachowaniem najwyższych standardów sterylności.</p>"
        },
        "Oczyszczenie paznokcia zmienionego chorobowo": {
            description: "<p>Dokładne przygotowanie i oczyszczenie płytki dotkniętej zmianami patologicznymi, co przygotowuje ją do dalszej terapii leczniczej (np. przeciwgrzybiczej).</p>"
        },
        "Rekonstrukcja płytki paznokcia": {
            description: "<p>Zabieg estetyczny i ochronny, wykonywany przy użyciu elastycznych mas żelowych lub akrylowych z dodatkiem składników przeciwgrzybiczych. Rekonstrukcja jest możliwa, gdy zachowane jest co najmniej 1/3 naturalnej płytki (wolnej od grzybicy). Masa ściśle przylega do łożyska, ale nie blokuje naturalnego wzrostu paznokcia.</p>",
            image: "/images/zabiegi_zdjecia/plytka_paznokci.png"
        },
        "Wrastający paznokieć": {
            description: "<p>Problem ten dotyka osób w każdym wieku, a jego przyczyną może być uraz, ciasne obuwie, błędy w pielęgnacji lub genetyka. Wrastanie powoduje ból, obrzęk i stany zapalne. Zabieg polega na usunięciu drażniącego elementu i prawidłowym opracowaniu płytki, co przynosi natychmiastową ulgę.</p><p>Należy jednak pamiętać, że jest to rozwiązanie doraźne – bez dalszej terapii paznokieć może odrosnąć w ten sam, nieprawidłowy sposób.</p>",
            image: "/images/zabiegi_zdjecia/wrastajacy_paznokiec.png"
        },
        "Założenie klamry tytanowej": {
            description: "<p>Bezinwazyjna i skuteczna metoda opracowana przez dr. Erovenkova Rodiona. Klamra wykonana ze stopu niklowo-tytanowego jest szczególnie pomocna w wyciszaniu stanów zapalnych z ziarniną oraz jako kontynuacja leczenia po zabiegach chirurgicznych.</p>",
            image: "/images/zabiegi_zdjecia/klamra_tytanowa.png"
        },
        "Założenie klamry ortonyksyjnej (drutowej)": {
            description: "<p>Systemy takie jak ORTOGRIP czy Fraser stosuję przy paznokciach wymagających znacznej korekty. Klamra działa długofalowo – \"rośnie\" razem z paznokciem, powoli nadając mu właściwy kształt. Proces trwa zazwyczaj kilka miesięcy i odbywa się pod stałą kontrolą.</p><p>Choć samo założenie ramion klamry pod płytkę może być odczuwalne, zabieg przynosi natychmiastowe zniesienie bólu związanego z wrastaniem.</p>",
            image: "/images/zabiegi_zdjecia/klamra_drutowa.png"
        },
        "Kontrola klamry": {
            description: "<p>Sprawdzenie postępów terapii oraz ewentualna korekta naciągu klamry w celu utrzymania właściwej siły korekcyjnej.</p>"
        },
        "Kontrola z przestawieniem klamry": {
            description: "<p>Zabieg polega na przesunięciu klamry w dalszą część odrastającego paznokcia. Wizyty odbywają się zazwyczaj co 4–6 tygodni, zależnie od tempa wzrostu płytki.</p>"
        },
        "Usuwanie krwiaka podpaznokciowego": {
            description: "<p>Krwiak objawia się ciemnym przebarwieniem i bólem. Kluczowy jest czas – usunięcie zmiany w ciągu pierwszych 48 godzin znacznie zmniejsza ryzyko oddzielenia się płytki od łożyska (tzw. zejścia paznokcia) i zakażenia.</p>"
        },
        "Usunięcie brodawki wirusowej (kurzajki)": {
            description: "<p>Brodawki (wywołane wirusem HPV) często bywają bolesne i bywają mylone z odciskami. Samodzielne leczenie preparatami z apteki bywa nieskuteczne i drażniące dla skóry. Profesjonalne usunięcie polega na bezbolesnym oczyszczeniu zmiany skalpelem lub frezem oraz zastosowaniu odpowiedniej terapii. Zabiegi powtarza się w odstępach 1–3 tygodni.</p>",
            image: "/images/zabiegi_zdjecia/kurzajki.png"
        },
        "Usuwanie odcisków": {
            description: "<p>Odciski powstają w wyniku długotrwałego ucisku. W odróżnieniu od modzeli posiadają twardy rdzeń (trzpień), który wbija się w głąb skóry, drażniąc nerwy. Usunięcie ich w gabinecie daje natychmiastową ulgę. Po zabiegu dobieram odpowiednie odciążenie (wkładki, ortozy), aby zapobiec nawrotom.</p>",
            image: "/images/zabiegi_zdjecia/odciski.png"
        },
        "Usuwanie modzeli": {
            description: "<p>Modzele to efekt nadmiernego tarcia, często związanego z noszeniem butów na obcasie, nadwagą lub deformacjami stóp. Zabieg polega na bezbolesnym usunięciu warstwy rogowej. Dla podtrzymania efektu zaleca się stosowanie wkładek odciążających i odpowiednią pielęgnację domową.</p>",
            image: "/images/zabiegi_zdjecia/modzel.png"
        },
        "Opracowanie pękających pięt / rozpadlin": {
            description: "<p>Pęknięcia powstają często z powodu przesuszenia skóry, niedoborów witamin (A, E) lub niewłaściwego obuwia. Jeśli szczeliny są głębokie, mogą krwawić i powodować silny ból. Terapia polega na bezpiecznym usunięciu nadmiaru naskórka i zastosowaniu preparatów przyspieszających gojenie.</p><p><strong>Ważne:</strong> Przy głębokich pęknięciach nie wolno używać tarek domowych ani silnych kremów złuszczających.</p>",
            image: "/images/zabiegi_zdjecia/pekajace_piety.png"
        }
    };

    // Inject modal HTML
    const modalHTML = `
    <div id="treatment-modal" class="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 opacity-0 pointer-events-none transition-opacity duration-300">
        <div id="treatment-modal-backdrop" class="absolute inset-0 bg-slate-900/50 backdrop-blur-sm cursor-pointer"></div>
        <div class="bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] max-w-3xl w-full max-h-[95vh] flex flex-col relative z-10 transform scale-95 opacity-0 transition-all duration-300" id="treatment-modal-content">
            <button id="close-modal-btn" aria-label="Zamknij" class="absolute top-4 right-4 z-30 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 shadow-sm transition-all cursor-pointer">
                <span class="material-symbols-outlined">close</span>
            </button>
            <div id="modal-image-container" class="w-full hidden shrink-0 relative bg-gradient-to-b from-emerald-50/50 to-white pt-12 pb-6 px-6">
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-200/30 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                <img id="modal-image" src="" alt="Zdjęcie zabiegu" class="relative z-10 max-w-full h-auto max-h-56 sm:max-h-72 object-contain mx-auto drop-shadow-[0_15px_25px_rgba(4,120,87,0.15)] transition-transform duration-700 ease-out hover:scale-[1.03]">
            </div>
            <div class="p-6 sm:p-10 overflow-y-auto flex-1 bg-white">
                <div class="flex items-center gap-3 mb-4">
                    <span class="inline-block py-1.5 px-3 bg-emerald-50 text-emerald-700 font-label-sm text-xs uppercase tracking-widest rounded-lg font-bold border border-emerald-100">Szczegóły zabiegu</span>
                </div>
                <h2 id="modal-title" class="font-headline-xl text-2xl sm:text-3xl text-slate-800 mb-4 leading-tight tracking-tight">Tytuł zabiegu</h2>
                <div id="modal-description" class="font-body-md text-slate-600 leading-relaxed mb-8 space-y-4 text-sm sm:text-base"></div>
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 border-t border-slate-100 gap-4 mt-auto">
                    <div>
                        <span class="font-label-sm text-slate-400 uppercase tracking-widest text-xs block mb-1">Cena zabiegu</span>
                        <span id="modal-price" class="font-headline-md text-emerald-700 text-xl font-bold">od 100 PLN</span>
                    </div>
                    <button onclick="openProassist(); document.getElementById('close-modal-btn').click();" class="w-full sm:w-auto bg-emerald-800 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg active:scale-95 cursor-pointer flex items-center justify-center gap-2">
                        Zarezerwuj wizytę
                        <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('treatment-modal');
    const modalContent = document.getElementById('treatment-modal-content');
    const modalBackdrop = document.getElementById('treatment-modal-backdrop');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const mTitle = document.getElementById('modal-title');
    const mDesc = document.getElementById('modal-description');
    const mPrice = document.getElementById('modal-price');
    const mImgContainer = document.getElementById('modal-image-container');
    const mImg = document.getElementById('modal-image');

    const openModal = () => {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.add('opacity-0', 'pointer-events-none');
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');
        document.body.style.overflow = '';
    };

    closeModalBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('pointer-events-none')) closeModal();
    });

    const cards = document.querySelectorAll('.grid > div.bg-white');
    cards.forEach(card => {
        card.classList.remove('cursor-default');
        card.classList.add('cursor-pointer', 'hover:shadow-lg', 'hover:border-emerald-200', 'hover:-translate-y-1', 'active:scale-[0.98]', 'treatment-card');
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');

        const titleEl = card.querySelector('h3');
        if (titleEl) {
            const originalHtml = titleEl.innerHTML;
            titleEl.innerHTML = `<div class="flex justify-between items-start gap-2"><span class="treatment-title-text">${originalHtml}</span><span class="material-symbols-outlined text-emerald-600/50 group-hover:text-emerald-600 transition-colors text-[20px] shrink-0 mt-0.5" aria-hidden="true">open_in_full</span></div>`;
        }

        const pEl = card.querySelector('p');
        if (pEl) {
            pEl.insertAdjacentHTML('afterend', `
                <div class="mt-4 flex items-center gap-1.5 text-emerald-700 font-bold text-[11px] uppercase tracking-wider group-hover:gap-2.5 transition-all opacity-80 group-hover:opacity-100">
                    <span>Pokaż więcej</span>
                    <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
            `);
        }

        const titleTextEl = card.querySelector('.treatment-title-text');
        const title = titleTextEl ? titleTextEl.innerText.trim() : card.querySelector('h3').innerText.trim();
        const shortDesc = card.querySelector('p')?.innerText.trim() || '';
        const price = card.querySelector('.font-headline-md.text-emerald-700')?.innerText.trim() || '';

        card.addEventListener('click', () => {
            mTitle.innerText = title;
            mPrice.innerText = price;
            const details = treatmentDetails[title];
            if (details && details.description) {
                mDesc.innerHTML = details.description;
            } else {
                mDesc.innerHTML = `<p>${shortDesc}</p>`;
            }
            if (details && details.image) {
                mImgContainer.classList.remove('hidden');
                mImg.src = details.image;
            } else {
                mImgContainer.classList.add('hidden');
            }
            openModal();
        });

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
});
