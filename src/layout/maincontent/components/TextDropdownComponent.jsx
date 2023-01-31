import React from "react";
import DropdownComponent from "../../../components/dropdown/DropdownComponent";
import TextInputComponent from "../../../components/textInputComponent/TextInputComponent";

export default function TextDropdownComponent(label) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <TextInputComponent
        numLabel="Treatment Cost (£)"
        labelIndex="6"
        placeholder="Ex: 50£"
        style={{
          width: "93%",
          height: "38px",
          boxShadow: "0px 3px 9px -2px rgba(0, 0, 0, 0.2)",
          border: "1px solid rgba(0, 137, 109, 0.41)",
          padding: "11px 40px",
        }}
        small_label_font="16px"
        small_label_index="16px"
        small_label_width="27px"
      />
      <div style={{ width: "100%", alignItems: "center" }}>
        <DropdownComponent
          numLabel="Treatment Time (hours)"
          labelIndex="7"
          style={{
            width: "93%",
            boxShadow: "0px 3px 9px -2px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(0, 137, 109, 0.41)",
            borderRadius: "6px",
            padding: "0 13px 0 40px",
            marginBottom: "13px",
          }}
        />
      </div>
    </div>
  );
}
