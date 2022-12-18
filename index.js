let ham = document.querySelector("#burger");
let searchInput = document.querySelector(".input")
let nav_left = document.querySelector("#nav-left");
let videoContainer = document.querySelector(".video-cointainer")
let ErroScreen = document.querySelector(".error")
let showNAvleft = false

ham.addEventListener("click", () => {
  if (!showNAvleft){
    nav_left.style.left = "0"
    showNAvleft = true
  } else{
    nav_left.style.left = "-1000px"
    showNAvleft = false
  }
});

//search
let redirect = document.querySelector("#redirect");
let direct = document.querySelector(".srch");
let mainsearch = document.querySelector("#main-search");
let car = document.querySelector(".car");

redirect.addEventListener("click", () => {
  direct.style.display = "flex";
});

car.addEventListener("click", () => {
  direct.style.display = "none";
  console.log("existed");
});

mainsearch.addEventListener("click",()=>{
  tube()
})


async function tube(){
  let search = document.querySelector("#search-stuff").value
  console.log(search)

  let response = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q="+search+"&type=video&key=AIzaSyCk7xTmPnD7dEgi7j2S2d8xNeWCgi9CqCI&maxResults=24")
  let data = await response.json()
  let vid = data.items
  console.log(vid)


  if(vid.length !== 0){
    videoContainer.innerHTML = vid.map((x)=>{
        let {snippet,id} = x
        return ( `
      <a href=${"https://www.youtube.com/watch?v="+id.videoId} class="video">
            <img width="100%" height="50%" src=${snippet.thumbnails.medium.url} alt="">
            <div class="video-details">
                <img class="channel-pic" src=${snippet.thumbnails.medium.url} alt="">
                <div class="vidoe-prev-info">
                    <p class="vidTitile">${snippet.title}</p>
                    <p class="channel-name">${snippet.channelTitle}</p>
                </div>
            </div>
      </a>
      `)
    }).join("")
    videoContainer.style.backgroundColor = "rgb(22, 22, 22)"
    direct.style.display = "none"
  }else{}
}



//fetch api

async function youtube() {
  let response = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=cats&type=video&key=AIzaSyCk7xTmPnD7dEgi7j2S2d8xNeWCgi9CqCI&maxResults=24")
  let data = await response.json()
  let vid = data.items
  console.log(vid)


  if(vid.length !== 0){
    videoContainer.innerHTML = vid.map((x)=>{
        let {snippet,id} = x
        return ( `
      <a href=${"https://www.youtube.com/watch?v="+id.videoId} class="video">
            <img width="100%" height="50%" src=${snippet.thumbnails.medium.url} alt="">
            <div class="video-details">
                <img class="channel-pic" src=${snippet.thumbnails.medium.url} alt="">
                <div class="vidoe-prev-info">
                    <p class="vidTitile">${snippet.title}</p>
                    <p class="channel-name">${snippet.channelTitle}</p>
                </div>
            </div>
      </a>
      `)
    }).join("")
    videoContainer.style.backgroundColor = "rgb(22, 22, 22)"
  }else{} 
}

youtube();


    // https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=" +
    //       chanelid +
    //       "&key=AIzaSyCk7xTmPnD7dEgi7j2S2d8xNeWCgi9CqCI&maxResults=1

    // "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=cats&type=video&key=AIzaSyCk7xTmPnD7dEgi7j2S2d8xNeWCgi9CqCI&maxResults=1"
