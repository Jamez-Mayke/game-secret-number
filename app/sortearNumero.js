const menorValor = 1;
const maiorValor = 1000;

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1);
}

const secretNumber = gerarNumeroAleatorio();
console.log(secretNumber);

const elementoMenorValor = document.querySelector("#menor-valor");
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.querySelector("#maior-valor");
elementoMaiorValor.innerHTML = maiorValor;
