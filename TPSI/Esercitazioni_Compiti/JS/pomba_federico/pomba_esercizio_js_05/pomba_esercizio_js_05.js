function add_studente() {
const table = document.getElementById("table");
const cognome_str = document.getElementById("cognome").value;
const cognome_media = document.getElementById("media").value;
console.log("Media: " + cognome_media); 
console.log("Nome: " + cognome_str); 
let tr = document.createElement("tr")
let td1 = document.createElement("td")
let td2 = document.createElement("td")
table.append(tr);  
td1.innerText = cognome_str;
td2.innerText = cognome_media;
tr.append(td1);
tr.append(td2);
}

function colora (){
    let trs = document.getElementsByTagName("tr");
    console.log(trs);
    console.log(trs.length);
    for (let i =0; i < trs.length; i++){
        if(i % 2 == 1)
        trs[i].style.backgroundColor = "blue";
        else 
        trs[i].style.backgroundColor = "red";
    }
}
    function rimuovi (){
        let trs = document.getElementsByTagName("nome").value;
        let tds = document.getElementsByTagName("td");
        console.log(trs);
        console.log(trs.length);
        for (let i =0; i < trs.length; i++){
           if(tds[i].remove.innerText == nome){
               trs[i].remove();
               console.log("i: " + i);
               }else console.log("elemento non esistente");
           
        
        }
    
}

