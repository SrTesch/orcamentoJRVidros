import { useState } from "react"

export default function Temperado() {

    //Dados do formulário------------

    const [altura, setAltura] = useState(0);
    const [largura, setLargura] = useState(0);
    const [tipo, setTipo] = useState('');
    const [cor, setCor] = useState('');
    const [serviço, setServiço] = useState('');
    const [corAlum, setCorAlum] = useState('');
    const [qtdServs, setQtdServs] = useState(1);
    const [Vinil, setVinil] = useState('');
    const [puxador, setPuxador] = useState('');

    const getGlassPrice = () : number =>{

        if(tipo === "espelho")
            return 200;
        
        if(tipo === "pia")
            return 120;

        if(cor === 'colorido'){
            if(tipo === 'padrao')
                return 162;
            else if (tipo === 'eng')
                return 174
            else if (tipo === 'box')
                return 157
        }else{
            if(tipo === 'padrao')
                return 127;
            else if (tipo === 'eng')
                return 138
            else if (tipo === 'box')
                return 119
        }
        return 0;
    }

    const precoFinalDoVidro = () =>{
        let alturaf = altura;
        if(serviço == 'trasVao' || serviço == 'trasVaoD' || serviço == 'trasVaoE') 
            alturaf = (altura+5)*0.01
        else
            alturaf *= 0.01

        let larg = transpasse();

        let p = getGlassPrice();

        let preçoFinal = alturaf * larg * p;
        return preçoFinal
    }

    const transpasse = () =>{
        let larg = largura;
        larg *= 0.01 //transformando de metro pra centímetros
        if(serviço == 'j2f' ||serviço == 'p2f' || serviço == 'boxF' || serviço == 'kitPia' || serviço == 'trasVao' || serviço == 'trasVaoE')
            larg += 0.05
        else if(serviço == 'j4f' || serviço == 'p4f' || serviço == 'boxC' || serviço == 'trasVaoD'|| serviço == 'versJ3' || serviço == 'versP3')
            larg += 0.1
        else if(serviço == 'versJ6' || serviço == 'versP6')
            larg += 0.2
        

        return larg
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Evita a recarga da página padrão do formulário
        console.log("preço final",precoFinalDoVidro());
    }
    return (
        <div className="budget">
            <h1 style={{ marginBottom: "15px", marginTop: "10px" }}>Orçamento de Vidro Temperado</h1>
            <form onSubmit={handleSubmit}>
                <span className="item">
                    <input
                        type="number"
                        value={altura}
                        id="altura"
                        onChange={e => { setAltura(parseInt(e.target.value)) }}
                    /> X <input
                        type="number"
                        value={largura}
                        id="largura"
                        onChange={e => { setLargura(parseInt(e.target.value)) }}
                    />
                </span>
                <span className="item" id="tipoServ">
                    <label>
                        <input
                            type="radio"
                            name="tipo"
                            value="box"
                            id="box"
                            checked={tipo === 'box'}
                            onChange={e=>{setTipo(e.target.value)}}
                        />
                        Box
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="tipo"
                            value="eng"
                            id="eng"
                            checked={tipo === 'eng'}
                            onChange={e=>{setTipo(e.target.value)}}
                        />
                        Engenharia
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="tipo"
                            value="padrao"
                            id="padrao"
                            checked={tipo === 'padrao'}
                            onChange={e=>{setTipo(e.target.value)}}
                        />
                        Padrão
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="tipo"
                            value="pia"
                            id="pia"
                            checked={tipo === 'pia'}
                            onChange={e=>{setTipo(e.target.value)}}
                        />
                        Kit Pia
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="tipo"
                            value="espelho"
                            checked={tipo === 'espelho'}
                            onChange={e=>{setTipo(e.target.value)}}
                        />
                        Espelho
                    </label>
                </span>
                <p>Cor do Vidro</p>
                <span className="item">
                    <label>
                        <input
                            type="radio"
                            name="cor"
                            value="incolor"
                            checked={cor === "incolor"}
                            onChange={e=>{setCor(e.target.value)}}
                        />
                        Incolor
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="cor"
                            value="colorido"
                            checked={cor == "colorido"}
                            onChange={e=>{setCor(e.target.value)}}
                        />
                        Colorido
                    </label>
                </span>
                <p>Serviço</p>
                <span className="item">
                    <select name="tipoDeServ" id="tipoDeServ" value={serviço} onChange={e => setServiço(e.target.value)}>
                        <option value="janela2f">Janela 2 Folhas</option>
                        <option value="janela4f">Janela 4 Folhas</option>
                        <option value="porta2f">Porta 2 Folhas</option>
                        <option value="porta4f">Porta 4 Folhas</option>
                        <option value="portaPivotante">Porta Pivotante</option>
                        <option value="duplaPiv">Dupla Pivotante</option>
                        <option value="boxF">Box Frontal</option>
                        <option value="boxC">Box de Canto</option>
                        <option value="bascP">Báscula P</option>
                        <option value="bascG">Báscula G</option>
                        <option value="portaoP">Portãozinho P</option>
                        <option value="portaoG">Portãozinho G</option>
                        <option value="kitPia">Kit Pia</option>
                        <option value="trasVao">Trás do vão</option>
                        <option value="trasVaoE">Trás do vão c est/</option>
                        <option value="trasVaoD">Trás do vão dupla</option>
                        <option value="janelaVers3">Janela Versatik 3F</option>
                        <option value="janelVers6">Janela Versatik 6F</option>
                        <option value="portaVers3">Porta Versatik 3F</option>
                        <option value="portaVers6">Porta Versatik 6F</option>
                        <option value="espelho">Espelho</option>
                    </select>
                </span>
                <p>Alumínio</p>
                <span className="item" id="alum">
                    <label>
                        <input
                            type="radio"
                            name="corAlum"
                            value="branco"
                            checked={corAlum === "branco"}
                            onChange={e => setCorAlum(e.target.value)}
                        />
                        Branco
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="corAlum"
                            value="preto"
                            checked={corAlum === "preto"}
                            onChange={e => setCorAlum(e.target.value)}
                        />
                        Preto
                    </label>
                </span>
                <p>Quantidade de Serviços</p>
                <span className="item">
                    <input type="number" max={5} min={1}
                        value={qtdServs}
                        onChange={e => { setQtdServs(parseInt(e.target.value)) }}
                    />
                </span>
                <p>Vinil</p>
                <span className="item">
                    <label>
                        <input
                            type="radio"
                            name="corAlum"
                            value="sim"
                            checked={Vinil === "sim"}
                            onChange={e => setVinil(e.target.value)}
                        />
                        Sim
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="corAlum"
                            value="nao"
                            checked={Vinil === "nao"}
                            onChange={e => setVinil(e.target.value)}
                        />
                        Não
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="corAlum"
                            value="simCant"
                            checked={Vinil === "simCant"}
                            onChange={e => setVinil(e.target.value)}
                        />
                        Sim,c/cant
                    </label>
                </span>
                <p>Puxador</p>
                <span className="item">
                    <label>
                        <input
                            type="radio"
                            name="corAlum"
                            value="nao"
                            checked={puxador === "nao"}
                            onChange={e => setPuxador(e.target.value)}
                        />
                        Não
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="corAlum"
                            value="1"
                            checked={puxador === "1"}
                            onChange={e => setPuxador(e.target.value)}
                        />
                        1
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="corAlum"
                            value="2"
                            checked={puxador === "2"}
                            onChange={e => setPuxador(e.target.value)}
                        />
                        2
                    </label>
                </span>
                <br />
                <button className="confirmButton" style={{ marginTop: "10px" }}>Confirmar</button>

            </form>
        </div>
    )
}