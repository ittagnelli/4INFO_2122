let id = 0;

function work() {
    alert("The button is working");
}
function rimuovi(da_rimuovere) {
    let tr = document.getElementById(da_rimuovere);
    tr.remove();
}
function salva() {
    let todo = document.getElementById("ToDo").value;
    let priority = document.getElementById("idpriority").value;
    let db_table = document.getElementById("db_table");
    let svuota_todo = document.getElementById("ToDo");
    let tr = document.createElement("tr");
    if (todo == "") {
        alert("Completare tutti i campi");
    }
    else {
        for (let i = 0; i < 4; i++) {
            let td = document.createElement("td");
            let span = document.createElement("span");
            let button = document.createElement("button");
            span.classList.add("material-icons");
            switch (i) {
                case 0:
                    td.setAttribute("colspan", 2);
                    td.setAttribute("id" , "td_" + id);
                    td.innerText = todo;
                    break;
                case 1:
                    if (priority == "alta") {
                        span.innerText = "north";
                        span.classList.add("red");
                    }
                    else if (priority == "media") {
                        span.innerText = "east";
                        span.classList.add("yellow");
                    }
                    else if (priority == "bassa") {
                        span.innerText = "south";
                        span.classList.add("green");
                    }
                    td.append(span);
                    break;
                case 2:
                    button.setAttribute("onclick", `completato(${id})`);
                    span.innerText = "done_outline";
                    button.append(span);
                    td.append(button);
                    break;
                case 3:
                    button.setAttribute("onclick", `rimuovi(${id})`);
                    span.classList.remove("material-icons");
                    span.classList.add("material-symbols-outlined");
                    span.innerText = "delete";
                    button.append(span);
                    td.append(button);
                    break;
                default:
                    break;
                }  
                tr.append(td);     
            }
            tr.setAttribute("id" , id);
            console.log(tr);  
            id++;
            db_table.append(tr);
        }
        svuota_todo.value = "";
    }
    function completato(da_completare) {
        let td = document.getElementById("td_" + da_completare);    
        td.classList.toggle("underline");
    }