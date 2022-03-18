function modifica_stile(){
    let a1 = document.getElementsByClassName("titoloL1");
    let a2 = document.getElementsByClassName("titoloL2");

    for(let i = 0; i<a1.length;i++){
        let element = a1[i];
        element.style.color="red";
    }

    for(let i =0; i<a2.length; i++){
        let element2 = a2[i];
        element2.style.color="blue";
        element2.style.backgroundColor="yellow";
        element2.style.fontSize ="40px";
        element2.innerHTML = element2.innerHTML.toUpperCase();
    }

    let l1 = document.getElementById("l1");
    let l2 = document.getElementById("l2");
    let l3 = document.getElementById("l3");
    let l4 = document.getElementById("l4");
    let l5 = document.getElementById("l5");
    let l6 = document.getElementById("l6");
    let l7 = document.getElementById("l7");
    let l8 = document.getElementById("l8");
    l1.style.color = "red";
    l4.style.color = "red";
    l2.style.backgroundColor = "lightgreen";
    l5.style.backgroundColor = "lightgreen";
    l8.style.backgroundColor = "lightgreen";
    l3.innerHTML = l3.innerHTML.toUpperCase();
    l3.style.backgroundColor = "lightbliue";
    l6.innerHTML = l6.innerHTML.toUpperCase();
    l7.style.fontStyle = "italic";
}