function modifica_stile() {
    let primoTit = document.getElementsByClassName("titoloL1");
    let secondoTit = document.getElementsByClassName("titoloL2");
    let primopar = document.getElementById("par1");
    let quartopar = document.getElementById("par4");
    let secondopar = document.getElementById("par2");
    let quintopar = document.getElementById("par5");
    let ottavopar = document.getElementById("par8");
    let terzopar = document.getElementById("par3");
    let sestopar = document.getElementById("par6");
    let settimopar = document.getElementById("par7");
    for(let i=0; i < primoTit.length; i++){
        let el = primoTit[i];
        el.style.color = "red"; 
    }

    for(let i=0; i < secondoTit.length; i++){
        let el = secondoTit[i];
        secondoTit[i].innerHTML = secondoTit[i].innerHTML.toUpperCase();
        el.style.color = "blue";
        el.style.backgroundColor = "yellow"; 
        el.style.fontSize = "40px";
    }

    primopar.style.color = "red";
    quartopar.style.color = "red";
    secondopar.style.backgroundColor = "lightgreen";
    quintopar.style.backgroundColor = "lightgreen";
    ottavopar.style.backgroundColor = "lightgreen";
    terzopar.style.textTransform = "uppercase";
    terzopar.style.backgroundColor = "lightblue";
    sestopar.style.textTransform = "uppercase";
    settimopar.style.fontStyle = "italic";

}
