import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInClinic from "./pages/authentication/SignInClinic";
import SignInDentist from "./pages/authentication/SignInDentist";
import SignUp from "./pages/authentication/SignUp";
import Home from "./pages/home/Home";
import ThreeDivsLayout from "./components/threeDivsLayout/ThreeDivsLayout";
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
