function perfil1(){
    let perfil = document.getElementById('tipoPerfil1').value;
    let aux1 = document.getElementById('metro1');
    let metro = Number(aux1.value);
    let total = 0;

    if(perfil == 'tuboPan'){
        total = metro * 42;
    }else if(perfil == 'tubo1x1'){
        total = metro * 9;
    }else if(perfil == 'tubo15x15'){
        total = metro * 13;
    }else if(perfil == 'tubo2x15'){
        total = metro * 22;
    }else if(perfil == 'tubo2x2'){
        total = metro * 19;
    }else if(perfil == 'tubo3x15'){
        total = metro * 27;
    }else if(perfil == 'tubo4x2'){
        total = metro * 34;
    }else if(perfil == 'tubo4x4'){
        total = metro * 77;
    }else if(perfil == 'tuboRed2'){
        total = metro * 17;
    }else if(perfil == 'tuboRed3'){
        total = metro * 27;
    }else if(perfil == 'reg5x5'){
        total = metro * 5;
    }else if(perfil == 'reg1x5'){
        total = metro * 8;
    }else if(perfil == 'reg2x5'){
        total = metro * 15;
    }else if(perfil == 'corre28'){
        total = metro * 22;
    }else if(perfil == 'cant12'){
        total = metro * 5;
    }else if(perfil == 'cant58'){
        total = metro * 6;
    }else if(perfil == 'cant34'){
        total = metro * 7;
    }else if(perfil == 'cant1'){
        total = metro * 8;
    }else if(perfil == 'jotinha'){
        total = metro * 8;
    }else if(perfil == 'jotao'){
        total = metro * 14.5;
    }else if(perfil == 'caval'){
        total = metro * 10;
    }else if(perfil == 'superCaval'){
        total = metro * 16;
    }else if(perfil == 'cantBag'){
        total = metro * 14;
    }else if(perfil == 'dobBox'){
        total = metro * 21;
    }else if(perfil == 'dobPort'){
        total = metro * 8;
    }else if(perfil == 'u8'){
        total = metro * 5;
    }else if(perfil == 'u10'){
        total = metro * 6;
    }else if(perfil == 'uGuard'){
        total = metro * 11;
    }else if(perfil == 'parTorreInox'){
        total = metro * 0.4;
    }else if(perfil == 'parInoxTorreInox'){
        total = metro * 2;
    }else if(perfil == 'torreInox'){
        total = metro * 70;
    }else if(perfil == 'pont15x15'){
        total = metro * 25;
    }else if(perfil == 'pont2x15'){
        total = metro * 30;
    }else if(perfil == 'ibere'){
        total = metro * 15;
    }else if(perfil == 'guarn39'){
        total = metro * 1.7;
    }else if(perfil == 'guarn44'){
        total = metro * 0;
    }else if(perfil == 'guarn51'){
        total = metro * 2.4;
    }else if(perfil == 'puxHquad'){
        total = metro * 0;
    }else if(perfil == 'puxHquadCrom'){
        total = metro * 0;
    }else if(perfil == 'puxHred'){
        total = metro * 0;
    }else if(perfil == 'puxHredCrom'){
        total = metro * 0;
    }else if(perfil == 'pux1m'){
        total = metro * 0;
    }else if(perfil == 'puxBolaP'){
        total = metro * 0;
    }else if(perfil == 'puxBolaG'){
        total = metro * 0;
    }else if(perfil == 'puxBox'){
        total = metro * 0;
    }else if(perfil == 'bicoTucP'){
        total = metro * 0;
    }else if(perfil == 'bicoTucM'){
        total = metro * 0;
    }else if(perfil == 'bicoTucG'){
        total = metro * 0;
    }
    return total;
}

