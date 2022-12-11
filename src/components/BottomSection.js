import React from "react";

function BottomSection(props) {
  return (
    <div className={props.darkMode ? "bottom-div" : "bottom-div-light"}>
      <h3>About</h3>
      <p>
        Qingfeng Cao is a motivated software engineer specialized in JavaScript,
        ReactJS, TypeScript, HTML5 and CSS3.
      </p>
      <h3>Interest</h3>
      <p>Web development, Web design, App development, UI/UX design</p>
    </div>
  );
}

export default BottomSection;
