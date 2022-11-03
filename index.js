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

//search
let redirect = document.querySelector("#redirect");
let direct = document.querySelector(".srch");
let mainsearch = document.querySelector("#main-search");
let car = document.querySelector(".car");

car.addEventListener("click", () => {
  direct.style.display = "none";
  console.log("existed");
});

redirect.addEventListener("click", () => {
  direct.style.display = "flex";
  console.log("serach");
});

mainsearch.addEventListener("click", () => {
  let inputfeild = document.querySelector(".input");

  if (inputfeild.value == "") {
    alert("Search something pls");
    direct.style.display = "flex";
  } else {
    let searchItem = inputfeild.value;

    //fetch api

    async function youtube() {
      let videopre = document.querySelector(".video-div-1");
      let videodet = document.querySelector(".title");
      let chantitle = document.querySelector(".channeltitle-1");
      let frame1 = document.querySelector(".frame-1");

      let videopre2 = document.querySelector(".video-div-2");
      let videodet2 = document.querySelector(".title-2");
      let chantitle2 = document.querySelector(".channeltitle-2");
      let frame2 = document.querySelector(".frame-2");

      let videopre3 = document.querySelector(".video-div-3");
      let videodet3 = document.querySelector(".title-3");
      let chantitle3 = document.querySelector(".channeltitle-3");
      let frame3 = document.querySelector(".frame-3");

      let videopre4 = document.querySelector(".video-div-4");
      let videodet4 = document.querySelector(".title-4");
      let chantitle4 = document.querySelector(".channeltitle-4");
      let frame4 = document.querySelector(".frame-4");

      let videopre5 = document.querySelector(".video-div-5");
      let videodet5 = document.querySelector(".title-5");
      let chantitle5 = document.querySelector(".channeltitle-5");
      let frame5 = document.querySelector(".frame-5");

      let response = await fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=" +
          searchItem +
          "&type=video&key=AIzaSyCk7xTmPnD7dEgi7j2S2d8xNeWCgi9CqCI"
      );
      let youtubedata = await response.json();

      let snip = youtubedata.items;
      console.log(snip);

      let chanelid = snip.map((items) => {
        return items.snippet.channelId;
      });

      let title = snip.map((items) => {
        return items.snippet.title;
      });

      let videothumbnail = snip.map((items) => {
        return items.snippet.thumbnails.medium;
      });

      let videoid = snip.map((items) => {
        return items.id.videoId;
      });

      let chaneltitle = snip.map((items) => {
        return items.snippet.channelTitle;
      });

      console.log(videoid);

      videopre.setAttribute("src", videothumbnail[0].url);
      videodet.innerHTML = title[0];
      chantitle.innerHTML = chaneltitle[0];
      frame1.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[0]
      );

      videopre2.setAttribute("src", videothumbnail[1].url);
      videodet2.innerHTML = title[1];
      chantitle2.innerHTML = chaneltitle[1];
      frame2.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[1]
      );

      videopre3.setAttribute("src", videothumbnail[2].url);
      videodet3.innerHTML = title[2];
      chantitle3.innerHTML = chaneltitle[2];
      frame3.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[2]
      );

      videopre4.setAttribute("src", videothumbnail[3].url);
      videodet4.innerHTML = title[3];
      chantitle4.innerHTML = chaneltitle[3];
      frame4.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[3]
      );

      videopre5.setAttribute("src", videothumbnail[4].url);
      videodet5.innerHTML = title[4];
      chantitle5.innerHTML = chaneltitle[4];
      frame5.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[4]
      );
    }

    direct.style.display = "none";
    youtube();
  }
});

//fetch api

async function youtube() {
  let videopre = document.querySelector(".video-div-1");
  let videodet = document.querySelector(".title");
  let chantitle = document.querySelector(".channeltitle-1");
  let frame1 = document.querySelector(".frame-1");

  let videopre2 = document.querySelector(".video-div-2");
  let videodet2 = document.querySelector(".title-2");
  let chantitle2 = document.querySelector(".channeltitle-2");
  let frame2 = document.querySelector(".frame-2");

  let videopre3 = document.querySelector(".video-div-3");
  let videodet3 = document.querySelector(".title-3");
  let chantitle3 = document.querySelector(".channeltitle-3");
  let frame3 = document.querySelector(".frame-3");

  let videopre4 = document.querySelector(".video-div-4");
  let videodet4 = document.querySelector(".title-4");
  let chantitle4 = document.querySelector(".channeltitle-4");
  let frame4 = document.querySelector(".frame-4");

  let videopre5 = document.querySelector(".video-div-5");
  let videodet5 = document.querySelector(".title-5");
  let chantitle5 = document.querySelector(".channeltitle-5");
  let frame5 = document.querySelector(".frame-5");

  let response = await fetch(
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=cat&type=video&key=AIzaSyCk7xTmPnD7dEgi7j2S2d8xNeWCgi9CqCI"
  );
  let youtubedata = await response.json();

  let snip = youtubedata.items;
  console.log(snip);

  let chanelid = snip.map((items) => {
    return items.snippet.channelId;
  });

  let title = snip.map((items) => {
    return items.snippet.title;
  });

  let videothumbnail = snip.map((items) => {
    return items.snippet.thumbnails.medium;
  });

  let videoid = snip.map((items) => {
    return items.id.videoId;
  });

  let chaneltitle = snip.map((items) => {
    return items.snippet.channelTitle;
  });

  console.log(videoid);

  videopre.setAttribute("src", videothumbnail[0].url);
  videodet.innerHTML = title[0];
  chantitle.innerHTML = chaneltitle[0];
  frame1.setAttribute("href", "https://www.youtube.com/watch?v=" + videoid[0]);

  videopre2.setAttribute("src", videothumbnail[1].url);
  videodet2.innerHTML = title[1];
  chantitle2.innerHTML = chaneltitle[1];
  frame2.setAttribute("href", "https://www.youtube.com/watch?v=" + videoid[1]);

  videopre3.setAttribute("src", videothumbnail[2].url);
  videodet3.innerHTML = title[2];
  chantitle3.innerHTML = chaneltitle[2];
  frame3.setAttribute("href", "https://www.youtube.com/watch?v=" + videoid[2]);

  videopre4.setAttribute("src", videothumbnail[3].url);
  videodet4.innerHTML = title[3];
  chantitle4.innerHTML = chaneltitle[3];
  frame4.setAttribute("href", "https://www.youtube.com/watch?v=" + videoid[3]);

  videopre5.setAttribute("src", videothumbnail[4].url);
  videodet5.innerHTML = title[4];
  chantitle5.innerHTML = chaneltitle[4];
  frame5.setAttribute("href", "https://www.youtube.com/watch?v=" + videoid[4]);
}

youtube();
