document.addEventListener('DOMContentLoaded', () => {
    const treatmentDetails = {
        "Podstawowy zabieg podologiczny": {
            description: "<p>To profesjonalny zabieg o charakterze profilaktyczno-leczniczym. Pozwala nie tylko zadbać o estetykę, ale przede wszystkim wyeliminować dyskomfort związany ze zmianami skórnymi. Szczególnie polecany osobom zmagającym się bolesnymi modzelami, odciskami czy silnymi zrogowaceniami (hiperkeratozą). Z zabiegu powinni regularnie korzystać diabetycy, seniorzy, osoby aktywne fizycznie oraz pracujące w trybie stojącym. Podczas wizyty przeprowadzam wywiad i analizę stanu stóp, co pozwala dobrać odpowiednią terapię. Korzystam wyłącznie ze sterylnych narzędzi (autoklaw klasy medycznej) lub akcesoriów jednorazowych, co gwarantuje pełne bezpieczeństwo. Regularne wykonywanie pedicure medycznego to gwarancja zadbanych stóp oraz wczesnego wykrywania zmian patologicznych.</p><p><strong>Wskazaniami do wykonania pedicuru leczniczego stóp są:</strong></p><ul class='list-disc pl-5 mt-2 space-y-1'><li>wrastające paznokcie</li><li>hiperkeratozy paznokci, czyli nadmierne rogowacenie naskórka</li><li>odciski, modzele</li><li>pękające pięty</li><li>grzybica paznokci</li><li>dystrofia paznokci (nadmiernie łamliwe, łuszczące się i szorstkie paznokcie)</li><li>atrofia (zanik płytki paznokciowej)</li><li>inne dolegliwości</li></ul>",
            image: "/images/zabiegi_zdjecia/podstawowy-zabieg-podologiczny.jpg"
        },
        "Badanie stopy cukrzycowej": {
            description: "<p>Cukrzyca może prowadzić do poważnych powikłań, w tym do Zespołu Stopy Cukrzycowej (zaburzenia czucia, niedokrwienie, owrzodzenia). W gabinecie przeprowadzam badanie przy pomocy monofilamentu, kamertonu oraz Tip Therm (test czucia temperatury).</p><p><strong>Objawy charakterystyczne dla stopy cukrzycowej:</strong></p><ul class='list-disc pl-5 mt-2 space-y-1'><li>Zaburzenie czucia, skurcze mięśni, mrowienie, kłucie</li><li>Cienka, sucha i łuszcząca się skóra stopy</li><li>Popękane, owrzodzone pięty, ogniska martwicy</li><li>Pieczenie, siność i deformacja stopy</li><li>Osłabienie stawów i kości stopy</li></ul><p class='mt-4'><strong>Najważniejsze zasady dla diabetyków:</strong></p><ul class='list-disc pl-5 mt-2 space-y-1'><li>Codziennie oglądaj stopy (również od spodu).</li><li>Paznokcie obcinaj na prosto, niezbyt krótko.</li><li>Nigdy nie chodź boso i nie mocz stóp.</li><li>Unikaj gorącej wody (max. 37°C) i nie używaj termoforów.</li><li>W razie rany – zdezynfekuj ją Microdacynem i zgłoś się do specjalisty.</li></ul><p class='mt-4'>Profesjonalny pedicure podologiczny u osoby z cukrzycą to podstawa bezpieczeństwa – minimalizuje ryzyko infekcji i pozwala na wczesne wykrycie zmian patologicznych.</p><p class='mt-4'>Profilaktyka i leczenie stopy cukrzycowej: Wrażliwą stopę należy chronić przed zranieniem i zimnem, nosić odpowiednie, wygodne obuwie i bezuciskowe skarpety. Osoby chorujące na cukrzycę powinny być objęte stałą opieką podologa, co zapewni Im profesjonalną opiekę i wczesne wykrycie zmian chorobowych.</p>",
            image: "/images/zabiegi_zdjecia/stopa_cukrzycowa.png"
        },
        "Odciążenia": {
            description: "<p>Dobór i aplikacja materiałów chroniących bolesne miejsca przed uciskiem. Zastosowanie odpowiednich odciążeń pozwala na natychmiastowe zmniejszenie bólu i przyspiesza proces gojenia się zmian skórnych takich jak odciski czy pęknięcia.</p><p>Cena zabiegu zależy od rodzaju i ilości zużytego materiału.</p>"
        },
        "Obcięcie i oszlifowanie paznokci zmienionych chorobowo": {
            description: "<p>Specjalistyczne opracowanie paznokci wymagających fachowej uwagi ze względu na toczące się procesy chorobowe. Bezpieczne dla pacjenta, z zachowaniem najwyższych standardów sterylności.</p>"
        },
        "Oczyszczenie paznokcia zmienionego chorobowo": {
            description: "<p>Dokładne przygotowanie i oczyszczenie płytki dotkniętej zmianami patologicznymi, co przygotowuje ją do dalszej terapii leczniczej (np. przeciwgrzybiczej).</p>",
            imageBefore: "/images/zabiegi_zdjecia/oczyszczenie_przed.jpg",
            imageAfter: "/images/zabiegi_zdjecia/oczyszczenie_po.jpg"
        },
        "Leczenie grzybicy": {
            description: "<p>Grzybica paznokci to schorzenie, które początkowo objawia się subtelnymi zmianami w wyglądzie płytki paznokciowej – najczęściej zauważyć można jej żółtawe zabarwienie, szczególnie w bocznych częściach. Z czasem, jeśli nie zostanie podjęte leczenie, paznokcie stają się kruche, pogrubione, a płytka zaczyna oddzielać się od łożyska.</p><p>W terapii grzybicy kluczową rolę odgrywa regularna opieka podologiczna. Specjalistyczne oczyszczanie zmienionych chorobowo fragmentów paznokcia oraz dobór odpowiednich preparatów przeciwgrzybiczych zapobiegają dalszemu rozwojowi infekcji i wspomagają proces regeneracji płytki.</p><p>Leczenie grzybicy to proces długotrwały, który często wymaga ścisłej współpracy z lekarzem dermatologiem. Skuteczność terapii zależy w dużej mierze od systematyczności, właściwej pielęgnacji i cierpliwości pacjenta. Dzięki konsekwentnemu podejściu możliwe jest zatrzymanie choroby oraz przywrócenie paznokciom zdrowego wyglądu.</p>"
        },
        "Rekonstrukcja płytki paznokcia": {
            description: "<p>Uzupełnienie brakującej części paznokcia specjalistyczną masą. Zabieg estetyczny i ochronny, wykonywany przy użyciu elastycznych mas żelowych lub akrylowych z dodatkiem składników przeciwgrzybiczych. Rekonstrukcja jest możliwa, gdy zachowane jest co najmniej 1/3 naturalnej płytki (wolnej od grzybicy). Masa ściśle przylega do łożyska, ale nie blokuje naturalnego wzrostu paznokcia.</p>",
            image: "/images/zabiegi_zdjecia/plytka_paznokci.png"
        },
        "Zakażenie bakteryjne": {
            imageBefore: "/images/zabiegi_zdjecia/Oczyszczenie paznokcia zmienionego chorobowo przed.jpg",
            imageAfter: "/images/zabiegi_zdjecia/Oczyszczenie paznokcia zmienionego chorobowo po.jpg"
        },
        "Wrastający paznokieć": {
            description: "<p>Zaburzenie najczęściej spowodowane urazem stopy, źle dobranym, zbyt ciasnym obuwiem, nieodpowiednią pielęgnacją paznokci (obcinanie boków płytki paznokciowej), nadwagą lub uwarunkowaniami genetycznymi. Problem ten dotyczy osób w każdym wieku. Dodatkowo wpływ na wrastanie paznokci mają deformacje stóp lub niewydolność żylna.</p><p>Gdy paznokieć wrasta skutkuje to zaczerwienieniem, obrzękiem, a następnie silnym bólem wału okołopaznokciowego. Kiedy skóra zostaje uszkodzona do ranek dostają się bakterie i dochodzi do stanu zapalnego. Wówczas specjalista podolog wycina wrastający element paznokcia i prawidłowo opracowuje jego płytkę co wprawdzie powoduje szybką ulgę, ale jest to tylko doraźne rozwiązanie, gdyż paznokieć po pewnym czasie odrośnie dokładnie w ten sam nieprawidłowy sposób.</p><p>Dlatego długoterminowym, najlepszym rozwiązaniem jest założenie odpowiedniej klamry na paznokieć!</p>",
            image: "/images/zabiegi_zdjecia/wrastajacy_paznokiec.png"
        },
        "Założenie klamry tytanowej": {
            description: "<p>Nowoczesny system korygujący kształt paznokci wkręcających i wrastających. Bezinwazyjna i skuteczna metoda opracowana przez dr. Erovenkova Rodiona. Klamra wykonana ze stopu niklowo-tytanowego jest szczególnie pomocna w wyciszaniu stanów zapalnych z ziarniną oraz jako kontynuacja leczenia po zabiegach chirurgicznych. Aplikacja jest bezbolesna.</p>",
            image: "/images/zabiegi_zdjecia/klamra_tytanowa.png"
        },
        "Założenie klamry ortonyksyjnej (drutowej) 3-częściowej": {
            description: "<p>Skuteczna korekta toru wzrostu paznokcia i szybka eliminacja bólu. Systemy takie jak ORTOGRIP czy Fraser stosuję przy paznokciach wymagających znacznej korekty. Klamra działa długofalowo – \"rośnie\" razem z paznokciem, powoli nadając mu właściwy kształt. Proces trwa zazwyczaj kilka miesięcy i odbywa się pod stałą kontrolą. Choć samo założenie ramion klamry pod płytkę może być odczuwalne, zabieg przynosi natychmiastowe zniesienie bólu związanego z wrastaniem.</p>",
            image: "/images/zabiegi_zdjecia/klamra_drutowa.png"
        },
        "Kontrola klamry": {
            description: "<p>Sprawdzenie postępów terapii oraz ewentualna korekta naciągu klamry w celu utrzymania właściwej siły korekcyjnej.</p>"
        },
        "Kontrola / przestawienie klamry": {
            description: "<p>Sprawdzenie postępów terapii oraz ewentualna korekta naciągu klamry. Zabieg polega na przesunięciu klamry w dalszą część odrastającego paznokcia. Wizyty odbywają się zazwyczaj co 4–6 tygodni, zależnie od tempa wzrostu płytki.</p>"
        },
        "Usuwanie krwiaka podpaznokciowego / hematom": {
            description: "<p>Krwiak pojawia wskutek uszkodzenia naczyń krwionośnych pod płytką paznokcia, najczęściej powstaje w wyniku urazu mechanicznego, którego następstwem jest zmiana koloru. Częstym powikłaniem jest oddzielenie się płytki paznokciowej od łożyska, w wyniku czego może dojść do zakażenia oraz zejścia paznokcia. Jeżeli zauważysz przebarwienia na paznokciu umów się jak najszybciej na wizytę. Pierwsze 48 godzin daje duże szanse na usunięcie krwiaka bez większych powikłań.</p>"
        },
        "Usunięcie brodawki wirusowej (kurzajki)": {
            description: "<p>Specjalistyczne opracowanie zmiany i aplikacja środków przyżegających. Brodawki (wywołane wirusem HPV) często bywają bolesne i bywają mylone z odciskami. Samodzielne leczenie preparatami z apteki bywa nieskuteczne i drażniące dla skóry. Profesjonalne usunięcie polega na bezbolesnym oczyszczeniu zmiany skalpelem lub frezem oraz zastosowaniu odpowiedniej terapii. Zabiegi powtarza się w odstępach 3 tygodni.</p><p>Polega na specjalnym opracowaniu zmiany frezami i zastosowaniu dobranych odpowiednio środków przyżegających co prowadzi do usunięcia brodawki szybciej i skuteczniej niż innymi sposobami.</p><p>Brodawki wirusowe wywołane są wirusem brodawczaka ludzkiego (HPV). Wyróżniamy brodawki zwykłe, płaskie, stóp i weneryczne. Do czynników usposabiających zalicza się podatność osobniczą, młody wiek oraz upośledzenie odporności komórkowej. Brodawki stóp mogą być głębokie i bolesne, zazwyczaj nieliczne oraz powierzchowne, zlewające się i niebolesne, tzw. mozaikowe.</p>",
            image: "/images/zabiegi_zdjecia/kurzajki.png"
        },
        "Usuwanie odcisków": {
            description: "<p>Bezbolesne usunięcie bolesnego „rdzenia” powodującego punktowy ból. Odciski powstają wskutek długotrwałego ucisku bądź ocierania danego obszaru stopy. Na skutek podrażnienia następuje stopniowe rogowacenie danej powierzchni. Ze względu na kierunek działania sił nacisku oraz brak możliwości ekpansji na zewnątrz, twardy naskórek zaczyna \"wbijać się\" w głąb, budując rdzeń.</p><p>Objawami są niewielkie, najczęściej owalne obszary zrogowacenia o przekroju podłużnym w kształcie pinezki, sięgające \"rdzeniem\" do unerwionej skóry właściwej (czym różnią się od modzeli), powodujące ból, szczególnie przy ucisku oraz w trakcie chodu. Najczęściej powstają na podeszwowej stronie stóp, na palcach oraz pomiędzy nimi. Mogą także powstawać pod płytką paznokciową (odciski podpaznokciowe). Czasami spotykana jest forma odcisków miękkich, które nie mają twardego rdzenia, lecz także mogą być niezwykle bolesne.</p><p><strong>Pomoc:</strong> Najszybszą formą pomocy jest usunięcie odcisków w gabinecie podologicznym. Jest to metoda bezbolesna, o natychmiastowej skuteczności. Po zabiegu należy pamiętać o wyeliminowaniu przyczyny powstania odcisku, odciążając dane miejsce za pomocą np. wkładki, ortezy indywidualnej oraz specjalnych opatrunków odciążających.</p>",
            image: "/images/zabiegi_zdjecia/odciski.png"
        },
        "Usuwanie modzeli": {
            description: "<p>Pozbycie się rozległych, żółtawych zgrubień naskórka. Modzele na stopach powstają najczęściej na skutek nierównomiernego lub nadmiernego obciążenia stopy i długotrwałego tarcia. Powstawaniu modzeli sprzyja także wrodzona skłonność do nadmiernego rogowacenia oraz zaburzenia nerwowo - troficzne w przebiegu chorób neurologicznych.</p><p><strong>Do najczęstszych przyczyn należą:</strong></p><ul class='list-disc pl-5 mt-2 space-y-1'><li>noszenie butów na wysokim obcasie</li><li>nieprawidłowe ustawienie kości śródstopia</li><li>nieprawidłowy chód</li><li>płaskostopie lub wysokie podbicie stopy</li><li>zbyt długa kość śródstopia</li><li>otyłość</li><li>wyniosłości kostne</li><li>zanik (atrofia) podskórnej warstwy tłuszczowej na podeszwie stopy</li><li>krótkie ścięgno Achillesa</li></ul><p class='mt-4'><strong>Objawy:</strong> obszary nadmiernego rogowacenia skóry, najczęściej kształtu kolistego, czasem nieregularnego, barwy żółtej lub żółtobrunatnej.</p><p><strong>Usuwanie modzeli:</strong> Zabieg polega na systematycznym bezbolesnym usuwaniu nagromadzonych zrogowaceń. Aby przedłużyć efekt zabiegu należy zrezygnować z noszenia butów na wysokim obcasie (powyżej 3,5 cm) na rzecz obuwia z odpowiednim podbiciem i gumową podeszwą, amortyzującą wstrząsy oraz odciążeniu miejsc powstawania modzeli (np. za pomocą indywidualnych wkładek profilaktycznych). Ponadto należy utrzymywać skórę stóp w odpowiedniej wilgotności i osłaniać miejsca wokół modzeli żeby zmniejszyć ucisk.</p>",
            image: "/images/zabiegi_zdjecia/modzel.png"
        },
        "Opracowanie pękających pięt / rozpadlin": {
            description: "<p>Redukcja zrogowaceń i przywrócenie elastyczności skórze. Pęknięcia powstają często z powodu przesuszenia skóry, niedoborów witamin (A, E) lub niewłaściwego obuwia. Jeśli szczeliny są głębokie, mogą krwawić i powodować silny ból. Terapia polega na bezpiecznym usunięciu nadmiaru naskórka i zastosowaniu preparatów przyspieszających gojenie.</p><p><strong>Najczęstszą przyczyną pękających pięt są:</strong></p><ul class='list-disc pl-5 mt-2 space-y-1'><li>zaniedbania higieniczne</li><li>picie zbyt małej ilości wody</li><li>otyłość</li><li>noszenie skarpet i obuwia z materiałów syntetycznych</li><li>chora tarczyca</li></ul><p class='mt-4'><strong>Objawy:</strong> Zmiany dotyczą głównie warstwy rogowej i tworzą szczeliny czy rozpadliny skórne. Nadmiernie zrogowaciała skóra z trudem pochłania wilgoć i z trudem ją wydala. Staje się więc skórą odwodnioną, traci swoją elastyczność, a w kontakcie z podłożem łatwo pęka.</p><p>Podstawą terapii pękających pięt jest przywrócenie skórze jej ciągłości i elastyczności, niezbędne jest również usuwanie nadmiaru warstw rogowych, regularne zażywanie witaminy A i E w kapsułkach oraz nawilżanie za pomocą odpowiednich kremów. Jeżeli doszło do pojawienia się głębokich pęknięć na piętach, nie należy stosować tarek ścierających oraz kremów złuszczających, ponieważ może to skutkować podrażnieniem skóry. Ważne jest, aby dokładnie myć i dezynfekować stopy, następnie zastosować preparaty dobrane w gabinecie przez podologa co skutecznie przyspieszy gojenie popękanej skóry pięt.</p>",
            image: "/images/zabiegi_zdjecia/pekajace_piety.png"
        }
    };

    // Inject modal HTML
    const modalHTML = `
    <div id="treatment-modal" class="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 opacity-0 pointer-events-none transition-opacity duration-300">
        <div id="treatment-modal-backdrop" class="absolute inset-0 bg-slate-900/70 backdrop-blur-md cursor-pointer"></div>
        <div class="bg-white rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-12px_rgba(0,0,0,0.4)] max-w-4xl w-full max-h-[90vh] flex flex-col relative z-10 transform scale-95 opacity-0 transition-all duration-300" id="treatment-modal-content">
            <button id="close-modal-btn" aria-label="Zamknij" class="absolute top-4 right-4 z-50 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 shadow-md transition-all cursor-pointer">
                <span class="material-symbols-outlined">close</span>
            </button>
            
            <div id="modal-image-container" class="w-full hidden shrink-0 relative bg-slate-50 p-6 sm:p-8 border-b border-slate-100">
                <!-- Single Image View -->
                <div id="modal-single-image-wrapper" class="hidden">
                    <img id="modal-image" src="" alt="Zdjęcie zabiegu" class="max-w-full h-auto max-h-[40vh] object-contain mx-auto rounded-xl shadow-lg">
                </div>
                
                <!-- Before/After View -->
                <div id="modal-before-after" class="hidden grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                    <div class="space-y-3 text-center">
                        <span class="inline-block py-1 px-3 bg-slate-200 text-slate-600 font-label-sm text-[10px] uppercase tracking-widest rounded-full font-bold">Przed zabiegiem</span>
                        <div class="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                            <img id="modal-image-before" src="" alt="Przed" class="w-full h-auto display-block">
                        </div>
                    </div>
                    <div class="space-y-3 text-center">
                        <span class="inline-block py-1 px-3 bg-emerald-100 text-emerald-700 font-label-sm text-[10px] uppercase tracking-widest rounded-full font-bold">Po zabiegu</span>
                        <div class="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                            <img id="modal-image-after" src="" alt="Po" class="w-full h-auto display-block">
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-8 sm:p-10 overflow-y-auto flex-1 bg-white">
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
    const mBeforeAfterContainer = document.getElementById('modal-before-after');
    const mImgBefore = document.getElementById('modal-image-before');
    const mImgAfter = document.getElementById('modal-image-after');

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

    const cards = document.querySelectorAll('.grid > div.bg-white:not([data-no-modal])');
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

            const mSingleImgWrapper = document.getElementById('modal-single-image-wrapper');
            
            // Reset image views
            if (mImg) mImg.classList.add('hidden');
            if (mSingleImgWrapper) mSingleImgWrapper.classList.add('hidden');
            mBeforeAfterContainer.classList.add('hidden');
            mImgContainer.classList.add('hidden');

            if (details) {
                if (details.imageBefore && details.imageAfter) {
                    mImgContainer.classList.remove('hidden');
                    mBeforeAfterContainer.classList.remove('hidden');
                    
                    const fileNameBefore = details.imageBefore.split('/').pop();
                    const fileNameAfter = details.imageAfter.split('/').pop();
                    
                    mImgBefore.src = (window.TREATMENT_IMAGES && window.TREATMENT_IMAGES[fileNameBefore]) ? window.TREATMENT_IMAGES[fileNameBefore] : details.imageBefore;
                    mImgAfter.src = (window.TREATMENT_IMAGES && window.TREATMENT_IMAGES[fileNameAfter]) ? window.TREATMENT_IMAGES[fileNameAfter] : details.imageAfter;
                } else if (details.image) {
                    mImgContainer.classList.remove('hidden');
                    if (mSingleImgWrapper) mSingleImgWrapper.classList.remove('hidden');
                    mImg.classList.remove('hidden');
                    const fileName = details.image.split('/').pop();
                    mImg.src = (window.TREATMENT_IMAGES && window.TREATMENT_IMAGES[fileName]) ? window.TREATMENT_IMAGES[fileName] : details.image;
                }
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
