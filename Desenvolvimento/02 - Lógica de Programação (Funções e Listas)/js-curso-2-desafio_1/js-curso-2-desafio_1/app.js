let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function consoleClicado() {
    console.log('Você clicou no botão!');
}

function alertClicado() {
    alert('Eu amo JS!');
}

function promptClicado() {
    let cidade = prompt('Qual cidade você visitou?');
    if (cidade) {
        alert(`Estive em ${cidade} e lembrei de você!`);
    } else {
        alert('Você não digitou um nome.');
    }
}

function somaClicado() {
    let num1 = parseFloat(prompt('Digite o primeiro número inteiro:'));
    let num2 = parseFloat(prompt('Digite o segundo número inteiro:'));
    
    if (!isNaN(num1) && !isNaN(num2)) {
        let resultado = num1 + num2;
        alert(`A soma de ${num1} + ${num2} é ${resultado}.`);
    } else {
        alert('Por favor, digite números válidos.');
    }
}