const express = require('express'); // importando o express
const database = require('./database') // importando o banco
const routes = require('./routes') //importando as rotas

//server
const app = express(); // instanciando o servidor


app.use(express.json()); //sinalizando para o servidor entender json
app.use(routes) // delegando à instancia do servidor, que utilize as rotas

app.listen(3000,()=>{ //sinalizando a porta do servidor
    console.log("servidor iniciado com sucesso")
});

