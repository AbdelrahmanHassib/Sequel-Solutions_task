import React from "react";
import { NavLink } from "react-router-dom";
import AlternativeSignUp from "../../components/alternativeSignUp/AlternativeSignUp";
import CustomButton from "../../components/customButton/CustomButton";
import Logo from "../../components/logo/Logo";
import TextInputComponent from "../../components/textInputComponent/TextInputComponent";
import "./SignInDentist.css";
export default function SignIn_Dentist() {
  let [values, setvalues] = React.useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  let HandleChange = React.useCallback((e) => {
    setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);
  return (
    <div className="authentication-divs">
      <Logo />
      <h3 className="sign-in-dentist-h3">Sign in as a dentist</h3>
      <TextInputComponent
        onChange={HandleChange}
        value={values.email}
        name={"email"}
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
      <NavLink to="/home">
        <CustomButton
          style={{
            fontFamily: "Inter_SemiBold",
            fontSize: "16px",
            margin: "32px 0",
          }}
        >
          Sign in
        </CustomButton>
      </NavLink>
      <AlternativeSignUp />
    </div>
  );
}
