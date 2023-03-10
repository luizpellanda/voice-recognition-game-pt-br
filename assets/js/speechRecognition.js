const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {

    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute);
    verificaChute(chute);
    
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div> You said </div>
        <span class="box">${chute}</span>
    `

    console.log()
}

recognition.addEventListener('end', () => recognition.start());