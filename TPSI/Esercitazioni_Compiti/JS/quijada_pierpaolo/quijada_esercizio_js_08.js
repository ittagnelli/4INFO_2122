function aggiungi() {
    const table = document.getElementById("tabella");
    const nota = document.getElementById("testo").value;
    const tr = document.createElement("tr");
    let td1 = document.createElement("td");
    //let td2 = document.createElement("td");
    //let td3 = document.createElement("td");
    //let td4 = document.createElement("td");
    let in1 = document.createElement("input");
    //let span1 = document.createElement("span"); 
    //let span2 = document.createElement("span"); 
    //let span3 = document.createElement("span"); 
    //let bottone = document.createElement("button");  
    console.log(nota);
    in1.setAttribute("type","text");
    in1.setAttribute("size","100");
    in1.setAttribute("value",nota);
    in1.readOnly = true;
    //span1.setAttribute("material-icons", "done")
    td1.append(in1);
    //td2.append(span1);
    //td3.append(in3);
    //td4.append(in4);
    //td5.append(bottone);
    tr.append(td1);
    //tr.append(td2);
    //tr.append(td3);
    //tr.append(td4);
    table.append(tr);
}