
//START SUMMARY SECTION


// Seleciona todos os links do sumário
const summaryLinks = document.querySelectorAll('.summary a');

// Adiciona um evento de click a cada link
summaryLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    // Previne o comportamento padrão do link
    event.preventDefault();

    // Seleciona a seção correspondente ao link clicado
    const sectionId = link.getAttribute('href').replace('#', '');
    const section = document.getElementById(sectionId);

    // Scroll suave para a seção
    section.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

//END SUMMARY SECTION

// Função: Carregar Barras de Idiomas com Animação
function carregarIdiomas() {
  const progressBars = document.querySelectorAll('.idiomas .progress-bar');

  progressBars.forEach(bar => {
    const level = bar.getAttribute('data-level');
    let width;

    // Definir a largura da barra com base no nível
    switch (level) {
      case 'nativo':
        width = '100%';
        break;
      case 'fluente':
        width = '80%';
        break;
      case 'intermediário':
        width = '60%';
        break;
      case 'iniciante':
        width = '40%';
        break;
      default:
        width = '0%';
    }

    // Aplicar a largura com atraso para garantir animação suave
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });
}

// Evento: Carregar as barras de idiomas ao abrir a página
window.addEventListener('load', carregarIdiomas);


//START SKILLS SECTION


// Selecione todos os elementos com a classe "skill-bar"
const skillBars = document.querySelectorAll('.skill-bar');

// Função para verificar se o elemento está visível
function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

// Função para carregar a barra de carregamento
function loadProgressBar(skillBar) {
  const progressBar = skillBar.querySelector('.progress-bar');
  const level = progressBar.getAttribute('data-level');
  progressBar.style.width = getProgressBarWidth(level);
}

// Função para obter a largura da barra de carregamento com base no nível
function getProgressBarWidth(level) {
  switch (level) {
    case 'iniciante':
      return '20%';
    case 'básico':
      return '40%';
    case 'avançado':
      return '60%';
    case 'profissional':
      return '80%';
    default:
      return '0%';
  }
}

// Adicione um evento de scroll à janela
window.addEventListener('scroll', () => {
  skillBars.forEach((skillBar) => {
    if (isElementVisible(skillBar)) {
      loadProgressBar(skillBar);
    }
  });
});


//END SKILLS SECTION
