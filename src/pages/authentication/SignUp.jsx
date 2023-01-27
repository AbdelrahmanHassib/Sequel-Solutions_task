import React from "react";
import AlternativeSignUp from "../../components/alternativeSignUp/AlternativeSignUp";
import CustomButton from "../../components/customButton/CustomButton";
import Logo from "../../components/logo/Logo";
import TextInputComponent from "../../components/textInputComponent/TextInputComponent";
import "./SignUp.css";
// import { primaryColor } from "../../styles/primaryColor";
export default function SignUp() {
  const buttons = [
    {
      label: "Clinic's owner name",
      placeholder: "Ex: mahmoud barbary",
      type: "text",
    },
    {
      label: "Clinic's full name",
      placeholder: "Ex: Twoth london",
      type: "text",
    },
    {
      label: "Clinic's email",
      placeholder: "Ex: twoth@example",
      type: "email",
    },
    {
      label: "Clinic's mobile number",
      placeholder: "Ex: +201061949054",
      type: "number",
    },
    {
      label: "Password",
      placeholder: "****************",
      type: "password",
    },
  ];
  return (
    <div className="flex">
      <Logo />
      <h3 className="sign-up-h3">Create a Clinic Account</h3>
      <form>
        {buttons.map((el) => (
          <TextInputComponent
            label={el.label}
            placeholder={el.placeholder}
            type={el.type}
          />
        ))}
        <CustomButton className="custom-button" name="Create account" />
      </form>
      <AlternativeSignUp />
      <p className="bottom-paragraph">
        Already have an account? <a href="/signin/clinic">Sign in</a>
      </p>
    </div>
  );
}
