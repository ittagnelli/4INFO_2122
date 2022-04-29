function salva_studente(){
    let vene = document.getElementById("vene");
    let cognome = document.getElementById("cognome").value;
    let nome = document.getElementById("nome").value;
    let indirizzo = document.getElementById("indirizzo").value;
    let telefono = document.getElementById("telefono").value;

    let tr = document.createElement("tr");

    if(cognome == "" | nome == "" | indirizzo == "" | telefono == ""){
        console.log("Non hai completato opportunamente le informazioni necessarie");
        alert("Completare tutti i campi richiesti");
    }
    else{
        for(let i = 0; i < 4; i++){
            let input_element = document.createElement("input");
            let td = document.createElement("td");
            input_element.setAttribute("type", "text");
            input_element.readOnly = true;

            switch(i){
                case 0:
                    input_element.setAttribute("value", cognome);
                    input_element.setAttribute("size", "10");
                    td.append(input_element);
                    tr.append(td);
               
                    break;
                case 1:
                        input_element.setAttribute("value", nome);
                        input_element.setAttribute("size", "10");
                        td.append(input_element);
                        tr.append(td);
                   
                        break;
                case 2:
                    input_element.setAttribute("value", indirizzo);
                    input_element.setAttribute("size", "35");
                    td.append(input_element);
                    tr.append(td);
               
                    break;
                case 3:
                        input_element.setAttribute("value", telefono);
                        input_element.setAttribute("size", "10");
                        td.append(input_element);
                        tr.append(td);
                   
                        break;
                default:
                        break;
            }

        }
        let button = document.createElement("button");
        let td = document.createElement("td");
        button.classList.add("remove-button");
        button.innerText = "Rimuovi";
        button.setAttribute("onclick" , "rimuovi_studente(this)")
        console.log(button);
        td.append(button);
        tr.append(td);
        vene.append(tr);
    }    
}
function rimuovi_studente(this_oggetto){
    let tr = this_oggetto.parentElement.parentElement;
    tr.remove();
}

function cerca_studente(){
    let cognome = document.getElementById("cognome").value;
    let nome = document.getElementById("nome");
    let indirizzo = document.getElementById("indirizzo");
    let telefono = document.getElementById("telefono").value;
    let input = document.getElementsByTagName("input");
    let flag = 1;
    console.log("ciao");
    if(cognome == "" || telefono == ""){
        alert("Manca il cognome e il numero di telefono");
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
        rimuovi_studente(input[string_array.indexOf(String(cognome)) + 4]);
    }
    else{
        if(flag) alert("Il contatto non è presente nel database");    
    }

     console.log(string_array.indexOf(String(cognome)));

}