/*
  - Projeto: Amigo Secreto com DOM e arrays.
  - Armazena os nomes em um array (amigos), mostra a lista na tela e sorteia os pares embaralhando os nomes.
  - Funções: adicionar (inclui nome), sortear (gera os pares), embaralhar (mistura a ordem), reiniciar (limpa tudo).
*/

// Array que guarda os nomes digitados
let amigos = [];

// Adiciona um nome no array e atualiza a lista na tela
function adicionar() {
    // Pega o input do nome e o local onde a lista aparece
    let amigo = document.getElementById('nome-amigo');

    // 1ª validação: Verifica se o nome é vazio ou só tem espaços e exibe um alerta se for o caso e impede a adição de nomes vazios ou apenas espaços na lista e usa return para sair da função sem adicionar o nome
    if (amigo.value == '') {
        alert('Digite o nome do amigo!');
        return;
    }

    // 3ª validação: Verifica se o nome já existe na lista e exibe um alerta se for o caso e impede a adição de nomes duplicados na lista e usa return para sair da função sem adicionar o nome
    if (amigos.includes(amigo.value)) {
        alert('Esse nome já foi adicionado!');
        return;
    }

    let lista = document.getElementById('lista-amigos');

    // Adiciona o nome digitado no array
    amigos.push(amigo.value);

    // Mostra os nomes na tela (se já tiver nomes, separa por vírgula)
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    // Limpa o input após adicionar
    amigo.value = '';
}

// Embaralha a lista e mostra o resultado do amigo secreto na tela
function sortear() {

    // 2ª validação: verifica se há pelo menos 4 nomes na lista e exibe um alerta se não houver o suficiente para um sorteio justo e usa return para sair da função sem realizar o sorteio
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4!');
        return;
    }

    // Mistura a ordem dos nomes
    embaralhar(amigos);

    // Onde o resultado será exibido
    let sorteio = document.getElementById('lista-sorteio');

    // Para cada nome, aponta para o próximo (o último aponta para o primeiro)
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

// Embaralha um array usando trocas aleatórias (Fisher-Yates)
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

// Limpa o array e apaga a lista e o sorteio na tela
function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

// innerHTML: altera o conteúdo HTML de um elemento (aqui, usado para escrever e limpar o resultado do sorteio).


