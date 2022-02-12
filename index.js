function getRadioValue(name){
    var valor = 'default'
    var elements = document.getElementsByName(name)
    for(var i = 0; i<elements.length; ++i){
        if(elements[i].checked){
            valor = elements[i].value
        }
    }
    return valor;
}
function precoMetroQuadrado() {
    var tipoDeMed = getRadioValue('tipoDeMed');
    var cor = getRadioValue('cor');
    var val1 = {
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

function medida() {
    var alt = document.getElementById('altura')
    var larg = document.getElementById('largura')
    alt = Number(alt.value)*0.01
    larg = Number(larg.value)*0.01
    var p = precoMetroQuadrado()
    precoVidro = alt * larg * p
    return precoVidro
}

function alum() {
    var alt = document.getElementById('altura')
    var larg = document.getElementById('largura')
    alt = Number(alt.value)
    larg = Number(larg.value)
    var tipoDeServ = document.getElementsByName('serv')
    var aux = ''
    var precoAlum
    if(tipoDeServ[0].checked){
        aux = 'Janela 2 Folhas'
        if(alt <= 100 && larg <= 100){
            precoAlum = 91.15
        }else if(alt <= 100 && larg <= 120){
            precoAlum = 100.45
        }else if(alt <= 100 && larg <=150){
            precoAlum= 114.4
        }else if(alt<= 100 && larg<=200){
            precoAlum = 137.65
        }else if(alt<= 100 && larg<=250){
            precoAlum = 160.9
        }else if(alt<= 100 && larg<=300){
            precoAlum = 184.15
        }else if(alt<= 120 && larg<=100){
            precoAlum = 95.15
        }else if(alt<= 120 && larg<=150){
            precoAlum = 118.4
        }else if(alt<= 120 && larg<=200){
            precoAlum = 141.65
        }else if(alt<= 120 && larg<=250){
            precoAlum = 164.9
        }else if(alt<= 120 && larg<=300){
            precoAlum = 188.15
        }else if(alt<= 150 && larg<=150){
            precoAlum = 124.4
        }else if(alt<= 150 && larg<=200){
            precoAlum = 147.65
        }else if(alt<= 150 && larg<=250){
            precoAlum = 170.9
        }else{
            precoAlum = 194.15
        }
    }else if(tipoDeServ[1].checked){
        aux = 'Janela 4 Folhas'
        if(alt <= 100 && larg <= 120){
            precoAlum = 124.10
        }else if(alt <= 100 && larg <= 150){
            precoAlum = 138.2
        }else if(alt <= 100 && larg <=200){
            precoAlum= 161.7
        }else if(alt<= 100 && larg<=250){
            precoAlum = 185.2
        }else if(alt<= 100 && larg<=300){
            precoAlum = 208.7
        }else if(alt<= 120 && larg<=150){
            precoAlum = 143.8
        }else if(alt<= 120 && larg<=200){
            precoAlum = 167.3
        }else if(alt<= 120 && larg<=250){
            precoAlum = 190.8
        }else if(alt<= 120 && larg<=300){
            precoAlum = 214.3
        }else if(alt<= 150 && larg<=150){
            precoAlum = 152.2
        }else if(alt<= 150 && larg<=200){
            precoAlum = 175.7
        }else if(alt<= 150 && larg<=250){
            precoAlum = 199.2
        }else{
            precoAlum = 222.7
        }
    }else if(tipoDeServ[2].checked){
        aux = 'Porta 2 Folhas'
        if(alt <= 210 && larg <= 120){
            precoAlum = 167.45
        }else if(alt <= 210 && larg <= 150){
            precoAlum = 181.4
        }else if(alt <= 210 && larg <=200){
            precoAlum= 204.65
        }else{
            precoAlum = 277.9
        }
    }else if(tipoDeServ[3].checked){
        aux = 'Porta 4 Folhas'
        if(alt <= 210 && larg <= 200){
            precoAlum = 237.5
        }else if(alt <= 210 && larg <= 250){
            precoAlum = 261
        }else if(alt <= 210 && larg <=300){
            precoAlum= 284.5
        }else if(alt <= 210 && larg <=350){
            precoAlum = 308
        }else if(alt <= 210 && larg <=400){
            precoAlum = 331.5
        }else{
            precoAlum = 355
        }
    }else if(tipoDeServ[4].checked){
        aux = 'Box Frontal'
        if(alt <= 180 && larg <= 120){
            precoAlum = 103.2
        }else if(alt <= 180 && larg <= 140){
            precoAlum = 112
        }else if(alt <= 180 && larg <=160){
            precoAlum= 120.8
        }else if(alt <= 180 && larg <=180){
            precoAlum = 129.6
        }else if(alt <= 180 && larg <=200){
            precoAlum = 138.4
        }else{
            precoAlum = 147.2
        }
    }else{
        aux = 'Box de Canto'
        if(alt <= 180 && larg <= 180){
            precoAlum = 157.6
        }else if(alt <= 180 && larg <= 200){
            precoAlum = 166.4
        }else if(alt <= 180 && larg <=220){
            precoAlum= 175.2
        }else{
            precoAlum = 188.4
        }
    }
    return precoAlum
}

function somaFinal() {
    var precoFinal = medida() + alum()
    var teste = document.getElementById('teste')
    teste.innerHTML = `O preço é R$${precoFinal.toFixed(2)}`.replace(".", ",")
}