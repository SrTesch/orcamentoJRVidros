let sInst = document.getElementById('sInst'); //Sem instalação
let cInst = document.getElementById('cInst'); //Com instalação
let confirmation = document.getElementById('botao'); //Botão de confirmar
let tipoServ = document.getElementById('tipoServ') //Tipo de Serviço
tipoServ.hidden = true; // começando o programa com a parte oculta, pra só aparecer quando selecionarem instalação

sInst.addEventListener('click', function(){
    tipoServ.hidden = true;
});
cInst.addEventListener('click', function(){
    tipoServ.hidden = false;
});

