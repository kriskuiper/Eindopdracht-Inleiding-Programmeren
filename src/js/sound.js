// ====== start of script sounds ======

// ===== Geluid wanneer battle begint
const battleSound = new Audio('sounds/battle.mp3');
battleSound.loop = true;

function speelBattleSound() {
    battleSound.play();
}

window.addEventListener('load', speelBattleSound);

// ====== Geluid wanneer speler wint
const victorySound = new Audio('sounds/victory.mp3');

function speelVictorySound() {
    victorySound.play();
}

// ====== Geluid wanneer speler verliest
const defeatSound = new Audio('sounds/defeat.mp3');

function speelDefeatSound() {
    defeatSound.play();
}

/* Alle sound effects komen van:
https://downloads.khinsider.com/game-soundtracks/album/pokemon-gameboy-sound-collection
*/




