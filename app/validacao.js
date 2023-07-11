function verificaSeOChutePossuiUmValorValido(chute) {
  const numero = +chute;

  if (Number.isNaN(numero)) {
    elementoChute.innerHTML += "<div>Valor Inválido!</div>";

    return;
  }

  if (numeroMaiorOuMenor(numero)) {
    elementoChute.innerHTML += `<div>Valor Inválido. O número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`;
    return;
  }

  if (numero === secretNumber) {
    document.body.innerHTML = `
    <h2>Você acertou!!</h2>
    <h3>O número secreto era ${numero}</h3>

    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `;
  } else if (numero > secretNumber) {
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    `;
  } else {
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
    `;
  }
}

function numeroMaiorOuMenor(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (event) => {
  if (event.target.id === "jogar-novamente") {
    window.location.reload();
  }
});
