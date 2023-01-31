import React from "react";
import TextInputComponent from "../textInputComponent/TextInputComponent";
import "./Chat.scss";

export default function Chat({ right }) {
  return (
    <div id="chat-div" className="chat-div hide">
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <img
            src={require("../../icons/therapy.png")}
            alt="caring hand"
            style={{ marginLeft: "20px", marginRight: "10px" }}
          />
          <div
            style={{
              backgroundColor: "#D1E7E2",
              borderRadius: "30px",
              boxShadow: "-2px 3px 7px -2px rgba(0, 0, 0, 0.25)",
            }}
          >
            <p
              style={{
                fontFamily: "Inter_Medium",
                fontSize: "16px",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              Hello ahmed!
            </p>
            <p
              style={{
                fontFamily: "Inter_Medium",
                fontSize: "16px",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              What do you want to ask about?
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#00896D",
            marginLeft: "auto",
            borderRadius: "20px",
            color: "white",
            width: "285px",
            marginRight: "10px",
          }}
        >
          <p
            style={{
              fontFamily: "Inter_Medium",
              fontSize: "16px",
              inlineSize: "90%",
              lineHeight: "1.5",
              padding: "10px 20px",
            }}
          >
            How to add a logo to my generated pdf?
          </p>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <TextInputComponent
          placeholder="Chat with us!"
          style={{
            boxShadow: "-2px 3px 7px -2px rgba(0, 0, 0, 0.25)",
            width: "90%",
            alignSelf: "center",
            borderRadius: "15px",
            height: "50px",
          }}
        />
        <button
          style={{
            position: "absolute",
            top: "13px",
            right: "50px",
            width: "20px",
            backgroundColor: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img
            src={require("../../icons/send.png")}
            alt="send button"
            style={{ width: "25px" }}
          />
        </button>
      </div>
    </div>
  );
}
