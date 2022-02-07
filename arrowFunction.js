function apresentar(nome) {
    return`meu nome é ${nome}`
}


//Arrow function
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;
//console.log(apresentar("Driene"))


//Arrow function com mais de uma linha de instrucao

const somaNumerosPequenos = (num1, num2) => {
    if((num1 > 0 && num1 < 10) && (num2 > 0 && num2 < 10)){
        return num1 + num2;
    } else {
        return "Somente números de 1 a 9";
    }
}

console.log (somaNumerosPequenos(1, 2))
console.log (somaNumerosPequenos(11, 12))
