// ----------------------------------------------------------------- //

// 1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularIMC(altura, peso) {
    // A função recebe a altura e o peso como parâmetros
    return peso / (altura * altura);
    // Retorna o IMC calculado pela fórmula: peso / (altura * altura)
}
let altura = 1.69; // Exemplo de altura em metros
let peso = 73; // Exemplo de peso em quilogramas    
console.log(`O IMC é: ${calcularIMC(altura, peso).toFixed(2)}`);
// Exibe o IMC calculado com duas casas decimais usando toFixed(2)

// ---------------------------------------------------------------- //

// 2.  Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial(numero) {
    // A função recebe um número como parâmetro
    if (numero === 0 || numero === 1) {
        // Se o número for 0 ou 1, o fatorial é 1
        return 1;
    } else {
        // Caso contrário, calcula o fatorial recursivamente
        return numero * calcularFatorial(numero - 1);
    }
}
let numeroFatorial = 5; // Exemplo de número para calcular o fatorial
console.log(`O fatorial de ${numeroFatorial} é: ${calcularFatorial(numeroFatorial)}`);
// Exibe o fatorial do número passado como parâmetro

// ---------------------------------------------------------------- //

// 3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converterDolarParaReal(valorDolar) {
    // A função recebe o valor em dólar como parâmetro
    const cotacaoDolar = 4.80; // Cotação do dólar em reais
    return valorDolar * cotacaoDolar;
    // Retorna o valor convertido para reais
}
let valorDolar = 100; // Exemplo de valor em dólar
console.log(`R$ ${converterDolarParaReal(valorDolar).toFixed(2)}`);
// Exibe o valor convertido para reais com duas casas decimais usando toFixed(2)

// ---------------------------------------------------------------- //

// 4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro

function calcularAreaEPerimetro(altura, largura) {
    // A função recebe a altura e a largura como parâmetros
    const area = altura * largura; // Calcula a área
    const perimetro = 2 * (altura + largura); // Calcula o perímetro
    return { area, perimetro }; // Retorna um objeto com área e perímetro
}
let alturaSala = 33; // Exemplo de altura da sala
let larguraSala = 40; // Exemplo de largura da sala
let resultado = calcularAreaEPerimetro(alturaSala, larguraSala);
// Chama a função para calcular área e perímetro
console.log(`Área: ${resultado.area} m², Perímetro: ${resultado.perimetro} m`);
// Exibe a área e o perímetro da sala

// ---------------------------------------------------------------- //

// 5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calcularAreaEPerimetroCircular(raio) {
    // A função recebe o raio como parâmetro
    const pi = 3.14; // Valor de Pi
    const area = pi * (raio * raio); // Calcula a área do círculo
    const perimetro = 2 * pi * raio; // Calcula o perímetro do círculo
    return { area, perimetro }; // Retorna um objeto com área e perímetro
}
let raioSalaCircular = 7; // Exemplo de raio da sala circular
let resultadoCircular = calcularAreaEPerimetroCircular(raioSalaCircular);
// Chama a função para calcular área e perímetro circular
console.log(`Área: ${resultadoCircular.area} m², Perímetro: ${resultadoCircular.perimetro} m`);
// Exibe a área e o perímetro da sala circular

// ---------------------------------------------------------------- //

// 6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro

function exibirTabuada(numero) {
    // A função recebe um número como parâmetro
    let tabuada = '';
    // Inicializa uma string vazia para armazenar a tabuada
    for (let i = 1; i <= 10; i++) {
        // Loop de 1 a 10 para calcular a tabuada
        tabuada += `${numero} x ${i} = ${numero * i}\n`;
        // Adiciona cada linha da tabuada à string
    }
    return tabuada; // Retorna a string com a tabuada completa
}
let numeroTabuada = 8; // Exemplo de número para a tabuada
console.log(exibirTabuada(numeroTabuada));
// Exibe a tabuada do número passado como parâmetro

// ---------------------------------------------------------------- //