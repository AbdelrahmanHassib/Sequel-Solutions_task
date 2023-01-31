import React from "react";
import TableComponent from "../tableComponent/TableComponent";
import "./Clinicians.scss";
export default function Clinicians() {
  return (
    <div>
      <span
        style={{
          margin: "40px 53px 49px auto",
          backgroundColor: "#61B5A4",
          borderRadius: "50%",
          width: "42px",
          height: "42px",
          color: "#FFFFFF",
          display: "block",
          padding: "9px 11px",
          fontFamily: "Inter_Medium",
          fontSize: "20px",
          boxShadow: "0px 2px 6px 1px rgba(0, 137, 109, 0.2)",
        }}
      >
        M
      </span>
      <TableComponent />
    </div>
  );
}
