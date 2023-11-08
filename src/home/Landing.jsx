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

          <img
            // src="/static/images/asset.jpeg"
            src="https://res.cloudinary.com/dex17d0p4/image/upload/v1699449728/asset_dqfq3b.jpg"
            alt="ania"
          />
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
            <img
              style={{ height: "100px" }}
              // src="/static/images/asset1.png"
              src="https://res.cloudinary.com/dex17d0p4/image/upload/v1699449759/asset1-removebg-preview_gdpjvc.png"
              alt="mio"
            />
            <h3>Flutter</h3>
          </div>
          <div className="chip">
            <img
              style={{ height: "100px" }}
              // src="/static/images/asset2.png"
              src="https://res.cloudinary.com/dex17d0p4/image/upload/v1699449759/asset2-removebg-preview_bouuol.png"
              alt="mio1"
            />
            <h3>Dart</h3>
          </div>
          <div className="chip">
            <img
              style={{ height: "100px" }}
              // src="/static/images/asset3.png"
              src="https://res.cloudinary.com/dex17d0p4/image/upload/v1699449758/asset3-removebg-preview_lrdjdb.png"
              alt="mio2"
            />
            <h3>Firebase</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
