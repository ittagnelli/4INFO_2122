var express = require('express');
var http = require('http');
var path = require("path");
var parser = require('body-parser');
var app = express();
var server = http.createServer(app);


app.use(parser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./')));

app.get('/', function(req,res){
    console.log("Ricevuta richiesta HTTP GET");
    res.sendFile(path.join(__dirname,'./form.html'));
});

app.post('/aggiungi', function(req,res){
    console.log("Ricevuta richiesta HTTP POST");
    console.log("Visualizzo l'oggetto HTTP body");
    console.log(req.body);
    if (req.body.id_studente > 5 && req.body.id_studente < 100 && req.body.eta_studente > 19 && req.body.eta_studente < 31) {
        console.log(`OK: id ${req.body.id_studente} ed età [${req.body.eta_studente}] valido`);
        res.send(`<h1>OK studente aggiunto con id [${req.body.id_studente}] e Età [${req.body.eta_studente}]</h1>`);
    } else {
        console.log(`ERROR: id ${req.body.id_studente} o età[${req.body.eta_studente}] non validi`);
        res.send(`<script>setTimeout(function(){ window.location.href = "/"; }, 3000);</script>
                  <h1>ERROR: non posso aggiungere lo studente id [${req.body.id_studente}] età [${req.body.eta_studente}] </h1>`);
    }
});

server.listen(8087,function(){ 
    console.log("Server Web in ascolto sulla porta: 8080");
});




