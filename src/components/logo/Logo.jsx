import React from "react";
import "./Logo.css";
export default function Logo({ displayPara, style, styleLogo }) {
  return (
    <>
      <div className="logo-div">
        <h1 className="h1-logo" style={style}>
          Treatment Plan
        </h1>
        <div className="logo-div-second">
          <h1 className="h1-logo" style={style}>
            Writer AI
          </h1>
          <img
            src={require("../../icons/therapy.png")}
            alt="Caring hand"
            className="caring-hand-icon"
            style={styleLogo}
          />
        </div>
      </div>
      <p className="logo-paragraph" style={{ display: displayPara }}>
        Your quick way for making a treatment plan for your patients
      </p>
    </>
  );
}
