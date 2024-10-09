const btn = document.getElementById("menu-btn")
const btnx = document.getElementById("menu-btnx")
const nav = document.getElementById("menu")

btn.addEventListener('click', () => {
  btn.classList.toggle("open")  
  nav.classList.toggle("flex")
  nav.classList.toggle("hidden")
})

btnx.addEventListener('click', () => {
  btn.classList.toggle("open") 
  nav.classList.toggle("flex")
  nav.classList.toggle("hidden")
})