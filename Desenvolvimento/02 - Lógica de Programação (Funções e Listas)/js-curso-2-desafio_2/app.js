// ----------------------------------------------------------------------------------------//

// 1. Criar uma função que exibe "Olá, mundo!" no console
function exibirMensagem() {
    console.log("Hello, World!");
}
// Chama a função para exibir a mensagem no console.
exibirMensagem();

// ----------------------------------------------------------------------------------------//

// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(nome) {
    // Função que recebe um nome e exibe uma mensagem personalizada
    console.log(`Olá, ${nome}!`);
}
// Chama a função 'exibirNome' passando um nome como parâmetro
exibirNome("Andy");

// ----------------------------------------------------------------------------------------//

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número e exbia no console
let numero = 5;

function calcularDobro(num) {
    return num * 2;
}
// Chama a função 'calcularDobro' passando o número como parâmetro e exibe o resultado no console
console.log(`O dobro de ${numero} é: ${calcularDobro(numero)}`);

// ----------------------------------------------------------------------------------------//

// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles
function calcularMedia(num1, num2, num3) {
    // Função que recebe três números e retorna a média deles
    return (num1 + num2 + num3) / 3;
}
// Chama a função 'calcularMedia' passando três números como parâmetros e exibe o resultado no console
let numero1 = 10;
let numero2 = 20;   
let numero3 = 30;
console.log(`A média de ${numero1}, ${numero2} e ${numero3} é: ${calcularMedia(numero1, numero2, numero3)}`);

// ----------------------------------------------------------------------------------------//

// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles
function encontrarMaior(num1, num2) {
    // Função que recebe dois números e retorna o maior deles
    return num1 > num2 ? num1 : num2;
}
// Chama a função 'encontrarMaior' passando dois números como parâmetros e exibe o resultado no console
let numeroA = 15;
let numeroB = 25;
console.log(`O maior número entre ${numeroA} e ${numeroB} é: ${encontrarMaior(numeroA, numeroB)}`);

// ----------------------------------------------------------------------------------------//

// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function calcularQuadrado(num) {
    // Função que recebe um número e retorna o quadrado dele
    return num * num;
}
// Chama a função 'calcularQuadrado' passando um número como parâmetro e exibe o resultado no console
let numeroParaQuadrado = 4;
console.log(`O quadrado de ${numeroParaQuadrado} é: ${calcularQuadrado(numeroParaQuadrado)}`);

// ----------------------------------------------------------------------------------------//