import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Snackbar,
  Alert,
  CircularProgress,
  Box,
  Grid2 as Grid,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { AuthContext } from "../contexts/AuthContext";

export default function History() {
  const { getHistoryOfUser } = useContext(AuthContext);
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setLoading(true);
        const history = await getHistoryOfUser();
        setMeetings(Array.isArray(history) ? history : []);
      } catch (error) {
        setSnackbar({
          open: true,
          message: error.message || "Failed to fetch meeting history.",
          severity: "error",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [getHistoryOfUser]);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid Date";

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const handleCloseSnackbar = (_, reason) => {
    if (reason === "clickaway") return;
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleRejoinMeeting = (meetingCode) => {
    navigate(`/${meetingCode}`);
  };

  return (
    <Box sx={{ padding: { xs: 2, sm: 4 }, maxWidth: 1200, margin: "0 auto" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3, gap: 1 }}>
        <IconButton
          onClick={() => navigate("/home")}
          color="primary"
          aria-label="go to home"
        >
          <HomeIcon />
        </IconButton>
        <Typography variant="h5" component="h1" fontWeight="bold">
          Meeting History
        </Typography>
      </Box>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", my: 6 }}>
          <CircularProgress />
        </Box>
      ) : meetings.length > 0 ? (
        <Grid container spacing={2}>
          {meetings.map((meeting, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={meeting._id || index}>
              <Card
                variant="outlined"
                sx={{
                  borderRadius: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Code: <strong>{meeting.meetingCode || meeting.code}</strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Date: {formatDate(meeting.date || meeting.createdAt)}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<VideoCallIcon />}
                    onClick={() =>
                      handleRejoinMeeting(meeting.meetingCode || meeting.code)
                    }
                    fullWidth
                  >
                    Rejoin
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ textAlign: "center", py: 6, color: "text.secondary" }}>
          <Typography variant="h6">No meeting history found</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Meetings you host or join will show up here.
          </Typography>
        </Box>
      )}

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
