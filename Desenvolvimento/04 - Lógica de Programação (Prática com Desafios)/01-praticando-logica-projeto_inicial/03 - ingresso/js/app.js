/*
  - Projeto de compra de ingressos com controle de estoque via DOM.
  - comprar(): lê o tipo e a quantidade do formulário e chama a função do setor (pista/superior/inferior).
  - comprarPista/Superior/Inferior(): lê a disponibilidade no HTML (textContent), valida se há ingressos suficientes,
    subtrai a quantidade comprada, atualiza o valor na tela e mostra alertas de sucesso/indisponibilidade.
*/

function comprar() {
    // Pegando os elementos do HTML para usar no JS pelo ID e armazenando em variáveis usando o let
    let tipo = document.getElementById('tipo-ingresso');
    // Pegando o valor de qtd e convertendo para inteiro usando parseInt, pois o valor do input é uma string, e armazenando na variável qtd
    let qtd = parseInt(document.getElementById('qtd').value);

    // Pegando o valor do tipo de ingresso e da quantidade e usando condicionais para verificar o tipo de ingresso e chamar a função correspondente para verificar a disponibilidade de ingressos 
    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

// Criando a função comprarPista para verificar a disponibilidade de ingressos do tipo Pista
function comprarPista(qtd) {
    // Quantidade de ingressos disponíveis para o tipo Pista inicialmente é 100, valor no HTML dentro de uma tag span com id 'qtd-pista'
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    // Condicional para verificar se a quantidade solicitada é maior do que a quantidade disponível para o tipo Pista, caso seja, exibe um alerta informando que a quantidade é indisponível, caso contrário, subtrai a quantidade solicitada da quantidade disponível e atualiza o valor no HTML
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo Pista.');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}


// Criando a função comprarSuperior para verificar a disponibilidade de ingressos do tipo Superior
function comprarSuperior(qtd) {
    // Quantidade de ingressos disponíveis para o tipo Superior inicialmente é 50, valor no HTML dentro de uma tag span com id 'qtd-superior'
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    // Condicional para verificar se a quantidade solicitada é maior do que a quantidade disponível para o tipo Superior, caso seja, exibe um alerta informando que a quantidade é indisponível, caso contrário, subtrai a quantidade solicitada da quantidade disponível e atualiza o valor no HTML
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo Superior.');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

// Criando a função comprarInferior para verificar a disponibilidade de ingressos do tipo Inferior
function comprarInferior(qtd) {
    // Quantidade de ingressos disponíveis para o tipo Inferior inicialmente é 100, valor no HTML dentro de uma tag span com id 'qtd-inferior'
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    // Condicional para verificar se a quantidade solicitada é maior do que a quantidade disponível para o tipo Inferior, caso seja, exibe um alerta informando que a quantidade é indisponível, caso contrário, subtrai a quantidade solicitada da quantidade disponível e atualiza o valor no HTML
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo Inferior.');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}
