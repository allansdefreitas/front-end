const html = document.querySelector('html');

const focoButton = document.querySelector('.app__card-button--foco');
const descansoCurtoButton = document.querySelector('.app__card-button--curto');
const descansoLongoButton = document.querySelector('.app__card-button--longo');


focoButton.addEventListener('click', ()=> {
    html.setAttribute('data-contexto', 'foco')
})

descansoCurtoButton.addEventListener('click', ()=> {
    html.setAttribute('data-contexto', 'descanso-curto')
})

descansoLongoButton.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
})