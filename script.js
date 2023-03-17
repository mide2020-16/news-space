const openmenu = document.querySelector(".menu-open")
const hamburger = document.querySelector('.hamburger')
const embodiment = document.querySelector(".body")
const closemenu = document.querySelector(".menu-close")
console.log(closemenu)

openmenu.addEventListener('click', function () {
  hamburger.classList.add("show")
  embodiment.classList.toggle("darkmode")
})

closemenu.addEventListener("click", function () {
  hamburger.classList.remove("show")
  embodiment.classList.toggle("darkmode")
})