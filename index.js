let ham = document.querySelector("#burger");

let nav_left = document.querySelector("#nav-left");

ham.addEventListener("click", () => {
  if (ham.classList.contains("menu")) {
    ham.classList.remove("menu");
    nav_left.style.display = "none";
  } else {
    ham.classList.add("menu");
    nav_left.style.display = "flex";
  }
});

//fetch api

async function youtube() {
  let response = await fetch(
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=ajax&type=video&key=AIzaSyCk7xTmPnD7dEgi7j2S2d8xNeWCgi9CqCI"
  );

  let youtubedata = await response.json();

  console.log(youtubedata);
}

youtube();
