import React from "react";
import { NavLink } from "react-router-dom";
import CustomButton from "../../components/customButton/CustomButton";
import Logo from "../../components/logo/Logo";
import "./SideNav.scss";
export default function SideNav() {
  const patients = [
    "Giana Press",
    "Jakob Rosser",
    "Charlie Lubin",
    "Allison Saris",
    "Gustavo Philips",
    "Lincoln Siphron",
    "Ruben Westervelt",
    "Kianna Aminoff",
    "Cooper Septimus",
  ];
  let isPlan = true;
  const logOut = () => {
    const confirm = window.confirm("Are you sure you want to log out?");
    if (confirm) {
      window.location.href = "/signin/clinic";
    }
  };

  function clearPlans() {
    isPlan = !isPlan;
  }

  return (
    <div className="first-div">
      <div
        style={{
          backgroundColor: "#00896D",
          borderRadius: "25px",
          width: "6px",
          height: "107px",
          position: "absolute",
          top: "393px",
          right: "11px",
        }}
      ></div>
      <div className="first-div-one">
        <Logo
          displayPara="none"
          style={{
            fontSize: "32px",
          }}
          styleLogo={{ width: "55px" }}
        />
        <CustomButton
          style={{
            color: "#00896D",
            backgroundColor: "#FFFFFF",
            height: "43px",
            border: "1px solid #00896D",
            boxShadow: "0px 3px 9px -2px rgba(0, 0, 0, 0.2)",
            fontFamily: "Inter_Medium",
            fontSize: "16px",
          }}
        >
          + New plan
        </CustomButton>
        <div className="side-nav-para-div">
          <p className="side-nav-para">Kianna Bergson</p>
        </div>
        <ul className="first-div-one-ul">
          {patients.map((el) => (
            <li style={{ color: "#052B33" }}>{el}</li>
          ))}
        </ul>
      </div>
      <div style={{ border: "1px solid #828282" }}></div>
      <div className="first-div-two">
        <div
          className="first-div-two-containers"
          onClick={clearPlans()}
          style={{ cursor: "pointer" }}
        >
          <img src={require("../../icons/trash.png")} alt="recycle bin icon" />
          <p style={{ color: "#052B33" }}>Clear plans</p>
        </div>
        <div className="first-div-two-containers">
          <img src={require("../../icons/alert.png")} alt="alert icon" />
          <p style={{ color: "#052B33" }}>FAQs</p>
        </div>
        <div className="first-div-two-containers">
          <img
            src={require("../../icons/exit-sharp.png")}
            alt="exit door icon"
          />
          <NavLink onClick={logOut} style={{ textDecoration: "none" }}>
            <p style={{ color: "#052B33" }}>Logout</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
