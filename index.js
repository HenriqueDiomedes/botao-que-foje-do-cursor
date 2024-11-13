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
function sendToWhatsApp(button) {
    const recipientNumber = ""; // Insira o número de telefone com código de país e DDD

    // Captura o texto do botão como parte da mensagem
    const messageText = button.textContent.trim();
    const message = encodeURIComponent(`Olá, eu aceito ${messageText}. Que horas você vem me pegar?`);
    
    // URL para enviar a mensagem pelo WhatsApp
    const whatsappUrl = `https://wa.me/${recipientNumber}?text=${message}`;
    
    // Abre o WhatsApp com a mensagem no navegador ou aplicativo
    window.open(whatsappUrl,'_blank');
}