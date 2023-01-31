import React from "react";
import "./ClinicProfile.scss";

export default function ClinicProfile() {
  const details = [
    {
      label: "Clinic's owner name:",
      value: "Mahmoud barbary",
    },
    {
      label: "Clinic name:",
      value: "Twoth london",
    },
    {
      label: "Clinic email:",
      value: "twoth@example",
    },
    {
      label: "Address:",
    },
    {
      label: "Website url:",
    },
    {
      label: "Business phone number:",
    },
    {
      label: "Business email address:",
    },
    {
      label: "Password:",
      value: "**********",
    },
  ];
  const [isUploaded, setIsUploaded] = React.useState(false);
  function handleClick() {
    setIsUploaded((prev) => !prev);
  }
  return (
    <div
      style={{
        padding: "121px 32px 0 32px",
        width: "31%",
        borderRight: "2px solid rgba(201, 227, 221, 0.85)",
      }}
    >
      <div className="profile-pic">
        <img
          src={
            isUploaded
              ? require("../../icons/uploaded-profile.png")
              : require("../../icons/download.png")
          }
          alt="empty profile"
        />
        {isUploaded ? (
          <img
            src={require("../../icons/twoth.png")}
            style={{ position: "absolute", top: "39%", right: "17%" }}
            alt="profile"
          />
        ) : (
          <></>
        )}
        <img
          onClick={handleClick}
          src={require("../../icons/camera.png")}
          alt="camera logo"
          className="camera-logo"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div>
        {details.map((el) => {
          return (
            <div
              style={{
                display: "flex",
                marginTop: "26px",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "Inter_SemiBold",
                    color: "#828282",
                    margin: "2px 0 2px 0",
                  }}
                >
                  {el.label}
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    fontFamily: "Inter_SemiBold",
                    color: "#4F4F4F",
                    margin: "0",
                  }}
                >
                  {el.value}
                </p>
              </div>
              <button
                style={{
                  border: "none",
                  fontFamily: "Inter_SemiBold",
                  fontSize: "16px",
                  textDecoration: "underline",
                  color: "#00896D",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
