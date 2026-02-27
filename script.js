// Находим карусель
const carousel = document.querySelector('.brands-swiper');
const track = carousel.querySelector('.swiper-wrapper');
const slides = Array.from(carousel.querySelectorAll('.swiper-slide'));
const dots = Array.from(carousel.querySelectorAll('.carousel__button, .carousel__button--selected'));

// Функция активации слайда и точки
function goToSlide(index) {
  const slide = slides[index];
  if (!slide) return;

  // Прокрутка к нужному слайду
  slide.scrollIntoView({
    behavior: 'smooth',
    inline: 'start',
    block: 'nearest',
  });

  // Обновляем активный кружок
  dots.forEach(dot => dot.classList.remove('carousel__button--selected'));
  dots[index].classList.add('carousel__button--selected');
}

// Вешаем обработчики на точки
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
});

// Стартовое состояние
if (dots.length > 0) {
  dots[0].classList.add('carousel__button--selected');
}

const swiper = new Swiper('.brands-swiper', {
  slidesPerView: 1.2, // 1 карточка + кусочек следующей
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
