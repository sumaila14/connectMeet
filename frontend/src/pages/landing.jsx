import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const createRoom = () => {
    const roomId = Math.random().toString(36).substring(2, 8);
    navigate(`/${roomId}`);
  };

  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>Connect Meet</h2>
        </div>

        <div className="navlist">
          <p onClick={createRoom}>Join as Guest</p>

          <p onClick={() => navigate("/auth")}>Register</p>

          <div
            onClick={() => navigate("/auth")}
            role="button"
            style={{ cursor: "pointer" }}
          >
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved
            Ones
          </h1>

          <p>Cover a distance by Connect Meet</p>

          <div role="button">
            <Link to="/auth">Get Started</Link>
          </div>
        </div>

        <div>
          <img src="/mobile.png" alt="Mobile Illustration" />
        </div>
      </div>
    </div>
  );
}
