import React, {useState} from "react";
import "./LandingVideo.css";
import BgVideo from "../../Assets/Video/video1.mp4";
import NavBar from "../Nav/NavBar";

function LandingVideo() {

const [opacity, setOpacity] = useState(0.5)

window.addEventListener('scroll', dimBg)

function dimBg () {
  setOpacity(0.5 + (window.scrollY * .00015) )
  console.log(window.scrollY, opacity)
      
}





  return (
    <div className="landingpage">
      <video src={BgVideo} autoPlay muted loop class="video-bg" />
      <div className="bg-overlay" style={{opacity: opacity }}></div>
     <NavBar />
      <div className="home-text">
        <h1>NORTH VERNON</h1>
        <p>COME VISIT OUR BEAUTIFUL BUSINESS DISTRICT</p>
      </div>

      <div className="home-btn">SEE WHATS HAPPENING</div>
    </div>
  );
}

export default LandingVideo;
