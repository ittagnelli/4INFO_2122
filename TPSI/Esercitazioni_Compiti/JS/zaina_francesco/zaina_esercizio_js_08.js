function aggiungi_utente() {
    let table = document.getElementById("tabella");
    let note = document.getElementById("ToDo").value;
    let priority = document.getElementById("priority").value;
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let span = document.createElement("span"); 
    let bottone1 = document.createElement("button"); 
    let bottone2 = document.createElement("button");

    if(note != "") {
        td1.innerText =  note;
        if(priority == "bassa"){
            span.classList.add("material-icons");
            span.classList.add("bassa");
            span.innerText = "arrow_downward";
        }

        if(priority == "media"){
            span.classList.add("material-icons");
            span.classList.add("media");
            span.innerText = "arrow_forward";
        }

        if(priority == "alta"){
            span.classList.add("material-icons");
            span.classList.add("alta");
            span.innerText = "arrow_upward";
        }

        bottone1.classList.add("material-icons");
        bottone1.classList.add("fatto");
        bottone1.innerText = "done_outline";
        bottone1.setAttribute("onclick","fatto(this)");

        bottone2.classList.add("material-icons");
        bottone2.classList.add("elimina");
        bottone2.innerText = "delete";
        bottone2.setAttribute("onclick","elimina(this)");

        td3.append(bottone1);
        td4.append(bottone2);
        td2.append(span);
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        table.append(tr);
    }

    else {
        alert("non esistente");
    }
}                              

function elimina(val_todo){
    let linea = val_todo.parentElement.parentElement;
    linea.remove();
}
