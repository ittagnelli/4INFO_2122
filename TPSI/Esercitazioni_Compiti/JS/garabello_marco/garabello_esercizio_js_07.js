let flag_aleady_existing = 0;

function add() {
    const surname = document.getElementById("surname").value;
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const table = document.getElementById("table");
    let input = document.getElementsByTagName("input");
    let string_array = [];


    // alert(`${surname} ${name} ${address} ${phone}`)
 
    if (surname != "" && name != "" && address != "" && phone != "") {

        
        let j = 0;
        for(let i = 4; i < input.length; i++){
            string_array[j] = input[i].getAttribute("value");
            j++;
        }

        if(flag_aleady_existing){
            input[string_array.indexOf(String(surname)) + 4].setAttribute("value",surname);
            input[string_array.indexOf(String(surname)) + 5].setAttribute("value",name);
            input[string_array.indexOf(String(surname)) + 6].setAttribute("value",address);
            input[string_array.indexOf(String(surname)) + 7].setAttribute("value",phone);
            flag_aleady_existing = 0;
        }
        else if(string_array.indexOf(String(surname)) != -1 && string_array.indexOf(String(phone)) != -1 && string_array.indexOf(String(name)) != -1 && string_array.indexOf(String(address)) != -1){
            alert("contatto già esistente");
        }
        else{

        const tr = document.createElement("tr");


        for (let i = 0; i < 4; i++) {

            let td = document.createElement("td");
            let input = document.createElement("input");

            input.setAttribute("type", "text");
            input.setAttribute("size", "10");
            input.readOnly = true;

            switch (i) {
                case 0:
                    input.setAttribute("value", surname);
                    td.append(input);
                    tr.append(td);
                    break;
                case 1:
                    input.setAttribute("value", name);
                    td.append(input);
                    tr.append(td);
                    break;
                case 2:
                    input.setAttribute("value", address);
                    input.setAttribute("size", "35");
                    td.append(input);
                    tr.append(td);
                    break;
                default:
                    input.setAttribute("value", phone);
                    td.append(input);
                    tr.append(td);
                    break
            }
        }

        let td = document.createElement("td");
        let td_button = document.createElement("td");
        let button = document.createElement("button");


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

function remove(obj) {

    const tr = obj.parentElement.parentElement;

    tr.remove();
}


function search() {

    let surname = document.getElementById("surname").value;
    let name = document.getElementById("name");
    let address = document.getElementById("address");
    let phone = document.getElementById("phone").value;
    let input = document.getElementsByTagName("input");
    let flag = 1;
    let string_array = [];


    if(surname == "" || phone == ""){
        alert("Inserire sia il cognome che il numero di telefono");
        flag = 0;
    }

    let j = 0;
    for(let i = 4; i < input.length; i++){
        string_array[j] = input[i].getAttribute("value");
        j++;
    }
    if(string_array.indexOf(String(surname)) != -1 && string_array.indexOf(String(phone)) != -1){
        name.value = string_array[string_array.indexOf(String(surname)) + 1];
        address.value = string_array[string_array.indexOf(String(surname)) + 2];
        flag_aleady_existing = 1;
    }
    else{
        if(flag) alert("Il contatto non esiste");    
    }
}