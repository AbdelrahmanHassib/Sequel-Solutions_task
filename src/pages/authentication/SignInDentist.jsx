import React from "react";
import AlternativeSignUp from "../../components/alternativeSignUp/AlternativeSignUp";
import CustomButton from "../../components/customButton/CustomButton";
import Logo from "../../components/logo/Logo";
import TextInputComponent from "../../components/textInputComponent/TextInputComponent";
import "./SignInDentist.css";
export default function SignIn_Dentist() {
  return (
    <div className="flex">
      <Logo />
      <h3 className="sign-in-h3">Sign in as a dentist</h3>
      <TextInputComponent placeholder="Ex: twoth@example" />
      <CustomButton name="Sign In" />
      <AlternativeSignUp />
    </div>
  );
}
