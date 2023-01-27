import React from "react";
import CustomButton from "../customButton/CustomButton";
import Logo from "../logo/Logo";
import TextInputComponent from "../textInputComponent/TextInputComponent";
import "./ThreeDivsLayout.css";
export default function ThreeDivsLayout() {
  const QA = [
    { label: "Patient Full Name", placeholder: "Ex: mahmoud barbary" },
    {
      label: "Dentist Email",
      placeholder: "Ex: mahmoudbarbary@example",
    },
    {
      label: "Patient Feedback",
      placeholder: "Ex: the dentist is..",
    },
    {
      label: "Dentist Recommendation",
      placeholder: "Ex: we can...",
    },
    { label: "Dentist Name", placeholder: "Ex: Dr ahmed mahmoud" },
    { label: "Treatment Cost (£)", placeholder: "Ex: 50£" },
    {
      label:
        "Maximum number of months a patient can pay with 0% interest charged",
      placeholder: "Ex: 1 month",
    },
    { label: "% Discount if amount paid in full", placeholder: "Ex: 20%" },
    {
      label: "Any Comments",
      placeholder: "Ex: say whatever you want...",
    },
  ];
  return (
    <div>
      <div className="first-div">
        <Logo />
        <CustomButton
          name="+ New plan"
          color="#00896D"
          backgroundColor="#FFFFFF"
          height="43px"
        />
        <ul></ul>
      </div>
      <div className="second-div">
        <p>Please answer these questions to generate your plan</p>
        <div className="qa-div">
          {QA.map((el) => (
            <TextInputComponent label={el.label} placeholder={el.placeholder} />
          ))}
          <CustomButton name="Generate My Plan" />
        </div>
      </div>
      <div></div>
    </div>
  );
}
