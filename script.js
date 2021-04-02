console.log("caricata");

function cercato(){
    console.log("sto cercando");
}

const cerca = document.querySelector("header div#search div img");
cerca.addEventListener("click", cercato);
