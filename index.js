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
  
  // Variável para rastrear qual imagem está em zoom  
let currentZoomed = null;  
  
  // Função para zoomar imagem  
function zoomImage(event, box) {  
    event.stopPropagation();  
    if (currentZoomed === box) {  
      box.classList.remove('zoom');  
      currentZoomed = null;  
    } else {  
      if (currentZoomed) {  
        currentZoomed.classList.remove('zoom');  
      }  
      box.classList.add('zoom');  
      currentZoomed = box;  
    }  
}  

    // Função para remover o zoom ao clicar fora  
document.addEventListener('click', () => {  
        if (currentZoomed) {  
          currentZoomed.classList.remove('zoom');  
          currentZoomed = null;  
        }  
});
  
  // Array de mensagens para os botões  
const buttonMessages = [
    "Eu escolho a opção de número 0",   
    "Eu escolho a opção de número 1",  
    "Eu escolho a opção de número 2",  
    "Eu escolho a opção de número 3",  
    "Eu escolho a opção de número 4",  
    "Eu escolho a opção de número 5",  
    "Eu escolho a opção de número 6",  
    "Eu escolho a opção de número 7",  
    "Eu escolho a opção de número 8",  
    "Eu escolho a opção de número 9",  
    "Eu escolho a opção de número 10",  
];  
  
  // Função para enviar mensagem no WhatsApp  
function sendToWhatsApp(botaoIndex) {  
    console.log("Índice do botão:", botaoIndex);  
    console.log("Mensagem:", buttonMessages[botaoIndex]);  
    const recipientNumber = "+559181121979";  
    const message = encodeURIComponent(`Olá, ${buttonMessages[botaoIndex]}, que horas você vem me pegar?`);  
    const whatsappUrl = `https://wa.me/${recipientNumber}?text=${message}`;  
    window.open(whatsappUrl, '_blank');  
}
// Função para flipar e zoomar carta  
function flipAndZoom(event, card) {  
  card.classList.add('flip');  
  card.classList.add('zoom');  
}  

// Função para resetar flip e zoom da carta  
function resetFlipAndZoom(event, card) {  
  card.classList.remove('flip');  
  card.classList.remove('zoom');  
}