function modifica_stile(){
    let level_one_tile = document.getElementsByClassName("titoloL1");
    let level_two_tile = document.getElementsByClassName("titoloL2");

    for(let i = 0; i<level_one_tile.length;i++){
        let element = level_one_tile[i];
        element.style.color="red";
    }

    for(let i =0; i<level_two_tile.length; i++){

        let element2 = level_two_tile[i];

        element2.style.color="blue";
        element2.style.backgroundColor="yellow";
        element2.style.fontSize ="40px";
        element2.innerHTML = element2.innerHTML.toUpperCase();
    }
    
    let par1 = document.getElementById("par1");
    let par2 = document.getElementById("par2");
    let par3 = document.getElementById("par3");
    let par4 = document.getElementById("par4");
    let par5 = document.getElementById("par5");
    let par6 = document.getElementById("par6");
    let par7 = document.getElementById("par7");
    let par8 = document.getElementById("par8");

    par1.style.color = "red";
    par4.style.color = "red";

    par2.style.backgroundColor = "lightgreen";
    par5.style.backgroundColor = "lightgreen";
    par8.style.backgroundColor = "lightgreen";


    par3.innerHTML = par3.innerHTML.toUpperCase();
    par3.style.backgroundColor = "lightbliue";

    par6.innerHTML = par6.innerHTML.toUpperCase();

    par7.style.fontStyle = "italic";
}