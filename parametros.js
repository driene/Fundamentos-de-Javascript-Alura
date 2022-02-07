//parâmetros de função

function soma(numero1, numero2) {
    return numero1 + numero2;
}

// console.log(soma(2,2))
// console.log(soma(2,200))
// console.log(soma(122,21))
// console.log(soma(2,-2))


//parâmetro x argumentos


//ordem dos parâmetros 

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e a minha idade é ${idade}`;
}

// console.log(nomeIdade(34, "Driene"))
// console.log(nomeIdade("Driene", 34))

// function multiplica(numero1 = 1, numero2 = 1) {
//     return numero1 * numero2;
// }

// console.log(multiplica(soma(4 ,5),soma(3 ,3)))
// console.log(multiplica(soma(4 ,5)))

function comParametro(param) {
    console.log(param)
}
comParametro()