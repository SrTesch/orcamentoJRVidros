import  express  from 'express';
import { Request, Response } from 'express';
import { createServer } from 'http';
import { OkPacket } from 'mysql2';
import { pool } from './config/database';
const app = express();
const server = createServer(app);

app.use(express.json())
app.set('view engine', 'ejs');



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Substitua pelo URL do seu frontend
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.get("/", (_req: Request, res: Response) =>{
    res.status(200).json("Eu sou lindo na requisição base")
})


app.get("/getAllValues", async (req : Request, res : Response)=>{
    try{
        const conn = await pool.getConnection();
        const [result] = await conn.query("select * from MetroQuadradoVidros;");
        conn.release();
        if(Array.isArray(result) && result.length != 0){
            return res.status(200).send({"values": result}).end()
        }
    }catch(err){
        console.log(err);
        res.status(500).json({msg: `Deu ruim mano, da uma  olhadinha no erro: ${err}`})
    }
});

app.post('/changeValue', async (req: Request, res: Response)=>{
    const {tipoServ, cor , preco} = req.body;
    
    try{
        const conn = await pool.getConnection();
        let stringCondicional = ";";
        if(cor)
            stringCondicional = `and cor = ${cor};`
        const [result] = await conn.query(`update MetroQuadradoVidros set preco = ${preco} where tipoServ ` + stringCondicional);
        conn.release();

        if(Array.isArray(result) && result.length != 0){
            console.log(`O preço do ${tipoServ} foi alterado para R$${preco} com sucesso!!!`)
            return res.status(200).json({result, msg: "dados alterados a seguir", Preço: preco, Coisa: tipoServ});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({msg: `Deu ruim mano, da uma  olhadinha no erro: ${err}`})
    }
})


server.listen(3001, () => {
    console.log("eusoulindo na porta 3001");
});