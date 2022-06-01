function aggiungi(){  
    let val_todo = document.getElementById("name_todo").value;
    let prior = document.getElementById("priorita").value;
    if(val_todo.length>0){
    let table_final = document.getElementById("table");
    let trs = document.createElement("tr");
    let tds = document.createElement("td");
    let p_element = document.createElement("p");
    p_element.classList.add("testo");
    p_element.innerText = val_todo;
    tds.append(p_element);
    trs.append(tds);
    if(prior == "bassa"){
    let span_element = document.createElement("span");
    span_element.classList.add("material-icons", "bassa");
    span_element.innerText = "south";
    let td_icons = document.createElement("td");
    td_icons.append(span_element);
    trs.append(td_icons);
    }
    if(prior == "media"){
    let span_element = document.createElement("span");
    span_element.classList.add("material-icons", "media");
    span_element.innerText = "east";
    let td_icons = document.createElement("td");
    td_icons.append(span_element);
    trs.append(td_icons);  
    }
    if(prior == "alta"){
    let span_element = document.createElement("span");
    span_element.classList.add("material-icons", "alta");
    span_element.innerText = "north";
    let td_arrow= document.createElement("td");
    td_arrow.append(span_element);
    trs.append(td_arrow); 
    }
    let check_element = document.createElement("span");
    check_element.classList.add("material-icons", "grigio");
    check_element.innerText = "done_outline";
    check_element.setAttribute('onclick', 'verifica( "'+val_todo+'" )');
    let td_done = document.createElement("td");
    td_done.append(check_element);
    trs.append(td_done);









    let bin_element = document.createElement("span");
    bin_element.classList.add("material-icons", "grigio");
    bin_element.innerText = "delete";
    bin_element.setAttribute('onclick', 'cancella( "'+val_todo+'" )');
    let td_delete = document.createElement("td");
    td_delete.append(bin_element);
    trs.append(td_delete);

    table_final.append(trs);
    }else{
        alert("Si prega l'utente di compilare tutti i campi, grazie!");
    }        

}                                         





function cerca(val_todo){
let indice_todo = -1;
let table_final = document.getElementById("table")
for(let i = 0; i <table_final.rows.length; i++ ){
        if(table_final.rows[i].cells[0].firstChild.innerText == val_todo){
            indice_todo = i;
        }
    } 
return indice_todo;
}






function verifica(val_todo){
    let indice_todo = cerca(val_todo);
    let table_final = document.getElementById("table");
    let p_todo = table_final.rows[indice_todo].cells[0].firstChild;
    p_todo.classList.toggle("sbarrato");
}






function cancella(val_todo){
   let indice_todo = cerca(val_todo);
    let table_final = document.getElementById("table");
    let tr_todo = table_final.rows[indice_todo];
    tr_todo.remove();
}






