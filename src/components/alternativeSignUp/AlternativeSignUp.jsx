import React from "react";
import CustomButton from "../customButton/CustomButton";
import "./AlternativeSignUp.scss";
export default function AlternativeSignUp() {
  return (
    <div id="alternative-signup-container">
      <h3 id="alternative-signup-h3">-OR-</h3>
      <div className="alt-sign-up-main-div">
        <CustomButton
          style={{
            backgroundColor: "#FFFFFF",
            color: "black",
            height: "45px",
            width: "46%",
            margin: "16px 0 25px 0",
            padding: "0 20px 0 10px",
          }}
        >
          <div className="alt-sign-up-secondary-div">
            <img
              src={require("../../icons/google-icon.png")}
              alt="google logo icon"
            />
            <p>Sign up with Google</p>
          </div>
        </CustomButton>
        <CustomButton
          style={{
            backgroundColor: "#FFFFFF",
            color: "black",
            height: "45px",
            width: "46%",
            margin: "16px 0 25px 0",
            padding: "0 10px",
          }}
        >
          <div className="alt-sign-up-secondary-div">
            <img
              src={require("../../icons/facebook-icon.png")}
              alt="facebook logo icon"
            />
            <p>Sign up with Facebook</p>
          </div>
        </CustomButton>
      </div>
    </div>
  );
}
