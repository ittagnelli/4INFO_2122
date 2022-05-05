function sbarra(oggetto){
let tr = oggetto.parentElement.parentElement;
let td = tr.firstChild;
td.classList.toggle("sottolineato");
}
function elimina(oggetto){
    let linea = oggetto.parentElement.parentElement;
    linea.remove();
}
function aggiungi_utente(){
    let valore = document.getElementById("ToDo").value;
    let db_table = document.getElementById("tabella");
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    let bottone = document.createElement("button");
    let bottone1 = document.createElement("button");

    let span = document.createElement("span");
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");


db_table.append(tr);
td.innerText=valore;
tr.append(td);

span.classList.add("material-icons");
let valoreP = document.getElementById("priority").value;
console.log(valoreP);

if(valoreP == "bassa"){
span.innerText="south";
span.classList.add("frecciaV");
}else if (valoreP == "media"){
span.innerText="east";
span.classList.add("frecciaG")
}else if(valoreP == "alta"){
    span.innerText="north";
span.classList.add("frecciaR")
}

td1.append(span);
tr.append(td1);

span1.classList.add("material-icons");
span1.innerText="done_outline";

bottone.setAttribute("onclick", "sbarra(this)")
bottone.append(span1);
td2.append(bottone);
tr.append(td2);

span2.classList.add("material-icons");
span2.innerText="delete";

bottone1.setAttribute("onclick", "elimina(this)")
bottone1.append(span2);
td3.append(bottone1);
tr.append(td3);

}
