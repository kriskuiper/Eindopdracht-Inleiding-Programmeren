const naamFonsTekst = document.getElementById('naamFons');
const naamSpelerTekst = document.getElementById('naamStudent');

const hpSpelerGetal = document.getElementById('hpSpeler');
const sterkteAanvalFons = document.getElementById('sterkteAanvalFons');
const vraag = document.getElementById('doeVraag');
const praten = document.getElementById('doePraten');
const absentie = document.getElementById('doeAbsentie');
const fest = document.getElementById('doeFest');

const hpFonsGetal = document.getElementById('hpFons');
const sterkteAanvalSpeler = document.getElementById('sterkteAanvalStudent');
const fonsAttack = document.getElementById('fonsAttack');

const playerMotivation = document.getElementById('playerMotivation');
const playerAttacks = document.getElementById('playerAttacks');
const opnieuwBeginnen = document.getElementById('opnieuwBeginnen');

const metadata = document.getElementById('metadata');

// zet de metadata in de footer
const metadataText = ['| Kris Kuiper', 'studentnummer', 'Klas: Zee', 'Inleiding Programmeren', 'F. van Kesteren', '13-06-2018'];
for (let i = 0; i < metadataText.length; i++) {
    const metadataPiece = document.createElement('p');
    metadataPiece.textContent = metadataText[i] + ' |';
    metadata.appendChild(metadataPiece);
}