function perfil2(){
    let perfil = document.getElementById('tipoPerfil2').value;
    let aux1 = document.getElementById('metro2');
    let metro = Number(aux1.value);
    let total = 0;

    if(perfil == 'tuboPan'){
        total = metro * 42;
    }else if(perfil == 'tubo1x1'){
        total = metro * 9;
    }else if(perfil == 'tubo15x15'){
        total = metro * 13;
    }else if(perfil == 'tubo2x15'){
        total = metro * 22;
    }else if(perfil == 'tubo2x2'){
        total = metro * 19;
    }else if(perfil == 'tubo3x15'){
        total = metro * 27;
    }else if(perfil == 'tubo4x2'){
        total = metro * 34;
    }else if(perfil == 'tubo4x4'){
        total = metro * 77;
    }else if(perfil == 'tuboRed2'){
        total = metro * 17;
    }else if(perfil == 'tuboRed3'){
        total = metro * 27;
    }else if(perfil == 'reg5x5'){
        total = metro * 5;
    }else if(perfil == 'reg1x5'){
        total = metro * 8;
    }else if(perfil == 'reg2x5'){
        total = metro * 15;
    }else if(perfil == 'corre28'){
        total = metro * 22;
    }else if(perfil == 'cant12'){
        total = metro * 5;
    }else if(perfil == 'cant58'){
        total = metro * 6;
    }else if(perfil == 'cant34'){
        total = metro * 7;
    }else if(perfil == 'cant1'){
        total = metro * 8;
    }else if(perfil == 'jotinha'){
        total = metro * 8;
    }else if(perfil == 'jotao'){
        total = metro * 14.5;
    }else if(perfil == 'caval'){
        total = metro * 10;
    }else if(perfil == 'superCaval'){
        total = metro * 16;
    }else if(perfil == 'cantBag'){
        total = metro * 14;
    }else if(perfil == 'dobBox'){
        total = metro * 21;
    }else if(perfil == 'dobPort'){
        total = metro * 8;
    }else if(perfil == 'u8'){
        total = metro * 5;
    }else if(perfil == 'u10'){
        total = metro * 6;
    }else if(perfil == 'uGuard'){
        total = metro * 11;
    }else if(perfil == 'parTorreInox'){
        total = metro * 0.4;
    }else if(perfil == 'parInoxTorreInox'){
        total = metro * 2;
    }else if(perfil == 'torreInox'){
        total = metro * 70;
    }else if(perfil == 'pont15x15'){
        total = metro * 25;
    }else if(perfil == 'pont2x15'){
        total = metro * 30;
    }else if(perfil == 'ibere'){
        total = metro * 15;
    }else if(perfil == 'guarn39'){
        total = metro * 1.7;
    }else if(perfil == 'guarn44'){
        total = metro * 0;
    }else if(perfil == 'guarn51'){
        total = metro * 2.4;
    }else if(perfil == 'puxHquad'){
        total = metro * 0;
    }else if(perfil == 'puxHquadCrom'){
        total = metro * 0;
    }else if(perfil == 'puxHred'){
        total = metro * 0;
    }else if(perfil == 'puxHredCrom'){
        total = metro * 0;
    }else if(perfil == 'pux1m'){
        total = metro * 0;
    }else if(perfil == 'puxBolaP'){
        total = metro * 0;
    }else if(perfil == 'puxBolaG'){
        total = metro * 0;
    }else if(perfil == 'puxBox'){
        total = metro * 0;
    }else if(perfil == 'bicoTucP'){
        total = metro * 0;
    }else if(perfil == 'bicoTucM'){
        total = metro * 0;
    }else if(perfil == 'bicoTucG'){
        total = metro * 0;
    }
    return total;
}

function perfil3(){
    let perfil = document.getElementById('tipoPerfil3').value;
    let aux1 = document.getElementById('metro3');
    let metro = Number(aux1.value);
    let total = 0;

    if(perfil == 'tuboPan'){
        total = metro * 42;
    }else if(perfil == 'tubo1x1'){
        total = metro * 9;
    }else if(perfil == 'tubo15x15'){
        total = metro * 13;
    }else if(perfil == 'tubo2x15'){
        total = metro * 22;
    }else if(perfil == 'tubo2x2'){
        total = metro * 19;
    }else if(perfil == 'tubo3x15'){
        total = metro * 27;
    }else if(perfil == 'tubo4x2'){
        total = metro * 34;
    }else if(perfil == 'tubo4x4'){
        total = metro * 77;
    }else if(perfil == 'tuboRed2'){
        total = metro * 17;
    }else if(perfil == 'tuboRed3'){
        total = metro * 27;
    }else if(perfil == 'reg5x5'){
        total = metro * 5;
    }else if(perfil == 'reg1x5'){
        total = metro * 8;
    }else if(perfil == 'reg2x5'){
        total = metro * 15;
    }else if(perfil == 'corre28'){
        total = metro * 22;
    }else if(perfil == 'cant12'){
        total = metro * 5;
    }else if(perfil == 'cant58'){
        total = metro * 6;
    }else if(perfil == 'cant34'){
        total = metro * 7;
    }else if(perfil == 'cant1'){
        total = metro * 8;
    }else if(perfil == 'jotinha'){
        total = metro * 8;
    }else if(perfil == 'jotao'){
        total = metro * 14.5;
    }else if(perfil == 'caval'){
        total = metro * 10;
    }else if(perfil == 'superCaval'){
        total = metro * 16;
    }else if(perfil == 'cantBag'){
        total = metro * 14;
    }else if(perfil == 'dobBox'){
        total = metro * 21;
    }else if(perfil == 'dobPort'){
        total = metro * 8;
    }else if(perfil == 'u8'){
        total = metro * 5;
    }else if(perfil == 'u10'){
        total = metro * 6;
    }else if(perfil == 'uGuard'){
        total = metro * 11;
    }else if(perfil == 'parTorreInox'){
        total = metro * 0.4;
    }else if(perfil == 'parInoxTorreInox'){
        total = metro * 2;
    }else if(perfil == 'torreInox'){
        total = metro * 70;
    }else if(perfil == 'pont15x15'){
        total = metro * 25;
    }else if(perfil == 'pont2x15'){
        total = metro * 30;
    }else if(perfil == 'ibere'){
        total = metro * 15;
    }else if(perfil == 'guarn39'){
        total = metro * 1.7;
    }else if(perfil == 'guarn44'){
        total = metro * 0;
    }else if(perfil == 'guarn51'){
        total = metro * 2.4;
    }else if(perfil == 'puxHquad'){
        total = metro * 0;
    }else if(perfil == 'puxHquadCrom'){
        total = metro * 0;
    }else if(perfil == 'puxHred'){
        total = metro * 0;
    }else if(perfil == 'puxHredCrom'){
        total = metro * 0;
    }else if(perfil == 'pux1m'){
        total = metro * 0;
    }else if(perfil == 'puxBolaP'){
        total = metro * 0;
    }else if(perfil == 'puxBolaG'){
        total = metro * 0;
    }else if(perfil == 'puxBox'){
        total = metro * 0;
    }else if(perfil == 'bicoTucP'){
        total = metro * 0;
    }else if(perfil == 'bicoTucM'){
        total = metro * 0;
    }else if(perfil == 'bicoTucG'){
        total = metro * 0;
    }
    return total;
}

