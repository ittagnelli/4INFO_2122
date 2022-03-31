function add_studente() {
    const table = document.getElementById("studenti");
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const nome_str = document.getElementById("nome").value;
    const voto = document.getElementById("voto").value;
    td1.innerText = nome_str;
    td2.innerText = voto;
    table.append(tr);
    tr.append(td1);
    tr.append(td2);
}   

function colora() {
    let cont = document.getElementsByTagName("tr");
    for (let i=0; i<cont.length; i++){
        if(i%2==1)
            cont[i].style.backgroundColor = "red";
        else
            cont[i].style.backgroundColor = "blue";
    }
}

function rimozione() {
    let cont = document.getElementsByTagName("td");
    const studente = document.getElementById("nome").value;
    let rimuovi = document.getElementsByTagName("tr");
    for (let i=0; i<cont.length; i++){
        if(cont[i].innerText == studente)
            rimuovi[i].remove();
    }
}
