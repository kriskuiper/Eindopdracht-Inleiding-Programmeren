/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// ====== start of script players =======

// ====== Student
let student = {
    name: 'Student',
    hp: 460
}

const naamSpeler = student.name;
var hpSpeler = student.hp;

function checkHpSpeler() {
    if (hpSpeler < 0 || hpSpeler == 0) {
        console.log('je hebt verloren...');
    }
}

checkHpSpeler();
setInterval(checkHpSpeler, 100);

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
        console.log('je hebt gewonnen!');
    }
}

checkHpFons();
setInterval(checkHpFons, 100);

naamFonsTekst.textContent = naamFons;

let fonsDenktNa = false; // vlag voor niet mogen gebruiken van aanvallen student

// ====== interactieve dingen
