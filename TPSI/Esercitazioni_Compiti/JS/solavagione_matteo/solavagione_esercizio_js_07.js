function aggiungi(){ // aggiunge un contatto alla rubrica   
    let cognome = document.getElementById("cognome").value;            //prendo il valore dell'input per cognome,nome,indizzo, telefono attraverso il loro id
    console.log(cognome);
    let nome = document.getElementById("nome").value;
    console.log(nome);
    let indirizzo = document.getElementById("indirizzo").value;
    console.log(indirizzo);
    let telefono = document.getElementById("telefono").value;
    console.log(telefono);                                         

    if(cognome.length>0 && nome.length>0 && indirizzo.length>0 && telefono.length>0){ //verifica se gli input dei campi del contatto non sono vuoti
        let table_final = document.getElementById("table");     
        let ind_cont = verifica(cognome,telefono);  
        if(ind_cont != -1){                                                     //se abbiamo trovato il contatto aggiorno i campi 
            table_final.rows[ind_cont].cells[0].firstChild.value = cognome;
            table_final.rows[ind_cont].cells[1].firstChild.value = nome;
            table_final.rows[ind_cont].cells[2].firstChild.value = indirizzo;
            table_final.rows[ind_cont].cells[3].firstChild.value = telefono;
            
        }else{                                                                     //creo una riga della tabella dei contatti con i valori presi in input
            let temp = `                                                            
            <tr id = "${telefono}">
                <td><input type="text" size=10 readonly value="${cognome}"></td>           
                <td><input type="text" size=10 readonly value="${nome}"></td>
                <td><input type="text" size=35 readonly value="${indirizzo}"></td>
                <td><input type="text" size=10 readonly value="${telefono}"></td>
                <td>
                    <button class="remove-button" onclick="rimuovi(telefono)">Rimuovi</button>
                </td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>   
            </tr>
             `;
             table_final.innerHTML = table_final.innerHTML + temp;                                  //inserisco la riga nella tabella 
        }
      
       
    } else{
        alert("Non hai compilato tutti i campi");
    }
}

function rimuovi(telefono){                                     //usiamo come riferimento il telefono per cancellare una riga
    console.log(telefono.value);
    let contatto = document.getElementById(telefono.value);
    contatto.remove();
}

function cerca(){                                                            //ricerco il contatto in base a cognome o telefono     
    let cognome = document.getElementById("cognome").value;
    let telefono = document.getElementById("telefono").value;
    let table_final = document.getElementById("table");
    let i = 0;
    let indice_contatto = -1;
    for (let row of table_final.rows){
       
        for(let cell of row.cells){
            if(cell.firstChild.value == cognome || cell.firstChild.value == telefono){
                console.log("ok");
                indice_contatto = i;
            }
        }
        i++;   
    }
    let cognome_contatto = table_final.rows[indice_contatto].cells[0].firstChild.value;            //salvo informazioni relative la contatto
    let nome_contatto = table_final.rows[indice_contatto].cells[1].firstChild.value;
    let indirizzo_contatto = table_final.rows[indice_contatto].cells[2].firstChild.value;
    let telefono_contatto = table_final.rows[indice_contatto].cells[3].firstChild.value;

    console.log(table_final.rows[indice_contatto].cells[0].firstChild.value);
    document.getElementById("cognome").value = cognome_contatto;                                //metto le informazioni nei corrispettivi input
    document.getElementById("nome").value = nome_contatto;
    document.getElementById("indirizzo").value = indirizzo_contatto;
    document.getElementById("telefono").value = telefono_contatto;

}

function verifica(cogn, num_tel){                                                           //verifica se il valore di una qualsiasi cella è uguale a cognome o telefono 
    let table_final = document.getElementById("table");
    let i = 0;
    let indice_contatto = -1;
    for (let row of table_final.rows){
       
        for(let cell of row.cells){
            if(cell.firstChild.value == cogn || cell.firstChild.value == num_tel){
                indice_contatto = i;
            }
        }
        i++;   
    }
    return indice_contatto;
}