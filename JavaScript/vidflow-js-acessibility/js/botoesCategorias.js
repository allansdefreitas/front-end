const botoesCategorias = document.querySelectorAll(".botao-categoria");

botoesCategorias.forEach((botao) => {
  botao.addEventListener("click", () => {
    const categoriaSelecionada = botao.getAttribute("name");

    associarPainel(categoriaSelecionada)
    filtrarPorCategoria(categoriaSelecionada);
    atualizarEstadosDosBotoes(categoriaSelecionada);
  });

  botao.addEventListener("keydown", changeFocusByKeyboard)
});

function associarPainel(categoriaSelecionada){
  console.log(categoriaSelecionada);
  const painelVideos = document.querySelector('[role="tabpanel"]');
  const idButton = document.querySelector(`[name="${categoriaSelecionada}"]`).id;

  painelVideos.setAttribute("aria-labelledby", idButton);
}

function filtrarPorCategoria(filtro) {
  const videos = document.querySelectorAll(".videos__item");

  for (const video of videos) {
    const categoria = video.querySelector(".categoria").textContent.toLowerCase();
    const valorFiltro = filtro.toLowerCase();

    const mostrarVideo = valorFiltro === 'tudo' || categoria.includes(valorFiltro);

    video.classList.toggle("escondido", !mostrarVideo);
  }
}

function atualizarEstadosDosBotoes(categoriaSelecionada) {
  botoesCategorias.forEach((botao) => {
    const botaoFoiSelecionado = botao.getAttribute("name") === categoriaSelecionada;

    botao.ariaSelected = botaoFoiSelecionado;
    let tabindexValue = 0;
    if(botaoFoiSelecionado === true){
      tabindexValue = 0;
    } else{
      tabindexValue = -1;
    }
    console.log(tabindexValue);
    botao.setAttribute("tabindex", tabindexValue);
    
    // botao.classList.toggle("selecionado", botaoFoiSelecionado);
  })
}

const tablist = document.querySelector('[role="tablist"]');

function changeFocusByKeyboard(event){

  const currentButton = event.target;
  let nextButton;
  
  event.preventDefault(); // Avoid that Arrows and Home or End move the tablist horizontally (Arrows) or the screen vertically (Home and End)
  
  if(event.key === "ArrowRight"){
    if(currentButton === tablist.lastElementChild){
       tablist.firstElementChild.focus();
    }

    nextButton = currentButton.nextElementSibling;

    nextButton.focus();

    // currentButton.setAttribute("tabindex", "-1");
    // nextButton.setAttribute("tabindex", "0");

  }else if(event.key === "ArrowLeft"){

    if(currentButton === tablist.firstElementChild){
      tablist.lastElementChild.focus();
    }else{
      nextButton = currentButton.previousElementSibling;
      nextButton.focus();

      // currentButton.setAttribute("tabindex", "-1");
      // nextButton.setAttribute("tabindex", "0");
    }
  }else if(event.key === "Home"){
    tablist.firstElementChild.focus();
  }else if(event.key === "End"){
    tablist.lastElementChild.focus();
  }

  nextButton.scrollIntoView({
    behavior: "smooth"
  });

}