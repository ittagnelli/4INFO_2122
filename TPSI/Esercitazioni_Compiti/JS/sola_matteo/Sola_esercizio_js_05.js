function add_studente() {
    const tabella = document.getElementById("tabella");

    const nome_str = document.getElementById("nome").value;
    const media_str = document.getElementById("media").value;
    console.log("Media: " + media_str);
    console.log("Nome: " + nome_str);

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    tabella.append(tr);

    td1.innerText = nome_str;
    td2.innerText = media_str;
    tr.append(td1);
    tr.append(td2);
}

function add_colore(){
    const tr_s = document.getElementsByTagName("tr");
    for(let i = 0; i < tr_s.length; i++){
        if (i%2 == 0){
            tr_s[i].style.backgroundColor = "blue";
        }
        else 
            tr_s[i].style.backgroundColor = "red";
    }
}

function remove_studente(){
    let tr_s = document.getElementsByTagName("tr");
    const nome_str = document.getElementById("nome");

    for(let i = 0; i < tr_s.length; i++){
        console.log(tr_s[i].cells[0].innerHTML); // con cells accedo agli elementi della riga
        console.log(nome_str.value);
        if(tr_s[i].cells[0].innerHTML == nome_str.value){
            tr_s[i].remove();
            console.log("Studente da rimuovere");
        }  
    }
}
