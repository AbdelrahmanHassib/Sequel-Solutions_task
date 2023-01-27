import React from "react";
import CustomButton from "../customButton/CustomButton";
import "./AlternativeSignUp.css";
export default function AlternativeSignUp() {
  return (
    <div id="alternative-signup-container">
      <h3 id="alternative-signup-h3">-OR-</h3>
      <div>
        <CustomButton
          name="Sign up with Google"
          backgroundColor="#FFFFFF"
          color="black"
        />
        <CustomButton
          name="Sign up with Facebook"
          backgroundColor="#FFFFFF"
          color="black"
        />
      </div>
    </div>
  );
}
