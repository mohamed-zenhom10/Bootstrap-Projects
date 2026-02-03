const search = document.getElementById("search");
const searchCard = document.querySelector(".search");
const overlay = document.querySelector(".overlay");

search.addEventListener("click" , () => {
  searchCard.classList.toggle("display");
  overlay.classList.toggle("display");
})