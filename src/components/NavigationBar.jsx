import { useState } from "react";
import CardWrapper from "./CardWrapper/CardWrapper";
import Home from "./Home/Home";
import Logo from "C:/Users/akhil.r/Desktop/Assignments/ReactJS/Assignment4/assignment4/src/assets/logo-tagline-white.svg";
import { authenticate } from "./service";

export default function NavigationBar() {
  const token = sessionStorage.getItem("authToken");
  const [homeView, setHomeView] = useState(true);

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        <ul className="navbar-nav ml-sm-5">
          <li className="nav-item active">
            <a onClick={() => setHomeView(true)} value="home">
              <img src={Logo} alt="logo" />
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button
              className="btn btn-outline-success mr-sm-2"
              onClick={() => setHomeView(false)}
            >
              List All
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-outline-warning mr-sm-5"
              onClick={() => authenticate()}
            >
              Authenticate
            </button>
          </li>
        </ul>
      </nav>
      {homeView ? (
        <Home />
      ) : token ? (
        <CardWrapper />
      ) : (
        <>
          <h1>Authentication Failed</h1>
          <h3>Goto Home</h3>
        </>
      )}
    </>
  );
}
