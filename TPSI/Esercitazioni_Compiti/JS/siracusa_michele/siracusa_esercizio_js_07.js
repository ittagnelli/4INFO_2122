function add(){ 

    let cognome = document.getElementById("cognome").value;            
    console.log(cognome);
    let nome = document.getElementById("nome").value;
    console.log(nome);
    let indirizzo = document.getElementById("indirizzo").value;
    console.log(indirizzo);
    let telefono = document.getElementById("telefono").value;
    console.log(telefono);



    let cognome_vuoto= document.getElementById("cognome");  
    let nome_vuoto = document.getElementById("nome");
    let indirizzo_vuoto = document.getElementById("indirizzo");
    let telefono_vuoto = document.getElementById("telefono");
                                         


    if(cognome.length>0 && nome.length>0 && indirizzo.length>0 && telefono.length>0){ 
        let table_final = document.getElementById("table");     
        let ind_cont = verifica(cognome,telefono);  
        if(ind_cont != -1){                                                     
            table_final.rows[ind_cont].cells[0].firstChild.value = cognome;
            table_final.rows[ind_cont].cells[1].firstChild.value = nome;
            table_final.rows[ind_cont].cells[2].firstChild.value = indirizzo;
            table_final.rows[ind_cont].cells[3].firstChild.value = telefono;
            cognome_vuoto.value = "";
            nome_vuoto.value = "";
            indirizzo_vuoto.value = "";
            telefono_vuoto.value = "";
        }else{                                                                     
            let temp = `                                                            
            <tr id = "${telefono}">
                <td><input type="text" size=10 readonly value="${cognome}"></td>           
                <td><input type="text" size=10 readonly value="${nome}"></td>
                <td><input type="text" size=35 readonly value="${indirizzo}"></td>
                <td><input type="text" size=10 readonly value="${telefono}"></td>
                <td>
                    <button class="remove-button" onclick="rimuovi('${telefono}')">Rimuovi</button>
                </td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>   
            </tr>
            <br>`;
             table_final.innerHTML = table_final.innerHTML + temp;  
             cognome_vuoto.value = "";
             nome_vuoto.value = "";
             indirizzo_vuoto.value = "";
             telefono_vuoto.value = "";
        }
      


    } else{
        alert("Compilare tutti i campi, grazie!");
    }

}




function rimuovi(telefono){                                    
    console.log(telefono);
    
    let contatto = document.getElementById(telefono);
    console.log(contatto);
    contatto.remove();
}




function search(){                                                           
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
    let cognome_contatto = table_final.rows[indice_contatto].cells[0].firstChild.value;            
    let nome_contatto = table_final.rows[indice_contatto].cells[1].firstChild.value;
    let indirizzo_contatto = table_final.rows[indice_contatto].cells[2].firstChild.value;
    let telefono_contatto = table_final.rows[indice_contatto].cells[3].firstChild.value;

    console.log(table_final.rows[indice_contatto].cells[0].firstChild.value);
    document.getElementById("cognome").value = cognome_contatto;                               
    document.getElementById("nome").value = nome_contatto;
    document.getElementById("indirizzo").value = indirizzo_contatto;
    document.getElementById("telefono").value = telefono_contatto;

}




function verifica(cogn, num_tel){                                                          
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










