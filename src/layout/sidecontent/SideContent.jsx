import React from "react";
import Clinicians from "../../components/clinicians/Clinicians";
import CustomButton from "../../components/customButton/CustomButton";
import TextEditorComponent from "../../components/textEditor/TextEditorComponent";
import "./SideContent.scss";

function Generated() {
  return (
    <div className="third-div">
      <div
        style={{
          position: "absolute",
          backgroundColor: "#00896D",
          borderRadius: "25px",
          width: "9px",
          height: "308px",
          top: "268px",
          right: "9px",
        }}
      ></div>
      <span
        style={{
          margin: "40px 53px 49px auto",
          backgroundColor: "#61B5A4",
          borderRadius: "50%",
          width: "42px",
          height: "42px",
          color: "#FFFFFF",
          display: "block",
          padding: "9px 11px",
          fontFamily: "Inter_Medium",
          fontSize: "20px",
          boxShadow: "0px 2px 6px 1px rgba(0, 137, 109, 0.2)",
        }}
      >
        M
      </span>
      <TextEditorComponent />
      <CustomButton
        style={{
          display: "block",
          margin: "300px auto 45px",
          backgroundColor: "#FFFFFF",
          color: "#00896D",
          height: "48px",
          border: "2px solid #00896D",
          width: "195px",
          padding: "0 5px 0 0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={require("../../icons/pause.png")} alt="pause icon" />
          <p
            style={{
              margin: "0",
              fontFamily: "Inter_SemiBold",
              fontSize: "16px",
            }}
          >
            Stop Generating
          </p>
        </div>
      </CustomButton>
      <div
        style={{
          borderRadius: "50px",
          width: "70px",
          height: "70px",
          backgroundColor: "#61B5A4",
          padding: "20px",
          position: "relative",
          margin: "45px 13px 0 auto",
        }}
      >
        <div
          style={{
            backgroundColor: "#BD0202",
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            position: "absolute",
            right: "5px",
            top: "0px",
          }}
        ></div>
        <img
          style={{
            width: "29px",
            height: "29px",
          }}
          src={require("../../icons/chat.png")}
          alt="chat icon"
        ></img>
      </div>
    </div>
  );
}

export default function SideContent({ isClinicians }) {
  if (isClinicians) {
    return <Clinicians />;
  } else {
    return <Generated />;
  }
}
