const html = document.querySelector('html');

const focoButton = document.querySelector('.app__card-button--foco');
const descansoCurtoButton = document.querySelector('.app__card-button--curto');
const descansoLongoButton = document.querySelector('.app__card-button--longo');
const appImage = document.querySelector('.app__image');


focoButton.addEventListener('click', ()=> {
    // html.setAttribute('data-contexto', 'foco');
    // appImage.setAttribute('src', '/imagens/foco.png');
    // appTitle.setAttribute
    changeContext('foco');
    

})

descansoCurtoButton.addEventListener('click', ()=> {
    // html.setAttribute('data-contexto', 'descanso-curto');
    // appImage.setAttribute('src', '/imagens/descanso-curto.png');
    changeContext('descanso-curto');
})

descansoLongoButton.addEventListener('click', () => {
    // html.setAttribute('data-contexto', 'descanso-longo');
    // appImage.setAttribute('src', '/imagens/descanso-longo.png');
    changeContext('descanso-longo');
})

const timerButton = document.querySelector('.app__card-primary-button');

const timer = document.querySelector('.app__card-timer'); // or '#timer'
const appTitle = document.querySelector('.app__title');


const timeFoco = 1500;
const timeDescansoCurto = 300;
const timeDescansoLongo = 900;

function changeContext(context){
    html.setAttribute('data-contexto', context);
    appImage.setAttribute('src', `/imagens/${context}.png`); // using template string. Better than concatenate string!
}

