import React from "react";
import { useNavigate } from "react-router-dom";
import { GetUserToken } from "../../service/localStorageService";
import MainContent from "../maincontent/MainContent";
import SideContent from "../sidecontent/SideContent";
import SideNav from "../sidenav/SideNav";
import "./ThreeDivsLayout.css";

export default function ThreeDivsLayout() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!GetUserToken("user")) navigate("/signin/clinic");
    else navigate("/home");
  }, [navigate]);
  return (
    <div className="three-divs-layout-div">
      <SideNav />
      <MainContent isProfile={false} />
      <SideContent isClinicians={false} />
    </div>
  );
}
