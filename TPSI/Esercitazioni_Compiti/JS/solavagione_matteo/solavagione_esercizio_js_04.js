function modifica_stile(){
    let t1 = document.getElementsByClassName("t1");
    let t2 = document.getElementsByClassName("t2");
    
    let p1 = document.getElementById("p1");
    let p2 = document.getElementById("p2");
    let p3 = document.getElementById("p3");
    let p4 = document.getElementById("p4");
    let p5 = document.getElementById("p5");
    let p6 = document.getElementById("p6");
    let p7 = document.getElementById("p7");
    let p8 = document.getElementById("p8");

    for(let i = 0; i < t1.length; i++){
        t1[i].style.color = "red";
    }

    
    for(let i = 0; i < t1.length; i++){
        t2[i].style.color = "blue";
        t2[i].style.background = "yellow";
        t2[i].style.fontSize = "40px";
        t2[i].innerHTML = t2[i].innerHTML.toUpperCase();
    }

    p1.style.color = "red";
    p4.style.color = "red";

    p2.style.background = "lightgreen";
    p5.style.background = "lightgreen";
    p8.style.background = "lightgreen";

    p3.innerHTML = p3.innerHTML.toUpperCase();
    p3.style.background = "lightblue";

    p6.innerHTML = p6.innerHTML.toUpperCase();

    p7.style.fontStyle = "italic";
}