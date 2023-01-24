const menorValor = 700;
const maiorValor = 741;

const numeroSecreto = numeroAleatorio();

function numeroAleatorio () {
    return parseInt(Math.random() * maiorValor + 1)
}

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor;


console.log(numeroSecreto)