const toggleBtn = document.querySelector(".part1_toogleBtn");
const menu = document.querySelector(".part1_menu");
const icons = document.querySelector(".part1_icons");

toggleBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
