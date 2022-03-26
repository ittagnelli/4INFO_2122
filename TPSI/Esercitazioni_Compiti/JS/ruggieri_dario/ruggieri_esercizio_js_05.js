function add_studente(){
    let tabella = document.getElementById("tabella");
    let media = document.getElementById("media").value;
    let nome = document.getElementById("nome").value;
    let tr = document.createElement("tr");
    let tdnome = document.createElement("td");
    let tdmedia = document.createElement("td");
    tabella.append(tr);
    tdnome.innerText = nome;
    tdmedia.innerText = media;
    tdnome.className = "nome_str";
    tr.append(tdnome);
    tr.append(tdmedia);
}

function colora(){
    let trs = document.getElementsByTagName("tr");
    for(let i = 0; i < trs.length; i++){
        if(i % 2  == 1)
            trs[i].style.backgroundColor = "blue";
        else
            trs[i].style.backgroundColor = "red";
    }
}

function remove_studente(){
    let nome = document.getElementById("nome").value;
    let trs = document.getElementsByTagName("tr");
    let tds = document.getElementsByClassName("nome_str");
    let flag = 0;
    let trs_lenght = trs.length;
    for(let i = trs_lenght-1; i >= 0; i--){
        if(tds[i].innerText == nome){
            trs[i].remove();
            flag = 1;
        }
    }
    if(!flag)
        alert("Persona non presente nella tabella");
}
function start(){
    const body = document.body;
    let risultato = prompt("Come ti chiami", "Sostituisci con il tuo nome");
    let h1 = document.getElementsByTagName("h1");
    if(risultato && risultato != "Sostituisci con il tuo nome"){
        h1[0].innerText = "Benvenuto " + risultato;
    }
    else
        alert("L'utente non ha inserito il suo nome");


}