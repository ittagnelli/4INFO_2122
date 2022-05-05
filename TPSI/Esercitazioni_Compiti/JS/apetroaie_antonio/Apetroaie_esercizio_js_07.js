let contatore_esistenza = 0;

function aggiungi_oggetto() {
    const table = document.getElementById("tabella");
    const cognome = document.getElementById("surname").value;
    const nome= document.getElementById("name").value;
    const indirizzo = document.getElementById("address").value;
    const telefono = document.getElementById("phone").value;
    let input = document.getElementsByTagName("input");
    let string_array = [];
    //prendo il valore dell'input tramite il loro id per cognome, nome, indizzo, telefono 
 
    if (cognome != "" && nome != "" && indirizzo != "" && telefono != "") {
        let j = 0;

        for(let i = 4; i < input.length; i++){
            string_array[j] = input[i].getAttribute("value");
            j++;
        }

        if(contatore_esistenza){
            input[string_array.indexOf(String(cognome)) + 4].setAttribute("value",cognome);
            input[string_array.indexOf(String(cognome)) + 5].setAttribute("value",nome);
            input[string_array.indexOf(String(cognome)) + 6].setAttribute("value",indirizzo);
            input[string_array.indexOf(String(cognome)) + 7].setAttribute("value",telefono);
            contatore_esistenza = 0;
        }
        else if(string_array.indexOf(String(cognome)) != -1 && string_array.indexOf(String(nome)) != -1 && string_array.indexOf(String(indirizzo)) != -1 && string_array.indexOf(String(telefono)) != -1){
            alert("Il contatto esiste");
        }
        else{

        const tr = document.createElement("tr");

        for (let i = 0; i < 4; i++) {

            
            let input = document.createElement("input");

            input.setAttribute("type", "text");
            input.setAttribute("size", "10");

            input.readOnly = true;

            let td = document.createElement("td");

            switch (i) {
                case 0:
                    input.setAttribute("value", cognome);
                    td.append(input);
                    tr.append(td);
                    break;
                case 1:
                    input.setAttribute("value", nome);
                    td.append(input);
                    tr.append(td);
                    break;
                case 2:
                    input.setAttribute("value", indirizzo);
                    input.setAttribute("size", "35");
                    td.append(input);
                    tr.append(td);
                    break;
                default:
                    input.setAttribute("value", telefono);
                    td.append(input);
                    tr.append(td);
                    break;
            }
        }
        
        let button = document.createElement("button");
        let td = document.createElement("td");
        let td_button = document.createElement("td");

        button.innerHTML = "Rimuovi";
        button.classList.add("remove-button");
        button.setAttribute("onclick", "rimuovi_oggetto(this)");
        td_button.append(button);
        tr.append(td_button);

        td.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        tr.append(td);



        table.append(tr);
    }
    } else alert("Fornire tutte le informazioni richieste per poter inserire il contatto");

}

function rimuovi_oggetto(this_oggetto) {
    const tr = this_oggetto.parentElement.parentElement;
    tr.remove();
}

function cerca_oggetto() {

    let input = document.getElementsByTagName("input");
    let flag = 1;
    let string_array = [];

    let cognome = document.getElementById("surname").value;
    let nome = document.getElementById("name");

    let indirizzo = document.getElementById("address");
    let telefono = document.getElementById("phone").value;


    let j = 0;
    for(let i = 4; i < input.length; i++){
        string_array[j] = input[i].getAttribute("value");
        j++;
    }

    if(string_array.indexOf(String(cognome)) != -1 || string_array.indexOf(String(telefono)) == -1){
        nome.value = string_array[string_array.indexOf(String(cognome)) + 1];
        indirizzo.value = string_array[string_array.indexOf(String(cognome)) + 2];
        telefono.value = string_array[string_array.indexOf(String(cognome))  +3];

        contatore_esistenza = 1;
    }
    else{
        if(flag) alert("Il contatto non esiste nella rubrica");    
    }

    if(string_array.indexOf(String(cognome)) == -1 && string_array.indexOf(String(telefono)) != -1){
        nome.value = string_array[string_array.indexOf(String(telefono)) -2];
        indirizzo.value = string_array[string_array.indexOf(String(telefono)) -1];
        cognome.value =string_array[string_array.indexOf(String(telefono))-3];
        contatore_esistenza = 1;
    }
    else{
        if(flag) alert("Il contatto non esiste nella rubrica");    
    }
}