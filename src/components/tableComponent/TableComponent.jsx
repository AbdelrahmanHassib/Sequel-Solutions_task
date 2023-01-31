import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CustomButton from "../customButton/CustomButton";
import TextInputComponent from "../textInputComponent/TextInputComponent";

function createData(name, email, role, remove) {
  return { name, email, role, remove };
}

const rows = [
  createData(
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={require("../../icons/table-img-1.png")}
        style={{ marginRight: "8px" }}
        alt="profile"
      />
      <p
        style={{
          fontFamily: "Inter_Regular",
          fontSize: "16px",
          color: "#4F4F4F",
          margin: "0",
        }}
      >
        Dr Jackson Siphron
      </p>
    </div>,
    "jaxson@twoth",
    "Admin",
    "Remove"
  ),
  createData(
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={require("../../icons/table-img-2.png")}
        style={{ marginRight: "8px" }}
        alt="profile"
      />
      <p
        style={{
          fontFamily: "Inter_Regular",
          fontSize: "16px",
          color: "#4F4F4F",
          margin: "0",
        }}
      >
        Dr Anika Schleifer
      </p>
    </div>,
    "anika@twoth",
    "Clinician",
    "Remove"
  ),
  createData(
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={require("../../icons/table-img-3.png")}
        style={{ marginRight: "8px" }}
        alt="profile"
      />
      <p
        style={{
          fontFamily: "Inter_Regular",
          fontSize: "16px",
          color: "#4F4F4F",
          margin: "0",
        }}
      >
        Dr Emerson Calzoni
      </p>
    </div>,
    "emerson@twoth",
    "TCO",
    "Remove"
  ),
  createData(
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={require("../../icons/table-img-4.png")}
        style={{ marginRight: "8px" }}
        alt="profile"
      />
      <p
        style={{
          fontFamily: "Inter_Regular",
          fontSize: "16px",
          color: "#4F4F4F",
          margin: "0",
        }}
      >
        Dr Lincoln Vetrovs
      </p>
    </div>,
    "lincoln@twoth",
    "TCO",
    "Remove"
  ),
  createData(
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={require("../../icons/table-img-5.png")}
        style={{ marginRight: "8px" }}
        alt="profile"
      />
      <p
        style={{
          fontFamily: "Inter_Regular",
          fontSize: "16px",
          color: "#4F4F4F",
          margin: "0",
        }}
      >
        *****************
      </p>
    </div>,
    "carter@twoth",
    "Clinician",
    "Remove"
  ),
];

export default function TableComponent() {
  return (
    <div style={{ width: "940px" }}>
      <p
        style={{
          margin: "83px 0 0 0",
          borderBottom: "3px solid #61B5A4",
          width: "fit-content",
          padding: "0 32px 8px 14px",
          color: "#61B5A4",
          fontFamily: "Inter_SemiBold",
          fontSize: "24px",
        }}
      >
        Clinicians
      </p>
      <div style={{ border: "1px solid rgba(201, 227, 221, 0.85)" }}></div>
      <TableContainer
        component={Paper}
        style={{
          boxShadow: "-2px 4px 14px -2px rgba(0, 0, 0, 0.25)",
          borderRadius: "8px",
          background: "#FFFFFF",
          width: "874px",
          margin: "25px auto 0 auto",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#F9F8F8" }}>
              <TableCell
                style={{
                  color: "#828282",
                  fontSize: "16px",
                  fontFamily: "Inter_Regular",
                }}
              >
                Name
              </TableCell>
              <TableCell
                style={{
                  color: "#828282",
                  fontSize: "16px",
                  fontFamily: "Inter_Regular",
                }}
              >
                Email
              </TableCell>
              <TableCell
                style={{
                  color: "#828282",
                  fontSize: "16px",
                  fontFamily: "Inter_Regular",
                }}
              >
                Role
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell
                  style={{
                    color: "#4F4F4F",
                    fontSize: "16px",
                    fontFamily: "Inter_Regular",
                  }}
                >
                  {row.email}
                </TableCell>
                <TableCell
                  style={{
                    color: "#4F4F4F",
                    fontSize: "16px",
                    fontFamily: "Inter_Regular",
                  }}
                >
                  {row.role}
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    color: "#9C1B1B",
                    fontFamily: "Inter_Medium",
                    fontSize: "16px",
                    paddingRight: "20px",
                    cursor: "pointer",
                  }}
                >
                  {row.remove}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "71px" }}
        >
          <CustomButton
            style={{
              fontSize: "16px",
              color: "#FFFFFF",
              fontFamily: "Inter_SemiBold",
              borderRadius: "4px",
              margin: "0 16px 16px 26px",
              width: "167px",
              height: "48px",
            }}
          >
            +Add a clinician
          </CustomButton>
          <div style={{ width: "55%", position: "relative" }}>
            <TextInputComponent
              placeholder="Clinician email"
              style={{
                color: "rgba(0, 0, 0, 0.5)",
                fontSize: "14px",
                fontFamily: "Inter_Regular",
                borderRadius: "6px",
                boxShadow: "0px 3px 9px -2px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(0, 137, 109, 0.41)",
                height: "43px",
              }}
            />
            <button
              style={{
                position: "absolute",
                right: "12px",
                top: "10px",
                border: "none",
                color: "#00896D",
                fontSize: "16px",
                fontFamily: "Inter_SemiBold",
                backgroundColor: "inherit",
                cursor: "pointer",
              }}
            >
              Send invitation
            </button>
          </div>
        </div>
      </TableContainer>
    </div>
  );
}
