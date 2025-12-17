import { useState } from "react";
import CardWrapper from "./CardWrapper";
import Home from "./Home";
import Portal from "./Portal";
import Form from "./Form";
import Logo from "../assets/logo-tagline-white.svg";
import { authenticate } from "./service";

export default function NavigationBar() {
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
      {homeView ? <Home /> : <CardWrapper />}
    </>
  );
}
