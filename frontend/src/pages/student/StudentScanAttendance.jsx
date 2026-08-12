import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import StudentSidebar from "../../components/StudentSidebar";

import {
  Box,
  Typography,
  Paper,
  Button,
  Avatar,
  IconButton,
  Divider,
  Chip,
} from "@mui/material";

import {
  QrCode,
  NotificationsNoneOutlined,
  CameraAltOutlined,
  Replay,
  LocationOnOutlined,
  CheckCircle,
  ArrowBack,
  RefreshOutlined,
  VerifiedOutlined,
  SchoolOutlined,
} from "@mui/icons-material";

export default function StudentScanAttendance() {
  const navigate = useNavigate();

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  const [session, setSession] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [cameraLoading, setCameraLoading] = useState(false);

  // =====================================================
  // CHECK FACULTY QR SESSION
  // =====================================================

  useEffect(() => {
    const checkSession = () => {
      const active =
        localStorage.getItem("attendanceActive") === "true";

      const savedSession = JSON.parse(
        localStorage.getItem("attendanceSession") || "null"
      );

      if (active && savedSession) {
        setSession(savedSession);
      } else {
        setSession(null);
      }
    };

    checkSession();

    const timer = setInterval(checkSession, 1000);

    return () => clearInterval(timer);
  }, []);

  // =====================================================
  // CAMERA + LOCATION
  // =====================================================

  useEffect(() => {
    if (session && !photo && !submitted) {
      startCamera();
      getLocation();
    }

    return () => {
      stopCamera();
    };
  }, [session]);

  // =====================================================
  // START CAMERA
  // =====================================================

  const startCamera = async () => {
    try {
      setError("");
      setCameraLoading(true);

      if (!navigator.mediaDevices?.getUserMedia) {
        setError("Camera is not supported by this browser.");
        setCameraLoading(false);
        return;
      }

      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "user",
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
          audio: false,
        });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setCameraLoading(false);
    } catch (err) {
      console.error("Camera Error:", err);

      setCameraLoading(false);

      setError(
        "Camera permission is required. Please allow camera access and try again."
      );
    }
  };

  // =====================================================
  // STOP CAMERA
  // =====================================================

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => {
        track.stop();
      });

      streamRef.current = null;
    }
  };

  // =====================================================
  // LOCATION
  // =====================================================

  const getLocation = () => {
    setError("");

    if (!navigator.geolocation) {
      setError(
        "Geolocation is not supported by this browser."
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        setError("");
      },

      (err) => {
        console.log("Location Error:", err);

        setLocation(null);

        setError(
          "Please allow location permission to continue."
        );
      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  // =====================================================
  // CAPTURE PHOTO
  // =====================================================

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) {
      setError("Camera is not ready.");
      return;
    }

    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (
      video.videoWidth === 0 ||
      video.videoHeight === 0
    ) {
      setError(
        "Camera is still starting. Please wait a moment."
      );
      return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");

    context.drawImage(
      video,
      0,
      0,
      canvas.width,
      canvas.height
    );

    const image = canvas.toDataURL("image/jpeg", 0.9);

    setPhoto(image);

    stopCamera();
  };

  // =====================================================
  // RETAKE PHOTO
  // =====================================================

  const retakePhoto = async () => {
    setPhoto(null);
    setError("");

    await startCamera();
  };

  // =====================================================
  // SUBMIT ATTENDANCE
  // =====================================================

  const submitAttendance = () => {
    setError("");

    if (!photo) {
      setError("Please capture your photo first.");
      return;
    }

    if (!location) {
      setError("Location is required.");
      return;
    }

    if (!session) {
      setError(
        "Attendance session is no longer available."
      );
      return;
    }

    const attendanceRecord = {
      id: Date.now(),
      student: "Aslin Mercy",
      registerNo: "21BTECH001",
      subject: session.subject || "Unknown Subject",
      faculty: session.faculty || "Faculty",
      room: session.room || "Classroom",
      status: "Present",
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      latitude: location.latitude,
      longitude: location.longitude,
      photo: photo,
    };

    const oldRecords = JSON.parse(
      localStorage.getItem("attendanceRecords") || "[]"
    );

    localStorage.setItem(
      "attendanceRecords",
      JSON.stringify([
        ...oldRecords,
        attendanceRecord,
      ])
    );

    stopCamera();

    setSubmitted(true);
  };

  // =====================================================
  // NO ACTIVE SESSION
  // =====================================================

  if (!session) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          background: "#F8FAFF",
        }}
      >
        <StudentSidebar />

        <Box
          sx={{
            marginLeft: "258px",
            minHeight: "100vh",
            px: { xs: 2, md: 4 },
            py: 4,
          }}
        >
          {/* PAGE TITLE */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 4,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#0F172A",
                }}
              >
                Scan Attendance
              </Typography>

              <Typography
                sx={{
                  fontSize: 14,
                  color: "#94A3B8",
                  mt: 0.5,
                }}
              >
                Mark your attendance using faculty QR
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <IconButton
                sx={{
                  width: 42,
                  height: 42,
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                }}
              >
                <NotificationsNoneOutlined
                  sx={{ color: "#64748B" }}
                />
              </IconButton>

              <Avatar
                sx={{
                  width: 42,
                  height: 42,
                  background:
                    "linear-gradient(135deg,#2563EB,#7C3AED)",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                AM
              </Avatar>
            </Box>
          </Box>

          {/* EMPTY STATE */}

          <Box
            sx={{
              minHeight: "65vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                maxWidth: 650,
                border: "1px solid #E2E8F0",
                borderRadius: "22px",
                background: "#FFFFFF",
                p: { xs: 4, md: 6 },
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  width: 90,
                  height: 90,
                  mx: "auto",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg,#EEF2FF,#F5F3FF)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <QrCode
                  sx={{
                    fontSize: 48,
                    color: "#6366F1",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  mt: 3,
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#0F172A",
                }}
              >
                Attendance Not Available
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  fontSize: 14,
                  color: "#94A3B8",
                  lineHeight: 1.7,
                }}
              >
                Your faculty has not started an attendance
                session yet.
                <br />
                Please wait until the QR code is generated.
              </Typography>

              <Box
                sx={{
                  mt: 4,
                  p: 2,
                  borderRadius: "13px",
                  background: "#EFF6FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <LocationOnOutlined
                  sx={{
                    color: "#2563EB",
                    fontSize: 20,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#2563EB",
                  }}
                >
                  Stay inside your classroom and keep
                  location enabled.
                </Typography>
              </Box>

              <Button
                variant="outlined"
                onClick={() =>
                  navigate("/student-dashboard")
                }
                sx={{
                  mt: 4,
                  px: 4,
                  py: 1.2,
                  borderRadius: "11px",
                  textTransform: "none",
                  fontWeight: 700,
                }}
              >
                Back to Dashboard
              </Button>
            </Paper>
          </Box>
        </Box>
      </Box>
    );
  }

  // =====================================================
  // ACTIVE SESSION PAGE
  // =====================================================

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#F8FAFF",
      }}
    >
      <StudentSidebar />

      <Box
        sx={{
          marginLeft: "258px",
          minHeight: "100vh",
          px: { xs: 2, md: 4 },
          py: 4,
        }}
      >
        {/* =================================================
            TOP SECTION
        ================================================= */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <IconButton
              onClick={() =>
                navigate("/student-dashboard")
              }
              sx={{
                width: 42,
                height: 42,
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                "&:hover": {
                  background: "#F1F5F9",
                },
              }}
            >
              <ArrowBack
                sx={{
                  color: "#475569",
                }}
              />
            </IconButton>

            <Box>
              <Typography
                sx={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#0F172A",
                }}
              >
                Scan Attendance
              </Typography>

              <Typography
                sx={{
                  fontSize: 14,
                  color: "#94A3B8",
                  mt: 0.4,
                }}
              >
                Verify yourself and mark attendance
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <IconButton
              sx={{
                width: 42,
                height: 42,
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
              }}
            >
              <NotificationsNoneOutlined
                sx={{ color: "#64748B" }}
              />
            </IconButton>

            <Avatar
              sx={{
                width: 42,
                height: 42,
                background:
                  "linear-gradient(135deg,#2563EB,#7C3AED)",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              AM
            </Avatar>
          </Box>
        </Box>

        {/* =================================================
            ACTIVE SESSION CARD
        ================================================= */}

        <Paper
          elevation={0}
          sx={{
            borderRadius: "18px",
            p: 3,
            mb: 3,
            color: "#FFFFFF",
            background:
              "linear-gradient(135deg,#2563EB,#7C3AED)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
              position: "relative",
              zIndex: 1,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 1,
                  opacity: 0.85,
                }}
              >
                ACTIVE ATTENDANCE SESSION
              </Typography>

              <Typography
                sx={{
                  mt: 0.6,
                  fontSize: 21,
                  fontWeight: 800,
                }}
              >
                {session.subject}
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  fontSize: 13,
                  opacity: 0.9,
                }}
              >
                {session.faculty} • {session.room}
              </Typography>
            </Box>

            <Chip
              label="QR Active"
              icon={
                <QrCode
                  sx={{
                    color: "#16A34A !important",
                  }}
                />
              }
              sx={{
                background: "#ECFDF5",
                color: "#16A34A",
                fontWeight: 700,
              }}
            />
          </Box>

          <QrCode
            sx={{
              position: "absolute",
              right: 30,
              bottom: -15,
              fontSize: 100,
              opacity: 0.08,
            }}
          />
        </Paper>

        {/* =================================================
            SUCCESS
        ================================================= */}

        {submitted ? (
          <Paper
            elevation={0}
            sx={{
              maxWidth: 650,
              mx: "auto",
              mt: 5,
              p: 5,
              border: "1px solid #D1FAE5",
              borderRadius: "20px",
              background: "#FFFFFF",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                width: 90,
                height: 90,
                mx: "auto",
                borderRadius: "50%",
                background: "#ECFDF5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircle
                sx={{
                  fontSize: 55,
                  color: "#10B981",
                }}
              />
            </Box>

            <Typography
              sx={{
                mt: 3,
                fontSize: 25,
                fontWeight: 800,
                color: "#0F172A",
              }}
            >
              Attendance Submitted
            </Typography>

            <Typography
              sx={{
                mt: 1,
                fontSize: 14,
                color: "#94A3B8",
              }}
            >
              Your attendance has been successfully
              recorded.
            </Typography>

            <Box
              sx={{
                mt: 4,
                p: 3,
                borderRadius: "14px",
                background: "#F8FAFC",
                textAlign: "left",
              }}
            >
              <Typography sx={{ mb: 1.3 }}>
                <b>Subject:</b> {session.subject}
              </Typography>

              <Typography sx={{ mb: 1.3 }}>
                <b>Faculty:</b> {session.faculty}
              </Typography>

              <Typography sx={{ mb: 1.3 }}>
                <b>Room:</b> {session.room}
              </Typography>

              <Typography
                sx={{
                  color: "#10B981",
                  fontWeight: 700,
                }}
              >
                ✓ Location Verified
              </Typography>
            </Box>

            <Button
              fullWidth
              variant="contained"
              onClick={() =>
                navigate("/student-dashboard")
              }
              sx={{
                mt: 3,
                py: 1.4,
                borderRadius: "11px",
                textTransform: "none",
                fontWeight: 700,
                background:
                  "linear-gradient(135deg,#2563EB,#7C3AED)",
              }}
            >
              Back to Dashboard
            </Button>
          </Paper>
        ) : (
          /* =================================================
             VERIFICATION AREA
          ================================================= */

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                lg: "1.25fr 0.75fr",
              },
              gap: 3,
              alignItems: "start",
            }}
          >
            {/* =================================================
                CAMERA CARD
            ================================================= */}

            <Paper
              elevation={0}
              sx={{
                border: "1px solid #E2E8F0",
                borderRadius: "18px",
                p: 3,
                background: "#FFFFFF",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 0.5,
                }}
              >
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: "10px",
                    background: "#EEF2FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CameraAltOutlined
                    sx={{
                      color: "#6366F1",
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    fontSize: 19,
                    fontWeight: 800,
                    color: "#0F172A",
                  }}
                >
                  Student Verification
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: 13,
                  color: "#94A3B8",
                  mb: 3,
                }}
              >
                Keep your face clearly visible inside
                the camera.
              </Typography>

              {/* CAMERA */}

              <Box
                sx={{
                  height: {
                    xs: 320,
                    md: 420,
                  },
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "#0F172A",
                  position: "relative",
                }}
              >
                {photo ? (
                  <img
                    src={photo}
                    alt="Student verification"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <>
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />

                    {cameraLoading && (
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background:
                            "rgba(15,23,42,0.7)",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#FFFFFF",
                            fontWeight: 600,
                          }}
                        >
                          Starting Camera...
                        </Typography>
                      </Box>
                    )}
                  </>
                )}
              </Box>

              <canvas
                ref={canvasRef}
                style={{
                  display: "none",
                }}
              />

              {!photo ? (
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={
                    <CameraAltOutlined />
                  }
                  onClick={capturePhoto}
                  disabled={cameraLoading}
                  sx={{
                    mt: 3,
                    py: 1.4,
                    borderRadius: "11px",
                    textTransform: "none",
                    fontWeight: 700,
                    background:
                      "linear-gradient(135deg,#2563EB,#7C3AED)",
                  }}
                >
                  {cameraLoading
                    ? "Starting Camera..."
                    : "Capture Photo"}
                </Button>
              ) : (
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<Replay />}
                  onClick={retakePhoto}
                  sx={{
                    mt: 3,
                    py: 1.4,
                    borderRadius: "11px",
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                >
                  Retake Photo
                </Button>
              )}
            </Paper>

            {/* =================================================
                DETAILS CARD
            ================================================= */}

            <Paper
              elevation={0}
              sx={{
                border: "1px solid #E2E8F0",
                borderRadius: "18px",
                p: 3,
                background: "#FFFFFF",
              }}
            >
              <Typography
                sx={{
                  fontSize: 19,
                  fontWeight: 800,
                  color: "#0F172A",
                }}
              >
                Attendance Details
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  fontSize: 13,
                  color: "#94A3B8",
                }}
              >
                Verify the details before submitting.
              </Typography>

              {/* SUBJECT */}

              <Box
                sx={{
                  mt: 3,
                  p: 2,
                  borderRadius: "12px",
                  background: "#F8FAFC",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#94A3B8",
                    letterSpacing: 0.8,
                  }}
                >
                  SUBJECT
                </Typography>

                <Typography
                  sx={{
                    mt: 0.6,
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#0F172A",
                  }}
                >
                  {session.subject}
                </Typography>
              </Box>

              {/* FACULTY */}

              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  borderRadius: "12px",
                  background: "#F8FAFC",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#94A3B8",
                    letterSpacing: 0.8,
                  }}
                >
                  FACULTY
                </Typography>

                <Typography
                  sx={{
                    mt: 0.6,
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  {session.faculty}
                </Typography>
              </Box>

              {/* ROOM */}

              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  borderRadius: "12px",
                  background: "#F8FAFC",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#94A3B8",
                    letterSpacing: 0.8,
                  }}
                >
                  CLASSROOM
                </Typography>

                <Typography
                  sx={{
                    mt: 0.6,
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  {session.room}
                </Typography>
              </Box>

              <Divider sx={{ my: 2.5 }} />

              {/* LOCATION */}

              <Box
                sx={{
                  p: 2,
                  borderRadius: "12px",
                  background: location
                    ? "#ECFDF5"
                    : "#FFF7ED",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <LocationOnOutlined
                    sx={{
                      color: location
                        ? "#10B981"
                        : "#F97316",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 700,
                    }}
                  >
                    Location Verification
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    mt: 1,
                    fontSize: 12,
                    color: location
                      ? "#059669"
                      : "#EA580C",
                  }}
                >
                  {location
                    ? "Location detected successfully ✓"
                    : "Waiting for location..."}
                </Typography>

                {!location && (
                  <Button
                    size="small"
                    startIcon={
                      <RefreshOutlined />
                    }
                    onClick={getLocation}
                    sx={{
                      mt: 1,
                      textTransform: "none",
                      fontWeight: 700,
                    }}
                  >
                    Try Again
                  </Button>
                )}
              </Box>

              {/* ERROR */}

              {error && (
                <Box
                  sx={{
                    mt: 2,
                    p: 2,
                    borderRadius: "12px",
                    background: "#FEF2F2",
                    border: "1px solid #FECACA",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "#DC2626",
                      fontWeight: 600,
                    }}
                  >
                    {error}
                  </Typography>

                  {!location && (
                    <Button
                      size="small"
                      onClick={getLocation}
                      sx={{
                        mt: 0.5,
                        p: 0,
                        textTransform: "none",
                        color: "#DC2626",
                        fontWeight: 700,
                      }}
                    >
                      Try Location Again
                    </Button>
                  )}
                </Box>
              )}

              {/* VERIFICATION STATUS */}

              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  border: "1px dashed #CBD5E1",
                  borderRadius: "12px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <VerifiedOutlined
                    sx={{
                      fontSize: 19,
                      color: "#6366F1",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    Verification Status
                  </Typography>
                </Box>

                <Box
                  sx={{
                    mt: 1.5,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: photo
                        ? "#16A34A"
                        : "#64748B",
                    }}
                  >
                    {photo
                      ? "✓ Photo captured"
                      : "○ Capture your photo"}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      color: location
                        ? "#16A34A"
                        : "#64748B",
                    }}
                  >
                    {location
                      ? "✓ Location verified"
                      : "○ Waiting for location"}
                  </Typography>
                </Box>
              </Box>

              {/* SUBMIT */}

              <Button
                fullWidth
                variant="contained"
                onClick={submitAttendance}
                disabled={!photo || !location}
                sx={{
                  mt: 3,
                  py: 1.4,
                  borderRadius: "11px",
                  textTransform: "none",
                  fontWeight: 700,
                  background:
                    photo && location
                      ? "#10B981"
                      : "#E2E8F0",
                  color:
                    photo && location
                      ? "#FFFFFF"
                      : "#94A3B8",
                  "&:hover": {
                    background:
                      photo && location
                        ? "#059669"
                        : "#E2E8F0",
                  },
                }}
              >
                {!photo
                  ? "Capture Photo to Continue"
                  : !location
                  ? "Waiting for Location..."
                  : "Submit Attendance"}
              </Button>
            </Paper>
          </Box>
        )}
      </Box>
    </Box>
  );
}