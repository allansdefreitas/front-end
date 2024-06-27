let lastFocusedElement;

function manageModalFocus(modalId){
    const modal = document.querySelector(`#${modalId}`);
    const modalElements = modal.querySelectorAll(
        'a, button, input, select, textarea, [tabaindex]:not([tabindex="-1"])'
    ); // do not count with tabindex -1

    const firstModalElement = modalElements[0];
    const lastModalElement = modalElements[modalElements.length - 1];

    firstModalElement.focus();

    
    // This piece of code simulates a cylce of focus inside the modal i.e. the focus cycle is restricted to the modal elements.
    modal.addEventListener("keydown", (event) => {
        if(event.key === "Tab"){

            // If the focus is on the first modal element and the ursers presses TAB + SHIFT the focus go to the last element
            if(event.shiftKey){
                if(document.activeElement === firstModalElement){
                    event.preventDefault();
                    lastModalElement.focus();
                }
            }else{
                // If the focus is on the last element and the next focus element is out of the modal, the focus go to the first modal element
                
                // Old solution. Unnecessary
                // if(document.activeElement === lastModalElement || modal.contains(document.activeElement) == false){
                if(document.activeElement === lastModalElement){
                    event.preventDefault(); // stop the normal processing of browser
                    firstModalElement.focus(); // focus on the first modal element
                    
                }
            }
        }
    });
}


function toggleModal(modalId, show){
    const modal = document.querySelector(`#${modalId}`);

    if(modal){

        if (show){
            lastFocusedElement = document.activeElement;
            modal.style.display =  "block";
            document.body.style.overflow = "hidden";
            manageModalFocus(modalId);

        }else{
            lastFocusedElement.focus();
            // same thing
            // lastFocusedElement && lastFocusedElement.focus();
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

}

document.addEventListener("keydown", (event) => {
    if(event.key === "Escape"){
        toggleModal("ver-modal-inscrito", false);

        document.querySelectorAll(".cabecalho__lista-item").forEach(item => {
            toggleSubMenu(item, false);
        });

        toggleModal("ver-modal-contato", false);

        toggleModal("ver-modal-enviado", false);
    }
})

function toggleSubMenu(item, show){
    const subMenu = item.querySelector(".submenu");

    if(subMenu){

        const elementAnchor = item.querySelector("a");
        const elementSpanArrowIcon = item.querySelector(".material-symbols-outlined.icone");

        // const dropDownExpandedIcon =  item.querySelector(".material-symbols-outlined icone");
        if(show){
            subMenu.style.display = "block"
        }else{
            subMenu.style.display = "none"
        }
        
        elementAnchor.setAttribute("aria-expanded", show);
        elementSpanArrowIcon.classList.toggle("active", show);
    }    
}
const listItems = document.querySelectorAll(".cabecalho__lista-item");

// Each item is an <ul> element
listItems.forEach(item => {
    //Add a mouseover event
    item.addEventListener("mouseover", () => toggleSubMenu(item, true));
    
    //Add a mouseout event
    item.addEventListener("mouseout", ()=> toggleSubMenu(item, false));

    // Add a click event
    item.addEventListener("click", ()=> {
        const subMenu = item.querySelector(".submenu");
        const isDisplayed = subMenu.style.display === "block";

        toggleSubMenu(item, !isDisplayed);
    });
})

/* Acordion 

*/

// function toggleAccordion(button) {
//     const isAlreadyOpen = button.getAttribute("aria-expanded") === "true";
  
//     document.querySelectorAll(".botao-acordeao").forEach((btn) => {
//       btn.setAttribute("aria-expanded", "false");
//       const content = btn.nextElementSibling;
//       content.classList.remove("expandido");
//       content.setAttribute("aria-hidden", "true");
//     });
  
//     if (!isAlreadyOpen) {
//       button.setAttribute("aria-expanded", "true");
      
//       const content = button.nextElementSibling;
//       content.classList.add("expandido");
      
//       content.setAttribute("aria-hidden", "false");
//     }
//   }
  
function toggleAccordion(button){

    const acordionContent = button.nextElementSibling;
    const isExpanded = acordionContent.classList.contains("expandido");
    // const ixExpanded = acordionContent.getAttribute("aria-hidden") === "true";


    document.querySelectorAll(".botao-acordeao").forEach(button => {
        button.setAttribute("aria-expanded", false);
        
        const content = button.nextElementSibling;
        content.setAttribute("aria-hidden", true);
        content.classList.remove("expandido");
    });

    if(isExpanded){
        acordionContent.classList.remove("expandido");
        button.setAttribute("aria-expanded", false);
        acordionContent.setAttribute("aria-hidden", true);
    }else{
        acordionContent.classList.add("expandido");
        button.setAttribute("aria-expanded", true);
        acordionContent.setAttribute("aria-hidden", false);
    }

}

document.querySelectorAll(".botao-acordeao").forEach(button =>{
    button.addEventListener("click", ()=> toggleAccordion(button));
})

document.querySelector(".btn-enviar").addEventListener("click", ()=>{
    toggleModal("ver-modal-contato", false);
    toggleModal("ver-modal-enviado", true);
});


// document.querySelector(".btn-fechar").addEventListener("click", ()=>{
//     toggleModal("ver-modal-enviado", false);
// });

