const carousel = document.querySelector('.brands-swiper');

if (carousel) {
  const track = carousel.querySelector('.swiper-wrapper');
  const slides = Array.from(carousel.querySelectorAll('.swiper-slide'));
  const dots = Array.from(
    carousel.querySelectorAll('.carousel__button, .carousel__button--selected')
  );

  if (!slides.length || !dots.length) {
    console.warn('Нет слайдов или точек для карусели');
  } else {
    let currentIndex = 0;

    // ширина одного слайда (карточка + отступ)
    const slideWidth = slides[0].offsetWidth + 16;

    function goToSlide(index) {
      if (index < 0 || index >= slides.length) return;

      currentIndex = index;

      // сдвигаем всю ленту
      track.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

      // обновляем активный кружок
      dots.forEach(dot => dot.classList.remove('carousel__button--selected'));
      if (dots[currentIndex]) {
        dots[currentIndex].classList.add('carousel__button--selected');
      }
    }

    // клики по кружкам
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToSlide(index);
      });
    });

    // стартовое состояние
    goToSlide(0);
  }
}

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

<script>
const swiper = new Swiper('.brands-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
</script>

window.addEventListener("load", () => {
  const wrapper = document.querySelector('.swiper-wrapper');

  if (window.innerWidth >= 1120) {
    const slides = Array.from(wrapper.children);

    // повторяем бренды 2 раза (можно увеличить)
    for (let i = 0; i < 2; i++) {
      slides.forEach(slide => {
        wrapper.appendChild(slide.cloneNode(true));
      });
    }
  }
});