// Smooth Scroll for Summary Links
const summaryLinks = document.querySelectorAll('.summary a');

summaryLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionId = link.getAttribute('href').replace('#', '');
    const section = document.getElementById(sectionId);
    
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Language Skills Animation
function carregarIdiomas() {
  const progressBars = document.querySelectorAll('.idiomas .progress-bar');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const level = bar.getAttribute('data-level');
        let width;

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

        bar.style.width = width;
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  progressBars.forEach(bar => observer.observe(bar));
}

// Technical Skills Animation
const skillBars = document.querySelectorAll('.skill-bar');

function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= windowHeight && rect.bottom >= 0;
}

function loadProgressBar(skillBar) {
  const progressBar = skillBar.querySelector('.progress-bar');
  const level = progressBar.getAttribute('data-level');
  
  const widthMap = {
    'iniciante': '20%',
    'básico': '40%',
    'avançado': '60%',
    'profissional': '80%',
    'expert': '100%'
  };

  progressBar.style.width = widthMap[level] || '0%';
}

// Intersection Observer for Skills
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadProgressBar(entry.target);
      skillsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(skillBar => skillsObserver.observe(skillBar));

// Initialize on page load
window.addEventListener('load', () => {
  carregarIdiomas();
  
  // Add animation classes to sections
  document.querySelectorAll('section').forEach((section, index) => {
    section.style.animationDelay = `${index * 0.1}s`;
  });
});

// Back to top button functionality
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
    backToTop.style.opacity = '1';
  } else {
    backToTop.style.opacity = '0';
    setTimeout(() => {
      backToTop.style.display = 'none';
    }, 300);
  }
});

backToTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});