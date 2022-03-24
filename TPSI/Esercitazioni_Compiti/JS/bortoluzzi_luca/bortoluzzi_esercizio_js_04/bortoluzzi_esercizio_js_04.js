function modifica_stile(){
    let tl_lv1 = document.getElementsByClassName("titoloL1");
    let tl_lv2 = document.getElementsByClassName("titoloL2");

    let par1 = document.getElementById("par1");
    let par2 = document.getElementById("par2");
    let par3 = document.getElementById("par3");
    let par4 = document.getElementById("par4");
    let par5 = document.getElementById("par5");
    let par6 = document.getElementById("par6");
    let par7 = document.getElementById("par7");
    let par8 = document.getElementById("par8");

    for(let i=0; i<tl_lv1.length; i++){
        let el = tl_lv1[i];
        el.style.color = "red";
    }

    for(let i=0; i<tl_lv2.length; i++){
        let el = tl_lv2[i];
        el.style.color = "blue";
        el.style.backgroundColor = "yellow";
        el.style.fontSize = "40px";
        el.innerHTML = el.innerHTML.toUpperCase();
    }

    
    par1.style.color = "red";
    par4.style.color = "red";
    par2.style.backgroundColor = "#90ee90";
    par5.style.backgroundColor = "#90ee90";
    par8.style.backgroundColor = "#90ee90";
    par3.innerHTML = par3.innerHTML.toUpperCase();
    par3.style.backgroundColor = "#00FFFF";
    par6.innerHTML = par6.innerHTML.toUpperCase();
    par7.style.fontStyle = "italic"; 


}