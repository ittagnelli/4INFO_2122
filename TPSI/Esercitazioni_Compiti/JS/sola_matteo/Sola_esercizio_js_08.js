let incremental_value = 0;

function aggiungi(){  
    let valore_opzione = document.getElementById("nome_opzione").value;
    let priorita = document.getElementById("priorita").value;

    if(valore_opzione.length>0){
        let tabella_lista = document.getElementById("table");

        let trs = document.createElement("tr");
        let tds = document.createElement("td");
        trs.setAttribute('id','table-' + incremental_value);
        incremental_value++;

        let p_element = document.createElement("p");
        p_element.classList.add("testo");

        p_element.innerText = valore_opzione;
        tds.append(p_element);
        trs.append(tds);

        props = [
            {priority:"bassa", arrow_orientation:"south"}, 
            {priority:"media",arrow_orientation:"east"},
            {priority:"alta", arrow_orientation:"north"}
        ];

        let found = props.find(element => {return element.priority === priorita});
        
        let span_element = document.createElement("span");
        span_element.classList.add("material-icons", found.priority);
        span_element.innerText = found.arrow_orientation;

        let td_icons = document.createElement("td");
        td_icons.append(span_element);
        trs.append(td_icons);
        
        let check_element = document.createElement("span");
        check_element.classList.add("material-icons", "grigio");
        check_element.innerText = "done_outline";
        check_element.setAttribute('onclick', 'verifica("'+valore_opzione+'")');
        

        let td_done = document.createElement("td");
        td_done.append(check_element);
        trs.append(td_done);

        let bin_element = document.createElement("span");
        bin_element.classList.add("material-icons", "grigio");
        bin_element.innerText = "delete";
        bin_element.setAttribute('onclick', 'cancella("'+valore_opzione+'")');

        let td_delete = document.createElement("td");
        td_delete.append(bin_element);
        trs.append(td_delete);
        tabella_lista.append(trs);
    }else{
        alert("Completare la cella per poter aggiungere l'opzione");
    }        

}                                         

function cerca(valore_opzione){
    let indice_todo = -1;
    let tabella_lista = document.getElementById("table");

    for(let i = 0; i <tabella_lista.rows.length; i++ ){
        if(tabella_lista.rows[i].cells[0].firstChild.innerText == valore_opzione){
            indice_todo = i;
        }
    } 
    return indice_todo;
}

function cancella(valore_opzione){
    let indice_todo = cerca(valore_opzione);
    let tabella_lista = document.getElementById("table");
    let tr_todo = tabella_lista.rows[indice_todo];

    tr_todo.remove();
}

function verifica(valore_opzione){
    let indice_todo = cerca(valore_opzione);
    let tabella_lista = document.getElementById("table");
    
    let p_todo = tabella_lista.rows[indice_todo].cells[0].firstChild;

    p_todo.classList.add("parola_eliminata");
}
