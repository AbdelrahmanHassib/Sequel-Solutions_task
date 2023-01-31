import { Button } from "antd";
import React from "react";
import "./CustomButton.css";
const CustomButton = ({ children, style, onclick }) => (
  <Button
    type="primary"
    block
    className="custom-button"
    style={style}
    onClick={onclick}
  >
    {children}
  </Button>
);
export default CustomButton;
