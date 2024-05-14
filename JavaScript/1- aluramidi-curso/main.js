function playSongPom(){
    document.querySelector('#som_tecla_pom').play();
}

function playSongClap(){
    document.querySelector('#som_tecla_clap').play();
}

function playSongTim(){
    document.querySelector('#som_tecla_tim').play();
}

function playSongPuff(){
    document.querySelector('#som_tecla_puff').play();
}

function playSongSplash(){
    document.querySelector('#som_tecla_splash').play();
}

function playSongToim(){
    document.querySelector('#som_tecla_toim').play();
}

function playSongPsh(){
    document.querySelector('#som_tecla_psh').play();
}

function playSongTic(){
    document.querySelector('#som_tecla_tic').play();
}

function playSongTom(){
    document.querySelector('#som_tecla_tom').play();
}


const listOfKeys = document.querySelectorAll('.tecla');


listOfKeys[0].onclick = playSongPom;




