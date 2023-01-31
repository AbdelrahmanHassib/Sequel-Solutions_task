import { React, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AlternativeSignUp from "../../components/alternativeSignUp/AlternativeSignUp";
import CustomButton from "../../components/customButton/CustomButton";
import Logo from "../../components/logo/Logo";
import TextInputComponent from "../../components/textInputComponent/TextInputComponent";
import { GetUserToken, SetUserData } from "../../service/localStorageService";
import "./SignUp.css";
export default function SignUp() {
  const navigate = useNavigate();
  useEffect(() => {
    if (GetUserToken("user")) navigate("/home");
  }, [navigate]);
  const buttons = [
    {
      label: "Clinic's owner name",
      placeholder: "Ex: mahmoud barbary",
      type: "text",
      name: "ownerName",
    },
    {
      label: "Clinic's full name",
      placeholder: "Ex: Twoth london",
      type: "text",
      name: "fullName",
    },
    {
      label: "Clinic's email",
      placeholder: "Ex: twoth@example",
      type: "email",
      name: "email",
    },
    {
      label: "Clinic's mobile number",
      placeholder: "Ex: +201061949054",
      type: "number",
      name: "number",
    },
    {
      label: "Password",
      placeholder: "****************",
      type: "password",
      name: "password",
    },
  ];
  let [values, setvalues] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  let HandleChange = useCallback((e) => {
    setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);
  return (
    <div className="authentication-divs">
      <Logo />
      <h3 className="sign-up-h3">Create a Clinic Account</h3>
      <form>
        {buttons.map((el) => (
          <TextInputComponent
            onChange={HandleChange}
            value={values[el.name]}
            name={el.name}
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
        <CustomButton
          onclick={() => {
            SetUserData(values);
            navigate("/home");
          }}
          className="custom-button"
          style={{
            margin: "11px 0 32px 0",
            fontFamily: "Inter_SemiBold",
            fontSize: "16px",
          }}
        >
          Create account
        </CustomButton>
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
