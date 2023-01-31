import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import "./DropdownComponent.css";
function DropdownComponent({ style, numLabel, labelIndex }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            borderRadius: "50%",
            backgroundColor: "#B0DAD1",
            width: "27px",
            height: "27px",
            textAlign: "center",
            marginRight: "10px",
            fontFamily: "Inter_Medium",
            fontSize: "16.24px",
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
            fontSize: "16px",
          }}
        >
          {numLabel}
        </p>
      </div>
      <Dropdown style={style} as={ButtonGroup} className="dropdown-div">
        <Button
          variant="success"
          style={{
            color: "rgba(0, 0, 0, 0.5)",
            backgroundColor: "white",
            border: "none",
            width: "50px",
            height: "36px",
          }}
        >
          Ex: 1
        </Button>

        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

        <Dropdown.Menu
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            width: "223px",
            height: "147px",
            boxShadow: "0px 3px 9px -2px rgba(0, 0, 0, 0.2)",
            zIndex: "9",
          }}
        >
          <Dropdown.Item
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "14px",
              fontFamily: "Inter_Medium",
              margin: "15px 0 16px 40px",
            }}
          >
            1 hour
          </Dropdown.Item>
          <Dropdown.Item
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "14px",
              fontFamily: "Inter_Medium",
              margin: "0 0 16px 40px",
            }}
          >
            2 hours
          </Dropdown.Item>
          <Dropdown.Item
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "14px",
              fontFamily: "Inter_Medium",
              margin: "0 0 16px 40px",
            }}
          >
            3 hours
          </Dropdown.Item>
          <Dropdown.Item
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "14px",
              fontFamily: "Inter_Medium",
              margin: "0 0 16px 40px",
            }}
          >
            4 hours
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DropdownComponent;
