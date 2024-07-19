const botoesCategorias = document.querySelectorAll(".botao-categoria");

botoesCategorias.forEach((botao) => {
  botao.addEventListener("click", () => {
    const categoriaSelecionada = botao.getAttribute("name");

    associarPainel(categoriaSelecionada)
    filtrarPorCategoria(categoriaSelecionada);
    atualizarEstadosDosBotoes(categoriaSelecionada);
  });

  // botao.addEventListener("keydown", changeFocusByKeyboard)
  botao.addEventListener("keydown", mudarFocoPorTeclado);
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
      nextButton = tablist.firstElementChild;
    }else{
      nextButton = currentButton.nextElementSibling;
    }
    // currentButton.setAttribute("tabindex", "-1");
    // nextButton.setAttribute("tabindex", "0");

  }else if(event.key === "ArrowLeft"){

    if(currentButton === tablist.firstElementChild){
      nextButton = tablist.lastElementChild;
    }else{
      nextButton = currentButton.previousElementSibling;

      // currentButton.setAttribute("tabindex", "-1");
      // nextButton.setAttribute("tabindex", "0");
    }
  }else if(event.key === "Home"){
    nextButton = tablist.firstElementChild;
  }else if(event.key === "End"){
    nextButton = tablist.lastElementChild;
  }
  
  nextButton.focus();
  nextButton.scrollIntoView({
    behavior: "smooth"
  });
  
  // console.log(nextButton);

  // if (nextButton) {
  //   nextButton.scrollIntoView({
  //     behavior: "smooth"
  //   });
  // }else{
  //   console.log(nextButton);
  // }

}

function mudarFocoPorTeclado(evento) {
  const botaoAtual = evento.target;
  let novoBotao;

  switch (evento.key) {
    case "ArrowRight":
      evento.preventDefault();
      if (botaoAtual === tablist.lastElementChild) {
        novoBotao = tablist.firstElementChild;
      } else {
        novoBotao = botaoAtual.nextElementSibling;
      }
      break;
    case "ArrowLeft":
      evento.preventDefault();
      if (botaoAtual === tablist.firstElementChild) {
        novoBotao = tablist.lastElementChild;
      } else {
        novoBotao = botaoAtual.previousElementSibling;
      }
      break;
    case "Home":
      novoBotao = tablist.firstElementChild;
      break;
    case "End":
      novoBotao = tablist.lastElementChild;
      break;
  }

  novoBotao.focus();
  novoBotao.scrollIntoView({
    behavior: "smooth"
  });
}

/* CÓDIGO DO INSTRUTOR: funcionando, mas sem navegação pelas teclas Home e End 
function mudarFocoPorTeclado(evento) {
  const botaoAtual = evento.target;

  if (evento.key === "ArrowRight") {
    if (botaoAtual === tablist.lastElementChild) {
      tablist.firstElementChild.focus();
    } else {
      botaoAtual.nextElementSibling.focus();
    }
  } else if (evento.key === "ArrowLeft") {
    if (botaoAtual === tablist.firstElementChild) {
      tablist.lastElementChild.focus();
    } else {
      botaoAtual.previousElementSibling.focus();
    }
  }
}
*/



/* CÓDIGO DO INSTRUTOR: com erro ainda

    function mudarFocoPorTeclado(evento) {
      const botaoAtual = evento.target;
      let novoBotao;
    
      switch (evento.key) {
        case "ArrowRight":
          evento.preventDefault();
          if (botaoAtual === tablist.lastElementChild) {
            novoBotao = tablist.firstElementChild;
          } else {
            novoBotao = botaoAtual.nextElementSibling;
          }
          break;
        case "ArrowLeft":
          evento.preventDefault();
          if (botaoAtual === tablist.firstElementChild) {
            novoBotao = tablist.lastElementChild;
          } else {
            novoBotao = botaoAtual.previousElementSibling;
          }
          break;
        case "Home":
          novoBotao = tablist.firstElementChild;
          break;
        case "End":
          novoBotao = tablist.lastElementChild;
          break;
      }
    
      novoBotao.focus();
      novoBotao.scrollIntoView({
        behavior: "smooth"
      });
    }

*/
