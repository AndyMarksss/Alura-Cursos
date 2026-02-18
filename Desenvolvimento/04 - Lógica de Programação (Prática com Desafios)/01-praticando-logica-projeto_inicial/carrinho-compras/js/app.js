/*
  - Carrinho de compras usando DOM (JS manipula elementos do HTML).
  - limpar(): zera o carrinho (lista-produtos) e o total (totalGeral/valor-total).
  - adicionar(): lê produto e quantidade (getElementById().value), separa nome e preço (split),
    calcula subtotal (qtd * valor), adiciona o item na lista (innerHTML), soma no totalGeral e atualiza o total na tela (textContent).
  - Ao final, zera o campo de quantidade.
*/


let totalGeral;
// Iniciando a variável 'totalGeral' com o valor 0 para armazenar o valor total do carrinho de compras, precisando usar 'let' para declarar a variável, mas não precisa atribuir o valor 0 aqui porque a função 'limpar' já faz isso
limpar();
// iniciando a função 'limpar' para garantir que o carrinho comece vazio e o valor total seja 0


function adicionar() {
    //  1.recuperar valores: nome do produto, quantidaded e valor

    // let 'produto' armazena todos os valores do ID 'produto'
    let produto = document.getElementById('produto').value;

    // 'nomeProduto' e 'valorUnitario' armazena os valores que 'produto' armazenou
    // Separando usando 'split' para procurar um separador
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    // 0 para pegar o valor que vem antes do separador 
    // 1 para pegar o valor que vem depois do separador

    // 'quantidade' armazena o valor do ID 'quantidade'
    let quantidade = document.getElementById('quantidade');

    // 2.calcular o preço, subtotal
    // 'preco' multiplica o valor armazenado em 'quantidade' pelo 'valorUnitario'
    let preco = quantidade.value * valorUnitario;

    // 3.adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');

    // 
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade.value}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`

    // 4.atualizar o valor total
    // 'totalGeral' recebe o valor que já tem ('0') e soma com o valor de 'preco'
    totalGeral = totalGeral + preco;
    // 'campoTotal' armazena o valor do ID 'valor-total'
    let campoTotal = document.getElementById('valor-total');
    // 'campoTotal' recebe o valor de 'totalGeral' formatando para exibir no HTML
    // Usando template string para formatar o valor de 'totalGeral' e exibir no HTML
    campoTotal.textContent = `R$${totalGeral}`;

    // 5.limpar o campo de quantidade quando o produto for adicionado ao carrinho
    // Acessando o elemento com ID 'quantidade' e definindo seu valor como 0 para limpar o campo
    // Precisando ficar dentro da função 'adicionar' para limpar o campo toda vez que um produto for adicionado ao carrinho
    document.getElementById('quantidade').value = 0;
}

// Função para limpar o carrinho de compras e resetar o valor total
// A função 'limpar' é chamada no início do código para garantir que o carrinho comece vazio e o valor total seja 0, e também pode ser chamada quando o usuário quiser limpar o carrinho clicando no botão de 'limpar'
function limpar() {
    totalGeral = 0;
    // Faz a variável 'totalGeral' com o valor 0 para armazenar o valor total do carrinho de compras, não precisando usar 'let' porque a variável já foi declarada no início do código
    document.getElementById('lista-produtos').innerHTML = '';
    // Limpando o conteúdo do elemento com ID 'lista-produtos' para garantir que o carrinho comece vazio
    document.getElementById('valor-total').textContent = `R$${totalGeral}`;
    // Exibindo o valor total formatado no elemento com ID 'valor-total' usando template string
}