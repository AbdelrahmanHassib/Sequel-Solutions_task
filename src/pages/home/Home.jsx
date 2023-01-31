import React from "react";
import MainContent from "../../layout/maincontent/MainContent";
import SideContent from "../../layout/sidecontent/SideContent";
import SideNav from "../../layout/sidenav/SideNav";
import "./Home.css";
export default function Home() {
  return (
    <div>
      <SideNav />
      <SideContent />
      <MainContent />
    </div>
  );
}
