function modifica_stile(){
    let obj_titolo1 = document.getElementsByClassName("titoloL1");
    let obj_titolo2 = document.getElementsByClassName("titoloL2");
    let par1 = document.getElementById("par1");
    let par2 = document.getElementById("par2");
    let par3 = document.getElementById("par3");
    let par4 = document.getElementById("par4");
    let par5 = document.getElementById("par5");
    let par6 = document.getElementById("par6");
    let par7 = document.getElementById("par7");
    let par8 = document.getElementById("par8");

    for(let i = 0; i < obj_titolo1.length; i++){
        console.log("Modifica titoli livello 1");
        obj_titolo1[i].style.color = "red";
    }
    
    for(let i = 0; i < obj_titolo2.length; i++){
        console.log("Modifica titoli livello 2");
        obj_titolo2[i].style.color = "red";
        obj_titolo2[i].style.background = "black";
        obj_titolo2[i].style.fontSize  = "28px";
        obj_titolo2[i].innerHTML = obj_titolo2[i].innerHTML.toUpperCase();
        console.log("inner HTML: " + obj_titolo2[i].innerHTML.toUpperCase());
    }

    par1.style.color = "bllue";
    par4.style.color = "blue";
    par2.style.background = "lightgreen";
    par5.style.background = "lightgreen";
    par8.style.background = "lightgreen";
    par3.style.background = "lightblue";
    par3.innerHTML = par3.innerHTML.toUpperCase();
    par6.innerHTML = par6.innerHTML.toUpperCase();
    par7.style.fontStyle = "italic";
}
