function aggiungi() {
    const table = document.getElementById("tabella");
    const cognome = document.getElementById("cognome").value;
    const nome = document.getElementById("nome").value;
    const indirizzo = document.getElementById("indirizzo").value;
    const telefono = document.getElementById("telefono").value;
    const tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let in1 = document.createElement("input");
    let in2 = document.createElement("input");
    let in3 = document.createElement("input");
    let in4 = document.createElement("input");
    let bottone = document.createElement("button");  
    in1.setAttribute("type","text");
    in1.setAttribute("size","10");
    in1.setAttribute("value",cognome);
    in1.readOnly = true;
    in2.setAttribute("type","text");
    in2.setAttribute("size","10");
    in2.setAttribute("value",nome);
    in2.readOnly = true;
    in3.setAttribute("type","text");
    in3.setAttribute("size","30");
    in3.setAttribute("value",indirizzo);
    in3.readOnly = true;
    in4.setAttribute("type","text");
    in4.setAttribute("size","10");
    in4.setAttribute("value",telefono);
    in4.readOnly = true;
    bottone.classList.add("rimozione");
    bottone.setAttribute("onclick","rimozione(this)");
    bottone.innerHTML = "Rimuovi";
    bottone.classList.add("rimozione");
    bottone.setAttribute("onclick","rimozione(this)");
    bottone.innerHTML = "Rimuovi";
    td6.innerHTML= "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    td1.append(in1);
    td2.append(in2);
    td3.append(in3);
    td4.append(in4);
    td5.append(bottone);
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);
    tr.append(td6);
    table.append(tr);
}

function rimozione(bottone) {
    let da_rimuovere = bottone.parentElement.parentElement;
    da_rimuovere.remove();
}

function cerca(){
    let cognome = document.getElementById("cognome").value;
    let nome = document.getElementById("nome");
    let indirizzo = document.getElementById("indirizzo");
    let telefono = document.getElementById("telefono").value;
    let input = document.getElementsByTagName("input");
    let flag = 1;
    if(cognome == "" || telefono == ""){
        alert("Inserire sia il cognome che il telefono");
        flag = 0;
    }
    let string_array = [];
    let j = 0;
    for(let i = 4; i < input.length; i++){
        string_array[j] = input[i].getAttribute("value");
        j++;
    }
    if(string_array.indexOf(String(cognome)) != -1 && string_array.indexOf(String(telefono)) != -1){
        nome.value = string_array[string_array.indexOf(String(cognome)) + 1];
        indirizzo.value = string_array[string_array.indexOf(String(cognome)) + 2];
        rimuovi(input[string_array.indexOf(String(cognome)) + 4]);
    }
    else{
        if(flag) alert("Il contatto non esiste");    
    }
    console.log(string_array.indexOf(String(cognome)));
}
