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

function alum() {
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
    if(tipoDeServ[0].checked || tipoDeServ[2].checked){
        aux = 'Janela 2 Folhas e Porta 2 Folhas'
        alumAlt = alt * 15
        alumLarg = larg * 46
        precoAlum = alumAlt + alumAlt
    }else if(tipoDeServ[1].checked || tipoDeServ[3].checked){
        aux = 'Janela 4 Folhas ou Porta 4 Folhas'
        alumAlt = alt * 25
        alumLarg = larg * 46
        precoAlum = alumAlt + alumAlt
    }else if(tipoDeServ[4].checked){
        aux = 'Box Frontal'
        alumAlt = alt * 13
        alumLarg = larg * 38
        precoAlum = alumAlt + alumAlt
    }else{
        aux = 'Box de Canto'
        alumAlt = alt * 15
        alumLarg = larg * 38
        precoAlum = alumAlt + alumAlt
    }
    return precoAlum
}

function somaFinal() {
    let precoFinal = medidaVidro() + alum()
    let teste = document.getElementById('teste')
    teste.innerHTML = `O preço é R$${precoFinal.toFixed(2)}`.replace(".", ",")
}