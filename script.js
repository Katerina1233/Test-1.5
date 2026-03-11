const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
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