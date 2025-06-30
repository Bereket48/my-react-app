import React, { useState, useEffect } from "react";
import "../../commonResource/css/youTubeVideos.css";

function YouTubeVideos() {
  const [youTubeVideos, setYouTubeVideos] = useState([]);
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=${API_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setYouTubeVideos(data.items);
      })

      // .then((data) => {
      //   const filtered = (data.items || []).filter(v => v.id?.videoId);
      //   setYouTubeVideos(filtered);
      // }); // Good practice - Sometimes the YouTube API returns items without a videoId, which would cause an app to crash when forming vidLink.

      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);

  function decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  } //JavaScript doesn't decode HTML entities by default, so we need to do it manually. For example the text that was supposed to say "The Making of 'Doro wet'" would turn out to say "The Making of &#39;Doro wet&#39;" But if we invoke the function decodeHtml as <div className="fw-bold">{decodeHtml(video.snippet?.title)}</div> it will decode HTML entities.

  return (
    <>
      <section className="text-center">
        <div className="title-wraper">YouTube Videos</div>
        <br />
      </section>
      <section className="main-wrapper">
        <div className="container-fluid">
          <div className="row">
            {youTubeVideos.map((video) => {
              let vidId = video.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              return (
                <div
                  key={video.id.videoId}
                  className="side-wrapper col-sm-12 col-md-6"
                >
                  <div className="side-container">
                    <div className="">
                      <a href={vidLink} target="_blank" rel="noreferrer">
                        <img
                          src={video.snippet?.thumbnails?.high?.url} //Optional chaining (?.) is a way to safely access deeply nested properties in an object without causing our app to crash if part of the path is undefined or null. (i.e to access url all prior properties should be available)
                          className="img-fluid rounded-start"
                          alt="thumbnails"
                        />
                      </a>
                    </div>
                    <div>
                      <a href={vidLink}>
                        <div className="fw-bold">
                          {decodeHtml(video.snippet?.title)}
                        </div>
                      </a>

                      <div className="text-muted small">
                        {decodeHtml(video.snippet?.description)}
                      </div>
                      <div className="text-body-secondary small">
                        Published on{" "}
                        {new Date(
                          video.snippet?.publishedAt
                        ).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default YouTubeVideos;

// CHANNEL_ID: "UCE_M8A5yxnLfW0KghEeajjw" or UCE_M8A5yxnLfW0KghEeajjw;

// VIDEO_REQUEST: https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyDapYhE8hxAnGMoHu2bd5ztWaZDecUJUtg

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyA2fL5G0ObRnOTeJk6yLzz2a0oB0rcoQOk
