import React from "react";
import Sec1iPadPro from "../Sec1iPadPro/Sec1iPadPro";
import Sec2MacBookAir from "../Sec2MacBookAir/Sec2MacBookAir";
import Sec3iPhone11Pro from "../Sec3iPhone11Pro/Sec3iPhone11Pro";
import Sec4iPhone11CDC from "../Sec4iPhone11CDC/Sec4iPhone11CDC";
import Sec5tvAndWatch from "../Sec5tvAndWatch/Sec5tvAndWatch";
import Sec6ArcadeCard from "../Sec6ArcadeCard/Sec6ArcadeCard";
import YoutubeVideos from "../YoutubeVideos/YoutubeVideos";
import Alert from "../Alert/Alert";
function Home() {
  return (
    <>
        <Alert />
        <Sec1iPadPro />
        <Sec2MacBookAir />
        <Sec3iPhone11Pro />
        <Sec4iPhone11CDC />
        <Sec5tvAndWatch />
        <Sec6ArcadeCard />
        <YoutubeVideos />
    </>
  );
}

export default Home;
