/*

// exibir alerta / mensagem de boas vindas ao jogo
alert('Boas vindas ao jogo do número secreto!');

// para armazenar o número secreto/variável usamos 'let'
let numeroSecreto = 29; // número secreto armazenado na variável 'numeroSecreto' é 29

// exibir mensagem com campo para digitar 
let chute = prompt('Escolha um número de 1 e 3'); // exibirá uma caixa de diálogo para o usuário digitar um número de 1 a 3 e armazenará na variável 'chute' 

// para realizar uma comparação/condição usamos 'if'
if (numeroSecreto == chute) { // Este 'if' só vai funcionar se o 'numeroSecreto' for igual ao número digitado pelo usuário armazenado em 'chute'
    alert('Parabéns, você acertou!'); // se o número secreto for igual ao número digitado pelo usuário, exibirá a mensagem
    console.log('Parabéns, você acertou o número secreto!'); // exibirá a mensagem no console do navegador 
}

*/

alert('Boas vindas ao nosso site!');

// let nome = 'lua';

// let idade = 25;

let numeroDeVendas = 50;

let saldoDisponivel = 1000;

alert('Preencha todos os campos');

let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);

let nome = prompt('Qual é o seu nome?');

let idade = prompt('Qual é a sua idade?');
if (idade => 18) {
    alert('Pode tirar a CNH');   
}
