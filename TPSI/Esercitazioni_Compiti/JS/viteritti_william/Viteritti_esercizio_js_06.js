function add_studente() {
    const table = document.getElementById("studenti");
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const nome_str = document.getElementById("nome").value;
    const voto = document.getElementById("voto").value;
    td1.innerText = nome_str;
    td2.innerText = voto;
    table.append(tr);
    tr.append(td1);
    tr.append(td2);
}   

function Blue() {
    let cont = document.getElementsByTagName("td");
    console.log(cont);
    for (let i=0; i<cont.length; i++){
            cont[i].classList.add("bl");
        }
}

function Bold() {
    let cont = document.getElementsByTagName("td");
    console.log(cont);
    for (let i=0; i<cont.length; i++){
            cont[i].classList.add("bold");
        }
}


function Bordo() {
    let cont = document.getElementsByTagName("td");
    console.log(cont);
    for (let i=0; i<cont.length; i++){
            cont[i].classList.add("bordo");
            }
}

