alert('Boas vindas ao jogo do número secreto');
// 'alert' = exibe uma mensagem na tela do usuário

numeroMaximo = prompt('Digite um número máximo para o jogo');
// 'prompt' = exibe uma mensagem e espera o usuário digitar algo

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
// 'Math.random' = número aleatório '* 'numeroMaximo' + 1' = entre 1 e 'numeroMaximo' (definido na variavel 'numeroMaximo')
// 'parseInt' para arredondar excluindo as casas decimais 

console.log(numeroSecreto);
// 'console.log' = exibe uma mensagem no console do navegador

let chute;
let tentativas = 1;
// 'let' = declarar variável que pode ser alterada, armazena o valor do chute do usuário e o número de tentativas

// Início do loop //
while (chute != numeroSecreto) {
    // LÓGICA:  enquanto 'chute' não for igual ao 'numeroSecreto', fica no loop
    // 'while' = estrutura de repetição que executa enquanto a condição for verdadeira
    // 'chute != numeroSecreto' = enquanto o chute for diferente do número secreto, continua no loop

    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // 'prompt' = exibe uma mensagem e espera o usuário digitar algo

    // LÓGICA: se chute for igual ao 'numeroSecreto', sai do loop
    if (chute == numeroSecreto) {
        break; // sai do loop e executa o código fora do loop
    }

    // LÓGICA: se 'chute' for menor ou maior que o 'numeroSecreto', exibe uma mensagem
    else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1
        tentativas++
        // 'tentativas++' = incrementa 1 na variável 'tentativas'
    }
}
// fim do loop //

// LÓGICA: se o usuário acertou com uma tentativa, exibe uma mensagem no singular, se acertou com mais de uma tentativa, exibe no plural
// LÓGICA: 'let' 'palavraTentativa' = 'tentativas' == 1 ? 'Se for maior' senão 'Se for igual'
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // Se 'tentativas' for maior que 1, usa 'tentativas', caso contrário, usa 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
