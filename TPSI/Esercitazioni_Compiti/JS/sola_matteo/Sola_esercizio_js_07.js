let contatore = 0;

function aggiungi_oggetto() {

    const cognome = document.getElementById("surname").value;
    const nome= document.getElementById("name").value;
    const indirizzo = document.getElementById("address").value;
    const telefono = document.getElementById("phone").value;
    const table = document.getElementById("table");
    let input = document.getElementsByTagName("input");
    let string_array = [];
    //prendo il valore dell'input tramite il loro id per cognome, nome, indizzo, telefono 
 
    if (cognome != "" && nome != "" && indirizzo != "" && telefono != "") {
        let j = 0;

        for(let i = 4; i < input.length; i++){
            string_array[j] = input[i].getAttribute("value");
            j++;
        }

        if(contatore){
            input[string_array.indexOf(String(cognome)) + 4].setAttribute("value",cognome);
            input[string_array.indexOf(String(cognome)) + 5].setAttribute("value",nome);
            input[string_array.indexOf(String(cognome)) + 6].setAttribute("value",indirizzo);
            input[string_array.indexOf(String(cognome)) + 7].setAttribute("value",telefono);
            contatore = 0;
        }
        else if(string_array.indexOf(String(cognome)) != -1 && string_array.indexOf(String(nome)) != -1 && string_array.indexOf(String(indirizzo)) != -1 && string_array.indexOf(String(telefono)) != -1){
            alert("Il contatto esiste");
        }
        else{

        const tr = document.createElement("tr");

        for (let i = 0; i < 4; i++) {

            input.setAttribute("type", "text");
            input.setAttribute("size", "10");
            input.readOnly = true;

            let td = document.createElement("td");
            let input = document.createElement("input");

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
                    break
            }
        }
        
        let button = document.createElement("button");
        let td = document.createElement("td");
        let td_button = document.createElement("td");

        button.innerHTML = "Rimuovi";
        button.classList.add("remove-button");
        button.setAttribute("onclick", "remove(this)");
        td_button.append(button);
        tr.append(td_button);

        td.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        tr.append(td);



        table.append(tr);
    }
    } else alert("Fornire tutte le informazioni richieste per poter inserire il contatto")

}

function cerca_oggetto() {

    let cognome = document.getElementById("surname").value;
    let nome = document.getElementById("name");

    let indirizzo = document.getElementById("address");
    let telefono = document.getElementById("phone").value;

    let input = document.getElementsByTagName("input");
    let flag = 1;
    let string_array = [];

    if(cognome == "" || telefono == ""){
        alert("Inserire sia il cognome sia il numero di telefono");
        flag = 0;
    }

    let j = 0;
    for(let i = 4; i < input.length; i++){
        string_array[j] = input[i].getAttribute("value");
        j++;
    }

    if(string_array.indexOf(String(cognome)) != -1 && string_array.indexOf(String(telefono)) != -1){
        nome.value = string_array[string_array.indexOf(String(cognome)) + 1];
        indirizzo.value = string_array[string_array.indexOf(String(cognome)) + 2];
        contatore = 1;
    }
    else{
        if(flag) alert("Il contatto non esiste");    
    }
}

function rimuovi_oggetto(obj) {

    const tr = obj.parentElement.parentElement;

    tr.rimuovi_oggetto();
}
