const menuBtn = document.getElementById("menu-btn");
let menuStatus = "";

menuBtn.addEventListener("click", function () {
  const menu = document.getElementById("menu");

  if (menuStatus === "") {
    menu.classList.remove("menu");
    menu.classList.add("menu-show");
    menuStatus = "no-show";
    menuBtn.innerHTML = "Close Menu"
  } else {
    menu.classList.remove("menu-show");
    menu.classList.add("menu");
    menuStatus = "";
    menuBtn.innerHTML = "Open Menu"
  }
});
