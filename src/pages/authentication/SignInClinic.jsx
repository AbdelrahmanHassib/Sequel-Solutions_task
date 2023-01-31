import React from "react";
import AlternativeSignUp from "../../components/alternativeSignUp/AlternativeSignUp";
import CustomButton from "../../components/customButton/CustomButton";
import Logo from "../../components/logo/Logo";
import TextInputComponent from "../../components/textInputComponent/TextInputComponent";
import "./SignInClinic.css";
export default function SignIn() {
  return (
    <div className="authentication-divs">
      <Logo />
      <h3 className="sign-in-clinic-h3">Sign in as a clinic</h3>
      <TextInputComponent
        placeholder="Ex: twoth@example"
        label="Email"
        type="email"
        style={{
          border: "1px solid rgba(0, 137, 109, 0.41)",
          boxShadow: "0px 3px 9px -2px rgba(0, 0, 0, 0.2)",
          borderRadius: "6px",
          height: "43px",
        }}
      />
      <TextInputComponent
        placeholder="****************"
        label="Password"
        type="password"
        style={{
          border: "1px solid rgba(0, 137, 109, 0.41)",
          boxShadow: "0px 3px 9px -2px rgba(0, 0, 0, 0.2)",
          borderRadius: "6px",
          height: "43px",
        }}
      />
      <CustomButton
        style={{
          margin: "32px 0",
          fontFamily: "Inter_SemiBold",
          fontSize: "16px",
        }}
      >
        Sign in
      </CustomButton>
      <AlternativeSignUp />
      <p className="bottom-paragraph-sign-in-clinic">
        You don't have an account?{" "}
        <a href="/signup" className="sign-in-a">
          Sign up
        </a>
      </p>
      <p className="bottom-paragraph-sign-in-clinic">
        You are a dentist?{" "}
        <a href="/signin/dentist" className="sign-in-a">
          Sign in
        </a>
      </p>
    </div>
  );
}
