let sInst = document.getElementById('sInst'); //Sem instalação
let cInst = document.getElementById('cInst'); //Com instalação
let tipoServ = document.getElementById('tipoServ') //Tipo de Serviço
tipoServ.hidden = true; // começando o programa com a parte oculta, pra só aparecer quando selecionarem instalação
sInst.addEventListener('click', function(){
    tipoServ.hidden = true;
});
cInst.addEventListener('click', function(){
    tipoServ.hidden = false;
});
//--------------------------------------

function getRadioValue(name){ //esta função serve para pegar o valor dos radios inputs
    let valor = 'default';
    let elements = document.getElementsByName(name)
    for(let i = 0; i<elements.length; ++i){
        if(elements[i].checked)
            valor = elements[i].value
    }
    return valor;
}

const precoVidro = (alt, larg, qtd, tipo) =>{
    switch(tipo){
        case "canelado":
            return alt * larg * qtd * 120;
        case "incolor":
            return alt * larg * qtd * 120;
        case "fume":
            return alt * larg * qtd * 190;
        case "miniboreal":
            return alt * larg * qtd * 140;
        case "esp":
            return alt * larg * qtd * 180;
    }
}

const getTipoServ = total =>{
    let tipoServ = getRadioValue("tipoDeServ");
    let aux = total;
    if(tipoServ === "ferro"){
        total *= 1.4;
        aux = total - aux;
        console.log(`Instalação: ${aux}`);
    }
    else if(tipoServ === "aluminio"){
        total *= 1.3;
        aux = total - aux;
        console.log(`Instalação: ${aux}`);
    }else if(tipoServ === "madeira"){
        let alt = Number(document.getElementById("altura").value); //pegando a medida da altura
        let larg = Number(document.getElementById("largura").value); //pegando a medida da largura

        alt += 1;
        alt *= 0.01;
        larg += 1;
        larg *= 0.01;
        let totalMadeira = (alt + larg) * 2 * 1.7;
        total += totalMadeira
        total *= 1.4;
        console.log(`Preço da madeira ${totalMadeira.toFixed(2)}`)
        aux = total - aux - totalMadeira;
        console.log(`Instalação: ${aux.toFixed(2)}`);
    }

    return total;
}

const somaFinal = () =>{
    let altura = Number(document.getElementById("altura").value); //pegando a medida da altura
    altura *= 0.01;
    let largura = Number(document.getElementById("largura").value); //pegando a medida da largura
    largura *= 0.01;
    let qtdVidro = Number(document.getElementById("qtdVidros").value) //pegando a quantidade de vidros
    let tipoDeVidro = getRadioValue("tipoDeVidro");
    let total = 0;
    total += precoVidro(altura, largura, qtdVidro, tipoDeVidro);
    console.log(`Preço do vidro: ${total.toFixed(2)}`);

    if(getRadioValue("serv") === "cInst"){
        total = getTipoServ(total);
    }

    let preçoCartão = total * 1.125
    let preçoDinheiro = preçoCartão * 0.9


    let preco = document.getElementById('preco');
    preco.innerHTML = `<br>10x sem juros: R$${preçoCartão.toFixed(2)} <br> A vista: R$${preçoDinheiro.toFixed(2)}`.replace(".", ",").replace(".",",")
    console.log("FIM-----------------FIM")
}



let confirmation = document.getElementById('botao'); //Botão de confirmar
confirmation.addEventListener('click', somaFinal);