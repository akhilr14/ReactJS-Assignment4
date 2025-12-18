import { useState } from "react";
import CardWrapper from "./CardWrapper/CardWrapper";
import AuthForm from "./AuthForm/AuthForm";
import Portal from "./Portal/Portal";
import Logo from "../assets/logo-tagline-white.svg";
import "./MainLayout.css";

export default function MainLayout() {
  const [homeView, setHomeView] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [token, setToken] = useState(() => sessionStorage.getItem("authToken"));

  function openAuth() {
    setShowAuth(true);
  }

  function closeAuth() {
    setShowAuth(false);
  }

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        <ul className="navbar-nav ml-sm-5">
          <li className="nav-item">
            <button
              className="btn btn-link p-0"
              onClick={() => {
                setHomeView(true);
                setShowAuth(false);
              }}
            >
              <img src={Logo} alt="logo" />
            </button>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          {token && (
            <li className="nav-item">
              <button
                className="btn btn-outline-success mr-sm-5"
                onClick={() => setHomeView(false)}
              >
                List All
              </button>
            </li>
          )}

          {!token && (
            <li className="nav-item">
              <button
                className="btn btn-outline-warning mr-sm-5"
                onClick={openAuth}
              >
                Authenticate
              </button>
            </li>
          )}
        </ul>
      </nav>

      {homeView && (
        <div className="welcome-container">
          <h1>Welcome to Zerone Consulting</h1>
        </div>
      )}

      {!homeView && token && <CardWrapper />}
      {showAuth && (
        <Portal open={showAuth} onClose={closeAuth}>
          <AuthForm
            onSuccess={(token) => {
              setToken(token);
              setShowAuth(false);
            }}
            onClose={() => setShowAuth(false)}
          />
        </Portal>
      )}
      {!homeView && !token && (
        <>
          <h1>Authentication Failed</h1>
          <h3>Goto Home</h3>
        </>
      )}
    </>
  );
}
