import React from "react";
import MainContent from "../maincontent/MainContent";
import SideContent from "../sidecontent/SideContent";
import SideNav from "../sidenav/SideNav";
import "./ThreeDivsLayout.css";
export default function ThreeDivsLayout() {
  return (
    <div className="three-divs-layout-div">
      <SideNav />
      <MainContent isProfile={true} />
      <SideContent isClinicians={true} />
    </div>
  );
}
