import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>Apna Video Call</h2>
        </div>
        <div className="navlist">
          <button
            type="button"
            className="navLinkBtn"
            onClick={() => navigate("/aljk23")}
          >
            Join as Guest
          </button>

          <button
            type="button"
            className="navLinkBtn"
            onClick={() => navigate("/auth")}
          >
            Register
          </button>

          <button
            type="button"
            className="navLinkBtn primaryBtn"
            onClick={() => navigate("/auth")}
          >
            Login
          </button>
        </div>
      </nav>

      <main className="landingMainContainer">
        <div className="landingHeroText">
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved
            Ones
          </h1>
          <p>Cover a distance by Apna Video Call</p>
          <Link to="/auth" className="getStartedBtn">
            Get Started
          </Link>
        </div>

        <div className="landingHeroImage">
          <img
            src="/mobile.png"
            alt="Apna Video Call interface preview on mobile"
          />
        </div>
      </main>
    </div>
  );
}
