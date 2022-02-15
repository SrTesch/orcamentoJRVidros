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
            'box':199.00,
            'pia':120.00
        },
        'inc':{
            'padrao':153.00,
            'eng':173.00,
            'box':136.00,
            'pia':120.00
        },
        'default':{}    
    } 
    return val1[cor][tipoDeMed]
}

function medidaVidro() {
    let aux1 = document.getElementById('altura')
    let alt = Number(aux1.value)
    let serv = document.getElementById('tipoDeServ').value
    if(serv == 12 || serv == 13){ //transpasso na altura da porta de correr por trás do vão
        alt = (alt+5)*0.01
    }else {
        alt *= 0.01
    }
    let larg = transp()
    let p = precoMetroQuadrado()
    precoVidro = alt * larg * p
    console.log(`preço do vidro: ${precoVidro.toFixed(2)}`)
    return precoVidro
}

function transp(){
    let larg = document.getElementById('largura')
    larg = Number(larg.value)
    larg *= 0.01 //transformando de metro pra centímetros
    let serv = document.getElementById('tipoDeServ').value
    if(serv == 0 ||serv == 2 || serv == 4 || serv == 11 || serv == 12){
        larg += 0.05
    }else if(serv == 1 || serv == 3 || serv == 5 || serv == 13){
        larg += 0.1
    }else{
        larg=larg
    }
    return larg
}

function alum() { //calculo do preço dos alumínios
    let serv = document.getElementById('tipoDeServ').value
    let aux1 = document.getElementById('altura')
    let alt = Number(aux1.value)

    if(serv == 12 || serv == 13){ //transpasso na altura da porta de correr por trás do vão
        alt = (alt+5) * 0.01
    }else {
        alt = alt * 0.01
    }
    let larg = transp()
    let aux = ''
    let precoAlum
    let alumAlt
    let alumLarg
    if(serv == 0){
        aux = 'Janela 2 Folhas'
        alumAlt = alt * 15
        alumLarg = larg * 46
        kit = 20
        precoAlum = alumAlt + alumLarg + kit
    }else if(serv == 1){
        aux = 'Janela 4 Folhas'
        alumAlt = alt * 25
        alumLarg = larg * 46
        kit = 32
        precoAlum = alumAlt + alumLarg + kit
    }else if(serv == 2){
        aux = 'Porta 2 Folhas'
        alumAlt = alt * 15
        alumLarg = larg * 46
        kit = 60
        precoAlum = alumAlt + alumLarg + kit
    }else if(serv == 3){
        aux = 'Porta 4 Folhas'
        alumAlt = alt * 25
        alumLarg = larg * 46
        kit = 80
        precoAlum = alumAlt + alumLarg + kit
    }else if(serv == 4 ){
        aux = 'Box Frontal'
        alumAlt = alt * 13
        alumLarg = larg * 38
        kit = 20
        precoAlum = alumAlt + alumLarg + kit
    }else if(serv == 5){
        aux = 'Box de Canto'
        alumAlt = alt * 15
        alumLarg = larg * 38
        kit = 35
        precoAlum = alumAlt + alumLarg + kit
    }else if(serv == 6){
        aux = 'Porta Pivotante'
        kit = 0
        precoAlum = 115
    }else if(serv == 7){
        aux = 'Báscula P'
        kit = 0
        precoAlum = 40
    }else if(serv == 8){
        aux = 'Báscula g'
        kit = 0
        precoAlum = 60
    }else if(serv == 9){
        aux = 'portãozinho p'
        precoAlum = 40
        kit = 0
    }else if(serv == 10){
        aux = 'portãozinho g'
        precoAlum = 70
        kit = 0
    }else if(serv == 11){
        aux = 'kit pia'
        alumAlt = alt * 13
        alumLarg = larg * 35
        kit = 20
        precoAlum = alumAlt + alumLarg + kit
    }else if(serv == 12){//´porta de correr por trás do vão comum
        alumAlt = alt * 15
        alumLarg = larg * 46 * 2
        kit = 60
        precoAlum = alumAlt + alumLarg + kit
    }else if(serv == 13){//porta de correr por trás do vão dupla
        alumAlt = alt * 25
        alumLarg = larg * 46 * 2
        kit = 80
        precoAlum = alumAlt + alumLarg + kit
    }else if(serv == 14){//porta dupla pivotante
        precoAlum = 255
        kit = 0
    }
    console.log(`alumínio: ${precoAlum - kit}`)
    console.log(`kit: ${kit}`)
    return precoAlum
}

function maoDeObra(){ //calculo da mão de obra
    let mo
    let valor = document.getElementById('tipoDeServ').value
    let aux = ''
    let qserv = document.getElementById('qserv').value
    if(valor == 0 || valor == 1 || valor == 4 || valor == 6 || valor == 11){//janela 2 folhas
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
    }else if(valor == 2 || valor == 3 || valor == 5 || valor == 12){ //janela 4 folhas
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
    }else if(valor == 13){ //porta de correr por tras do vão dupla
        if(qserv == 0){
            mo = 180
        }else if(qserv == 1){
            mo = 160
        }else if(qserv == 2){
            mo = 140
        }else if(qserv == 3){
            mo = 130
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
    }else if(valor == 14){
        if(qserv == 0){
            mo = 220
        }else if(qserv == 1){
            mo = 200
        }else if(qserv == 2){
            mo = 180
        }else if(qserv == 3){
            mo = 160
        }else{
            mo = 150
        }
    }
    console.log(`preço da mão de obra ${mo}`)
    return mo
}

function vinil() {
    let aux1 = document.getElementById('altura')
    let alt = Number(aux1.value)
    let serv = document.getElementById('tipoDeServ').value
    if(serv == 12 || serv == 13){ //transpasso na altura da porta de correr por trás do vão
        alt = (alt+5)*0.01
    }else {
        alt *= 0.01
    }
    larg = transp()
    let vin = document.getElementsByName('vin')
    let precovin
    if(vin[0].checked){
        precovin = alt * larg * 60
    }else if(vin[1].checked){
        precovin = 0
    }else{
        precovin = (alt * larg * 60) + 25
    }
    console.log(`preço do vinil: ${precovin}`)
    return precovin
}

function puxador() {
    let pux = document.getElementsByName('pux')
    let puxAux
    if(pux[0].checked){
        puxAux = 0
    }else if(pux[1].checked){
        puxAux = 30
    }else if(pux[2].checked){
        puxAux = 60
    }
    console.log(`preço do puxador: ${puxAux}`)
    return puxAux
}

function somaFinal() {
    let precoFinal = medidaVidro() + alum() + maoDeObra() + vinil() + puxador()
    let teste = document.getElementById('teste')
    let preçoCartão = precoFinal * 1.11
    let preçoDinheiro = preçoCartão * 0.91
    teste.innerHTML = `<br>10x sem juros: R$${preçoCartão.toFixed(2)} <br> A vista: R$${preçoDinheiro.toFixed(2)}`.replace(".", ",")
    console.log('FIM------------------------------') 
}