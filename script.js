const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  // свайп пальцем
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true, // курсор "рука" при перетягивании

  // кликабельные точки
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})


const toggleButton = document.querySelector(".brand__show-hide")
const hiddenCards = document.querySelectorAll(".hidden-card")

let isExpanded = false

toggleButton.addEventListener("click", () => {
  isExpanded = !isExpanded
  if (isExpanded) {
    hiddenCards.forEach((card) => {
      card.style.display = "flex"
    })
    toggleButton.textContent = "Скрыть"
    toggleButton.classList.add("expanded")
  } else {
    hiddenCards.forEach((card) => {
      card.style.display = "none"
    })
    toggleButton.textContent = "Показать все"
    toggleButton.classList.remove("expanded")
  }
})