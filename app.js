const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const dashboard = document.querySelector(".dashBoard");
toggleBtn.addEventListener("click", function () {
  dashboard.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  dashboard.classList.remove("show-sidebar");
});
