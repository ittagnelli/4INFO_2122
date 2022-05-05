function add() {
    let priority = document.getElementById("priority_menu");
    let todo = document.getElementById("todo");
    let table = document.getElementById("table")
    // console.log(priority.value + todo.value);


    if(todo.value != ""){
        let tr = document.createElement("tr");
    
    for(let i = 0;i<4;i++){

        let td = document.createElement("td");
        let span = document.createElement("span");
         let button = document.createElement("button"); 

        switch(i){
            case 0:
                td.innerHTML = todo.value;
                tr.append(td);
                break;
            case 1:
                span.classList.add("material-icons");
                switch(priority.value){
                    case "Alta":
                        span.innerHTML = "north";
                        span.classList.add("red");
                        break;
                    case "Media":
                        span.innerHTML = "east";
                        span.classList.add("yellow");
                        break;
                    default:
                        span.innerHTML = "south";
                        span.classList.add("green");
                        break;
                }
                td.append(span);
                break;
            case 2:
                span.classList.add("material-icons");
                span.classList.add("grey");
                span.innerHTML = "done_outline";
                button.append(span);
                button.classList.add("icon-button");
                button.setAttribute("onclick", "done(this)");
                td.append(button);
                break;
            default:
                span.classList.add("material-symbols-outlined");
                span.classList.remove("material-icons")
                span.classList.add("grey");
                span.innerHTML = "delete";
                button.append(span);
                button.classList.add("icon-button");
                button.setAttribute("onclick", "remove(this)");
                td.append(button);
                td.classList.add("tr-button");

        }

        tr.append(td);
    }

    table.append(tr);

    priority.value = "Alta";
    todo.value = "";
    } else alert("Inserire il To Do")
   
    
}

function remove(obj) {
    let tr = obj.parentElement.parentElement;

    tr.remove();
}

function done(obj) {
    let tr = obj.parentElement.parentElement;

    tr.firstChild.classList.toggle("bar")
}


