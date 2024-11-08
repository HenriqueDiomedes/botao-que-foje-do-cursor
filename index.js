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

let currentZoomed = null; // Para rastrear qual imagem está em zoom  

        function zoomImage(event, box) {  
            event.stopPropagation(); // Impede que o evento se propague para o documento  

            // Se a imagem clicada já estiver com zoom, a deszoomamos  
            if (currentZoomed === box) {  
                box.classList.remove('zoom');  
                currentZoomed = null; // Reset  
            } else {  
                // Remove o zoom da imagem atualmente em zoom, se houver  
                if (currentZoomed) {  
                    currentZoomed.classList.remove('zoom');  
                }  
                // Adiciona o zoom à nova imagem clicada  
                box.classList.add('zoom');  
                currentZoomed = box; // Atualiza a imagem atual com zoom  
            }  
        }  

        function sendToWhatsApp(number, text) {  
            // Define o número do destinatário  
            const recipientNumber = "+559181121979"; // substitua pelo número do destinatário  
            
            // Define o texto da mensagem  
            const message = encodeURIComponent(`Olá, você escolheu a opção de número 01, as 8h da maha estarei a sua espera, ${text}`);  
            
            // Constrói o link do WhatsApp com o número do destinatário e a mensagem  
            const whatsappUrl = `https://wa.me/${recipientNumber}?text=${message}`;  
            
            // Abre o link no WhatsApp  
            window.open(whatsappUrl, '_blank');  
          }

        // Função para remover o zoom ao clicar fora  
        document.addEventListener('click', () => {  
            if (currentZoomed) {  
                currentZoomed.classList.remove('zoom');  
                currentZoomed = null; // Reset  
            }  
        });