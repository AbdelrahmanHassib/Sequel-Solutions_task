import React from "react";
import CustomButton from "../../components/customButton/CustomButton";
import TextInputComponent from "../../components/textInputComponent/TextInputComponent";
import ClinicProfile from "../../pages/clinicProfile/ClinicProfile";
import TextDropdownComponent from "./components/TextDropdownComponent";
import "./MainContent.scss";

function PatientDetails() {
  const QA = [
    {
      numLabel: "Patient Full Name",
      placeholder: "Ex: mahmoud barbary",
      height: "43px",
    },
    {
      numLabel: "Dentist Email",
      placeholder: "Ex: mahmoudbarbary@example",
      height: "43px",
    },
    {
      numLabel: "Patient Feedback",
      placeholder: "Ex: the dentist is..",
      height: "43px",
    },
    {
      numLabel: "Dentist Recommendation",
      placeholder: "Ex: we can...",
      height: "43px",
    },
    {
      numLabel: "Dentist Name",
      placeholder: "Ex: Dr ahmed mahmoud",
      height: "43px",
    },
    {
      component: <TextDropdownComponent />,
    },
    {
      numLabel:
        "Maximum number of months a patient can pay with 0% interest charged",
      placeholder: "Ex: 1 month",
      height: "43px",
    },
    {
      numLabel: "% Discount if amount paid in full",
      placeholder: "Ex: 20%",
      height: "43px",
    },
  ];
  return (
    <div className="second-div">
      <div
        style={{
          backgroundColor: "#00896D",
          borderRadius: "25px",
          width: "6px",
          height: "107px",
          position: "absolute",
          top: "242px",
          right: "10px",
        }}
      ></div>
      <p className="second-div-top-para">
        Please answer these questions to generate your plan
      </p>
      <div
        style={{ border: "1px solid rgba(201, 227, 221, 0.85)", width: "100%" }}
      ></div>
      <div className="qa-div">
        {QA.map((el, index) =>
          index < 6 ? (
            !el.component ? (
              <TextInputComponent
                numLabel={el.numLabel}
                labelIndex={index + 1}
                placeholder={el.placeholder}
                style={{
                  height: el.height,
                  border: "1px solid rgba(0, 137, 109, 0.41)",
                  boxShadow: "0px 3px 9px -2px rgba(0, 0, 0, 0.2)",
                  borderRadius: "6px",
                  padding: "11px 40px",
                }}
              />
            ) : (
              el.component
            )
          ) : !el.component ? (
            index === 6 ? (
              <TextInputComponent
                numLabel={el.numLabel}
                labelIndex={index + 2}
                placeholder={el.placeholder}
                style={{
                  height: el.height,
                  border: "1px solid rgba(0, 137, 109, 0.41)",
                  boxShadow: "0px 3px 9px -2px rgba(0, 0, 0, 0.2)",
                  borderRadius: "6px",
                  padding: "11px 40px",
                }}
                small_label_font="16px"
                inlineSize="80%"
              />
            ) : (
              <TextInputComponent
                numLabel={el.numLabel}
                labelIndex={index + 2}
                placeholder={el.placeholder}
                style={{
                  height: el.height,
                  border: "1px solid rgba(0, 137, 109, 0.41)",
                  boxShadow: "0px 3px 9px -2px rgba(0, 0, 0, 0.2)",
                  borderRadius: "6px",
                  padding: "11px 40px",
                }}
              />
            )
          ) : (
            el.component
          )
        )}
        <label>
          <div style={{ diplay: "flex", flexDirection: "column" }}>
            <span
              style={{
                display: "inline-block",
                borderRadius: "50%",
                backgroundColor: "#B0DAD1",
                width: "40px",
                height: "40px",
                textAlign: "center",
                marginRight: "10px",
                fontFamily: "Inter_Medium",
                fontSize: "20px",
                color: "#0E4551",
                padding: "8px",
              }}
            >
              10
            </span>
            <p
              style={{
                display: "inline-block",
                color: "#0E4551",
                fontFamily: "Inter_Medium",
                fontSize: "24px",
                margin: "24px 0 0 0",
              }}
            >
              Any Comments
            </p>
          </div>
        </label>
        <p
          style={{
            textAlign: "end",
            color: "#BDBDBD",
            fontFamily: "Inter_SemiBold",
            fontSize: "15px",
            margin: "7px 0 4px 0",
          }}
        >
          optional
        </p>
        <textarea
          className="main-content-textarea"
          placeholder="Ex: say whatever you want..."
        ></textarea>
        <CustomButton
          style={{
            width: "100%",
            fontFamily: "Inter_SemiBold",
            fontSize: "16px",
            color: "white",
          }}
        >
          Generate My Plan
        </CustomButton>
      </div>
    </div>
  );
}
export default function MainContent({ isProfile }) {
  if (isProfile) {
    return <ClinicProfile />;
  } else {
    return <PatientDetails />;
  }
}
