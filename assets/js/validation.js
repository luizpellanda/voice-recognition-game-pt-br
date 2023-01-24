function verificaChute(chute) {
   const numero = +chute;
   
   if (chuteForInvalido(numero)) {
   elementoChute.innerHTML += '<div>Your guess must be a number! Try again.</div>'
   }

   if (numeroDentroDoParametro(numero)) {
    elementoChute.innerHTML += `<div>The secret number must be between ${menorValor} and ${maiorValor}. Please try again.</div>`
   }

   if (numero === numeroSecreto) {
    document.body.innerHTML = `
        <h2>You got it!</h2>
        <h3>The secret number was <span class="secret-number">${numeroSecreto}</span>!</h3>
    `
   }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroDentroDoParametro (numero) {
    return numero > maiorValor || numero < menorValor
}
