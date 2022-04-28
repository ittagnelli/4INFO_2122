function add_info() {
    let surname = document.getElementById("cognome").value;
    let average = document.getElementById("num").value;
    let table = document.getElementById("tabella");
    let td1 = document.createElement("td");
    let td2= document.createElement("td");
    let tr = document.createElement("tr");
    td1.innerText = surname;
    td2.innerText = average;
    td1.className= "special";
    tr.append(td1);
    tr.append(td2);
    table.append(tr);
}

function color() {
    let trs = document.getElementsByTagName("tr");
    for (let i=0; i<trs.length; i++){
        if (i % 2 == 1) {
            trs[i].style.backgroundColor = "blue";
        }
        else{
            trs[i].style.backgroundColor = "red";
        }
    }
}

function remove(){
    let surname = document.getElementById("cognome").value;
    let trs = document.getElementsByTagName("tr");
    let tds = document.getElementsByClassName("special");
    let flag = 0;
    let trs_lenght = trs.length;
    for(let i = trs_lenght-1; i >= 0; i--){
        console.log("for");
        if(tds[i].innerText == surname){
            console.log("if");
            trs[i].remove();
            flag = 1;
        }
    }
    if(flag == false)
        alert("Persona non presente");
}