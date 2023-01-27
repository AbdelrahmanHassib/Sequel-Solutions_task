import React from "react";
import AlternativeSignUp from "../../components/alternativeSignUp/AlternativeSignUp";
import CustomButton from "../../components/customButton/CustomButton";
import Logo from "../../components/logo/Logo";
import TextInputComponent from "../../components/textInputComponent/TextInputComponent";
import "./SignInClinic.css";
export default function SignIn() {
  return (
    <div className="flex">
      <Logo />
      <h3 className="sign-in-h3">Sign in as a clinic</h3>
      <TextInputComponent
        placeholder="Ex: twoth@example"
        label="Email"
        type="email"
      />
      <TextInputComponent
        placeholder="****************"
        label="Password"
        type="password"
      />
      <CustomButton name="Sign In" />
      <AlternativeSignUp />
      <p className="bottom-paragraph">
        You don't have an account? <a href="/signup">Sign up</a>
      </p>
      <p className="bottom-paragraph">
        You are a dentist? Sign in <a href="/signin/dentist">Sign in</a>
      </p>
    </div>
  );
}
