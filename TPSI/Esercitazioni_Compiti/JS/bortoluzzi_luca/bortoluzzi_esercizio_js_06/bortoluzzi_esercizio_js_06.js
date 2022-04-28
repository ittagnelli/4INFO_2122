function add(){
    const tabella = document.getElementById("table");
    const nome = document.getElementById("nome").value;

    console.log(nome);
    console.log(media);
    let riga = document.createElement("tr");
    let td1 = document.createElement("td");

    table.append(riga);
    td1.innerText = nome;
    riga.append(td1);

}

function color(){
    let trs = document.getElementsByTagName("tr");
    console.log(trs);
    console.log(trs.length);
    for(let i = 0; i < trs.length; i++){
        if(i%2==1)
            trs[i].style.backgroundColor = "red";
        else
            trs[i].style.backgroundColor = "blue";
    }
}

function remove(){
    let trs = document.getElementsByTagName("tr");
    const nome = document.getElementById("nome");
    for(let i = 0; i < trs.length; i++){
        console.log(trs[i].cells[0].innerHTML); 
        console.log(nome.value);
        if(trs[i].cells[0].innerHTML == nome.value){
            trs[i].remove();
            console.log("cancellato");
        }
           
    }
}

function bold(){
    let trs = document.getElementsByTagName("tr");
    console.log(trs);
    console.log(trs.length);
    for(let i = 0; i < trs.length; i++){
       trs[i].classList.add("grassetto");
    }
}

function blu(){
    let trs = document.getElementsByTagName("tr");
    console.log(trs);
    console.log(trs.length);
    for(let i = 0; i < trs.length; i++){
       trs[i].classList.add("blu");
    }
}

function border(){
    let trs = document.getElementsByTagName("tr");
    console.log(trs);
    console.log(trs.length);
    for(let i = 0; i < trs.length; i++){
       trs[i].classList.toggle("bordo");
    }
}

