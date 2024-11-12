// Função para redirecionar para outra página  
function abrirNaMesmaJanela() {  
  window.location.href = 'index2.html';  
}  

// Função para fazer o botão "NÃO" desviar do cursor  
function desviar(btn) {  
  var larguraJanela = window.innerWidth;  
  var alturaJanela = window.innerHeight;  
  var novaPosicaoTop = Math.random() * (alturaJanela - btn.clientHeight);  
  var novaPosicaoLeft = Math.random() * (larguraJanela - btn.clientWidth);  
  btn.style.position = "absolute";  
  btn.style.top = novaPosicaoTop + "px";  
  btn.style.left = novaPosicaoLeft + "px";  
}  

// Função para enviar mensagem no WhatsApp  
function sendToWhatsApp(botaoIndex) {  
  console.log("Índice do botão:", botaoIndex);  
  console.log("Mensagem:", buttonMessages[botaoIndex]);  
  const recipientNumber = "";  
  const message = encodeURIComponent(`Olá, ${buttonMessages[botaoIndex]}, que horas você vem me pegar?`);  
  const whatsappUrl = `https://wa.me/${recipientNumber}?text=${message}`;  
  window.open(whatsappUrl, '_blank');  
}

