
// BANNER
const frases = [
        "BLACK FRIDAY ",
        "",
        "",
        "Limpeza de pele premium + Massagem Relaxante (30min) ",
        "",
        "",
        "Revitalização facial + Drenagem facial ",
        "",
        "",
        "Limpeza de pele Premium + Spa Hydra Lips + Massagem relaxante (30min) "
    ];

    // Junta as frases em uma única sequência para loop continuo
    document.getElementById("texto").textContent = frases.join("  -  ");


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

// FORMULÁRIO
document.getElementById("contatoForm").addEventListener("submit", function (e) {
    e.preventDefault(); // impede o envio normal do form

    // Coletando os valores
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let mensagem = document.getElementById("mensagem").value;

    // Número do WhatsApp que vai receber a mensagem (inclua DDD e país sem símbolos)
    let numeroDestino = "558198731306";

    // Montando o texto formatado
    let texto = `Olá! Meu nome é ${nome}%0A📱 Telefone: ${telefone}%0A✉️ Mensagem: ${mensagem}`;

    // Criando o link do WhatsApp
    let link = `https://wa.me/${numeroDestino}?text=${texto}`;

    // Redireciona para o WhatsApp
    window.open(link, "_blank");
});

// ANIMAÇÕES GLOBAIS
// Coletando o observador da página
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
            entry.target.classList.add('show')
        }
    })
})

// Selecionando os elementos com a classe ".hidden"
const elements = document.querySelectorAll('.hidden')

// Selecionando 1 arquivos por vez da classe ".hidden"
elements.forEach((element) => myObserver.observe(element))

// Selecionando os elementos com a classe ".hidden"
const elements2 = document.querySelectorAll('.hidden2')

// Selecionando 1 arquivos por vez da classe ".hidden"
elements2.forEach((element) => myObserver.observe(element))
