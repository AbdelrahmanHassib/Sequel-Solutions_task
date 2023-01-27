import React from "react";
import "./Logo.css";
export default function Logo() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: 0,
          alignItems: "start",
        }}
        className="logo-div"
      >
        <h1>Treatment Plan</h1>
        <div>
          <h1>Writer AI</h1>
          <img src={require("../../icons/therapy.png")} alt="Caring hand" />
        </div>
      </div>
      <p>Your quick way for making a treatment plan for your patients</p>
    </>
  );
}
