function modifica_stile(){
    let titolo__1 = document.getElementsByClassName("titoloL1");
    let titolo__2 = document.getElementsByClassName("titoloL2");
    
    let par1 = document.getElementById("par1");
    let par2 = document.getElementById("par2");
    let par3 = document.getElementById("par3");
    let par4 = document.getElementById("par4");
    let par5 = document.getElementById("par5");
    let par6 = document.getElementById("par6");
    let par7 = document.getElementById("par7");
    let par8 = document.getElementById("par8");

    for(let i = 0; i < titolo__1.length; i++){
        titolo__1[i].style.color = "red";
    }

    
    for(let i = 0; i < titolo__1.length; i++){
        titolo__2[i].style.color = "blue";
        titolo__2[i].style.background = "yellow";
        titolo__2[i].style.fontSize = "40px";
        titolo__2[i].innerHTML = titolo__2[i].innerHTML.toUpperCase();
    }

    par1.style.color = "red";
    par4.style.color = "red";

    par2.style.background = "lightgreen";
    par5.style.background = "lightgreen";
    par8.style.background = "lightgreen";

    par3.innerHTML = par3.innerHTML.toUpperCase();
    par3.style.background = "lightblue";

    par6.innerHTML = par6.innerHTML.toUpperCase();

    par7.style.fontStyle = "italic";
}
