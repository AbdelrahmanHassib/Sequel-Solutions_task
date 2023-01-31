import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Clinicians from "./components/clinicians/Clinicians";
import SignInClinic from "./pages/authentication/SignInClinic";
import SignInDentist from "./pages/authentication/SignInDentist";
import SignUp from "./pages/authentication/SignUp";
import Home from "./pages/home/Home";

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
      path: "/clinicians",
      element: <Clinicians />,
    },
  ];

  return (
    <Routes>
      {routes.map((el) => (
        <Route path={el.path} element={el.element} />
      ))}
    </Routes>
  );
}

export default App;
