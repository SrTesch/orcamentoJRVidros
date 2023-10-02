const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors())
app.use(express.json())


//Criando a conexão com o banco
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root",
    database: "jrvidros"
});

app.post('/changeValue', (req,res)=>{
    const tipoServ = req.body.tipoServ;
    const cor = req.body.cor;
    const preco = req.body.preco;

    db.query(`update MetroQuadradoVidros set preco = ${preco} where tipoServ = "${tipoServ}" and cor = "${cor}"`, (err, result)=>{
        if(err){
            console.log(err);
            res.send("Infelizmente nao consegui alterar o valor agora\n O erro foi: " + err + "\n Tente novamente mais tarde");
        }else
            res.send("Valor Alterado com sucesso")
    })
})

app.get("/getValues", (req,res)=>{
    db.query('select * from MetroQuadradoVidros', (err, result)=>{
        if(err)
            res.send(err);
        else
            res.send(result);
    })
})