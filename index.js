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
            'padrao':179.2, 
            'eng':210,
            'box':176.4,
            'pia':120,
            'esp':200
        },
        'inc':{
            'padrao':133.5,
            'eng':154,
            'box':123,
            'pia':120,
            'esp':200
        },
        'default':{}    
    } 
    return val1[cor][tipoDeMed]
}

function medidaVidro() {
    let aux1 = document.getElementById('altura')
    let alt = Number(aux1.value)
    let serv = document.getElementById('tipoDeServ').value
    if(serv == 'trasVao' || serv == 'trasVaoD' || serv == 'trasVaoE'){ //transpasso na altura da porta de correr por trás do vão
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
    if(serv == 'j2f' ||serv == 'p2f' || serv == 'boxF' || serv == 'kitPia' || serv == 'trasVao' || serv == 'trasVaoE'){
        larg += 0.05
    }else if(serv == 'j4f' || serv == 'p4f' || serv == 'boxC' || serv == 'trasVaoD'|| serv == 'versJ3' || serv == 'versP3'){
        larg += 0.1
    }else if(serv == 'versJ6' || serv == 'versP6'){
        larg += 0.2
    }else{
        larg=larg
    }
    return larg
}

function alum() { //calculo do preço dos alumínios
    let serv = document.getElementById('tipoDeServ').value
    let aux1 = document.getElementById('altura')
    let alt = Number(aux1.value)
    let cor = document.getElementsByName('corA')

    if(serv == 12 || serv == 13){ //transpasso na altura da porta de correr por trás do vão
        alt = (alt+5) * 0.01
    }else {
        alt = alt * 0.01
    }
    let larg = transp()
    let precoAlum
    let alumAlt
    let alumLarg
    if(serv == 'j2f'){
        alumAlt = alt * 15
        alumLarg = larg * 52
        aux = alumAlt + alumLarg
        if(cor[1].checked){
            aux *= 1.2
        }
        kit = 20
        precoAlum = aux + kit
    }else if(serv == 'j4f'){
        alumAlt = alt * 25
        alumLarg = larg * 52
        aux = alumAlt + alumLarg
        if(cor[1].checked){
            aux *= 1.2
        }
        kit = 32
        precoAlum = aux + kit
    }else if(serv == 'p2f'){
        alumAlt = alt * 15
        alumLarg = larg * 52
        aux = alumAlt + alumLarg
        if(cor[1].checked){
            aux *= 1.2
        }
        kit = 60
        precoAlum = aux + kit
    }else if(serv == 'p4f'){
        alumAlt = alt * 25
        alumLarg = larg * 52
        aux = alumAlt + alumLarg
        if(cor[1].checked){
            aux *= 1.2
        }
        kit = 80
        precoAlum = aux + kit
    }else if(serv == 'boxF' ){
        alumAlt = alt * 13
        alumLarg = larg * 48
        aux = alumAlt + alumLarg
        if(cor[1].checked){
            aux *= 1.2
        }
        kit = 20
        precoAlum = aux + kit
    }else if(serv == 'boxC'){
        alumAlt = alt * 15
        alumLarg = larg * 48
        aux = alumAlt + alumLarg
        if(cor[1].checked){
            aux *= 1.2
        }
        kit = 35
        precoAlum = aux + kit
    }else if(serv == 'piv'){
        kit = 0
        precoAlum = 115
    }else if(serv == 'bascP'){
        kit = 0
        precoAlum = 40
    }else if(serv == 'bascG'){
        aux = 'Báscula g'
        kit = 0
        precoAlum = 60
    }else if(serv == 'portaoP'){
        precoAlum = 40
        kit = 0
    }else if(serv == 'portaoG'){
        precoAlum = 70
        kit = 0
    }else if(serv == 'kitPia'){
        alumAlt = alt * 13
        alumLarg = larg * 45
        aux = alumAlt + alumLarg
        if(cor[1].checked){
            aux *= 1.2
        }
        kit = 20
        precoAlum = aux + kit
    }else if(serv == 'trasVao'){
        alumAlt = alt * 15
        alumLarg = larg * 52 * 2
        aux = alumAlt + alumLarg
        if(cor[1].checked){
            aux *= 1.2
        }
        kit = 60
        precoAlum = aux + kit
    }else if(serv == 'trasVaoE'){
        alumAlt = alt * 15
        alumLarg = larg * 52 * 2
        aux = alumAlt + alumLarg
        if(cor[1].checked){
            aux *= 1.2
        }
        kit = 60
        precoAlum = aux + kit +80//estruturação
    }else if(serv == 'trasVaoD'){
        alumAlt = alt * 25
        alumLarg = larg * 52 * 2
        aux = alumAlt + alumLarg
        if(cor[1].checked){
            aux *= 1.2
        }
        kit = 80
        precoAlum = aux + kit
    }else if(serv == 'pivD'){
        precoAlum = 255
        kit = 0
    }else if(serv == 'versJ3'){
        alumAlt = alt * 25
        alumLarg = larg * 84
        aux = alumAlt + alumLarg
        if(cor[1].checked){
            aux *= 1.2
        }
        kit = 70
        precoAlum = aux + kit
    }else if(serv == 'versP3'){
        alumAlt = alt * 25
        alumLarg = larg * 84
        kit = 110
        precoAlum = alumAlt + alumLarg + kit
    }else if(serv == 'versJ6'){
        alumAlt = alt * 25
        alumLarg = larg * 84
        aux = alumAlt + alumLarg
        if(cor[1].checked){
            aux *= 1.2
        }
        kit = 125
        precoAlum = aux + kit
    }else if(serv == 'versP6'){
        alumAlt = alt * 25
        alumLarg = larg * 84
        aux = alumAlt + alumLarg
        if(cor[1].checked){
            aux *= 1.2
        }
        kit = 180
        precoAlum = aux + kit
    }else if(serv == 'esp'){
        precoAlum = 0
        kit = 0
    }

    console.log(`alumínio: ${precoAlum - kit}`)
    console.log(`kit: ${kit}`)

    return precoAlum
}

function maoDeObra(){ //calculo da mão de obra
    let mo
    let valor = document.getElementById('tipoDeServ').value
    let qserv = document.getElementById('qserv').value
    if(valor == 'j2f' || valor == 'j4f' || valor == 'boxF' || valor == 'piv' || valor == 'kitPia'){
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
    }else if(valor == 'p2f' || valor == 'p4f' || valor == 'boxC' || valor == 'trasVao' || valor == 'trasVaoE'){ 
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
    }else if(valor == 'trasVaoD'){
        if(qserv == 0){
            mo = 180
        }else if(qserv == 1){
            mo = 160
        }else if(qserv == 2){
            mo = 140
        }else if(qserv == 3){
            mo = 130
        }
    }else if(valor == 'bascP' || valor == 'bascG'){
        if(qserv == 0){
            mo = 80
        }else if(qserv == 1){
            mo = 70
        }else if(qserv == 2){
            mo = 60
        }else{
            mo = 50
        }
    }else if(valor == 'portaoP' || valor == 'portaoG'){
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
    }else if(valor == 'pivD'){
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
    }else if(valor == 'versJ3'){
        if(qserv == 0){
            mo = 180
        }else if(qserv == 1){
            mo = 160
        }else{
            mo = 140
        }
    }else if(valor == 'versJ6'){
        if(qserv == 0){
            mo = 200
        }else if(qserv == 1){
            mo = 180
        }else{
            mo = 160
        }
    }else if(valor == 'versP3'){
        if(qserv == 0){
            mo = 220
        }else if(qserv == 1){
            mo = 200
        }else{
            mo = 180
        }
    }else if(valor == 'versP6'){
        if(qserv == 0){
            mo = 250
        }else if(qserv == 1){
            mo = 230
        }else{
            mo = 210
        }
    }else if(valor == 'esp'){
        mo = 0
    }
    console.log(`preço da mão de obra ${mo}`)
    return mo
}

function vinil() {
    let aux1 = document.getElementById('altura')
    let alt = Number(aux1.value)
    let serv = document.getElementById('tipoDeServ').value
    if(serv == 'trasVao' || serv == 'trasVaoD' || serv == 'trasVaoE'){ //transpasso na altura da porta de correr por trás do vão
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
    teste.innerHTML = `<br>9x sem juros: R$${preçoCartão.toFixed(2)} <br> A vista: R$${preçoDinheiro.toFixed(2)}`.replace(".", ",")
    console.log('FIM-------------------------') 
}
