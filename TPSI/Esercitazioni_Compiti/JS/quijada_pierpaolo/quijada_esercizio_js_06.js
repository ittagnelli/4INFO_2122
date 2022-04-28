function add_studente() {
    const ul = document.getElementById("studenti");
    const li = document.createElement("li");
    const nome_str = document.getElementById("nome").value;
    li.innerText = nome_str;
    ul.append(li);
}   

function blu() {
    const ul = document.getElementById("studenti");
    const studenti = ul.children;
    for(let i=0; i<studenti.length; i++) {
        studenti[i].classList.toggle("blu");
    }
}

function grassetto() {
    const ul = document.getElementById("studenti");
    const studenti = ul.children;
    for(let i=0; i<studenti.length; i++) {
        studenti[i].classList.toggle("grassetto");
    }
}

function bordo() {
    const ul = document.getElementById("studenti");
    ul.classList.add("bordo");  
}