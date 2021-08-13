function desenhaQuadrado(tamanho){
    for (let coluna = 0; coluna < tamanho; coluna++) {
    let asteriscos = ''; 
        for (let linha = 0; linha < tamanho; linha++) {
        asteriscos = asteriscos + '*';
    }
    console.log(asteriscos+'\n');
    }
}

function numeroPrimo(numero){
    let addNumPrimo = [];
    const count = numero.length;
    for(let num = 0; num < count; num++ ){
        if ( numero[num] % 2 != 0 || numero[num] == 2 ){
            addNumPrimo.push(numero[num]);
        }
    } 
    console.log(addNumPrimo)
}

function palindromo(palavra){
    let reverse = '';
    let index = palavra.length - 1;
    for(index; index >= 0; index--){
        reverse += palavra[index]
    }

    if( palavra == reverse){
        console.log('Sim é um Palindromo')
    }
    else {
        console.log('Não, não é um Palindromo')
    }
}
