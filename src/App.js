import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInClinic from "./pages/authentication/SignInClinic";
import SignInDentist from "./pages/authentication/SignInDentist";
import SignUp from "./pages/authentication/SignUp";
import Home from "./pages/home/Home";
import ThreeDivsLayout from "./layout/threeDivsLayout/ThreeDivsLayout";
import Chat from "./components/chat/Chat";
import Clinicians from "./components/clinicians/Clinicians";
import ClinicProfile from "./pages/clinicProfile/ClinicProfile";
import TextEditorComponent from "./components/textEditor/TextEditorComponent";
function App() {
  const routes = [
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/signin/clinic",
      element: <SignInClinic />,
    },
    {
      path: "/signin/dentist",
      element: <SignInDentist />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/threedivslayout",
      element: <ThreeDivsLayout />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },
    {
      path: "/clinicians",
      element: <Clinicians />,
    },
    {
      path: "/profile",
      element: <ClinicProfile />,
    },
    {
      path: "/texteditor",
      element: <TextEditorComponent />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((el) => (
          <Route path={el.path} element={el.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
