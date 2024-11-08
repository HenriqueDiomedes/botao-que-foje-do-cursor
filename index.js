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
  
  // Array de mensagens para os botões  
  const buttonMessages = [  
    "Eu escolho a opção de número 01",  
    "Eu escolho a opção de número 02",  
    "Eu escolho a opção de número 03",  
    "Eu escolho a opção de número 04",  
    "Eu escolho a opção de número 05",  
    "Eu escolho a opção de número 06",  
    "Eu escolho a opção de número 07",  
    "Eu escolho a opção de número 08",  
    "Eu escolho a opção de número 09",  
    "Eu escolho a opção de número 10",  
  ];  
  
  // Função para enviar mensagem no WhatsApp  
  function sendToWhatsApp(index) {  
    const recipientNumber = "+559181121979";  
    const message = encodeURIComponent(`Olá, ${buttonMessages[index]}, à que horas você vem me buscar`);  
    const whatsappUrl = `https://wa.me/${recipientNumber}?text=${message}`;  
    window.open(whatsappUrl, '_blank');  
  }  
  
  // Função para remover o zoom ao clicar fora  
  document.addEventListener('click', () => {  
    if (currentZoomed) {  
      currentZoomed.classList.remove('zoom');  
      currentZoomed = null;  
    }  
  });