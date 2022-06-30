const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", function () {
  const menu = document.getElementById("menu");

  if (menu.classList.contains("menu") === true) {
    menu.classList.remove("menu");
    menu.classList.add("menu-show");
    menuBtn.innerHTML = "Close Menu";
  } else {
    menu.classList.remove("menu-show");
    menu.classList.add("menu");
    menuBtn.innerHTML = "Open Menu";
  }
});
