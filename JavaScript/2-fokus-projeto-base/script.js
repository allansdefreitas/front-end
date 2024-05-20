const html = document.querySelector('html');

const buttonsList = document.querySelectorAll('.app__card-button');
const focoButton = document.querySelector('.app__card-button--foco');
const descansoCurtoButton = document.querySelector('.app__card-button--curto');
const descansoLongoButton = document.querySelector('.app__card-button--longo');
const appImage = document.querySelector('.app__image');

const timerButton = document.querySelector('.app__card-primary-button');
const timer = document.querySelector('.app__card-timer'); // or '#timer'
const appTitle = document.querySelector('.app__title');
const appTitleStrong = document.querySelector('.app__title-strong');

const timeFoco = 1500;
const timeDescansoCurto = 300;
const timeDescansoLongo = 900;

focoButton.addEventListener('click', ()=> {
    changeContext('foco');
})

descansoCurtoButton.addEventListener('click', ()=> {
    changeContext('descanso-curto');
})

descansoLongoButton.addEventListener('click', () => {
    changeContext('descanso-longo');
})



function changeContext(context){

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