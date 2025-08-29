document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.header__nav');
  const leftArrow = document.getElementById('left-arrow');
  const rightArrow = document.getElementById('right-arrow');

  const scrollAmount = 100;
  
  rightArrow.addEventListener('click', () => {
    nav.scrollLeft += scrollAmount;
  });

  leftArrow.addEventListener('click', () => {
    nav.scrollLeft -= scrollAmount;
  });

  const toggleArrowVisibility = () => {
    if (window.getComputedStyle(leftArrow).display === 'flex') {
      if (nav.scrollLeft <= 0) {
        leftArrow.style.display = 'none';
      } else {
        leftArrow.style.display = 'flex';
      }
      
      if (nav.scrollLeft + nav.clientWidth >= nav.scrollWidth) {
        rightArrow.style.display = 'none';
      } else {
        rightArrow.style.display = 'flex';
      }
    }
  };

  nav.addEventListener('scroll', toggleArrowVisibility);
  window.addEventListener('resize', toggleArrowVisibility);
  
  setInterval(toggleArrowVisibility, 100);
  toggleArrowVisibility();
});

const elementosIds = [
  "svg-educacao-engenharia",
  "svg-promon-engenharia",
  "svg-forzy",
  "svg-phl",
  "svg-logicalis",
  "svg-fpps",
  "svg-promon"
];

function abrirModal() {
  alert('ok')
}

function fecharModal() {
  const modal = document.getElementById("meuModal");
  if (modal) {
    modal.style.display = "none";
  }
}

// Escuta global de clique
window.addEventListener("click", (event) => {
  const clickX = event.clientX;
  const clickY = event.clientY;

  elementosIds.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    // Obtem posição e tamanho do elemento
    const rect = el.getBoundingClientRect();

    // Definindo margem de erro de 10px
    const margem = 10;

    if (
      clickX >= rect.left - margem &&
      clickX <= rect.right + margem &&
      clickY >= rect.top - margem &&
      clickY <= rect.bottom + margem
    ) {
      abrirModal();
    }
  });
});

// Fechar modal clicando fora (opcional)
window.addEventListener("click", function(event) {
  const modal = document.getElementById("meuModal");
  if (event.target === modal) {
    fecharModal();
  }
});
