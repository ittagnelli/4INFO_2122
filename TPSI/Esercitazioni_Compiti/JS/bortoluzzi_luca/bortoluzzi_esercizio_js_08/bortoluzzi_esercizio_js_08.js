function line(oggetto){
    let tr = oggetto.parentElement.parentElement;
    let td = tr.firstChild;
    td.classList.toggle("sottolineato");
}
function cancel(oggetto){
    let linea = oggetto.parentElement.parentElement;
    linea.remove();
}
function add(){
    let input = document.getElementById("Todo").value;
    let db_table = document.getElementById("tabella");
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    let button1 = document.createElement("button");
    let button2 = document.createElement("button");

    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    let span3 = document.createElement("span");

    td1.innerText=input;
    tr.append(td1);

    span1.classList.add("material-icons");
    let priorita = document.getElementById("priority").value;
    console.log(priorita);

    if(priorita == "low"){
    span1.innerText="south";
    span1.classList.add("frecciaV");
    }else if (priorita == "mid"){
    span1.innerText="east";
    span1.classList.add("frecciaG")
    }else if(priorita == "high"){
        span1.innerText="north";
    span1.classList.add("frecciaR")
    }

    td2.append(span1);
    tr.append(td2);

    span2.classList.add("material-icons");
    span2.innerText="done_outline";
    button1.setAttribute("onclick", "line(this)")
    button1.append(span2);
    td3.append(button1);
    tr.append(td3);

    span3.classList.add("material-icons");
    span3.innerText="delete";

    button2.setAttribute("onclick", "cancel(this)")
    button2.append(span3);
    td4.append(button2);
    tr.append(td4);

    db_table.append(tr);
}
