function add_studente(){
    console.log("La funzione è stata chiamata");
    let tabella = document.getElementById("tabella");
    let media = document.getElementById("media").value;
    console.log("media: " + media);
    let nome = document.getElementById("nome").value;
    console.log("nome: " + nome);
    let tr = document.createElement("tr");
    let tdnome = document.createElement("td");
    let tdmedia = document.createElement("td");
    tabella.append(tr);
    tdnome.innerText = nome;
    tdmedia.innerText = media;
    tr.append(tdnome);
    tr.append(tdmedia);
}

function colora(){
    let trs = document.getElementsByTagName("tr");
    console.log(trs);
    console.log(trs.length);
    for(let i = 0; i < trs.length; i++){
        if(i % 2  == 1)
            trs[i].style.backgroundColor = "blue";
        else
            trs[i].style.backgroundColor = "red";
    }
}