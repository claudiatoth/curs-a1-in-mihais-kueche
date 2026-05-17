// ============================================
// FLASHCARDS - In Mihais Küche (A1 vocabular)
// Claudia Toth · 32 carduri
// REGULĂ FERMĂ: NICIODATĂ ghilimele interne — CAPS pentru emfază!
// ============================================

const flashcardsData = [
    // === 8 Verpackungen ===
    { de: "eine Flasche Wasser", ro: "o sticlă (de) apă · fără VON între ele!", audio: "audio/letters/flasche-wasser.wav" },
    { de: "eine Tafel Schokolade", ro: "o tabletă (de) ciocolată", audio: "audio/letters/tafel-schokolade.wav" },
    { de: "ein Sack Kartoffeln", ro: "un sac (de) cartofi", audio: "audio/letters/sack-kartoffeln.wav" },
    { de: "eine Dose Tomaten", ro: "o cutie / conservă (de) roșii", audio: "audio/letters/dose-tomaten.wav" },
    { de: "ein Glas Marmelade", ro: "un borcan (de) marmeladă", audio: "audio/letters/glas-marmelade.wav" },
    { de: "eine Tüte Chips", ro: "o pungă (de) chipsuri", audio: "audio/letters/tuete-chips.wav" },
    { de: "ein Becher Joghurt", ro: "un păhărel (de) iaurt", audio: "audio/letters/becher-joghurt.wav" },
    { de: "eine Tube Senf", ro: "un tub (de) muștar", audio: "audio/letters/tube-senf.wav" },

    // === 6 Hauptgerichte ===
    { de: "das Schnitzel", ro: "șnițel · felul principal clasic", audio: "audio/letters/schnitzel.wav" },
    { de: "die Bratwurst", ro: "cârnat prăjit", audio: "audio/letters/bratwurst.wav" },
    { de: "das Gulasch", ro: "gulaș", audio: "audio/letters/gulasch.wav" },
    { de: "der Braten", ro: "friptură la cuptor", audio: "audio/letters/braten.wav" },
    { de: "der Eintopf", ro: "tocană (mâncare la o oală)", audio: "audio/letters/eintopf.wav" },
    { de: "das Kartoffelpüree", ro: "piure de cartofi", audio: "audio/letters/kartoffelpueree.wav" },

    // === 4 Suppen ===
    { de: "die Gemüsesuppe", ro: "supă de legume · toate supele = die ...suppe", audio: "audio/letters/gemuesesuppe.wav" },
    { de: "die Tomatensuppe", ro: "supă de roșii", audio: "audio/letters/tomatensuppe.wav" },
    { de: "die Hühnersuppe", ro: "supă de pui", audio: "audio/letters/huehnersuppe.wav" },
    { de: "die Linsensuppe", ro: "supă de linte", audio: "audio/letters/linsensuppe.wav" },

    // === 5 Desserts ===
    { de: "das Eis", ro: "înghețată", audio: "audio/letters/eis.wav" },
    { de: "der Kuchen", ro: "prăjitură / tort", audio: "audio/letters/kuchen.wav" },
    { de: "der Apfelstrudel", ro: "ștrudel cu mere", audio: "audio/letters/apfelstrudel.wav" },
    { de: "der Pudding", ro: "budincă / cremă", audio: "audio/letters/pudding.wav" },
    { de: "der Pfannkuchen", ro: "clătită", audio: "audio/letters/pfannkuchen.wav" },

    // === 6 Küchengeräte & Geschirr ===
    { de: "der Topf", ro: "oala · pt. supe (kochen)", audio: "audio/letters/topf.wav" },
    { de: "die Pfanne", ro: "tigaia · pt. prăjit (braten)", audio: "audio/letters/pfanne.wav" },
    { de: "das Messer", ro: "cuțitul · pt. tăiat (schneiden)", audio: "audio/letters/messer.wav" },
    { de: "die Gabel", ro: "furculița", audio: "audio/letters/gabel.wav" },
    { de: "der Löffel", ro: "lingura", audio: "audio/letters/loeffel.wav" },
    { de: "der Backofen", ro: "cuptorul · pt. copt (backen)", audio: "audio/letters/backofen.wav" },

    // === 3 Verben in der Küche ===
    { de: "kochen / braten / backen", ro: "a fierbe / a prăji / a coace", audio: "audio/letters/kochen-braten-backen.wav" },
    { de: "schneiden", ro: "a tăia · Mihai schneidet das Gemüse", audio: "audio/letters/schneiden.wav" },
    { de: "schälen / würzen", ro: "a curăța de coajă / a condimenta", audio: "audio/letters/schaelen-wuerzen.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri</strong> grupate pe teme (8 Verpackungen · 6 Hauptgerichte · 4 Suppen · 5 Desserts · 6 Küchengeräte · 3 Verben).<br>
            Click pe card pentru a vedea traducerea. Click pe 🔊 pentru a auzi pronunția germană.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de;
    ro.textContent = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(err => {
        console.log('Audio nu poate fi redat:', err);
    });
}

buildFlashcards();
