let titulo =  document.querySelector('h1');
titulo = 'hora do desafio';

function botaoFoiClicado() {
    console.log('o botao foi clicado');
}

function botaoAlerta() {
    alert('eu amo js!');
}

function exibirMensagem() {
    let cidade = prompt('digite o nome de uma cidade do brasil:');
    alert(`estive em  ${cidade} e lembrei de voce !`);
}

function pedir2Numeros(){
    let primeiroNumero = prompt('digte ume numero!');
    let segundoNumero = prompt('digite o segundo');
    let resultado = primeiroNumero + segundoNumero;
    alert(` ${primeiroNumero} ${segundoNumero}  ${resultado} `);
}
