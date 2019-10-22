const express = require('express') // importando o express
const constructor = require('./models/colaborador') //importando o construtor do Schema do banco
const Colab = require('./controllers/colabController') // importa o colabController dentro da variavel Colab

//routes
const routes = express.Router(); // criando o controlador de rotas

routes.post('/insert', Colab.store); // chama o método store, dentro de Colab
routes.get('/a', Colab.index);

module.exports = routes; // exportando o controlador de rotas para poder ser chamado no servidor


    