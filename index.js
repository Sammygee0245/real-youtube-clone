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

      let videopre13 = document.querySelector(".video-div-13");
      let videodet13 = document.querySelector(".title-13");
      let chantitle13 = document.querySelector(".channeltitle-13");
      let frame13 = document.querySelector(".frame-13");

      let videopre14 = document.querySelector(".video-div-14");
      let videodet14 = document.querySelector(".title-14");
      let chantitle14 = document.querySelector(".channeltitle-14");
      let frame14 = document.querySelector(".frame-14");

      let videopre15 = document.querySelector(".video-div-15");
      let videodet15 = document.querySelector(".title-15");
      let chantitle15 = document.querySelector(".channeltitle-15");
      let frame15 = document.querySelector(".frame-15");

      let videopre16 = document.querySelector(".video-div-16");
      let videodet16 = document.querySelector(".title-16");
      let chantitle16 = document.querySelector(".channeltitle-16");
      let frame16 = document.querySelector(".frame-16");

      let videopre17 = document.querySelector(".video-div-17");
      let videodet17 = document.querySelector(".title-17");
      let chantitle17 = document.querySelector(".channeltitle-17");
      let frame17 = document.querySelector(".frame-17");

      let videopre18 = document.querySelector(".video-div-18");
      let videodet18 = document.querySelector(".title-18");
      let chantitle18 = document.querySelector(".channeltitle-18");
      let frame18 = document.querySelector(".frame-18");

      let videopre19 = document.querySelector(".video-div-19");
      let videodet19 = document.querySelector(".title-19");
      let chantitle19 = document.querySelector(".channeltitle-19");
      let frame19 = document.querySelector(".frame-19");

      let videopre20 = document.querySelector(".video-div-20");
      let videodet20 = document.querySelector(".title-20");
      let chantitle20 = document.querySelector(".channeltitle-20");
      let frame20 = document.querySelector(".frame-20");

      let videopre21 = document.querySelector(".video-div-21");
      let videodet21 = document.querySelector(".title-21");
      let chantitle21 = document.querySelector(".channeltitle-21");
      let frame21 = document.querySelector(".frame-21");

      let videopre22 = document.querySelector(".video-div-22");
      let videodet22 = document.querySelector(".title-22");
      let chantitle22 = document.querySelector(".channeltitle-22");
      let frame22 = document.querySelector(".frame-22");

      let videopre23 = document.querySelector(".video-div-23");
      let videodet23 = document.querySelector(".title-23");
      let chantitle23 = document.querySelector(".channeltitle-23");
      let frame23 = document.querySelector(".frame-23");

      let videopre24 = document.querySelector(".video-div-24");
      let videodet24 = document.querySelector(".title-24");
      let chantitle24 = document.querySelector(".channeltitle-24");
      let frame24 = document.querySelector(".frame-24");

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

      videopre13.setAttribute("src", videothumbnail[12].url);
      videodet13.innerHTML = title[12];
      chantitle13.innerHTML = chaneltitle[12];
      frame13.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[12]
      );

      videopre14.setAttribute("src", videothumbnail[13].url);
      videodet14.innerHTML = title[13];
      chantitle14.innerHTML = chaneltitle[13];
      frame14.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[13]
      );

      videopre15.setAttribute("src", videothumbnail[14].url);
      videodet15.innerHTML = title[14];
      chantitle15.innerHTML = chaneltitle[14];
      frame15.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[14]
      );

      videopre16.setAttribute("src", videothumbnail[15].url);
      videodet16.innerHTML = title[15];
      chantitle16.innerHTML = chaneltitle[15];
      frame16.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[15]
      );

      videopre17.setAttribute("src", videothumbnail[16].url);
      videodet17.innerHTML = title[16];
      chantitle17.innerHTML = chaneltitle[16];
      frame17.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[16]
      );

      videopre18.setAttribute("src", videothumbnail[17].url);
      videodet18.innerHTML = title[17];
      chantitle18.innerHTML = chaneltitle[17];
      frame18.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[17]
      );

      videopre19.setAttribute("src", videothumbnail[18].url);
      videodet19.innerHTML = title[18];
      chantitle19.innerHTML = chaneltitle[18];
      frame19.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[18]
      );

      videopre20.setAttribute("src", videothumbnail[19].url);
      videodet20.innerHTML = title[19];
      chantitle20.innerHTML = chaneltitle[19];
      frame20.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[19]
      );

      videopre21.setAttribute("src", videothumbnail[20].url);
      videodet21.innerHTML = title[20];
      chantitle21.innerHTML = chaneltitle[20];
      frame21.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[20]
      );

      videopre22.setAttribute("src", videothumbnail[21].url);
      videodet22.innerHTML = title[21];
      chantitle22.innerHTML = chaneltitle[21];
      frame22.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[21]
      );

      videopre23.setAttribute("src", videothumbnail[22].url);
      videodet23.innerHTML = title[22];
      chantitle23.innerHTML = chaneltitle[22];
      frame23.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[22]
      );

      videopre24.setAttribute("src", videothumbnail[23].url);
      videodet24.innerHTML = title[23];
      chantitle24.innerHTML = chaneltitle[23];
      frame24.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=" + videoid[23]
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

  let videopre13 = document.querySelector(".video-div-13");
  let videodet13 = document.querySelector(".title-13");
  let chantitle13 = document.querySelector(".channeltitle-13");
  let frame13 = document.querySelector(".frame-13");

  let videopre14 = document.querySelector(".video-div-14");
  let videodet14 = document.querySelector(".title-14");
  let chantitle14 = document.querySelector(".channeltitle-14");
  let frame14 = document.querySelector(".frame-14");

  let videopre15 = document.querySelector(".video-div-15");
  let videodet15 = document.querySelector(".title-15");
  let chantitle15 = document.querySelector(".channeltitle-15");
  let frame15 = document.querySelector(".frame-15");

  let videopre16 = document.querySelector(".video-div-16");
  let videodet16 = document.querySelector(".title-16");
  let chantitle16 = document.querySelector(".channeltitle-16");
  let frame16 = document.querySelector(".frame-16");

  let videopre17 = document.querySelector(".video-div-17");
  let videodet17 = document.querySelector(".title-17");
  let chantitle17 = document.querySelector(".channeltitle-17");
  let frame17 = document.querySelector(".frame-17");

  let videopre18 = document.querySelector(".video-div-18");
  let videodet18 = document.querySelector(".title-18");
  let chantitle18 = document.querySelector(".channeltitle-18");
  let frame18 = document.querySelector(".frame-18");

  let videopre19 = document.querySelector(".video-div-19");
  let videodet19 = document.querySelector(".title-19");
  let chantitle19 = document.querySelector(".channeltitle-19");
  let frame19 = document.querySelector(".frame-19");

  let videopre20 = document.querySelector(".video-div-20");
  let videodet20 = document.querySelector(".title-20");
  let chantitle20 = document.querySelector(".channeltitle-20");
  let frame20 = document.querySelector(".frame-20");

  let videopre21 = document.querySelector(".video-div-21");
  let videodet21 = document.querySelector(".title-21");
  let chantitle21 = document.querySelector(".channeltitle-21");
  let frame21 = document.querySelector(".frame-21");

  let videopre22 = document.querySelector(".video-div-22");
  let videodet22 = document.querySelector(".title-22");
  let chantitle22 = document.querySelector(".channeltitle-22");
  let frame22 = document.querySelector(".frame-22");

  let videopre23 = document.querySelector(".video-div-23");
  let videodet23 = document.querySelector(".title-23");
  let chantitle23 = document.querySelector(".channeltitle-23");
  let frame23 = document.querySelector(".frame-23");

  let videopre24 = document.querySelector(".video-div-24");
  let videodet24 = document.querySelector(".title-24");
  let chantitle24 = document.querySelector(".channeltitle-24");
  let frame24 = document.querySelector(".frame-24");

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

  videopre13.setAttribute("src", videothumbnail[12].url);
  videodet13.innerHTML = title[12];
  chantitle13.innerHTML = chaneltitle[12];
  frame13.setAttribute(
    "href",
    "https://www.youtube.com/watch?v=" + videoid[12]
  );

  videopre14.setAttribute("src", videothumbnail[13].url);
  videodet14.innerHTML = title[13];
  chantitle14.innerHTML = chaneltitle[13];
  frame14.setAttribute(
    "href",
    "https://www.youtube.com/watch?v=" + videoid[13]
  );

  videopre15.setAttribute("src", videothumbnail[14].url);
  videodet15.innerHTML = title[14];
  chantitle15.innerHTML = chaneltitle[14];
  frame15.setAttribute(
    "href",
    "https://www.youtube.com/watch?v=" + videoid[14]
  );

  videopre16.setAttribute("src", videothumbnail[15].url);
  videodet16.innerHTML = title[15];
  chantitle16.innerHTML = chaneltitle[15];
  frame16.setAttribute(
    "href",
    "https://www.youtube.com/watch?v=" + videoid[15]
  );

  videopre17.setAttribute("src", videothumbnail[16].url);
  videodet17.innerHTML = title[16];
  chantitle17.innerHTML = chaneltitle[16];
  frame17.setAttribute(
    "href",
    "https://www.youtube.com/watch?v=" + videoid[16]
  );

  videopre18.setAttribute("src", videothumbnail[17].url);
  videodet18.innerHTML = title[17];
  chantitle18.innerHTML = chaneltitle[17];
  frame18.setAttribute(
    "href",
    "https://www.youtube.com/watch?v=" + videoid[17]
  );

  videopre19.setAttribute("src", videothumbnail[18].url);
  videodet19.innerHTML = title[18];
  chantitle19.innerHTML = chaneltitle[18];
  frame19.setAttribute(
    "href",
    "https://www.youtube.com/watch?v=" + videoid[18]
  );

  videopre20.setAttribute("src", videothumbnail[19].url);
  videodet20.innerHTML = title[19];
  chantitle20.innerHTML = chaneltitle[19];
  frame20.setAttribute(
    "href",
    "https://www.youtube.com/watch?v=" + videoid[19]
  );

  videopre21.setAttribute("src", videothumbnail[20].url);
  videodet21.innerHTML = title[20];
  chantitle21.innerHTML = chaneltitle[20];
  frame21.setAttribute(
    "href",
    "https://www.youtube.com/watch?v=" + videoid[20]
  );

  videopre22.setAttribute("src", videothumbnail[21].url);
  videodet22.innerHTML = title[21];
  chantitle22.innerHTML = chaneltitle[21];
  frame22.setAttribute(
    "href",
    "https://www.youtube.com/watch?v=" + videoid[21]
  );

  videopre23.setAttribute("src", videothumbnail[22].url);
  videodet23.innerHTML = title[22];
  chantitle23.innerHTML = chaneltitle[22];
  frame23.setAttribute(
    "href",
    "https://www.youtube.com/watch?v=" + videoid[22]
  );

  videopre24.setAttribute("src", videothumbnail[23].url);
  videodet24.innerHTML = title[23];
  chantitle24.innerHTML = chaneltitle[23];
  frame24.setAttribute(
    "href",
    "https://www.youtube.com/watch?v=" + videoid[23]
  );

  console.log(chanelid);
}

youtube();
