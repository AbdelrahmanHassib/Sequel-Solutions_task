import React from "react";
import { useNavigate } from "react-router-dom";
import AlternativeSignUp from "../../components/alternativeSignUp/AlternativeSignUp";
import CustomButton from "../../components/customButton/CustomButton";
import Logo from "../../components/logo/Logo";
import TextInputComponent from "../../components/textInputComponent/TextInputComponent";
import { GetUserToken, SetUserData } from "../../service/localStorageService";
import "./SignInClinic.css";
export default function SignIn() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (GetUserToken("user")) navigate("/home");
  }, [navigate]);
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
      <h3 className="sign-in-clinic-h3">Sign in as a clinic</h3>
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
      <TextInputComponent
        placeholder="****************"
        onChange={HandleChange}
        value={values.password}
        name={"password"}
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
        onclick={() => {
          if (
            values.email === "admin@gmail.com" &&
            values.password === "admin"
          ) {
            SetUserData(values);
            navigate("/home");
          } else {
            alert("username or password incorrect");
          }
        }}
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
