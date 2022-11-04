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

      let videopre6 = document.querySelector(".video-div-6");
      let videodet6 = document.querySelector(".title-6");
      let chantitle6 = document.querySelector(".channeltitle-6");
      let frame6 = document.querySelector(".frame-6");

      let videopre7 = document.querySelector(".video-div-7");
      let videodet7 = document.querySelector(".title-7");
      let chantitle7 = document.querySelector(".channeltitle-7");
      let frame7 = document.querySelector(".frame-7");

      let videopre8 = document.querySelector(".video-div-8");
      let videodet8 = document.querySelector(".title-8");
      let chantitle8 = document.querySelector(".channeltitle-8");
      let frame8 = document.querySelector(".frame-8");

      let videopre9 = document.querySelector(".video-div-9");
      let videodet9 = document.querySelector(".title-9");
      let chantitle9 = document.querySelector(".channeltitle-9");
      let frame9 = document.querySelector(".frame-9");

      let videopre10 = document.querySelector(".video-div-10");
      let videodet10 = document.querySelector(".title-10");
      let chantitle10 = document.querySelector(".channeltitle-10");
      let frame10 = document.querySelector(".frame-10");

      let videopre11 = document.querySelector(".video-div-11");
      let videodet11 = document.querySelector(".title-11");
      let chantitle11 = document.querySelector(".channeltitle-11");
      let frame11 = document.querySelector(".frame-11");

      let videopre12 = document.querySelector(".video-div-12");
      let videodet12 = document.querySelector(".title-5");
      let chantitle12 = document.querySelector(".channeltitle-12");
      let frame12 = document.querySelector(".frame-12");

      let response = await fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=" +
          searchItem +
          "&type=video&key=AIzaSyCk7xTmPnD7dEgi7j2S2d8xNeWCgi9CqCI&maxResults=25"
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

      videopre6.setAttribute("src", videothumbnail[5].url);
      videodet6.innerHTML = title[5];
      chantitle6.innerHTML = chaneltitle[5];
      frame6.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[5]
      );

      videopre7.setAttribute("src", videothumbnail[6].url);
      videodet7.innerHTML = title[6];
      chantitle7.innerHTML = chaneltitle[6];
      frame7.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[6]
      );

      videopre8.setAttribute("src", videothumbnail[7].url);
      videodet8.innerHTML = title[7];
      chantitle8.innerHTML = chaneltitle[7];
      frame8.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[7]
      );

      videopre9.setAttribute("src", videothumbnail[8].url);
      videodet9.innerHTML = title[8];
      chantitle9.innerHTML = chaneltitle[8];
      frame9.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[8]
      );

      videopre10.setAttribute("src", videothumbnail[9].url);
      videodet10.innerHTML = title[9];
      chantitle10.innerHTML = chaneltitle[9];
      frame10.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[9]
      );

      videopre11.setAttribute("src", videothumbnail[10].url);
      videodet11.innerHTML = title[10];
      chantitle11.innerHTML = chaneltitle[10];
      frame11.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[10]
      );

      videopre12.setAttribute("src", videothumbnail[11].url);
      videodet12.innerHTML = title[11];
      chantitle12.innerHTML = chaneltitle[11];
      frame12.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[11]
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

  let videopre6 = document.querySelector(".video-div-6");
  let videodet6 = document.querySelector(".title-6");
  let chantitle6 = document.querySelector(".channeltitle-6");
  let frame6 = document.querySelector(".frame-6");

  let videopre7 = document.querySelector(".video-div-7");
  let videodet7 = document.querySelector(".title-7");
  let chantitle7 = document.querySelector(".channeltitle-7");
  let frame7 = document.querySelector(".frame-7");

  let videopre8 = document.querySelector(".video-div-8");
  let videodet8 = document.querySelector(".title-8");
  let chantitle8 = document.querySelector(".channeltitle-8");
  let frame8 = document.querySelector(".frame-8");

  let videopre9 = document.querySelector(".video-div-9");
  let videodet9 = document.querySelector(".title-9");
  let chantitle9 = document.querySelector(".channeltitle-9");
  let frame9 = document.querySelector(".frame-9");

  let videopre10 = document.querySelector(".video-div-10");
  let videodet10 = document.querySelector(".title-10");
  let chantitle10 = document.querySelector(".channeltitle-10");
  let frame10 = document.querySelector(".frame-10");

  let videopre11 = document.querySelector(".video-div-11");
  let videodet11 = document.querySelector(".title-11");
  let chantitle11 = document.querySelector(".channeltitle-11");
  let frame11 = document.querySelector(".frame-11");

  let videopre12 = document.querySelector(".video-div-12");
  let videodet12 = document.querySelector(".title-12");
  let chantitle12 = document.querySelector(".channeltitle-12");
  let frame12 = document.querySelector(".frame-12");

  let response = await fetch(
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=cat&type=video&key=AIzaSyCk7xTmPnD7dEgi7j2S2d8xNeWCgi9CqCI&maxResults=25"
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

  videopre6.setAttribute("src", videothumbnail[5].url);
  videodet6.innerHTML = title[5];
  chantitle6.innerHTML = chaneltitle[5];
  frame6.setAttribute("href", "https://www.youtube.com/watch?v=" + videoid[5]);

  videopre7.setAttribute("src", videothumbnail[6].url);
  videodet7.innerHTML = title[6];
  chantitle7.innerHTML = chaneltitle[6];
  frame7.setAttribute("href", "https://www.youtube.com/watch?v=" + videoid[6]);

  videopre8.setAttribute("src", videothumbnail[7].url);
  videodet8.innerHTML = title[7];
  chantitle8.innerHTML = chaneltitle[7];
  frame8.setAttribute("href", "https://www.youtube.com/watch?v=" + videoid[7]);

  videopre9.setAttribute("src", videothumbnail[8].url);
  videodet9.innerHTML = title[8];
  chantitle9.innerHTML = chaneltitle[8];
  frame9.setAttribute("href", "https://www.youtube.com/watch?v=" + videoid[8]);

  videopre10.setAttribute("src", videothumbnail[9].url);
  videodet10.innerHTML = title[9];
  chantitle10.innerHTML = chaneltitle[9];
  frame10.setAttribute("href", "https://www.youtube.com/watch?v=" + videoid[9]);

  videopre11.setAttribute("src", videothumbnail[10].url);
  videodet11.innerHTML = title[10];
  chantitle11.innerHTML = chaneltitle[10];
  frame11.setAttribute(
    "href",
    "https://www.youtube.com/watch?v=" + videoid[10]
  );

  videopre12.setAttribute("src", videothumbnail[11].url);
  videodet12.innerHTML = title[11];
  chantitle12.innerHTML = chaneltitle[11];
  frame12.setAttribute(
    "href",
    "https://www.youtube.com/watch?v=" + videoid[11]
  );

  console.log(chanelid);
}

youtube();
