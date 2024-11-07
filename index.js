function abrirNaMesmaJanela() {  
    // Redireciona para a nova página (index2.html) na mesma aba  
    window.location.href = 'index2.html';  
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