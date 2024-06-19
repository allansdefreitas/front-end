function toggleSubMenu(item, show){
    const subMenu = item.querySelector(".submenu");

    if(subMenu){

        if(show){
            subMenu.style.display = "block"
        }else{
            subMenu.style.display = "none"
        }
    }
        // const propertyValue = show ? "block" : "none";
        // subMenu.style.display = propertyValue;
    
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


