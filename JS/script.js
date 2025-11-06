// CARROSSEL
// Index do item do meio atual
let currentIndex = window.innerWidth <= 750 ? 0 : 1;

// Evento dos botões do carousel
document.querySelectorAll('.carousel-button').forEach(e => e.addEventListener('click', () => moverCarrossel(e.id)));

// Função para mover o carrossel (reutilizável)
function moverCarrossel(direcao) {
    const listaDeCards = document.querySelectorAll('.depoimento');

    // Se for o botão da esquerda diminui, se for o da direita aumenta
    if (window.innerWidth >= 751) {
        currentIndex += direcao === 'anterior' ? -1 : 1;
    } else {
        currentIndex += direcao === 'anterior' ? -1 : 1;
    }

    // Garantindo que o index não saia do range válido
    if (window.innerWidth <= 750) {
        if (currentIndex < 0) {
            currentIndex = listaDeCards.length - 1;
        } else if (currentIndex > listaDeCards.length - 1) {
            currentIndex = 0;
        }
    } else {
        if (currentIndex < 1) {
            currentIndex = listaDeCards.length - 2;
        } else if (currentIndex > listaDeCards.length - 2) {
            currentIndex = 1;
        }
    }

    // Movendo o card atual para o centro
    listaDeCards[currentIndex].scrollIntoView({
        inline: 'center',
        block: 'nearest',
        behavior: 'smooth',
    });
}

// 🔁 Autoplay: mover automaticamente a cada 2 segundos
//setInterval(() => {
    //moverCarrossel('proximo');
//}, 2000);
