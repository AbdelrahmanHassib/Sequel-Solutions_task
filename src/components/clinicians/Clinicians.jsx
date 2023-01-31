import React from "react";
import TableComponent from "../tableComponent/TableComponent";
import "./Clinicians.scss";
export default function Clinicians() {
  return (
    <div>
      <div
        style={{
          cursor: "pointer",
          margin: "40px 53px 49px auto",
          backgroundColor: "#61B5A4",
          borderRadius: "50%",
          boxShadow: "0px 2px 6px 1px rgba(0, 137, 109, 0.2)",
          fontSize: "20px",
          fontFamily: "Inter_Medium",
          height: "42px",
          width: "42px",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span>M</span>
      </div>
      <TableComponent />
    </div>
  );
}
