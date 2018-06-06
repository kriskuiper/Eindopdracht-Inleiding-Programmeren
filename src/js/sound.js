const sound = new Audio('sounds/wildpokemon.mp3');
sound.loop = true;
sound.muted = true; //deze weg halen tijdens eindopdracht

function speelMuziekjeAf() {
    sound.play();
}

window.addEventListener('load', speelMuziekjeAf);