function perfil4(){
    let perfil = document.getElementById('tipoPerfil4').value;
    let aux1 = document.getElementById('metro4');
    let metro = Number(aux1.value);
    let total = 0;

    if(perfil == 'tuboPan'){
        total = metro * 42;
    }else if(perfil == 'tubo1x1'){
        total = metro * 9;
    }else if(perfil == 'tubo15x15'){
        total = metro * 13;
    }else if(perfil == 'tubo2x15'){
        total = metro * 22;
    }else if(perfil == 'tubo2x2'){
        total = metro * 19;
    }else if(perfil == 'tubo3x15' || perfil == 'tuboRed3'){
        total = metro * 27;
    }else if(perfil == 'tubo4x2'){
        total = metro * 34;
    }else if(perfil == 'tubo4x4'){
        total = metro * 77;
    }else if(perfil == 'tuboRed2'){
        total = metro * 17;
    }else if(perfil == 'reg5x5' || perfil == 'cant12'){
        total = metro * 5;
    }else if(perfil == 'reg1x5' || perfil == 'jotinha' || perfil == 'cant1' || perfil == 'dobPort'){
        total = metro * 8;
    }else if(perfil == 'reg2x5'){
        total = metro * 15;
    }else if(perfil == 'corre28'){
        total = metro * 22;
    }else if(perfil == 'cant58'){
        total = metro * 6;
    }else if(perfil == 'cant34'){
        total = metro * 7;
    }else if(perfil == 'jotao'){
        total = metro * 14.5;
    }else if(perfil == 'caval'){
        total = metro * 10;
    }else if(perfil == 'superCaval'){
        total = metro * 16;
    }else if(perfil == 'cantBag'){
        total = metro * 14;
    }else if(perfil == 'dobBox'){
        total = metro * 21;
    }else if(perfil == 'u8'){
        total = metro * 5;
    }else if(perfil == 'u10'){
        total = metro * 6;
    }else if(perfil == 'uGuard'){
        total = metro * 11;
    }else if(perfil == 'parTorreInox'){
        total = metro * 0.4;
    }else if(perfil == 'parInoxTorreInox'){
        total = metro * 2;
    }else if(perfil == 'torreInox'){
        total = metro * 70;
    }else if(perfil == 'pont15x15'){
        total = metro * 25;
    }else if(perfil == 'pont2x15'){
        total = metro * 30;
    }else if(perfil == 'ibere'){
        total = metro * 15;
    }else if(perfil == 'guarn39'){
        total = metro * 1.7;
    }
    else if(perfil == 'guarn51'){
        total = metro * 2.4;
    }else
    total = metro * 0;
    // else if(perfil == 'guarn44'){
    //     total = metro * 0;
    // }
    // else if(perfil == 'puxHquad'){
    //     total = metro * 0;
    // }else if(perfil == 'puxHquadCrom'){
    //     total = metro * 0;
    // }else if(perfil == 'puxHred'){
    //     total = metro * 0;
    // }else if(perfil == 'puxHredCrom'){
    //     total = metro * 0;
    // }else if(perfil == 'pux1m'){
    //     total = metro * 0;
    // }else if(perfil == 'puxBolaP'){
    //     total = metro * 0;
    // }else if(perfil == 'puxBolaG'){
    //     total = metro * 0;
    // }else if(perfil == 'puxBox'){
    //     total = metro * 0;
    // }else if(perfil == 'bicoTucP'){
    //     total = metro * 0;
    // }else if(perfil == 'bicoTucM'){
    //     total = metro * 0;
    // }else if(perfil == 'bicoTucG'){
    //     total = metro * 0;
    // }

    return total;
}

