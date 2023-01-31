import React from "react";
import { NavLink } from "react-router-dom";
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
    <div className="authentication-divs">
      <Logo />
      <h3 className="sign-up-h3">Create a Clinic Account</h3>
      <form>
        {buttons.map((el) => (
          <TextInputComponent
            label={el.label}
            placeholder={el.placeholder}
            type={el.type}
            style={{
              border: "1px solid rgba(0, 137, 109, 0.41)",
              boxShadow: "0px 3px 9px -2px rgba(0, 0, 0, 0.2)",
              borderRadius: "6px",
              height: "43px",
            }}
          />
        ))}
        <NavLink to="/threedivslayout">
          <CustomButton
            className="custom-button"
            style={{
              margin: "11px 0 32px 0",
              fontFamily: "Inter_SemiBold",
              fontSize: "16px",
            }}
          >
            Create account
          </CustomButton>
        </NavLink>
      </form>
      <AlternativeSignUp />
      <p className="bottom-paragraph-sign-up">
        Already have an account?{" "}
        <a href="/signin/clinic" className="sign-up-a">
          Sign in
        </a>
      </p>
    </div>
  );
}
