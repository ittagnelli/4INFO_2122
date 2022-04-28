let first_time = true;

function add_user(){
    if(first_time){
        const header = document.getElementById("table_header");
        const td_cognomi = document.createElement("td");
        const td_media = document.createElement("td");
        td_cognomi.innerHTML = "<b>cognome</b>";
        td_media.innerHTML = "<b>media</b>";
        td_media.style.paddingLeft = "30px",

        header.append(td_cognomi);
        header.append(td_media);
        
        first_time = !first_time;
    }


        const table = document.getElementById("table");


        const tr = document.createElement("tr");
        
        const cognomi = document.createElement("td");
        const media = document.createElement("td");


        media.style.paddingLeft = "30px";


        cognomi.innerHTML =  document.getElementById("cognome").value;
        media.innerHTML = document.getElementById("media").value;

        
        cognomi.classList.add("name");

        
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
        element.classList.add("blu")
    }
}

function bold(){

    const tr = document.getElementsByClassName("tr");

    for (let i = 0; i < tr.length; i++) {
        const element = tr[i];

        element.classList.add("grassetto")
    }
}

function bordo(){

    let trs = document.getElementsByTagName("tr");
    for (let i = 0; i < trs.length; i++) {
        trs[i].classList.toggle("bordo");
    }
}

function remove(){
    const objs = document.getElementsByClassName("removable");
    const names = document.getElementsByClassName("name");

    let cognomi =  document.getElementById("cognome").value;

    for(let i = objs.length-1; i>=0;i--){
        if(names[i].innerText == cognomi){
            names[i].remove();
            objs[i].remove();
        }
            
    }

}