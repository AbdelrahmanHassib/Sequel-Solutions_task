import React from "react";
import { Input } from "antd";
import "./TextInputComponent.scss";

export default function TextInputComponent({
  style,
  placeholder,
  type,
  name,
  label,
  numLabel,
  labelIndex,
  small_label_font,
  small_label_index,
  small_label_width,
  inlineSize,
  onChange,
}) {
  return (
    <div className="text-div">
      {label && <label className="textInput-label">{label}</label>}
      {numLabel && (
        <div
          className="textInput-num-label"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              borderRadius: "50%",
              backgroundColor: "#B0DAD1",
              width: small_label_width || "40px",
              height: small_label_width || "40px",
              textAlign: "center",
              marginRight: "10px",
              fontFamily: "Inter_Medium",
              fontSize: small_label_index || "24px",
              color: "#0E4551",
              padding: "4px",
            }}
          >
            {labelIndex}
          </span>
          <p
            style={{
              color: "#0E4551",
              fontFamily: "Inter_Medium",
              fontSize: small_label_font || "24px",
              inlineSize: inlineSize,
            }}
          >
            {numLabel}
          </p>
        </div>
      )}
      {type === "password" ? (
        <Input.Password
          onChange={onChange}
          className="custom_input"
          type={type}
          placeholder={placeholder}
          name={name}
          style={style}
        />
      ) : (
        <Input
          onChange={onChange}
          className="custom_input"
          type={type}
          placeholder={placeholder}
          name={name}
          style={style}
        />
      )}
    </div>
  );
}
