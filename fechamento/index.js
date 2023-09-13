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
            'padrao':176, 
            'eng':187,
            'box':165,
            'pia':120,
            'esp':200
        },
        'inc':{
            'padrao':136,
            'eng':149,
            'box':127,
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
    let larg = Number(document.getElementById('largura').value)
    larg *= 0.01 //transformando de metro pra centímetros
    let serv = document.getElementById('tipoDeServ').value
    if(serv == 'j2f' ||serv == 'p2f' || serv == 'boxF' || serv == 'kitPia' || serv == 'trasVao' || serv == 'trasVaoE')
        larg += 0.05
    else if(serv == 'j4f' || serv == 'p4f' || serv == 'boxC' || serv == 'trasVaoD'|| serv == 'versJ3' || serv == 'versP3')
        larg += 0.1
    else if(serv == 'versJ6' || serv == 'versP6')
        larg += 0.2
    
    return larg
}

function alum() { //calculo do preço dos alumínios
    let serv = document.getElementById('tipoDeServ').value
    let alt = Number(document.getElementById('altura').value)
    let corAlum = document.getElementsByName('corA')

    if(serv == 12 || serv == 13){ //transpasso na altura da porta de correr por trás do vão
        alt = (alt+5) * 0.01
    }else {
        alt = alt * 0.01
    }
    let larg = transp()
    let precoAlum, aux, alumAlt, alumLarg

        if(serv == 'j2f'){
            alumAlt = alt * 15
            alumLarg = larg * 39.5
            aux = alumAlt + alumLarg
            kit = 18
            precoAlum = aux + kit
        }else if(serv == 'j4f'){
            alumAlt = alt * 24
            alumLarg = larg * 39.5
            aux = alumAlt + alumLarg
            kit = 25
            precoAlum = aux + kit
        }else if(serv == 'p2f'){
            alumAlt = alt * 15
            alumLarg = larg * 39.5
            aux = alumAlt + alumLarg
            kit = 49
            precoAlum = aux + kit
        }else if(serv == 'p4f'){
            alumAlt = alt * 24
            alumLarg = larg * 39.5
            aux = alumAlt + alumLarg
            kit = 68
            precoAlum = aux + kit
        }else if(serv == 'boxF' ){
            alumAlt = alt * 13
            alumLarg = larg * 48
            kit = 8
            precoAlum = kit + alumAlt + alumLarg;
        }else if(serv == 'boxC'){
            alumAlt = alt * 15
            alumLarg = larg * 48
            aux = alumAlt + alumLarg
            kit = 17
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
            kit = 20
            precoAlum = aux + kit
        }else if(serv == 'trasVao'){
            alumAlt = alt * 15
            alumLarg = larg * 52 * 2
            aux = alumAlt + alumLarg
            kit = 60
            precoAlum = aux + kit
        }else if(serv == 'trasVaoE'){
            alumAlt = alt * 15
            alumLarg = larg * 52 * 2
            aux = alumAlt + alumLarg
            kit = 60
            precoAlum = aux + kit +80//estruturação
        }else if(serv == 'trasVaoD'){
            alumAlt = alt * 25
            alumLarg = larg * 52 * 2
            aux = alumAlt + alumLarg
            kit = 80
            precoAlum = aux + kit
        }else if(serv == 'pivD'){
            precoAlum = 255
            kit = 0
        }else if(serv == 'versJ3'){
            alumAlt = alt * 25
            alumLarg = larg * 84
            aux = alumAlt + alumLarg
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
            kit = 125
            precoAlum = aux + kit
        }else if(serv == 'versP6'){
            alumAlt = alt * 25
            alumLarg = larg * 84
            aux = alumAlt + alumLarg
            kit = 180
            precoAlum = aux + kit
        }

    if(corAlum[1].checked){
        precoAlum *= 1.05
    }

    console.log(`aluminio: ${precoAlum} (neste valor já está incluido o kit!)`)

    return precoAlum
}

function vinil() {
    let alt = Number(document.getElementById('altVin').value)
    let larg = Number(document.getElementById('largVin').value)
    alt *= 0.01
    larg *= 0.01
    precovin = alt *larg * 19;
    console.log(`preço do vinil: ${precovin}`)
    return precovin
}

function puxador() {
    let pux = getRadioValue('pux')
    let puxAux = 0;
    if(pux === 's1'){
        puxAux = 26
    }else if(pux === 's2'){
        puxAux = 52
    }
    console.log(`preço do puxador: ${puxAux}`)
    return puxAux
}

function somaFinal() {
    let precoFinal = medidaVidro() + alum() + vinil() + puxador()
    let teste = document.getElementById('teste')
    teste.innerHTML = `<br>O preço de custo foi: R$${precoFinal.toFixed(2)}`.replace(".", ",")
    console.log('FIM-------------------------') 
}
