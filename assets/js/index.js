document.addEventListener('DOMContentLoaded', () => {
  // Selecionar idioma
  document.querySelector(".language-list").addEventListener("change", function () {
    const lang = this.value;
    if (lang === "pt") {
      window.location.href = "/";
    } else if (lang === "en") {
      window.location.href = "/en";
    }
  });

  // Lógica do modal
  const elementosIds = ["rect26516", "rect30420", "g23504", "image47771", "rect14303"];

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