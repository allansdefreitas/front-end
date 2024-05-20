const html = document.querySelector('html');

const buttonsList = document.querySelectorAll('.app__card-button');
const focoButton = document.querySelector('.app__card-button--foco');
const descansoCurtoButton = document.querySelector('.app__card-button--curto');
const descansoLongoButton = document.querySelector('.app__card-button--longo');
const appImage = document.querySelector('.app__image');

const timerButton = document.querySelector('#start-pause');
const timerButtonText = document.querySelector('#start-pause span');
const iconTimerButton = document.querySelector('.app__card-primary-butto-icon');

const appTimer = document.querySelector('.app__card-timer'); // or '#timer'
const appTitle = document.querySelector('.app__title');
const appTitleStrong = document.querySelector('.app__title-strong');

const toggleCheckBoxMusic = document.querySelector('#alternar-musica');

const songFoco = new Audio('/sons/luna-rise-part-one.mp3');
const songPlay = new Audio('/sons/play.wav');
const songPause = new Audio('/sons/pause.mp3');
const songEndTimer = new Audio('/sons/beep.mp3');

songPlay.volume = 0.3;
songPause.volume = 0.3;
songEndTimer.volume = 0.4;

songFoco.loop = true;

toggleCheckBoxMusic.addEventListener('change', ()=>{
    // console.log(song.currentTime);
    // console.log(song.volume);
    
    if(songFoco.paused){
        songFoco.play();
    }else{
        songFoco.pause();
    }
});

const timeFoco = 1500;
const timeDescansoCurto = 300;
const timeDescansoLongo = 900;

let elapsedTimeInSeconds = timeFoco;
let intervalId = null;

focoButton.addEventListener('click', ()=> {
    elapsedTimeInSeconds = timeFoco;
    changeContext('foco');
})

descansoCurtoButton.addEventListener('click', ()=> {
    elapsedTimeInSeconds = timeDescansoCurto;
    changeContext('descanso-curto');
})

descansoLongoButton.addEventListener('click', () => {
    elapsedTimeInSeconds = timeDescansoLongo;
    changeContext('descanso-longo');
})

function changeContext(context){
    showAppTimer();
    buttonsList.forEach(function(button){
        button.classList.remove("active");
    })
    
    html.setAttribute('data-contexto', context);
    appImage.setAttribute('src', `/imagens/${context}.png`); // using template string. Better than concatenate string!

    switch (context) {
        case "foco":
            appTitle.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            focoButton.classList.add("active");
            break;
        case "descanso-curto":
            appTitle.innerHTML = `Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            descansoCurtoButton.classList.add("active");
            break;
        case "descanso-longo":
            appTitle.innerHTML = `Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
            descansoLongoButton.classList.add("active");
            break;
    
        default:
            break;
    }
}

const countDown = () => {
    
    showAppTimer();
    elapsedTimeInSeconds -= 1;
    // console.log('Timer: ' + elapsedTimeInSeconds);
    
    if(elapsedTimeInSeconds <= 0){
        resetCountDown();
        alert("Finished time!");
        songEndTimer.play();
        return
    }
}

timerButton.addEventListener('click', startOrPauseCountDown);

function startOrPauseCountDown(){ 
    
    if(intervalId){ // If intervalId has a value (is not null)
        resetCountDown();
        songPause.play();
        return
    }else{
        songPlay.play();
        // timerButtonText.textContent = "Pausar";
        configureTimerButtonToPausar();
    }     

    intervalId = setInterval(countDown, 1000); // 1000 miliseconds = 1 second
}

function resetCountDown(){
    configureTimerButtonToComecar();
    clearInterval(intervalId); 
    intervalId = null;
}


function configureTimerButtonToComecar(){
    timerButtonText.textContent = "Começar";
    iconTimerButton.setAttribute('src', '/imagens/play_arrow.png');
}

function configureTimerButtonToPausar(){
    timerButtonText.textContent = "Pausar";
    iconTimerButton.setAttribute('src', '/imagens/pause.png');
}

function showAppTimer(){
    const time = new Date(elapsedTimeInSeconds * 1000);
    const timeFormated = time.toLocaleString('pt-Br', {minute: '2-digit', second: '2-digit'});

    appTimer.innerHTML = `${timeFormated}`;
}
showAppTimer();

/*
function changeContext(context){
    html.setAttribute('data-contexto', context);
    appImage.setAttribute('src', `/imagens/${context}.png`); // using template string. Better than concatenate string!

    switch (context) {
        case "foco":
            appTitle.innerHTML = `Otimize sua produtividade,`;
            appTitleStrong.innerHTML = "mergulhe no que importa.";
            break;

        case "descanso-curto":
            appTitle.innerHTML = `Que tal dar uma respirada?`;
            appTitleStrong.innerHTML = "Faça uma pausa curta!";
            break;
        case "descanso-longo":
            appTitle.innerHTML = `Hora de voltar à superfície.`;
            appTitleStrong.innerHTML = "Faça uma pausa longa.";
            break;
    
        default:
            break;
    }
}

*/