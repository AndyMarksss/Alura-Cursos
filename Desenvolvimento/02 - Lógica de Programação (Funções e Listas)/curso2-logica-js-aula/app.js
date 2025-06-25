let listaDeNumerosSorteados = [];
// Declara uma lista vazia para armazenar os números sorteados
let numeroLimite = 10;
// Define o limite máximo de números que podem ser sorteados
let numeroSecreto = gerarNumeroAleatorio();
// Executa a função 'gerarNumeroAleatorio' para obter o número
// Armazena o número gerado na variável 'numeroSecreto'
// que será usado no jogo para comparar com o chute do usuário.
let tentativas = 1;
// Inicializa o contador de tentativas com 1, pois o usuário fará a primeira tentativa

function exibirTexto(tag, texto) {
    // Função que recebe uma 'tag' HTML e um texto, e exibe o texto dentro da 'tag'
    // Exemplo: exibirTexto('h1', 'Jogo do Número Secreto');
    let campo = document.querySelector(tag);
    // Seleciona o elemento HTML com a 'tag' passada como parâmetro
    // Exemplo: document.querySelector('h1');
    campo.innerHTML = texto;
    // Altera o conteúdo do elemento HTML selecionado para o texto passado como parâmetro
    // Exemplo: campo.innerHTML = 'Jogo do Número Secreto';

// ----------------------------------- LEITURA EM VOZ ----------------------------------- //
   if ('speechSynthesis' in window) {
       let utterance = new SpeechSynthesisUtterance(texto);
       utterance.lang = 'pt-BR';
       utterance.rate = 1.5;
       window.speechSynthesis.speak(utterance);
   } else {
       console.log("Web Speech API não suportada neste navegador.");
   }
    // Verifica se a API de fala está disponível no navegador
    // Se estiver, cria uma nova instância de SpeechSynthesisUtterance com o texto
    // Define o idioma como português do Brasil e a taxa de fala
    // Em seguida, usa a função speak para ler o texto em voz alta
    // Se a API não estiver disponível, exibe uma mensagem no console
    // Exemplo: exibirTexto('p', 'Escolha um número entre 1 e 10');
    // A função 'exibirTexto' é usada para alterar o conteúdo de elementos HTML
    // passando a 'tag' do elemento e o 'texto' que deve ser exibido.
// ---------------------------------------------------------------------- //
}
// A função 'exibirTexto' é usada para alterar o conteúdo de elementos HTML
// passando a 'tag' do elemento e o 'texto' que deve ser exibido.

function mensagemInicial() {
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', `Escolha um número entre 1 e ${numeroLimite}.`);
    // A função 'exibirTexto' foi chamada para alterar o conteúdo do 'h1' e do 'p'
    // exibirTexto(tag, texto)
}

// A função 'mensagemInicial' exibe a mensagem inicial do jogo, definindo o título
// e a instrução para o usuário. Ela é chamada quando a página é carregada.
mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    // Pega o valor digitado no 'input' e armazena na variável 'chute'

    if (chute == numeroSecreto) {
        // Verifica se o valor do 'chute' é igual ao 'numeroSecreto'
        exibirTexto('h1', 'Parabéns, você acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        // Verifica se o número de tentativas é maior que 1 para usar a palavra
        let mensagemTentativas = `Você acertou em ${tentativas} ${palavraTentativas}.`;
        // Cria uma mensagem com o número de tentativas
        // Exibe a mensagem de tentativas e o número secreto
        exibirTexto('p', mensagemTentativas + ' O número secreto é: ' + numeroSecreto);
        // Se for igual, exibe uma mensagem de sucesso e o número de tentativas

        document.getElementById('chutar').disabled = true;
        // Desabilita o botão de verificar o chute
        document.getElementById('reiniciar').removeAttribute('disabled');
        // Habilita o botão de reiniciar o jogo

    } else {
        if (chute > numeroSecreto) {
            // Se o 'chute' for maior que o 'numeroSecreto'
            exibirTexto('p', `O número secreto é menor que ${chute}.`);
        } else {
            // Se o 'chute' for menor que o 'numeroSecreto'
            exibirTexto('p', `O número secreto é maior que ${chute}.`);
        } tentativas++;
        limparCampo();
        // Incrementa o número de tentativas e limpa o campo de entrada
    }
}
// A função 'verificarChute' pega o valor digitado pelo usuário e verifica se
// é igual ao número secreto, exibindo o resultado.

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    // Gera um número aleatório entre 1 e 10
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    // Armazena a quantidade de elementos na lista de números sorteados
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
        // Se a lista já tiver 10 números, reseta a lista para evitar repetição
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        // Verifica se o número já foi sorteado
        return gerarNumeroAleatorio();
        // Se já foi sorteado, chama a função novamente para gerar um novo número
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        // Se não foi sorteado, adiciona o número à lista de números sorteados
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
        // Se não foi sorteado, adiciona o número à lista e retorna o número escolhido

    }
}
// A função 'gerarNumeroAleatorio' gera um número aleatório entre 1 e 10,
// garantindo que não seja repetido. Ela usa uma lista para armazenar os números já sorteados.

function limparCampo() {
    chute = document.querySelector('input');
    // Seleciona o campo de entrada do chute
    chute.value = '';
    // Limpa o valor do campo de entrada
}
// A função 'limparCampo' limpa o campo de entrada do chute para que o usuário
// possa digitar um novo número. Ela é chamada após cada tentativa incorreta.

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    // Reinicia o jogo gerando um novo número secreto
    limparCampo();
    // Limpa o campo de entrada
    tentativas = 1;
    // Reseta o contador de tentativas
    mensagemInicial();
    // Exibe a mensagem inicial do jogo novamente

    document.getElementById('chutar').disabled = false;
    // Habilita o botão de verificar o chute
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    // Desabilita o botão de reiniciar o jogo
}