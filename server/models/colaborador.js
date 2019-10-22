const mongoose = require('mongoose');
//models

const colabSchema = new mongoose.Schema({ // criando o model Colaborador
    nome:{
        type:String,
        required: true
    },
    sobrenome:{
        type:String,
        required:true
    },
    equipe:{
        type:String,
        required:true
    },
    cpf:{
        type:Number,
        required:true,
        unique:true
    },
    venda:{
        type:String,
        required:true
    }
});

const constructor = mongoose.model('colab',colabSchema); // Definindo o nome e o Schema da collection, assim como salvando em uma variavel
module.exports = constructor