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
