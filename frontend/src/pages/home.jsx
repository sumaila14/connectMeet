import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, IconButton, TextField } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import withAuth from "../utils/withAuth";
import { AuthContext } from "../contexts/AuthContext";
import "../App.css";

function HomeComponent() {
  const navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");
  const { addToUserHistory } = useContext(AuthContext);

  const handleJoinVideoCall = async () => {
    if (!meetingCode.trim()) return;
    try {
      await addToUserHistory(meetingCode);
      navigate(`/${meetingCode}`);
    } catch (error) {
      console.error("Failed to add to history:", error);
      // Navigate anyway if history update is non-critical
      navigate(`/${meetingCode}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <>
      <header className="navBar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>Apna Video Call</h2>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            onClick={() => navigate("/history")}
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && navigate("/history")}
          >
            <IconButton aria-label="history">
              <RestoreIcon />
            </IconButton>
            <p style={{ margin: 0 }}>History</p>
          </div>

          <Button variant="text" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </header>

      <main className="meetContainer">
        <div className="leftPanel">
          <div>
            <h2>Providing Quality Video Call Just Like Quality Education</h2>

            <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
              <TextField
                id="meeting-code-input"
                label="Meeting Code"
                variant="outlined"
                value={meetingCode}
                onChange={(e) => setMeetingCode(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleJoinVideoCall()}
              />
              <Button
                onClick={handleJoinVideoCall}
                variant="contained"
                disabled={!meetingCode.trim()}
              >
                Join
              </Button>
            </div>
          </div>
        </div>

        <div className="rightPanel">
          <img src="/logo3.png" alt="Apna Video Call Dashboard Illustration" />
        </div>
      </main>
    </>
  );
}

export default withAuth(HomeComponent);
