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
    var tipoDeServ = getRadioValue('tipoDeServ');
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
    return val1[cor][tipoDeServ]
}

function medida() {
    var alt = document.getElementById('altura')
    var larg = document.getElementById('largura')
    alt = Number(alt.value)*0.01
    larg = Number(larg.value)*0.01
    var p = precoMetroQuadrado()
    preco = alt * larg * p
    var teste = document.getElementById('teste')
    teste.innerHTML = `O preço do metro quadrado é R$${preco.toFixed(2)}`.replace(".", ",")
    return preco
}
