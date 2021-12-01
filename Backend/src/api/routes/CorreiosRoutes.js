const express = require('express');

const router = express.Router();
let Correios = require('node-correios');
let correio = new Correios();



router.get('/correios', (req,res) => {
    // console.log('Rota de Cep encontrada!!!');
    const { cep } = req.query;
    // console.log('>>' + cep);

    correio.consultaCEP({ cep: cep })
    .then(result => {
        res.send( result ); 
        console.log( result);
        console.log( "Sucesso na consulta!!"); 
    })
    .catch(error => {
      console.log("Erro de Catch " + error);
    });

});

module.exports = router;

