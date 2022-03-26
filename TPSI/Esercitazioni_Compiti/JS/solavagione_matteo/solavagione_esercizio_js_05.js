function aggiungi(){
    const table = document.getElementById("table");
    const nome = document.getElementById("nome").value;
    const media = document.getElementById("media").value;

    console.log(nome);
    console.log(media);
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");

    table.append(tr);
    td1.innerText = nome;
    td2.innerText = media;
    tr.append(td1);
    tr.append(td2);

}

function colora(){
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

function rimuovi(){
    let trs = document.getElementsByTagName("tr");
    const nome = document.getElementById("nome");
    for(let i = 0; i < trs.length; i++){
        console.log(trs[i].cells[0].innerHTML); // con cells accedo a tutti gli elementi della singola riga
        console.log(nome.value);
        if(trs[i].cells[0].innerHTML == nome.value){
            trs[i].remove();
            console.log("sto per cancellare");
        }
           
    }
}