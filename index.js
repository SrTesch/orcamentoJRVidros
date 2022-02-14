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
    let aux2 = document.getElementById('largura')
    let alt = Number(aux1.value)
    let larg = Number(aux2.value)
    alt = alt * 0.01
    larg = larg * 0.01
    let serv = document.getElementById('tipoDeServ').value
    let aux = ''
    let precoAlum
    let alumAlt
    let alumLarg
    if(serv == 0){
        aux = 'Janela 2 Folhas'
        alumAlt = alt * 15
        alumLarg = (larg + 0.05) * 46
        precoAlum = alumAlt + alumLarg + 20
    }else if(serv == 1){
        aux = 'Janela 4 Folhas'
        alumAlt = alt * 25
        alumLarg = (larg + 0.10) * 46
        precoAlum = alumAlt + alumLarg + 32
    }else if(serv == 2){
        aux = 'Porta 2 Folhas'
        alumAlt = alt * 15
        alumLarg = (larg + 0.05) * 46
        precoAlum = alumAlt + alumLarg + 60
    }else if(serv == 3){
        aux = 'Porta 4 Folhas'
        alumAlt = alt * 25
        alumLarg = (larg + 0.10) * 46
        precoAlum = alumAlt + alumLarg + 80
    }else if(serv == 4 ){
        aux = 'Box Frontal'
        alumAlt = alt * 13
        alumLarg = (larg + 0.05) * 38
        precoAlum = alumAlt + alumLarg + 20
    }else if(serv == 5){
        aux = 'Box de Canto'
        alumAlt = alt * 15
        alumLarg = (larg + 0.10) * 38
        precoAlum = alumAlt + alumLarg + 35
    }else if(serv == 6){
        aux = 'Porta Pivotante'
        precoAlum = 115
    }else if(serv == 7){
        aux = 'Báscula P'
        precoAlum = 40
    }else if(serv == 8){
        aux = 'Báscula g'
        precoAlum = 60
    }else if(serv == 9){
        aux = 'portãozinho p'
        precoAlum = 40
    }else if(serv == 10){
        aux = 'portãozinho g'
        precoAlum = 70
    }
    return precoAlum
}

function maoDeObra(){ //calculo da mão de obra
    let mo
    let valor = document.getElementById('tipoDeServ').value
    let aux = ''
    let qserv = document.getElementById('qserv')
    if(valor == 0 || valor == 1 || valor == 4 || valor == 6){
        if(qserv == 0){
            mo = 140
        }else if(qserv == 1){
            mo = 120
        }else if(qserv == 2){
            mo = 110
        }else if(qserv == 3){
            mo = 100
        }else{
            mo = 90
        }
    }else if(valor == 2 || valor == 3 || valor == 5){
        if(qserv == 0){
            mo = 160
        }else if(qserv == 1){
            mo = 140
        }else if(qserv == 2){
            mo = 120
        }else if(qserv == 3){
            mo = 110
        }else{
            mo = 100
        }
    }else if(valor == 7 || valor == 8){
        if(qserv == 0){
            mo = 80
        }else if(qserv == 1){
            mo = 70
        }else if(qserv == 2){
            mo = 60
        }else if(qserv == 3){
            mo = 50
        }else{
            mo = 50
        }
    }else if(valor == 9 || valor == 10){
        if(qserv == 0){
            mo = 100
        }else if(qserv == 1){
            mo = 80
        }else if(qserv == 2){
            mo = 70
        }else if(qserv == 3){
            mo = 60
        }else{
            mo = 60
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
    let preçoDinheiro = preçoCartão * 0.91
    teste.innerHTML = `<br>10x sem juros: R$${preçoCartão.toFixed(2)} <br> A vista: R$${preçoDinheiro.toFixed(2)}`.replace(".", ",") 
}
