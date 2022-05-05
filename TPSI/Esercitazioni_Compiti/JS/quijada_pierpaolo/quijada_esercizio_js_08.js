function aggiungi() {
    let table = document.getElementById("tabella");
    let nota = document.getElementById("testo").value;
    let importanza = document.getElementById("importanza").value;
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let span = document.createElement("span"); 
    let bottone1 = document.createElement("button"); 
    let bottone2 = document.createElement("button");

    if(nota != "") {
        td1.innerText =  nota;
        if(importanza == "bassa"){
            span.classList.add("material-icons");
            span.classList.add("bassa");
            span.innerText = "arrow_downward";
        }

        if(importanza == "media"){
            span.classList.add("material-icons");
            span.classList.add("media");
            span.innerText = "arrow_forward";
        }

        if(importanza == "alta"){
            span.classList.add("material-icons");
            span.classList.add("alta");
            span.innerText = "arrow_upward";
        }

        bottone1.classList.add("material-icons");
        bottone1.classList.add("fatto");
        bottone1.innerText = "done_outline";
        bottone1.setAttribute("onclick","fatto(this)");

        bottone2.classList.add("material-icons");
        bottone2.classList.add("rimozione");
        bottone2.innerText = "delete";
        bottone2.setAttribute("onclick","rimozione(this)");

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
        alert("nota inesistente");
    }
}

function rimozione(oggetto){
    let linea = oggetto.parentElement.parentElement;
    linea.remove();
}

function fatto(oggetto){
    let linea = oggetto.parentElement.firstChild;
    linea.classList.toggle("fatto");
}
