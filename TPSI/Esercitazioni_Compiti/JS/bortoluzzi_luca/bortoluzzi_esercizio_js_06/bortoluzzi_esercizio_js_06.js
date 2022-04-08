let first_time = true;

function add(){
    if(first_time == true){
        const header = document.getElementById("tabella");
        const td_cognomi = document.createElement("td");
        const td_media = document.createElement("td");
        td_cognomi.innerHTML = "<b>cognome</b>";
        td_media.innerHTML = "<b>media</b>";

        header.append(td_cognomi);
        header.append(td_media);
        
        first_time = false;
    }
        const table = document.getElementById("tabella");

        const riga = document.createElement("tr");
        
        const cognomi = document.createElement("td");
        const num = document.createElement("td");


        media.style.padding = "30px";


        cognomi.innerHTML =  document.getElementById("cognome").value;
        media.innerHTML = document.getElementById("media").value;

        cognomi.classList.add("nome");

        
        tr.append(cognomi);
        tr.append(media);

        tr.classList.add("removable");
        tr.classList.add("tr");

        table.append(tr);
        
       
    
}

function color(){
    const tr = document.getElementsByClassName("tr");

    for (let i = 0; i < tr.length; i++) {
        const element = tr[i];

        if(i % 2 == 0)
            element.style.backgroundColor="blue";
        else
            element.style.backgroundColor="red";
        
    }
}


function remove(){
    const objs = document.getElementsByClassName("rimuovi");
    const names = document.getElementsByClassName("name");

    let cognomi =  document.getElementById("cognome").value;

    for(let i = objs.length-1; i>=0;i--){
        if(names[i].innerText == cognomi){
            names[i].remove();
            objs[i].remove();
        }
            
    }

}


function bold(){
    const tr = document.getElementsByClassName("tr");

    for (let i = 0; i < tr.length; i++) {
        const element = tr[i];

        element.classList.toggle("bold");
        
    }
}


function blue(){
    const tr = document.getElementsByClassName("tr");

    for (let i = 0; i < tr.length; i++) {
        const element = tr[i];

        element.classList.add("blue");
        element.classList.remove("red")
        
    }
}


function red(){
    const tr = document.getElementsByClassName("tr");

    for (let i = 0; i < tr.length; i++) {
        const element = tr[i];

        element.classList.add("red");
        element.classList.remove("blue");

    }
}