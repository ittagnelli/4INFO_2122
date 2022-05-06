function add(){
    let lista = document.getElementById("lista");  // assegno il ul a lista(in js) inizialmente è vuoto.

    let idpriorita = document.getElementById("priorita");   // assegno  priorita a idpriorita(in js), questa variabile conterrà la scelta effettuata nella selezione.
    let idselezione = document.getElementById("selezione"); // assegno selezione a idselezione(in js), questa variabile conterrà il testo inserito.


    if(idselezione.value != ""){    // questo if serve per controllare la presenza di un input fornito dall'utente.

    let testo = document.createElement("span");       // creo gli elementi in base alla mia necessità assegnandolo a varibili diverse in javascript.
    let priorita = document.createElement("span");
    let icona_fatto = document.createElement("span");
    let icona_tolgo = document.createElement("span");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let elemento = document.createElement("li");

    let nbs1 = document.createElement("span");    // creo delle varibili no-breaking-space assegnadole a nbs1, nbs2, nb3, in modo da gestire lo spazio tra gli elementi.
    let nbs2 = document.createElement("span");
    let nbs3 = document.createElement("span");

    nbs1.innerHTML = "&nbsp&nbsp&nbsp&nbsp";
    nbs2.innerHTML = "&nbsp&nbsp&nbsp";
    nbs3.innerHTML = "&nbsp&nbsp&nbsp&nbsp";

    testo.innerHTML = idselezione.value;    // inserisco il valore del testo dentro allo span(testo dichiarato in javascript precedentemente).

    elemento.append(testo);  // faccio un append degli elementi nella mia pagina HTML. (aggiungo ad elemento il contenuto di testo, varibile che contiene l'input dell'utente).
    elemento.append(nbs1);  //  faccio un append degli elementi nella mia pagina HTML. (aggiungo lo spazio alla li (elemento).

    priorita.classList.add("material-symbols-outlined");  // aggiungo allo span chiamanto (priorita) la classe che mi serve per l'assegnazione dell'icona.
    switch(idpriorita.value){   // per verificare lo stato della selezione eseguita dall'utente faccio uno switch doe in base alla scelta svolgo le istruzioni che mi servono.
        case "Alta":
            priorita.innerHTML = "north" ;   // inserisco come testo nello span "north"
            priorita.classList.add("rosso");   // aggiungo una classe allo span che contiene la priorita in modo da poter mostrare l'icona
            break;
        case "Bassa":
            priorita.innerHTML = "south" ;
            priorita.classList.add("verde");
            break;
        case "Media":
            priorita.innerHTML = "east";
            priorita.classList.add("arancione");
            break;
    }
    elemento.append(priorita);      // faccio un append degli elementi nella mia pagina HTML. (inserisco dentro alla <li> il contenuto dello span ( che contiene la classe e il nome dello span)
    elemento.append(nbs2);  //  faccio un append degli elementi nella mia pagina HTML. (aggiungo lo spazio alla li (elemento).

    // inizio a lavorare sul bottone FATTO
    icona_fatto.innerHTML = "done_outlined";
    icona_fatto.classList.add("material-symbols-outlined");
    icona_fatto.classList.add("bottoni");


    button1.setAttribute("onclick", "fatto(this)");

    button1.append(icona_fatto);
    elemento.append(button1);
    elemento.append(nbs3);


    // inizio a lavorare sul bottone DELETE
    icona_tolgo.innerHTML = "delete";
    icona_tolgo.classList.add("material-symbols-outlined");
    icona_tolgo.classList.add("bottoni");

    button2.setAttribute("onclick", "bidona(this)");

    button2.append(icona_tolgo);
    elemento.append(button2);

    lista.append(elemento);

    idpriorita.value = "Bassa";

    idselezione.value = "";
    }
    else alert("Inserire un elemento");
}

function fatto(bottone){
    let span = bottone.parentElement.firstChild;
    span.classList.toggle("done")

}

function bidona(bottone){
    let li = bottone.parentElement;
    li.remove();
}