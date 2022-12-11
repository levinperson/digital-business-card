import React from "react";
import photo from "../images/photo.jpg";
import email from "../images/email.jpg";
import linkedin from "../images/linkedin.png";

function TopSection(props) {
  return (
    <div className={props.darkMode ? "top-div" : "top-div-light"}>
      <img src={photo} alt="Business shot" className="img-photo" />
      <h1>Qingfeng Cao</h1>
      <h5>Software Engineer</h5>
      <h6>
        <a
          href="https://lambent-cranachan-c6158b.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          qingfengcao.website
        </a>
      </h6>
      <div id="buttons">
        <a href="mailto: caoxx409@umn.edu">
          <button id="email-btn">
            <img src={email} alt="email-icon" />
            <div>Email</div>
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/qingfeng-cao-phd-1248b53b/"
          target="_blank"
          rel="noreferrer"
        >
          <button id="linkedin-btn">
            <img src={linkedin} alt="linkedin-icon" />
            <div>LinkedIn</div>
          </button>
        </a>
      </div>

      <div className={props.darkMode ? "toggler" : "toggler-light"}>
        <p className="toggler-text-light">Light</p>
        <div className="toggler-slider" onClick={props.toggleDarkMode}></div>
        <p className="toggler-text-dark">Dark</p>
      </div>
    </div>
  );
}

export default TopSection;
