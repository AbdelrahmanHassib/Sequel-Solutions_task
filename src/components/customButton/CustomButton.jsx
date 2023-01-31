import { Button } from "antd";
import React from "react";
import "./CustomButton.css";
const CustomButton = ({ children, style }) => (
  <Button type="primary" block className="custom-button" style={style}>
    {children}
  </Button>
);
export default CustomButton;
