// Lógica de navegação das setas
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
    const isFlex = window.getComputedStyle(leftArrow).display === 'flex';
    if (!isFlex) return;

    leftArrow.style.display = nav.scrollLeft <= 0 ? 'none' : 'flex';
    rightArrow.style.display = nav.scrollLeft + nav.clientWidth >= nav.scrollWidth ? 'none' : 'flex';
  };

  nav.addEventListener('scroll', toggleArrowVisibility);
  window.addEventListener('resize', toggleArrowVisibility);
  toggleArrowVisibility();


  // Lógica do modal
  const elementosIds = [
    "rect26516",
    "rect30420",
    "g23504",
    "image47771",
    "rect14303",
  ];

  const modalData = [
    {
      name: "rect26516",
      title: "Educação em Engenharia",
      text: "É uma empresa que tem como objetivo capacitar engenheiros por meio de uma plataforma de educação. Começou a ser desenvolvida em 2024s e, atualmente, está em fase de amadurecimento.",
      color: "#fff",
      bg: "#3F186F"
    },
    {
      name: "rect30420",
      title: "Promon Engenharia",
      text: "Atua no mercado de engenharia e gerenciamento, combina expertise técnica e visão sistêmica para entregar soluções integradas nos setores de infraestrutura, energia e indústrias.",
      color: "#fff",
      bg: "#E04403"
    },
    {
      name: "g23504",
      title: "Forzy",
      text: "Atua na digitalização de ativos e no desenvolvimento de soluções de eficiência para os setores industrial, de energia, infraestrutura e mercado imobiliário.",
      color: "#000",
      bg: "#F5A117"
    },
    {
      name: "image47771",
      title: "Logicalis Latin America",
      text: "Provê soluções em Tecnologia da Informação e Comunicação (TIC) para diversos setores em 10 países da América Latina.",
      color: "#fff",
      bg: "#194BFF"
    },
    {
      name: "rect14303",
      title: "Fundação Promon de Previdência Social (FPPS)",
      text: "É a entidade fechada de previdência complementar patrocinada pelas empresas da Promon S.A. em benefício de seus profissionais.",
      color: "#fff",
      bg: "#439D80"
    },
  ];

  const openModal = (data) => {
    const modal = document.getElementById('meuModal');
    if (!modal) return;

    const modalTitle = modal.querySelector('.modal-title');
    const modalText = modal.querySelector('.modal-text');
    const modalContent = modal.querySelector('.modal-content');

    if (modalTitle) modalTitle.textContent = data.title;
    if (modalText) modalText.textContent = data.text;

    if (modalContent) {
      modalContent.style.backgroundColor = data.bg;
      modalContent.style.color = data.color;
    }

    modal.style.display = 'flex';
  };

  const closeModal = () => {
    const modal = document.getElementById('meuModal');
    if (modal) {
      modal.style.display = 'none';
    }
  };

  window.addEventListener('click', (event) => {
    const clickedElement = event.target;

    const modal = document.getElementById('meuModal');
    if (clickedElement === modal) {
      closeModal();
      return;
    }

    elementosIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const margem = 15;

      const isClickInsideExpandedArea = (
        event.clientX >= rect.left - margem &&
        event.clientX <= rect.right + margem &&
        event.clientY >= rect.top - margem &&
        event.clientY <= rect.bottom + margem
      );

      if (isClickInsideExpandedArea) {
        const data = modalData.find(item => item.name === id);
        if (data) {
          openModal(data);
        }
      }
    });
  });

  const modal = document.getElementById('meuModal');
  if (modal) {
    const closeBtn = modal.querySelector('.close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }
  }

  elementosIds.forEach(id => {
    const el = document.querySelector('#' + id);
    if (el) el.style.cursor = "pointer";
  });

  const sectionHighlightsContent = document.querySelector('.section-highlights__content');
  const sectionFundation = document.querySelector('.section-fundation');

  function alinharFundation() {
    const rect = sectionHighlightsContent.getBoundingClientRect();
    const largura = rect.right - sectionFundation.getBoundingClientRect().left;
    sectionFundation.style.width = (largura - 8) + "px";
  }

  window.addEventListener("resize", alinharFundation);
  alinharFundation();

});