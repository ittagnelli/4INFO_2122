function aggiungi_todo() {

    const table = document.getElementById("tabella");

    let Nome_todo = document.getElementById("in");

    let nome_todo = document.getElementById("in").value;

    let Priorita = document.getElementById("prio");

    let priorita = document.getElementById("prio").value;




    const tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    let in1 = document.createElement("p");

    in1.setAttribute("id", "task");

    let bottone = document.createElement("button");
    let bottone2 = document.createElement("button");

    let span = document.createElement("span");



    in1.setAttribute("type", "text");
    in1.innerHTML = Nome_todo.value;


    let freccia_priorita = document.createElement("span");

    if (Priorita.value == "high"){
        freccia_priorita.setAttribute("id", "freccia_alta");
        freccia_priorita.innerHTML = "arrow_upward";
        freccia_priorita.classList.add("material-icons");
    }

    else if (Priorita.value == "medium"){
            freccia_priorita.setAttribute("id", "freccia_media");
            freccia_priorita.innerHTML = "arrow_right_alt";
            freccia_priorita.classList.add("material-icons");
    }

    else
    {   freccia_priorita.setAttribute("id", "freccia_bassa");
        freccia_priorita.innerHTML = "arrow_downward";
        freccia_priorita.classList.add("material-icons");
    }


    bottone.setAttribute("onclick", "rimuovi(this)");
    bottone.innerHTML = "delete";
    bottone.classList.add("material-icons");
    bottone.append(span);


    
    td1.append(in1);

    bottone2.setAttribute("onclick", "sottolinea()");
    bottone2.innerHTML = "done_outline";
    bottone2.classList.add("material-icons");
    bottone2.append(bottone);
    
    td2.append(freccia_priorita);
    td3.append(bottone2);
    td4.append(bottone);

    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);

    table.append(tr);

    Nome_todo.value = "";//prende non il tag, ma il valore dentro al tag I è il contenitore, devo modificare il contenitore.
    Priorita.value = "";

}

function rimuovi(bottone) {
    let da_aggiungere = bottone.parentElement.parentElement;
    da_aggiungere.remove();
}

function sottolinea(){
    let spuntato = document.getElementById("task");
    spuntato.classList.add("barrato");
}


/*<span class="material-symbols-outlined">
arrow_upward
</span>*/

/*<span class="material-symbols-outlined">
arrow_right_alt
</span>*/