function perfil5(){
    let perfil = document.getElementById('tipoPerfil5').value;
    let aux1 = document.getElementById('metro5');
    let metro = Number(aux1.value);
    let total = 0;

    if(perfil == 'tuboPan')
        total = metro * 42;
    else if(perfil == 'tubo1x1')
        total = metro * 9;
    else if(perfil == 'tubo15x15')
        total = metro * 13;
    else if(perfil == 'tubo2x15')
        total = metro * 22;
    else if(perfil == 'tubo2x2')
        total = metro * 19;
    else if(perfil == 'tubo3x15')
        total = metro * 27;
    else if(perfil == 'tubo4x2')
        total = metro * 34;
    else if(perfil == 'tubo4x4')
        total = metro * 77;
    else if(perfil == 'tuboRed2')
        total = metro * 17;
    else if(perfil == 'tuboRed3')
        total = metro * 27;
    else if(perfil == 'reg5x5')
        total = metro * 5;
    else if(perfil == 'reg1x5' || perfil == 'cant1' || perfil == 'jotinha' || perfil == 'dobPort')
        total = metro * 8;
    else if(perfil == 'reg2x5' || perfil == 'ibere')
        total = metro * 15;
    else if(perfil == 'corre28')
        total = metro * 22;
    else if(perfil == 'cant12')
        total = metro * 5;
    else if(perfil == 'cant58')
        total = metro * 6;
    else if(perfil == 'cant34')
        total = metro * 7;
    else if(perfil == 'jotao')
        total = metro * 14.5;
    else if(perfil == 'caval')
        total = metro * 10;
    else if(perfil == 'superCaval')
        total = metro * 16;
    else if(perfil == 'cantBag')
        total = metro * 14;
    else if(perfil == 'dobBox')
        total = metro * 21;
    else if(perfil == 'u8')
        total = metro * 5;
    else if(perfil == 'u10')
        total = metro * 6;
    else if(perfil == 'uGuard')
        total = metro * 11;
    else if(perfil == 'parTorreInox')
        total = metro * 0.4;
    else if(perfil == 'parInoxTorreInox')
        total = metro * 2;
    else if(perfil == 'torreInox')
        total = metro * 70;
    else if(perfil == 'pont15x15')
        total = metro * 25;
    else if(perfil == 'pont2x15')
        total = metro * 30;
    else if(perfil == 'guarn39')
        total = metro * 1.7;
    else if(perfil == 'guarn44')
        total = metro * 0;
    else if(perfil == 'guarn51')
        total = metro * 2.4;
    else
        total = metro * 0;
    // else if(perfil == 'puxHquad'){
    //     total = metro * 0;
    // }else if(perfil == 'puxHquadCrom'){
    //     total = metro * 0;
    // }else if(perfil == 'puxHred'){
    //     total = metro * 0;
    // }else if(perfil == 'puxHredCrom'){
    //     total = metro * 0;
    // }else if(perfil == 'pux1m'){
    //     total = metro * 0;
    // }else if(perfil == 'puxBolaP'){
    //     total = metro * 0;
    // }else if(perfil == 'puxBolaG'){
    //     total = metro * 0;
    // }else if(perfil == 'puxBox'){
    //     total = metro * 0;
    // }else if(perfil == 'bicoTucP'){
    //     total = metro * 0;
    // }else if(perfil == 'bicoTucM'){
    //     total = metro * 0;
    // }else if(perfil == 'bicoTucG'){
    //     total = metro * 0;
    // }

    return total;
}

function somaFinal() {
    let precoFinal = perfil1() + perfil2() + perfil3() + perfil4() + perfil5()
    let teste = document.getElementById('teste')
    teste.innerHTML = `<br>O preço de custo foi: R$${precoFinal.toFixed(2)}\n`.replace(".", ",")
    console.log('FIM-------------------------') 
}