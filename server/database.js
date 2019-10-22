require('dotenv').config();
const mongoose = require('mongoose'); // importando o mongoose


//database
mongoose.Promise = global.Promise; // para evitar bugs no banco
//conectando o banco 
mongoose.connect(process.env.LINK_BANCO,{useNewUrlParser:true,  useUnifiedTopology: true, useCreateIndex: true}) // configurações para evitar erros no baco
.then(()=>{
    console.log('banco conectado')
})
.catch((err)=>{
    console.log('houve um erro ao conectar'+err)
});