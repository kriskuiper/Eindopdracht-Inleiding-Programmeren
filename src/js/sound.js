const battleSound = new Audio('sounds/battle.mp3');
battleSound.loop = true;

function speelBattleSound() {
    battleSound.play();
}

window.addEventListener('load', speelBattleSound);

const victorySound = new Audio('sounds/victory.mp3');
victorySound.loop = true;

function speelVictorySound() {
    victorySound.play();
}

const defeatSound = new Audio('sounds/defeat.mp3');
defeatSound.loop = true;

function speelDefeatSound() {
    defeatSound.play();
}





