let flag_esistente = 0;

function aggiungi_utente(){
    let db_table = document.getElementById("db_table");
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let input = document.getElementsByTagName("input");
    let cellphone = document.getElementById("cellphone").value;
    let address = document.getElementById("address").value;
    let string_array = [];

    if (surname.length> 0 && name.length > 0 && address.length > "" && cellphone.length > "") {
        let j = 0;
        for(let i = 4; i < input.length; i++){
            string_array[j] = input[i].getAttribute("value");
            j++;
        }

        if(flag_esistente){
            input[string_array.indexOf(String(surname)) + 4].setAttribute("value",surname);
            input[string_array.indexOf(String(surname)) + 5].setAttribute("value",name);
            input[string_array.indexOf(String(surname)) + 6].setAttribute("value",address);
            input[string_array.indexOf(String(surname)) + 7].setAttribute("value",cellphone);
            flag_esistente = 0;
        }
        else if(string_array.indexOf(String(surname)) != -1 && string_array.indexOf(String(cellphone)) != -1 && string_array.indexOf(String(name)) != -1 && string_array.indexOf(String(address)) != -1){
            alert("contatto già esistente");
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
                    input_element.setAttribute("value", surname);
                    input_element.setAttribute("size", "11");
                    td.append(input_element);
                    tr.append(td);
               
                    break;
                case 1:
                    input_element.setAttribute("value", name);
                    input_element.setAttribute("size", "11");
                    td.append(input_element);
                    tr.append(td);
                
                    break;
                case 2:
                    input_element.setAttribute("value", address);
                    input_element.setAttribute("size", "30");
                    td.append(input_element);
                    tr.append(td);
               
                    break;
                case 3:
                    input_element.setAttribute("value", cellphone);
                    input_element.setAttribute("size", "11");
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
        button.setAttribute("onclick" , "rimuovi(this)")
        console.log(button);
        td.append(button);
        tr.append(td);
        db_table.append(tr);
    }
    }else
    {
        console.log("non tutti i form sono stati completati");
        alert("compilare i campi");
    }

}

function rimuovi(this_oggetto){
    let tr = this_oggetto.parentElement.parentElement;
    tr.remove();
}
function cerca(){
    let surname = document.getElementById("surname").value;
    let name = document.getElementById("name");
    let address = document.getElementById("address");
    let cellphone = document.getElementById("cellphone").value;
    let input = document.getElementsByTagName("input");
    let flag = 1;

    if(surname == "" && cellphone == ""){
        alert("Inserire cognome o cellulare");
        flag = 0;
    }

    let string_array = [];
    let j = 0;
    for(let i = 4; i < input.length; i++){
        string_array[j] = input[i].getAttribute("value");
        j++;
    }
    if(string_array.indexOf(String(surname)) != -1){
        name.value = string_array[string_array.indexOf(String(surname)) + 1];
        cellphone.value = string_array[string_array.indexOf(String(surname)) + 2];
        address.value = string_array[string_array.indexOf(String(surname)) + 3];
        flag_esistente = 1;
    }
    if(string_array.indexOf(String(cellphone)) != -1){
        name.value = string_array[string_array.indexOf(String(cellphone)) + 1];
        surname.value = string_array[string_array.indexOf(String(cellphone)) + 2];
        address.value = string_array[string_array.indexOf(String(cellphone)) + 2];
        flag_esistente = 1;
    }
    else{
        if(flag) alert("Il contatto non esiste");    
    }

     console.log(string_array.indexOf(String(surname)));

}