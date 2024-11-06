function abrirModal() {
    // Exibe o modal no centro da tela
    document.getElementById("modal").style.display = "block";
}

function desviar(btn) {
    // Faz o botão "NÃO" desviar do cursor
    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;
    var novaPosicaoTop = Math.random() * (alturaJanela - btn.clientHeight);
    var novaPosicaoLeft = Math.random() * (larguraJanela - btn.clientWidth);
    btn.style.position = "absolute";
    btn.style.top = novaPosicaoTop + "px";
    btn.style.left = novaPosicaoLeft + "px";
}

function mostrarPopup() {
    // Exibe um pop-up com o emoji de joinha
    alert("vamos com tudo!👍");
}