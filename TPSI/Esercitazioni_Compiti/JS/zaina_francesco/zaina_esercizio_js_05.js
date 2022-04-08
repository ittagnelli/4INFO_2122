function tabella_studente(){
    let tabella=document.getElementById("tabella");
    let media=document.getElementById("media").value;
    console.log("media:"+ media);
    let nome =document.getElementById("nome").value;
    console.log("nome:"+ nome);
    let tr= documet.createElement("tr")
    let tdnome= document.createElement("td")
    let tdmedia= document.createElement("td")
    tabella.append(tr);
    tdnome.innerText = nome;
    tdmedia.innerText = media;
    tr.append(tdnome);
    tr.append(tdmedia);
}
function colorazione(){

let trs= document.getElementsByTagName("tr");
console.log(trs);
console.log(trs.length);
for(let i=0; i<trs.length; i++)
{
    const ul = document.getElementById("lista");
    const cognome_str = document.getElementById("cognome").value;
    const li = document.createElement("li");
    li.innerText = cognome_str;
    ul.append(li); 
}
}

