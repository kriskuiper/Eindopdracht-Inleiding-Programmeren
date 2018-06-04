/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
// ====== start of script attacks =======

// ====== aanvallen Student
const aanvallenStudent = [
    // aanval 1
    {
        name: 'Vraag',
        sterkte: 30,
        valAan: function() {
            hpFons = hpFons - this.sterkte;
            return hpFons;
        }
    },
    // aanval 2
    {
        name: 'Erdoorheen praten',
        sterkte: 40,
        valAan: function() {
            hpFons = hpFons - this.sterkte;
            return hpFons;
        }
    },
    // aanval 3
    {
        name: 'Absentie',
        sterkte: 50,
        valAan: function() {
            hpFons = hpFons - this.sterkte;
            return hpFons;
        }
    },
    // aanval 4
    {
        name: 'Fest',
        sterkte: 100,
        valAan: function() {
            hpFons = hpFons - this.sterkte;
            return hpFons;
        }
    }
];

// ====== aanvallen Fons
const aanvallenFons = [
    // aanval 1
    {
        name: 'Correctie',
        sterkte: 30,
        valAan: function() {
            hpSpeler = hpSpeler - this.sterkte;
            return hpSpeler;
        }
    },
    // aanval 2
    {
        name: 'Uitleg',
        sterkte: 40,
        valAan: function() {
            hpSpeler = hpSpeler - this.sterkte;
            return hpSpeler;
        }
    },
    // aanval 3
    {
        name: 'Huiswerk',
        sterkte: 50,
        valAan: function() {
            hpSpeler = hpSpeler - this.sterkte;
            return hpSpeler;
        }
    },
    // aanval 4
    {
        name: 'Onverwachte toets',
        sterkte: 100,
        valAan: function() {
            hpSpeler = hpSpeler - this.sterkte;
            return hpSpeler;
        }
    }
];

// ====== bepaal je aanvalskeuze
function kiesAanval() {
    // kies een random getal
    let keuze = Math.random()*9;
    if (keuze < 2) {
        aanvallenFons[0].valAan();
        hpSpelerGetal.textContent = hpSpeler; //zet de geüpdatete hp in de HTML
        fonsAttack.textContent = 'Fons gebruikt ' + aanvallenFons[0].name + '.'; // zet de gebruikte aanval in de HTML
        return 'Fons gebruikt ' + aanvallenFons[0].name + '.';
    }
    else if (keuze > 2 && keuze < 4) {
        aanvallenFons[1].valAan();
        hpSpelerGetal.textContent = hpSpeler; //zet de geüpdatete hp in de HTML
        fonsAttack.textContent = 'Fons gebruikt ' + aanvallenFons[1].name + '.'; // zet de gebruikte aanval in de HTML
        return 'Fons gebruikt ' + aanvallenFons[1].name + '.';
    }
    else if (keuze > 4 && keuze < 6) {
        aanvallenFons[2].valAan();
        hpSpelerGetal.textContent = hpSpeler; //zet de geüpdatete hp in de HTML
        fonsAttack.textContent = 'Fons gebruikt ' + aanvallenFons[2].name + '.'; // zet de gebruikte aanval in de HTML
        return 'Fons gebruikt ' + aanvallenFons[2].name + '.';
    }
    else if (keuze > 6 && keuze < 7) {
        aanvallenFons[3].valAan();
        hpSpelerGetal.textContent = hpSpeler; //zet de geüpdatete hp in de HTML
        fonsAttack.textContent = 'Fons gebruikt ' + aanvallenFons[3].name + '.'; // zet de gebruikte aanval in de HTML
        return 'Fons gebruikt ' + aanvallenFons[3].name + '.';
    }
    else {
        return 'Fons doet even niets.'
    }
}

// ====== student doet aanvallen
// student gebruikt aanval 1
function doeVraag() {
    aanvallenStudent[0].valAan();
    hpFonsGetal.textContent = hpFons;
    setTimeout(kiesAanval, 600);
    fonsDenktNa = false;
}

document.getElementById('doeVraag').addEventListener('click', doeVraag);

// student gebruikt aanval 2
function doePraten() {
    aanvallenStudent[1].valAan();
    hpFonsGetal.textContent = hpFons;
    setTimeout(kiesAanval, 600);
    fonsDenktNa = false;
}

document.getElementById('doePraten').addEventListener('click', doePraten);

// student gebruikt aanval 3
function doeAbsentie() {
    aanvallenStudent[2].valAan();
    hpFonsGetal.textContent = hpFons;
    setTimeout(kiesAanval, 600);
    fonsDenktNa = false;
}

document.getElementById('doeAbsentie').addEventListener('click', doeAbsentie);

// student gebruikt aanval 4
function doeFest() {
    aanvallenStudent[3].valAan();
    hpFonsGetal.textContent = hpFons;
    setTimeout(kiesAanval, 600);
    fonsDenktNa = false;
}

document.getElementById('doeFest').addEventListener('click', doeFest);