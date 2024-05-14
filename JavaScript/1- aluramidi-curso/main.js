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


// Add a value to a property. Store a function and not run it (to run, use the function name with '()' )
document.querySelector('.tecla_pom').onclick = playSongPom;
document.querySelector('.tecla_clap').onclick = playSongClap;

/* Another way */
const timButton = document.querySelector('.tecla_tim');
timButton.addEventListener('click', playSongTim);

document.querySelector('.tecla_puff').onclick = playSongPuff;
document.querySelector('.tecla_splash').onclick = playSongSplash;
document.querySelector('.tecla_toim').onclick = playSongToim;
document.querySelector('.tecla_psh').onclick = playSongPsh;
document.querySelector('.tecla_tic').onclick = playSongTic;
document.querySelector('.tecla_tom').onclick = playSongTom;


