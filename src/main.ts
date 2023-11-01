const openMenuBtn = document.querySelector("#openMenuBtn")
const closeBtn = document.querySelector("#closeMenuBtn")
const menu = document.querySelector(".drawer")

const toggleMenu = () => {
  menu?.classList.toggle("closed")

}

openMenuBtn?.addEventListener('click', toggleMenu)
closeBtn?.addEventListener('click', toggleMenu)