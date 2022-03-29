let flag = false;
let first_time = true;

function add_user(){
    if(first_time){
        const header = document.getElementById("table_header");
        const td_cognomi = document.createElement("td");
        const td_media = document.createElement("td");
        td_cognomi.innerHTML = "<b>cognome</b>";
        td_media.innerHTML = "<b>media</b>";
        td_media.style.paddingLeft = "30px",

        td_media.classList.add("removable");
        td_cognomi.classList.add("removable");


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

        
        tr.append(cognomi);
        tr.append(media);

        tr.classList.add("removable");

        if(flag) tr.classList.add("eaven");
        else tr.classList.add("odd");

        table.append(tr);
        
        flag = !flag;
    
}


function color(){
    const odds = document.getElementsByClassName("odd");
    const eavens = document.getElementsByClassName("eaven");

    for(let i = 0; i<odds.length;i++){
        odds[i].style.backgroundColor="red";
    }

    for(let i =0; i<eavens.length; i++){
        eavens[i].style.backgroundColor="blue";

    }
}


function remove(){
    const objs = document.getElementsByClassName("removable");

    for(let i = objs.length-1; i>=0;i--){
        objs[i].remove();
    }

    first_time =!first_time;
}