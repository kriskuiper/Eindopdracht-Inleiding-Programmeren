/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// ====== start of script players =======

// ====== Herlaad pagina functie
function herlaadPagina() {
    window.location.reload();
}

// ====== Verwissel de knoppen met een 'Opnieuw beginnen' button
function switchElements() {
    playerAttacks.classList.toggle('is-none');
    opnieuwBeginnen.classList.toggle('is-none');
}

// ====== Student
let student = {
    name: 'Student',
    hp: 460
}

const naamSpeler = student.name;
var hpSpeler = student.hp;

function checkHpSpeler() {
    if (hpSpeler < 0 || hpSpeler == 0) {
        // verander de hp standaard in 0
        hpSpelerGetal.textContent = 'HP 0';
        // speel defeatSound af en mute battlesound
        battleSound.muted = true;
        speelDefeatSound();
        //verander de tekst van de 'Kies je aanval' in 'Helaas, je hebt verloren van Fons...'
        playerMotivation.textContent = 'Helaas, je hebt verloren van Fons...';
        // verplaats de aanvallen met een 'opnieuw beginnen' button
        switchElements();
        // zorg ervoor dat de pagina herlaadt wanneer de gebruiker op de button opnieuwBeginnen drukt
        document.getElementById('opnieuwBeginnen').addEventListener('click', herlaadPagina);
    }
}

naamSpelerTekst.textContent = naamSpeler;

// ====== Fons
let fons = {
    name: 'Fons',
    hp: 640
}

const naamFons = fons.name;
var hpFons = fons.hp;

function checkHpFons() {
    if (hpFons < 0 || hpFons == 0) {
        // verander de hp standaard in 0
        hpFonsGetal.textContent = 'HP 0';
        //speel victorySound af
        battleSound.muted = true;
        speelVictorySound();
        //verander de tekst van de 'Fons gebruikt ... in 'je hebt de almachtige fons verslagen!'
        fonsAttack.textContent = 'Yes! Goed gedaan, je hebt de almachtige Fons verslagen.';
        //verander de tekst van de 'Kies je aanval' in 'Wil je opnieuw vechten?'
        playerMotivation.textContent = 'Wil je opnieuw vechten?'
        // verplaats de aanvallen met een 'opnieuw beginnen' button
        switchElements();
        // zorg ervoor dat de pagina herlaadt wanneer de gebruiker op de button opnieuwBeginnen drukt
        document.getElementById('opnieuwBeginnen').addEventListener('click', herlaadPagina);
    }
    else {
        setTimeout(kiesAanval, 700);
    }
}

naamFonsTekst.textContent = naamFons;

let fonsDenktNa = false; // vlag voor niet mogen gebruiken van aanvallen student

// ====== interactieve dingen
