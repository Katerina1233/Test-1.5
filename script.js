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
