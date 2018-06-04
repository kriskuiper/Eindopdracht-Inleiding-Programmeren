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

/* ====== koppel de aanvallen van de Student aan knoppen in de HTML
zodat de student een keuze kan maken welke aanval hij of zij wilt
uitvoeren */



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
        return 'Fons gebruikt ' + aanvallenFons[0].name + '.';
    }
    else if (keuze > 2 && keuze < 4) {
        aanvallenFons[1].valAan();
        hpSpelerGetal.textContent = hpSpeler; //zet de geüpdatete hp in de HTML
        return 'Fons gebruikt ' + aanvallenFons[1].name + '.';
    }
    else if (keuze > 4 && keuze < 6) {
        aanvallenFons[2].valAan();
        hpSpelerGetal.textContent = hpSpeler; //zet de geüpdatete hp in de HTML
        return 'Fons gebruikt ' + aanvallenFons[2].name + '.';
    }
    else if (keuze > 6 && keuze < 7) {
        aanvallenFons[3].valAan();
        hpSpelerGetal.textContent = hpSpeler; //zet de geüpdatete hp in de HTML
        return 'Fons gebruikt ' + aanvallenFons[3].name + '.';
    }
    else {
        return 'Fons doet even niets.'
    }
}