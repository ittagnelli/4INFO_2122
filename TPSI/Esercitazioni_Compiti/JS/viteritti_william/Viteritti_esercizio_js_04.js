function modifica_titolo(){

    let Titolo_uno = document.getElementsByClassName("Titolo_uno");
    let Titolo_due = document.getElementsByClassName("Titolo_due");


    
    for(let i = 0; i < Titolo_uno.length; i++) {
        let el = Titolo_uno[i];
        el.style.color = "red";
      }

      for(let j = 0; j <  Titolo_due.length; j++) {
        let el =Titolo_due[j];
        el.style.color = "blue";
        el.style.backgroundColor = "yellow";
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



    par1.style.color = "red";
    par4.style.color = "red";

    par2.style.backgroundColor = "lightgreen";
    par5.style.backgroundColor = "lightgreen";
    par8.style.backgroundColor = "lightgreen";

    par3.innerHTML = par3.innerHTML.toUpperCase();
    par3.style.backgroundColor = "lightblue";

    par6.innerHTML = par3.innerHTML.toUpperCase();

    par7.style.font = "italic";

    
}
