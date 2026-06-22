// ============================================
// TEORIE - In Mihais Küche (A1 · vocabular de sine stătător)
// Claudia Toth · Annettes Deutschkurs
// Teme: Verpackungen, Hauptgerichte, Suppen, Desserts, Küchengeräte, Verben
// REGULĂ: NU backticks, NU ghilimele interne care rup template literal!
// ============================================

const theoryHTML = `
    <!-- 0: Intro + notice diacritice -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>👋 1. Mihai ne primește în bucătăria restaurantului lui</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="andreea-note" style="margin-bottom: 14px;">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune (înainte să începem):</div>
                    <div class="text" style="font-style: normal;">„Nu ai tastatură germană? <strong>Niciun stres!</strong> La toate exercițiile poți scrie:
                        <ul style="margin: 6px 0 4px 18px; padding: 0;">
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ss</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ß</code></li>
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ae</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ä</code> &nbsp;|&nbsp; <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">oe</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ö</code> &nbsp;|&nbsp; <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ue</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ü</code></li>
                        </ul>
                        Sistemul acceptă <strong>ambele forme</strong> automat."</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>Bun venit în bucătărie!</h4>
                <p>Mihai e Koch (bucătar) și are un restaurant mic. Azi ne arată cum cumpără, cum gătește și ce vase folosește. Învățăm vocabular A1 esențial: <strong>ambalaje</strong> (cum ceri la magazin), <strong>feluri principale, supe, deserturi</strong>, <strong>ustensile</strong> și <strong>verbe de bucătărie</strong>.</p>
                <p>E o fișă de vocabular — fiecare cuvânt vine <strong>cu articol și cu traducere</strong>. Folosește-o ca dicționar tematic + exersează cu exercițiile și flashcards-urile.</p>
            </div>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/andreea.png" alt="Andreea" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Andreea</div>
                        <div class="dialog-text">Mihai, was kochst du heute?
                            <span class="translation">Mihai, ce gătești azi?</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/mihai.png" alt="Mihai" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Mihai (Koch)</div>
                        <div class="dialog-text">Heute mache ich eine Gemüsesuppe, ein Schnitzel und als Nachtisch einen Apfelstrudel.
                            <span class="translation">Azi fac o supă de legume, un șnițel și ca desert un ștrudel cu mere.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>🎯 Ce vei putea face la finalul fișei</h4>
                <ul style="margin-left: 18px;">
                    <li>Să ceri corect la magazin: <strong>eine Flasche Wasser, eine Tafel Schokolade...</strong></li>
                    <li>Să denumești <strong>feluri principale, supe și deserturi</strong> tipice germane</li>
                    <li>Să numești <strong>ustensilele și vasele</strong> din bucătărie</li>
                    <li>Să folosești <strong>verbele de gătit</strong> (kochen, braten, backen, schneiden...)</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 1: Verpackungen -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>📦 2. Verpackungen — ambalaje (cum ceri la magazin)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-verpackungen.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>📦 Cele 12 ambalaje (Verpackungen)</h4>
                <p>În germană spui ÎNTÂI ambalajul, apoi produsul (fără „de"): <em>eine Flasche Wasser</em> = o sticlă (de) apă.</p>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Traducere RO</th><th>Exemplu</th></tr>
                    <tr><td><strong>eine Packung</strong></td><td>un pachet</td><td><em style="color:#5A5147;">eine Packung Müsli / Zucker</em></td></tr>
                    <tr><td><strong>ein Sack</strong></td><td>un sac</td><td><em style="color:#5A5147;">ein Sack Kartoffeln</em></td></tr>
                    <tr><td><strong>eine Flasche</strong></td><td>o sticlă</td><td><em style="color:#5A5147;">eine Flasche Wasser / Limonade</em></td></tr>
                    <tr><td><strong>ein Netz</strong></td><td>o plasă</td><td><em style="color:#5A5147;">ein Netz Zitronen / Zwiebeln</em></td></tr>
                    <tr><td><strong>eine Dose</strong></td><td>o cutie / conservă</td><td><em style="color:#5A5147;">eine Dose Tomaten / Limonade</em></td></tr>
                    <tr><td><strong>eine Tüte</strong></td><td>o pungă</td><td><em style="color:#5A5147;">eine Tüte Chips / Gummibärchen</em></td></tr>
                    <tr><td><strong>eine Kiste</strong></td><td>o ladă</td><td><em style="color:#5A5147;">eine Kiste Bier / Orangen</em></td></tr>
                    <tr><td><strong>eine Tafel</strong></td><td>o tabletă</td><td><em style="color:#5A5147;">eine Tafel Schokolade</em></td></tr>
                    <tr><td><strong>ein Glas</strong></td><td>un borcan</td><td><em style="color:#5A5147;">ein Glas Marmelade / Gurken</em></td></tr>
                    <tr><td><strong>eine Tube</strong></td><td>un tub</td><td><em style="color:#5A5147;">eine Tube Senf / Zahnpasta</em></td></tr>
                    <tr><td><strong>ein Becher</strong></td><td>un păhărel</td><td><em style="color:#5A5147;">ein Becher Joghurt / Pudding</em></td></tr>
                    <tr><td><strong>eine Schale</strong></td><td>o caserolă / un coș</td><td><em style="color:#5A5147;">eine Schale Erdbeeren / Himbeeren</em></td></tr>
                </table>
            </div>
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„Capcană clasică pentru români: NU spui „eine Flasche VON Wasser". În germană se lipesc direct: <strong>eine Flasche Wasser</strong>. La fel: eine Tafel Schokolade, ein Glas Marmelade. 🦋"</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 2: Hauptgerichte -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🍽️ 3. Hauptgerichte — feluri principale</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-hauptgerichte.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>🍽️ Felurile principale din meniul lui Mihai</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Traducere RO</th></tr>
                    <tr><td><strong>das Schnitzel · die Schnitzel</strong></td><td><em style="color:#5A5147;">șnițelul · șnițelele (pl identic)</em></td></tr>
                    <tr><td><strong>die Bratwurst · die Bratwürste</strong></td><td><em style="color:#5A5147;">cârnatul · cârnații prăjiți</em></td></tr>
                    <tr><td><strong>das Gulasch</strong> (substantiv nenumărabil)</td><td><em style="color:#5A5147;">gulașul (fără plural — fel de mâncare)</em></td></tr>
                    <tr><td><strong>der Braten · die Braten</strong></td><td><em style="color:#5A5147;">friptura · fripturile (la cuptor; pl identic)</em></td></tr>
                    <tr><td><strong>das Kartoffelpüree</strong> (substantiv nenumărabil)</td><td><em style="color:#5A5147;">piureul de cartofi (fără plural)</em></td></tr>
                    <tr><td><strong>die Nudeln</strong> (substantiv plural tantum)</td><td><em style="color:#5A5147;">pastele / tăițeii (DE: doar plural)</em></td></tr>
                    <tr><td><strong>der Reis</strong> (substantiv nenumărabil)</td><td><em style="color:#5A5147;">orezul (fără plural — substanță)</em></td></tr>
                    <tr><td><strong>der Eintopf · die Eintöpfe</strong></td><td><em style="color:#5A5147;">tocana · tocanele (mâncare la o oală)</em></td></tr>
                    <tr><td><strong>das Hähnchen · die Hähnchen</strong></td><td><em style="color:#5A5147;">puiul · puii fripți (pl identic)</em></td></tr>
                    <tr><td><strong>die Pommes</strong> (substantiv plural tantum)</td><td><em style="color:#5A5147;">cartofii prăjiți (DE: doar plural)</em></td></tr>
                </table>
            </div>
        </div>
    </div>

    <!-- 3: Suppen -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🍲 4. Suppen — supe</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-suppen.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>🍲 Supele (toate sunt feminine: die ...suppe)</h4>
                <p>Se formează din ingredient + Suppe: Gemüse + Suppe = Gemüsesuppe.</p>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Traducere RO</th></tr>
                    <tr><td><strong>die Gemüsesuppe · die Gemüsesuppen</strong></td><td><em style="color:#5A5147;">supa · supele de legume</em></td></tr>
                    <tr><td><strong>die Tomatensuppe · die Tomatensuppen</strong></td><td><em style="color:#5A5147;">supa · supele de roșii</em></td></tr>
                    <tr><td><strong>die Hühnersuppe · die Hühnersuppen</strong></td><td><em style="color:#5A5147;">supa · supele de pui</em></td></tr>
                    <tr><td><strong>die Kartoffelsuppe · die Kartoffelsuppen</strong></td><td><em style="color:#5A5147;">supa · supele de cartofi</em></td></tr>
                    <tr><td><strong>die Nudelsuppe · die Nudelsuppen</strong></td><td><em style="color:#5A5147;">supa · supele cu tăiței</em></td></tr>
                    <tr><td><strong>die Linsensuppe · die Linsensuppen</strong></td><td><em style="color:#5A5147;">supa · supele de linte</em></td></tr>
                </table>
            </div>
        </div>
    </div>

    <!-- 4: Nachtisch / Desserts -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🍰 5. Nachtisch — deserturi</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-nachtisch.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>🍰 Deserturi (der Nachtisch = desertul)</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Traducere RO</th></tr>
                    <tr><td><strong>das Eis</strong> (substantiv nenumărabil în uz comun)</td><td><em style="color:#5A5147;">înghețata (pluralul „die Eise" rar — pentru tipuri specifice)</em></td></tr>
                    <tr><td><strong>der Kuchen · die Kuchen</strong></td><td><em style="color:#5A5147;">prăjitura · prăjiturile / tortul · torturile (pl identic)</em></td></tr>
                    <tr><td><strong>der Apfelstrudel · die Apfelstrudel</strong></td><td><em style="color:#5A5147;">ștrudelul · ștrudelele cu mere (pl identic)</em></td></tr>
                    <tr><td><strong>der Pudding · die Puddings</strong></td><td><em style="color:#5A5147;">budinca · budincile / crema · cremele</em></td></tr>
                    <tr><td><strong>der Obstsalat · die Obstsalate</strong></td><td><em style="color:#5A5147;">salata · salatele de fructe</em></td></tr>
                    <tr><td><strong>der Pfannkuchen · die Pfannkuchen</strong></td><td><em style="color:#5A5147;">clătita · clătitele (pl identic)</em></td></tr>
                    <tr><td><strong>der Keks · die Kekse</strong></td><td><em style="color:#5A5147;">biscuitele · biscuiții</em></td></tr>
                    <tr><td><strong>die Schokolade · die Schokoladen</strong></td><td><em style="color:#5A5147;">ciocolata · ciocolatele (Pl pentru tipuri/sortimente)</em></td></tr>
                </table>
            </div>
        </div>
    </div>

    <!-- 5: Küchengeräte & Geschirr -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🍳 6. Küchengeräte & Geschirr — ustensile și vase</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-5')" id="btn-audio-5">▶</button>
                    <audio id="audio-5" preload="none"><source src="audio/06-kuechengeraete.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>🍳 Ustensile și vase (cu articol — învață-le așa!)</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Traducere RO</th></tr>
                    <tr><td><strong>der Topf · die Töpfe</strong></td><td><em style="color:#5A5147;">oala · oalele</em></td></tr>
                    <tr><td><strong>die Pfanne · die Pfannen</strong></td><td><em style="color:#5A5147;">tigaia · tigăile</em></td></tr>
                    <tr><td><strong>das Messer · die Messer</strong></td><td><em style="color:#5A5147;">cuțitul · cuțitele (pl identic)</em></td></tr>
                    <tr><td><strong>die Gabel · die Gabeln</strong></td><td><em style="color:#5A5147;">furculița · furculițele</em></td></tr>
                    <tr><td><strong>der Löffel · die Löffel</strong></td><td><em style="color:#5A5147;">lingura · lingurile (pl identic)</em></td></tr>
                    <tr><td><strong>der Teller · die Teller</strong></td><td><em style="color:#5A5147;">farfuria · farfuriile (pl identic)</em></td></tr>
                    <tr><td><strong>die Tasse · die Tassen</strong></td><td><em style="color:#5A5147;">ceașca · cestile</em></td></tr>
                    <tr><td><strong>das Glas · die Gläser</strong></td><td><em style="color:#5A5147;">paharul · paharele</em></td></tr>
                    <tr><td><strong>der Herd · die Herde</strong></td><td><em style="color:#5A5147;">aragazul · aragazurile</em></td></tr>
                    <tr><td><strong>der Backofen · die Backöfen</strong></td><td><em style="color:#5A5147;">cuptorul · cuptoarele</em></td></tr>
                    <tr><td><strong>der Kühlschrank · die Kühlschränke</strong></td><td><em style="color:#5A5147;">frigiderul · frigiderele</em></td></tr>
                    <tr><td><strong>das Schneidebrett · die Schneidebretter</strong></td><td><em style="color:#5A5147;">tocătorul · tocătoarele</em></td></tr>
                </table>
            </div>
        </div>
    </div>

    <!-- 6: Verben in der Küche + sumar -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(6)">
            <span>🔪 7. Verben in der Küche — verbe de gătit + sumar</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-6">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-6')" id="btn-audio-6">▶</button>
                    <audio id="audio-6" preload="none"><source src="audio/07-verben-sumar.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>🔪 Verbele de bucătărie (verbe slabe)</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Traducere RO</th><th>Exemplu (Mihai)</th></tr>
                    <tr><td><strong>kochen</strong></td><td>a fierbe / a găti</td><td><em style="color:#5A5147;">Mihai kocht eine Suppe.</em></td></tr>
                    <tr><td><strong>braten</strong></td><td>a prăji</td><td><em style="color:#5A5147;">Er brät ein Schnitzel.</em></td></tr>
                    <tr><td><strong>backen</strong></td><td>a coace</td><td><em style="color:#5A5147;">Er backt einen Kuchen.</em></td></tr>
                    <tr><td><strong>schneiden</strong></td><td>a tăia</td><td><em style="color:#5A5147;">Er schneidet das Gemüse.</em></td></tr>
                    <tr><td><strong>mischen</strong></td><td>a amesteca (a combina)</td><td><em style="color:#5A5147;">Er mischt den Salat.</em></td></tr>
                    <tr><td><strong>rühren</strong></td><td>a amesteca (cu lingura)</td><td><em style="color:#5A5147;">Er rührt die Soße.</em></td></tr>
                    <tr><td><strong>schälen</strong></td><td>a curăța de coajă</td><td><em style="color:#5A5147;">Er schält die Kartoffeln.</em></td></tr>
                    <tr><td><strong>würzen</strong></td><td>a condimenta</td><td><em style="color:#5A5147;">Er würzt das Fleisch.</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>🎯 Sumar — ce ai învățat</h4>
                <ol style="margin-left: 18px;">
                    <li><strong>12 ambalaje</strong>: eine Flasche Wasser, eine Tafel Schokolade... (fără „von"!)</li>
                    <li><strong>Feluri principale</strong>: Schnitzel, Gulasch, Braten, Eintopf...</li>
                    <li><strong>Supe</strong>: toate „die ...suppe" (Gemüse-, Tomaten-, Hühnersuppe...)</li>
                    <li><strong>Deserturi</strong>: Eis, Kuchen, Apfelstrudel, Pudding...</li>
                    <li><strong>Ustensile + verbe</strong>: der Topf, die Pfanne, das Messer · kochen, braten, backen, schneiden</li>
                </ol>
                <p style="margin-top: 12px; text-align: center; font-weight: bold; color: #065f46;">Acum poți cumpăra, comanda și vorbi despre mâncare în germană. 🍽️🎉</p>
            </div>
        </div>
    </div>

    <!-- ===== SCHREIBWERKSTATT — Trimite textul Claudiei ===== -->
    <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 2px solid #10B981; border-radius: 14px; padding: 24px 22px; margin: 26px 0 8px; text-align: center; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.12);">
        <div style="font-size: 2.2rem; margin-bottom: 4px;">✍️</div>
        <h4 style="color: #065f46; font-size: 1.2rem; margin: 0 0 8px; font-weight: bold;">Schreibwerkstatt — vrei să-ți corectez textul?</h4>
        <p style="color: #047857; font-size: 0.95rem; margin: 0 0 16px; max-width: 540px; margin-left: auto; margin-right: auto; line-height: 1.5;">
            Scrie o listă de cumpărături sau descrie ce e în bucătăria lui Mihai — alimente și ambalaje (eine Packung, eine Flasche, eine Dose...). Min. 50 cuvinte. Îți răspund personal pe email. 🦋
        </p>
        <a href="https://forms.gle/yhQkgJDSUVpQGkpk7" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #10B981; color: white; padding: 13px 30px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1rem; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);">
            Trimite textul Claudiei →
        </a>
        <p style="color: #5A5147; font-size: 0.78rem; margin-top: 12px; font-style: italic;">
            ʚଓ Răspuns personal pe email · Nu uita să-ți treci adresa de email în formular
        </p>
    </div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;

function toggleSubSection(index) {
    const content = document.getElementById('sub-section-' + index);
    const arrow = document.querySelectorAll('.sub-arrow')[index];
    if (content) content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}

function toggleAudio(event, audioId) {
    event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = document.getElementById('btn-' + audioId);
    if (!audio || !btn) return;
    if (audio.paused) {
        document.querySelectorAll('audio').forEach(a => { if (a !== audio) { a.pause(); a.currentTime = 0; } });
        document.querySelectorAll('.audio-btn').forEach(b => b.textContent = '▶');
        audio.play();
        btn.textContent = '⏸';
        audio.onended = () => { btn.textContent = '▶'; };
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
}
