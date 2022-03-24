function modifica_stile(){
    let titoloL1 = document.getElementsByClassName("titoloL1");
    let titoloL2 = document.getElementsByClassName("titoloL2");
    
    for(let i = 0; i < titoloL1.length; i++) {
        let el = titoloL1[i];
        el.style.color = "red";
    }

    for(let j = 0; j < titoloL2.length; j++) {
        let el = titoloL2[j];
        el.style.color = "blue";
        el.style.backgroundColor = "yellow";
        el.style.fontSize = "40px";
        el.innerHTML = el.innerHTML.toUpperCase();
    }

    let par1 = document.getElementById("par1");
    let par2 = document.getElementById("par2");
    let par3 = document.getElementById("par3");
    let par4 = document.getElementById("par4");
    let par5 = document.getElementById("par5");
    let par6 = document.getElementById("par6");
    let par7 = document.getElementById("par7");
    let par8 = document.getElementById("par8");

    par2.style.backgroundColor = "lightgreen";
    par5.style.backgroundColor = "lightgreen";
    par8.style.backgroundColor = "lightgreen";

    par1.style.color = "red";
    par4.style.color = "red";

    par7.style.fontStyle = "italic";

    par3.innerHTML = par3.innerHTML.toUpperCase();
    par3.style.backgroundColor = "lightblue";

    par6.innerHTML = par6.innerHTML.toUpperCase();
}