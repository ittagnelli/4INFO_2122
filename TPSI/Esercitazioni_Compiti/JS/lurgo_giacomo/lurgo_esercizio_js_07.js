function salva_studente(){
    let vene = document.getElementById("vene");
    let cognome = document.getElementById("cognome").value;
    let Cognome = document.getElementById("cognome");
    let nome = document.getElementById("nome").value;
    let Nome = document.getElementById("nome");
    let indirizzo = document.getElementById("indirizzo").value;
    let Indirizzo = document.getElementById("indirizzo");
    let telefono = document.getElementById("telefono").value;
    let Telefono = document.getElementById("telefono");

    let tr = document.createElement("tr");
    if(cognome == "" | nome == "" | indirizzo == "" | telefono == ""){
        console.log("Uno o più campi del form non sono stati completati");
        alert("Completare tutti i campi del form");
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
    Cognome.value = "";
    Nome.value = "";
    Indirizzo.value = "";
    Telefono.value = "";
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
    if(cognome == "" && telefono == ""){
        alert("Inserire il cognome o il telefono");
        flag = 0;
    }
    let string_array = [];
    let j = 0;
    for(let i = 4; i < input.length; i++){
        string_array[j] = input[i].getAttribute("value");
        j++;
    }
    if(string_array.indexOf(String(cognome)) != -1 ){
        nome.value= string_array[string_array.indexOf(String(cognome)) + 1];
        indirizzo.value = string_array[string_array.indexOf(String(cognome)) + 2];
        telefono.value =string_array.indexOf(String(telefono));
    }
    else{
        if(string_array.indexOf(String(telefono)) != -1) { 
            cognome.value = string_array.indexOf(String(cognome));
            nome.value= string_array[string_array.indexOf(String(telefono)) - 2];
            indirizzo.value = string_array[string_array.indexOf(String(telefono)) - 1]; 
        }
    }
}