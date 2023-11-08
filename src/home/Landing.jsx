import React from "react";
import "./Landing.css";
// import "../../public/asset.jpeg"
const Landing = () => {
  return (
    <div className="general">
      <div className="title-container">
        <div className="title-content">
          <div style={{ display: "flex", flexDirection: "column", width: 300 }}>
            <h1>
              <span className="title1">I'M</span>{" "}
              <span className="title2">Victor Choque</span>{" "}
            </h1>
            <span className="position">Flutter Developer & Dart Developer</span>
            <div className="contactme">Contact Me</div>

            {/* <h2 style={{ color: "white" }}>About me</h2> */}
          </div>

          <img src="../../public/asset.jpeg" alt="" />
        </div>
        <h2 style={{ color: "white" }}>About me</h2>
        <p style={{ color: "white", marginRight: "10px" }}>
          Experienced mobile developer proficient in Flutter and Dart.
          Passionate about creating visually appealing and user-friendly mobile
          apps. Collaborative and proactive approach with expertise in SCRUM
          methodology. Looking for new opportunities to deliver high-quality
          projects.
        </p>

        <div className="skills">

          <div className="chip">
            <img style={{"height":"100px"}} src="../../public/asset1.png" alt="" />
            <h3>Flutter</h3>
          </div>
          <div className="chip">
            <img style={{"height":"100px"}} src="../../public/asset2.png" alt="" />
            <h3>Dart</h3>
          </div>
          <div className="chip">
            <img style={{"height":"100px"}} src="../../public/asset3.png" alt="" />
            <h3>Firebase</h3>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Landing;
