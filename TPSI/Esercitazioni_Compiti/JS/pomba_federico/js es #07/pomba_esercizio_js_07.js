function aggiungi_utente(){
    let db_table = document.getElementById("tabella");
    let cognome = document.getElementById("cognome").value;

    let nome = document.getElementById("nome").value;
    let indirizzo = document.getElementById("indirizzo").value;
    let telefono = document.getElementById("telefono").value;
    // let input = document.getElementsByTagName("input");
    // let string_array = [];

    // if (cognome != "" && nome != "" && indirizzo != "" && telefono != "") {
   
    //     let j = 0;
    //     for(let i = 4; i < input.length; i++){
    //         string_array[j] = input[i].getAttribute("value");
    //         j++;
      
    //     }

    // }

    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");

    let bottone = document.createElement("button");

    let input =  document.createElement("input");
    let input1 = document.createElement("input");
    let input2 = document.createElement("input");
    let input3 = document.createElement("input");

   input.setAttribute("type","text");
   input.setAttribute("value",cognome);
   input.setAttribute("size","10");
   input.readonly=true;
   input1.setAttribute("type","text");
   input1.setAttribute("value",nome);
   input1.setAttribute("size","10");
   input1.readonly=true;
   input2.setAttribute("type","text");
   input2.setAttribute("value",indirizzo);
   input2.setAttribute("size","35");
   input2.readonly=true;
   input3.setAttribute("type","text");
   input3.setAttribute("value",telefono);
   input3.setAttribute("size","10");
   input3.readonly=true;

   td5.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
   bottone.innerHTML = "Rimuovi";
   bottone.setAttribute("onclick","rimuovi(this)");

    td.append(input);
    td1.append(input1);
    td2.append(input2);
    td3.append(input3);
    td4.append(bottone);
    tr.append(td);
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);

    db_table.append(tr);
}

function rimuovi(this_oggetto){

    let da = this_oggetto.parentElement.parentElement;

    da.remove();
}

function cerca(){

    let surname_change = document.getElementById("surname");
    let name = document.getElementById("name");
    let address = document.getElementById("address");
    let phone_change = document.getElementById("phone");

    let phone = document.getElementById("phone").value;
    let surname = document.getElementById("surname").value;

    
    let input = document.getElementsByTagName("input");


}