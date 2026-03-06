// ------------------------------
// 1. Инициализация Swiper только на мобильных
// ------------------------------
let swiper = null;

function initSwiper() {
  const wrapper = document.querySelector('.swiper-wrapper');

  if (window.innerWidth < 768 && wrapper && wrapper.dataset.duplicated) {
    const slides = wrapper.querySelectorAll('.swiper-slide');
    const half = slides.length / 2;

    for (let i = half; i < slides.length; i++) {
      slides[i].remove();
    }

    delete wrapper.dataset.duplicated;
  }

  if (window.innerWidth < 768) {
    if (!swiper) {
      swiper = new Swiper('.brands-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  } else {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  }
}


window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);

// ------------------------------
// 2. Повтор брендов на планшете/десктопе
// ------------------------------
if (window.innerWidth >= 768) {
  const wrapper = document.querySelector('.swiper-wrapper');
  if (wrapper && !wrapper.dataset.duplicated) {
    const slides = Array.from(wrapper.children);
    slides.forEach(slide => wrapper.appendChild(slide.cloneNode(true)));
    wrapper.dataset.duplicated = 'true';
  }
}

// ------------------------------
// 3. Кнопка "Показать все"
// ------------------------------
const container = document.querySelector('.brands-container');
const toggleBtn = document.querySelector('.toggle-btn');
const toggleText = document.querySelector('.toggle-btn__text');
const toggleIcon = document.querySelector('.toggle-btn__icon');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    container.classList.toggle('expanded');

    if (container.classList.contains('expanded')) {
      toggleText.textContent = 'Скрыть';
      toggleIcon.src = 'img/rollup.svg';
    } else {
      toggleText.textContent = 'Показать все';
      toggleIcon.src = 'img/unwrap.svg';
    }
  });
}
