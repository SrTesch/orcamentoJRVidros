function getRadioValue(name){
    let valor = 'default'
    let elements = document.getElementsByName(name)
    for(let i = 0; i<elements.length; ++i){
        if(elements[i].checked){
            valor = elements[i].value
        }
    }
    return valor;
}
function precoMetroQuadrado() {
    let tipoDeMed = getRadioValue('tipoDeMed');
    let cor = getRadioValue('cor');
    let val1 = {
        'color':{
            'padrao':200.00, 
            'eng':230.00,
            'box':199.00
        },
        'inc':{
            'padrao':153.00,
            'eng':173.00,
            'box':136.00
        },
        'default':{}    
    } 
    return val1[cor][tipoDeMed]
}

function medidaVidro() {
    let aux1 = document.getElementById('altura')
    let alt = Number(aux1.value)
    let aux2 = document.getElementById('largura')
    let larg = Number(aux2.value)
    let p = precoMetroQuadrado()
    precoVidro = (alt * 0.01) * (larg*0.01) * p
    return precoVidro
}

function alum() { //calculo do preço dos alumínios
    let aux1 = document.getElementById('altura')
    let alt = Number(aux1.value)
    alt = alt * 0.01
    let aux2 = document.getElementById('largura')
    let larg = Number(aux2.value)
    larg = larg * 0.01
    let tipoDeServ = document.getElementsByName('serv')
    let aux = ''
    let precoAlum
    let alumAlt
    let alumLarg
    if(tipoDeServ[0].checked){
        aux = 'Janela 2 Folhas'
        alumAlt = alt * 15
        alumLarg = (larg + 5)* 46
        precoAlum = alumAlt + alumLarg + 20
    }else if(tipoDeServ[1].checked){
        aux = 'Janela 4 Folhas'
        alumAlt = alt * 25
        alumLarg = (larg + 10) * 46
        precoAlum = alumAlt + alumAlt + 32
    }else if(tipoDeServ[2].checked){
        aux = 'Porta 2 Folhas'
        alumAlt = alt * 15
        alumLarg = (larg + 5)* 46
        precoAlum = alumAlt + alumLarg + 60
    }else if(tipoDeServ[3].checked){
        aux = 'Porta 4 Folhas'
        alumAlt = alt * 25
        alumLarg = (larg + 10) * 46
        precoAlum = alumAlt + alumAlt + 80
    }else if(tipoDeServ[4].checked){
        aux = 'Box Frontal'
        alumAlt = alt * 13
        alumLarg = (larg + 5) * 38
        precoAlum = alumAlt + alumLarg +20
    }else{
        aux = 'Box de Canto'
        alumAlt = alt * 15
        alumLarg = (larg + 10) * 38
        precoAlum = alumAlt + alumLarg + 35
    }
    return precoAlum
}

function maoDeObra(){ //calculo da mão de obra
    let mo
    let tipoDeServ = document.getElementsByName('serv')
    let aux = ''
    let qserv = document.getElementsByName('MO')
    if(tipoDeServ[0].checked || tipoDeServ[1].checked || tipoDeServ[4].checked){
        if(qserv[0].checked){
            mo = 140
        }else if(qserv[1].checked){
            mo = 120
        }else if(qserv[2].checked){
            mo = 110
        }else if(qserv[3].checked){
            mo = 100
        }else{
            mo = 90
        }
    }else{
        if(qserv[0].checked){
            mo = 160
        }else if(qserv[1].checked){
            mo = 140
        }else if(qserv[2].checked){
            mo = 120
        }else if(qserv[3].checked){
            mo = 110
        }else{
            mo = 100
        }
    }
    return mo
}

function vinil() {
    let aux1 = document.getElementById('altura')
    let aux2 = document.getElementById('largura')
    let alt = Number(aux1.value)
    let larg = Number(aux2.value)
    alt = (alt + 5) * 0.01
    larg = (larg + 5) * 0.01
    let vin = document.getElementsByName('vin')
    let precovin
    if(vin[0].checked){
        precovin = alt * larg * 60
    }else{
        precovin = 0
    }
    return precovin
}

function puxador() {
    let pux = document.getElementsByName('pux')
    let puxAux
    if(pux[0].checked){
        puxAux = 0
    }else if(pux[1].checked){
        puxAux = 30
    }else{
        puxAux = 60
    }
    return puxAux
}

function somaFinal() {
    let precoFinal = medidaVidro() + alum() + maoDeObra() + vinil() + puxador()
    let teste = document.getElementById('teste')
    let preçoCartão = precoFinal * 1.11
    let preçoDinheiro = preçoCartão * 0.09
    teste.innerHTML = `<br> Em até 12x sem juros no cartão<br> R$${preçoCartão.toFixed(2)} <br>A vista: R$${preçoDinheiro.toFixed(2)}`.replace(".", ",") 
}