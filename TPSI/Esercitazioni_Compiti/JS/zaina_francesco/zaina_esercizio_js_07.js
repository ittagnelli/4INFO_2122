let esistente = 0;

function aggiungi_utente(){

 let db_table = document.getElementById("tabella");
let cognome = document.getElementById("cognome").value;
let nome = document.getElementById("nome").value;
let indirizzo = document.getElementById("indirizzo").value;
let telefono = document.getElementById("telefono").value;

let cognome_cambia = document.getElementById("cognome");
let nome_cambia = document.getElementById("nome");
let indirizzo_cambia = document.getElementById("indirizzo");
let telefono_cambia = document.getElementById("telefono");

let input = document.getElementsByTagName("input");
let string_array = [];

    if (cognome != "" && nome != "" && indirizzo != "" && telefono != "") {
        let j = 0;
        for(let i = 4; i < input.length; i++){
            string_array[j] = input[i].getAttribute("value");
            j++;
        }
        if(esistente){
           input[string_array.indexOf(String(cognome)) + 4].setAttribute("value",cognome);
           input[string_array.indexOf(String(cognome)) + 5].setAttribute("value",nome);
            input[string_array.indexOf(String(cognome)) + 6].setAttribute("value",indirizzo);
            input[string_array.indexOf(String(cognome)) + 7].setAttribute("value",telefono);
            esistente = 0;

            indirizzo_cambia.value = "";
            nome_cambia.value = "";
            telefono_cambia.value = "";
            cognome_cambia.value = "";
        }
        else if(string_array.indexOf(String(cognome)) != -1 && string_array.indexOf(String(telefono)) != -1 && string_array.indexOf(String(nome)) != -1 && string_array.indexOf(String(indirizzo)) != -1){
            alert("Contatto già presente in rubrica");
        }
        else{
        let tr = document.createElement("tr");
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
        button.classList.add("remove");
        button.innerText = "Rimuovi";
        button.setAttribute("onclick" , "rimuovi(this)")
        console.log(button);
        td.append(button);
        tr.append(td);
        db_table.append(tr);

        indirizzo_cambia.value = "";
        nome_cambia.value = "";
        telefono_cambia.value = "";
        cognome_cambia.value = "";
    }
    }
}


function rimuovi(this_oggetto){
    let tr = this_oggetto.parentElement.parentElement;
    tr.remove();
}
function cerca(){
    let cognome = document.getElementById("cognome").value;
    let cognome_cambia = document.getElementById("cognome");
    let nome = document.getElementById("nome");
    let indirizzo = document.getElementById("indirizzo");
    let telefono = document.getElementById("telefono").value;
    let telefono_cambia = document.getElementById("telefono");
    let input = document.getElementsByTagName("input");

    let string_array = [];
    let j = 0;
    for(let i = 4; i < input.length; i++){
        string_array[j] = input[i].getAttribute("value");
        j++;
    }
    if(string_array.indexOf(String(cognome)) != -1 && string_array.indexOf(String(telefono)) == -1){
        nome.value = string_array[string_array.indexOf(String(cognome)) + 1];
        indirizzo.value = string_array[string_array.indexOf(String(cognome)) + 2];
        telefono_cambia.value = string_array[string_array.indexOf(String(cognome)) + 3]
        esistente = 1;
    }
    else if(string_array.indexOf(String(cognome)) == -1 && string_array.indexOf(String(telefono)) != -1){
        nome.value = string_array[string_array.indexOf(String(telefono)) -2 ];
        indirizzo.value = string_array[string_array.indexOf(String(telefono)) - 1];
        cognome_cambia.value = string_array[string_array.indexOf(String(telefono)) - 3]
        esistente = 1;
    }

     console.log(string_array.indexOf(String(cognome)));

}