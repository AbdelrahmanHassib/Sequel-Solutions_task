import React from "react";
import { Input } from "antd";
import "./TextInputComponent.css";

export default function TextInputComponent({ placeholder, type, name, label }) {
  return (
    <div className="text-div">
      <label>{label}</label>
      {type === "password" ? (
        <Input.Password
          className="custom_input"
          type={type}
          placeholder={placeholder}
          name={name}
        />
      ) : (
        <Input
          className="custom_input"
          type={type}
          placeholder={placeholder}
          name={name}
        />
      )}
    </div>
  );
}
