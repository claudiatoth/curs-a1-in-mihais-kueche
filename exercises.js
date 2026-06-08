// ============================================
// EXERCIȚII - In Mihais Küche (A1 vocabular)
// Claudia Toth · 5 exerciții (toate text inputs)
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/\s*\/\s*/g, '/')
        .replace(/\s*,\s*/g, ',')
        .replace(/\s+/g, ' ')
        .replace(/[.!?;:]/g, '').trim();
}

// ============================================
// EX 1: DE → RO (traducere)
// ============================================
const ex1Data = [
    { id: 'a', sentence: 'eine Flasche Wasser', translation: 'o ___ (recipient) cu apă', correct: 'o sticlă de apă', accept: ['o sticla de apa', 'sticla de apa', 'o sticla apa', 'sticla'] },
    { id: 'b', sentence: 'eine Tafel Schokolade', translation: 'o ___ de ciocolată', correct: 'o tabletă de ciocolată', accept: ['o tableta de ciocolata', 'tableta de ciocolata', 'tableta', 'o tableta ciocolata'] },
    { id: 'c', sentence: 'das Schnitzel', translation: 'felul principal', correct: 'șnițel', accept: ['snitel', 'snitelul', 'un snitel'] },
    { id: 'd', sentence: 'die Gemüsesuppe', translation: 'o supă', correct: 'supă de legume', accept: ['supa de legume', 'ciorba de legume'] },
    { id: 'e', sentence: 'der Apfelstrudel', translation: 'un desert', correct: 'ștrudel cu mere', accept: ['strudel cu mere', 'strudel de mere', 'strudel'] },
    { id: 'f', sentence: 'die Pfanne', translation: 'ustensilă', correct: 'tigaia', accept: ['tigaie', 'tigaia', 'o tigaie'] },
    { id: 'g', sentence: 'der Löffel', translation: 'tacâm', correct: 'lingura', accept: ['lingura', 'lingurа', 'o lingura'] },
    { id: 'h', sentence: 'braten', translation: 'verb de bucătărie', correct: 'a prăji', accept: ['a praji', 'praji', 'a frige'] }
];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🇩🇪 → 🇷🇴 Tradu în română.</strong><br>
            Recipiente, feluri de mâncare, ustensile și verbe.<br>
            <em>💡 Răspunde pe scurt (ex: „o sticlă de apă", „șnițel", „a prăji").</em>
        </div>
    `;
    ex1Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex1-${item.id}" placeholder="în română...">
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;
    ex1Data.forEach(item => {
        const input = document.getElementById(`ex1-${item.id}`);
        const fb = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 2: RO → DE (traducere inversă)
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'un borcan (de marmeladă)', translation: 'ein ___ Marmelade', correct: 'ein Glas', accept: ['ein glas', 'glas'] },
    { id: 'b', sentence: 'o pungă (de chipsuri)', translation: 'eine ___ Chips', correct: 'eine Tüte', accept: ['eine tüte', 'tüte', 'eine tuete', 'tuete'] },
    { id: 'c', sentence: 'un sac (de cartofi)', translation: 'ein ___ Kartoffeln', correct: 'ein Sack', accept: ['ein sack', 'sack'] },
    { id: 'd', sentence: 'supă de roșii', translation: 'felul: die ___', correct: 'die Tomatensuppe', accept: ['die tomatensuppe', 'tomatensuppe'] },
    { id: 'e', sentence: 'înghețată', translation: 'desert: das ___', correct: 'das Eis', accept: ['das eis', 'eis'] },
    { id: 'f', sentence: 'cuțitul', translation: 'ustensilă: das ___', correct: 'das Messer', accept: ['das messer', 'messer'] },
    { id: 'g', sentence: 'frigiderul', translation: 'der ___', correct: 'der Kühlschrank', accept: ['der kühlschrank', 'kühlschrank', 'der kuehlschrank', 'kuehlschrank'] },
    { id: 'h', sentence: 'a coace', translation: 'verb', correct: 'backen', accept: ['backen'] }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🇷🇴 → 🇩🇪 Tradu în germană.</strong><br>
            Scrie cu articol unde e cerut (ein/eine/der/die/das).<br>
            <em>💡 Atenție la diacritice — sau scrie ue/oe/ae (sistemul acceptă ambele).</em>
        </div>
    `;
    ex2Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex2-${item.id}" placeholder="în germană...">
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;
    ex2Data.forEach(item => {
        const input = document.getElementById(`ex2-${item.id}`);
        const fb = document.getElementById(`ex2-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 3: Welche Verpackung? (ce ambalaj se potrivește)
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'eine ____ Schokolade', translation: 'o tabletă de ciocolată', correct: 'Tafel', accept: ['tafel'] },
    { id: 'b', sentence: 'eine ____ Wasser', translation: 'o sticlă de apă', correct: 'Flasche', accept: ['flasche'] },
    { id: 'c', sentence: 'ein ____ Kartoffeln', translation: 'un sac de cartofi', correct: 'Sack', accept: ['sack'] },
    { id: 'd', sentence: 'ein ____ Joghurt', translation: 'un păhărel de iaurt', correct: 'Becher', accept: ['becher'] },
    { id: 'e', sentence: 'eine ____ Tomaten', translation: 'o cutie/conservă de roșii', correct: 'Dose', accept: ['dose'] },
    { id: 'f', sentence: 'ein ____ Marmelade', translation: 'un borcan de marmeladă', correct: 'Glas', accept: ['glas'] },
    { id: 'g', sentence: 'eine ____ Senf', translation: 'un tub de muștar', correct: 'Tube', accept: ['tube'] },
    { id: 'h', sentence: 'eine ____ Chips', translation: 'o pungă de chipsuri', correct: 'Tüte', accept: ['tüte', 'tuete'] }
];

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📦 Ce ambalaj se potrivește? Completează.</strong><br>
            Alege recipientul corect pentru fiecare produs (Tafel, Flasche, Sack, Becher, Dose, Glas, Tube, Tüte).<br>
            <em>💡  Caută imaginea potrivită în mintea ta: ciocolata vine ca o „tabletă" plată.</em>
        </div>
    `;
    ex3Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex3-${item.id}" placeholder="recipientul...">
                </div>
                <div class="feedback" id="ex3-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    const total = ex3Data.length;
    ex3Data.forEach(item => {
        const input = document.getElementById(`ex3-${item.id}`);
        const fb = document.getElementById(`ex3-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 4: Lückentext — Mihai gătește
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'Mihai ____ eine Gemüsesuppe. (a găti/fierbe)', translation: 'Mihai gătește o supă de legume.', correct: 'kocht', accept: ['kocht'] },
    { id: 'b', sentence: 'Er ____ das Gemüse mit dem Messer. (a tăia)', translation: 'El taie legumele cu cuțitul.', correct: 'schneidet', accept: ['schneidet'] },
    { id: 'c', sentence: 'Dann ____ er ein Schnitzel in der Pfanne. (a prăji)', translation: 'Apoi prăjește un șnițel în tigaie.', correct: 'brät', accept: ['brät', 'braet'] },
    { id: 'd', sentence: 'Als Nachtisch ____ er einen Kuchen. (a coace)', translation: 'Ca desert coace o prăjitură.', correct: 'backt', accept: ['backt', 'bäckt', 'baeckt'] },
    { id: 'e', sentence: 'Mihai braucht einen ____ für die Suppe. (vas)', translation: 'Mihai are nevoie de o oală pentru supă.', correct: 'Topf', accept: ['topf'] },
    { id: 'f', sentence: 'Er ____ die Kartoffeln zuerst. (a curăța de coajă)', translation: 'El curăță întâi cartofii.', correct: 'schält', accept: ['schält', 'schaelt'] },
    { id: 'g', sentence: 'Er ____ das Fleisch mit Salz und Pfeffer. (a condimenta)', translation: 'El condimentează carnea cu sare și piper.', correct: 'würzt', accept: ['würzt', 'wuerzt'] },
    { id: 'h', sentence: 'Andreea isst den Apfelstrudel mit einer ____. (tacâm)', translation: 'Andreea mănâncă ștrudelul cu o furculiță.', correct: 'Gabel', accept: ['gabel'] }
];

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🍳 Completează — Mihai gătește în restaurantul lui.</strong><br>
            Verbe de bucătărie + ustensile. Atenție: la „er", verbele tari schimbă vocala (braten → er brät).<br>
            <em>💡 Traducerea îți spune ce verb/vas se cere.</em>
        </div>
    `;
    ex4Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex4-${item.id}" placeholder="completează...">
                </div>
                <div class="feedback" id="ex4-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    const total = ex4Data.length;
    ex4Data.forEach(item => {
        const input = document.getElementById(`ex4-${item.id}`);
        const fb = document.getElementById(`ex4-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 5: Asociere — ce ustensilă pentru ce acțiune
// ============================================
const ex5Data = [
    { id: 'a', sentence: 'schneiden → cu ce? (das ____)', translation: 'a tăia → cu cuțitul', correct: 'Messer', accept: ['messer', 'das messer'] },
    { id: 'b', sentence: 'eine Suppe kochen → în ce? (der ____)', translation: 'a fierbe o supă → în oală', correct: 'Topf', accept: ['topf', 'der topf'] },
    { id: 'c', sentence: 'ein Schnitzel braten → în ce? (die ____)', translation: 'a prăji un șnițel → în tigaie', correct: 'Pfanne', accept: ['pfanne', 'die pfanne'] },
    { id: 'd', sentence: 'einen Kuchen backen → în ce? (der ____)', translation: 'a coace o prăjitură → în cuptor', correct: 'Backofen', accept: ['backofen', 'der backofen'] },
    { id: 'e', sentence: 'Suppe essen → cu ce? (der ____)', translation: 'a mânca supă → cu lingura', correct: 'Löffel', accept: ['löffel', 'der löffel', 'loeffel', 'der loeffel'] },
    { id: 'f', sentence: 'Milch kalt halten → wo? (der ____)', translation: 'a ține laptele rece → în frigider', correct: 'Kühlschrank', accept: ['kühlschrank', 'der kühlschrank', 'kuehlschrank', 'der kuehlschrank'] },
    { id: 'g', sentence: 'Kaffee trinken → aus? (die ____)', translation: 'a bea cafea → din ceașcă', correct: 'Tasse', accept: ['tasse', 'die tasse'] },
    { id: 'h', sentence: 'Gemüse schneiden → auf? (das ____)', translation: 'a tăia legume → pe tocător', correct: 'Schneidebrett', accept: ['schneidebrett', 'das schneidebrett'] }
];

function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔗 Ce ustensilă/vas folosești? Asociază acțiunea cu obiectul.</strong><br>
            Scrie obiectul potrivit (cu articol e și mai bine).<br>
            <em>💡 schneiden → das Messer · kochen → der Topf · braten → die Pfanne.</em>
        </div>
    `;
    ex5Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex5-${item.id}" placeholder="ustensila / vasul...">
                </div>
                <div class="feedback" id="ex5-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    const total = ex5Data.length;
    ex5Data.forEach(item => {
        const input = document.getElementById(`ex5-${item.id}`);
        const fb = document.getElementById(`ex5-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// Build all exercises on load
buildEx1();
buildEx2();
buildEx3();
buildEx4();
buildEx5();
