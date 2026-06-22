// ============================================
// VERB-KONJUGATION (pilot) - In Mihais Küche
// Claudia Toth · instrument de referință (Präsens / Präteritum / Perfekt)
// Verbe TARI verificate pe PONS (de.pons.com/verbtabellen) · RO: conjugari.ro
// REGULĂ: NU backticks, NU ghilimele interne care rup template literal!
// ============================================

// Fiecare verb: inf, ro (sens), typ (slab/tare/auxiliar), aux (haben/sein), part (Partizip II)
// praes/praet/perf = liste [pronume, formă DE, formă RO]
const verbsData = [
    {
        inf: 'kochen', ro: 'a găti / a fierbe', typ: 'slab / regulat', aux: 'haben', part: 'gekocht',
        praes: [['ich','koche','gătesc'],['du','kochst','gătești'],['er/sie/es','kocht','gătește'],['wir','kochen','gătim'],['ihr','kocht','gătiți'],['sie/Sie','kochen','gătesc']],
        praet: [['ich','kochte','găteam'],['du','kochtest','găteai'],['er/sie/es','kochte','gătea'],['wir','kochten','găteam'],['ihr','kochtet','găteați'],['sie/Sie','kochten','găteau']],
        perf: [['ich','habe gekocht','am gătit'],['du','hast gekocht','ai gătit'],['er/sie/es','hat gekocht','a gătit'],['wir','haben gekocht','am gătit'],['ihr','habt gekocht','ați gătit'],['sie/Sie','haben gekocht','au gătit']]
    },
    {
        inf: 'braten', ro: 'a prăji', typ: 'tare / neregulat', aux: 'haben', part: 'gebraten',
        praes: [['ich','brate','prăjesc'],['du','brätst','prăjești'],['er/sie/es','brät','prăjește'],['wir','braten','prăjim'],['ihr','bratet','prăjiți'],['sie/Sie','braten','prăjesc']],
        praet: [['ich','briet','prăjeam'],['du','brietest','prăjeai'],['er/sie/es','briet','prăjea'],['wir','brieten','prăjeam'],['ihr','brietet','prăjeați'],['sie/Sie','brieten','prăjeau']],
        perf: [['ich','habe gebraten','am prăjit'],['du','hast gebraten','ai prăjit'],['er/sie/es','hat gebraten','a prăjit'],['wir','haben gebraten','am prăjit'],['ihr','habt gebraten','ați prăjit'],['sie/Sie','haben gebraten','au prăjit']]
    },
    {
        inf: 'backen', ro: 'a coace', typ: 'tare / neregulat', aux: 'haben', part: 'gebacken',
        praes: [['ich','backe','coc'],['du','backst','coci'],['er/sie/es','backt','coace'],['wir','backen','coacem'],['ihr','backt','coaceți'],['sie/Sie','backen','coc']],
        praet: [['ich','backte','coceam'],['du','backtest','coceai'],['er/sie/es','backte','cocea'],['wir','backten','coceam'],['ihr','backtet','coceați'],['sie/Sie','backten','coceau']],
        perf: [['ich','habe gebacken','am copt'],['du','hast gebacken','ai copt'],['er/sie/es','hat gebacken','a copt'],['wir','haben gebacken','am copt'],['ihr','habt gebacken','ați copt'],['sie/Sie','haben gebacken','au copt']],
        note: 'Variante: du bäckst / er bäckt (forme cu Umlaut, tot corecte). Präteritum vechi: buk (azi rar — modern: backte). Partizip neregulat: gebacken.'
    },
    {
        inf: 'schneiden', ro: 'a tăia', typ: 'tare / neregulat', aux: 'haben', part: 'geschnitten',
        praes: [['ich','schneide','tai'],['du','schneidest','tai'],['er/sie/es','schneidet','taie'],['wir','schneiden','tăiem'],['ihr','schneidet','tăiați'],['sie/Sie','schneiden','taie']],
        praet: [['ich','schnitt','tăiam'],['du','schnittest','tăiai'],['er/sie/es','schnitt','tăia'],['wir','schnitten','tăiam'],['ihr','schnittet','tăiați'],['sie/Sie','schnitten','tăiau']],
        perf: [['ich','habe geschnitten','am tăiat'],['du','hast geschnitten','ai tăiat'],['er/sie/es','hat geschnitten','a tăiat'],['wir','haben geschnitten','am tăiat'],['ihr','habt geschnitten','ați tăiat'],['sie/Sie','haben geschnitten','au tăiat']]
    },
    {
        inf: 'mischen', ro: 'a amesteca (a combina)', typ: 'slab / regulat', aux: 'haben', part: 'gemischt',
        praes: [['ich','mische','amestec'],['du','mischst','amesteci'],['er/sie/es','mischt','amestecă'],['wir','mischen','amestecăm'],['ihr','mischt','amestecați'],['sie/Sie','mischen','amestecă']],
        praet: [['ich','mischte','amestecam'],['du','mischtest','amestecai'],['er/sie/es','mischte','amesteca'],['wir','mischten','amestecam'],['ihr','mischtet','amestecați'],['sie/Sie','mischten','amestecau']],
        perf: [['ich','habe gemischt','am amestecat'],['du','hast gemischt','ai amestecat'],['er/sie/es','hat gemischt','a amestecat'],['wir','haben gemischt','am amestecat'],['ihr','habt gemischt','ați amestecat'],['sie/Sie','haben gemischt','au amestecat']]
    },
    {
        inf: 'rühren', ro: 'a mesteca (cu lingura)', typ: 'slab / regulat', aux: 'haben', part: 'gerührt',
        praes: [['ich','rühre','mestec'],['du','rührst','mesteci'],['er/sie/es','rührt','mestecă'],['wir','rühren','mestecăm'],['ihr','rührt','mestecați'],['sie/Sie','rühren','mestecă']],
        praet: [['ich','rührte','mestecam'],['du','rührtest','mestecai'],['er/sie/es','rührte','mesteca'],['wir','rührten','mestecam'],['ihr','rührtet','mestecați'],['sie/Sie','rührten','mestecau']],
        perf: [['ich','habe gerührt','am mestecat'],['du','hast gerührt','ai mestecat'],['er/sie/es','hat gerührt','a mestecat'],['wir','haben gerührt','am mestecat'],['ihr','habt gerührt','ați mestecat'],['sie/Sie','haben gerührt','au mestecat']]
    },
    {
        inf: 'schälen', ro: 'a curăța de coajă (a coji)', typ: 'slab / regulat', aux: 'haben', part: 'geschält',
        praes: [['ich','schäle','cojesc'],['du','schälst','cojești'],['er/sie/es','schält','cojește'],['wir','schälen','cojim'],['ihr','schält','cojiți'],['sie/Sie','schälen','cojesc']],
        praet: [['ich','schälte','cojeam'],['du','schältest','cojeai'],['er/sie/es','schälte','cojea'],['wir','schälten','cojeam'],['ihr','schältet','cojeați'],['sie/Sie','schälten','cojeau']],
        perf: [['ich','habe geschält','am cojit'],['du','hast geschält','ai cojit'],['er/sie/es','hat geschält','a cojit'],['wir','haben geschält','am cojit'],['ihr','habt geschält','ați cojit'],['sie/Sie','haben geschält','au cojit']]
    },
    {
        inf: 'würzen', ro: 'a condimenta', typ: 'slab / regulat', aux: 'haben', part: 'gewürzt',
        praes: [['ich','würze','condimentez'],['du','würzt','condimentezi'],['er/sie/es','würzt','condimentează'],['wir','würzen','condimentăm'],['ihr','würzt','condimentați'],['sie/Sie','würzen','condimentează']],
        praet: [['ich','würzte','condimentam'],['du','würztest','condimentai'],['er/sie/es','würzte','condimenta'],['wir','würzten','condimentam'],['ihr','würztet','condimentați'],['sie/Sie','würzten','condimentau']],
        perf: [['ich','habe gewürzt','am condimentat'],['du','hast gewürzt','ai condimentat'],['er/sie/es','hat gewürzt','a condimentat'],['wir','haben gewürzt','am condimentat'],['ihr','habt gewürzt','ați condimentat'],['sie/Sie','haben gewürzt','au condimentat']],
        note: 'Radical în -z → du würzt (NU würzst), er würzt.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#5A5147;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> er <strong>' + v.perf[2][1] + '</strong> · <em style="color:#5A5147;">' + v.perf[2][2] + '</em><br>' +
        '<small style="color:#5A5147;">Conjugi auxiliarul ca de obicei (ich habe, du hast, er hat...) + <strong>' + v.part + '</strong>.</small></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe din lecție</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt: auxiliar + participiu).<br>' +
        'Click pe un verb ca să-i vezi conjugarea. Instrument de <strong>referință</strong> (caută orice formă).' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Acesta e un INSTRUMENT DE CĂUTARE. La A1 înveți complet doar Präsens — Präteritum și Perfekt vin mai târziu în curs. Aici sunt doar ca să poți verifica ORICE formă când ai nevoie (ex: cum se conjugă braten). Verbele TARI sunt verificate pe PONS. 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : (v.typ.indexOf('aux') === 0 ? '#7c3aed' : '#047857');
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#F5F0E8;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });
    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
