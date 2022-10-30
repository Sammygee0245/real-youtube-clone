let ham = document.querySelector("#burger");

let nav_left = document.querySelector("#nav-left");

ham.addEventListener("click", () => {
  if (ham.classList.contains("menu")) {
    ham.classList.remove("menu");
    nav_left.style.display = "none";
    document.body.style.backgroundColor = "#fff";
  } else {
    ham.classList.add("menu");
    nav_left.style.display = "flex";
    document.body.style.backgroundColor = "rgb(219, 219, 219)";
  }
});
