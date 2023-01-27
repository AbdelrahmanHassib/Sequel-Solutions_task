import { Button, Space } from "antd";
import "./CustomButton.css";
const CustomButton = ({ name, backgroundColor, color, height }) => (
  <Button
    type="primary"
    block
    className="custom-button"
    style={{ backgroundColor: backgroundColor, color: color, height: height }}
  >
    {name}
  </Button>
);
export default CustomButton;
