import React, { useEffect, useRef, useState } from "react";
import StudentSidebar from "../../components/StudentSidebar";
import {
  DashboardOutlined,
  EventAvailableOutlined,
  AssessmentOutlined,
  CalendarMonthOutlined,
  QrCode,
  SettingsOutlined,
  Search,
  NotificationsNoneOutlined,
  CameraAltOutlined,
  CheckCircle,
  Replay,
  LocationOnOutlined,
  ArrowBack,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

const StudentScanAttendance = () => {
  const navigate = useNavigate();

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  const [session, setSession] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [cameraLoading, setCameraLoading] = useState(true);

  // ---------------- MENU ----------------

   const menuItems = [
    {
      title: "Dashboard",
      icon: <DashboardOutlined />,
      path: "/student-dashboard",
    },
    {
      title: "Attendance",
      icon: <EventAvailableOutlined />,
      path: "/student-attendance",
    },
    {
      title: "Results",
      icon: <AssessmentOutlined />,
      path: "/student-results",
    },
    {
      title: "Timetable",
      icon: <CalendarMonthOutlined />,
      path: "/student-timetable",
    },
     {
  title: "Scan Attendance",
  icon: <QrCode/>,
  path: "/student-scan",
},
    {
      title: "Settings",
      icon: <SettingsOutlined />,
      path: "/student-settings",
    },
  ];
  // ---------------- CHECK FACULTY QR SESSION ----------------

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

  // ---------------- START CAMERA ----------------

  useEffect(() => {
    if (session && !photo && !submitted) {
      startCamera();
      getLocation();
    }

    return () => {
      stopCamera();
    };
  }, [session]);

  const startCamera = async () => {
    try {
      setError("");
      setCameraLoading(true);

      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "user",
          },
          audio: false,
        });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setCameraLoading(false);
    } catch (err) {
      console.error(err);

      setCameraLoading(false);

      setError(
        "Camera permission is required. Please allow camera access."
      );
    }
  };

  // ---------------- STOP CAMERA ----------------

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current
        .getTracks()
        .forEach((track) => track.stop());

      streamRef.current = null;
    }
  };

  // ---------------- LOCATION ----------------

  const getLocation = () => {
    setError("");

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser.");
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
        console.log(err);

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

  // ---------------- CAPTURE PHOTO ----------------

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) {
      return;
    }

    const video = videoRef.current;
    const canvas = canvasRef.current;

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

    const image = canvas.toDataURL("image/jpeg");

    setPhoto(image);

    // IMPORTANT: Camera OFF after capture
    stopCamera();
  };

  // ---------------- RETAKE ----------------

  const retakePhoto = () => {
    setPhoto(null);
    setError("");

    startCamera();
  };

  // ---------------- SUBMIT ----------------

  const submitAttendance = () => {
    if (!photo) {
      setError("Please capture your photo first.");
      return;
    }

    if (!location) {
      setError("Location is required.");
      return;
    }

    const attendanceRecord = {
      student: "Aslin Mercy",
      subject: session.subject,
      faculty: session.faculty,
      room: session.room,
      status: "Present",
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      latitude: location.latitude,
      longitude: location.longitude,
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

    // Stop camera
    stopCamera();

    setSubmitted(true);
  };

  // ---------------- NO ACTIVE QR ----------------

  if (!session) {
    return (
      <div className="flex min-h-screen bg-slate-50">

        {/* SIDEBAR */}

        <aside className="w-64 border-r bg-white p-5">

          <h2 className="mb-8 text-xl font-bold text-violet-600">
            Smart Attendance
          </h2>

          <div className="space-y-2">

            {menuItems.map((item) => (
              <button
                key={item.title}
                onClick={() => navigate(item.path)}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left ${
                  item.path === "/student-scan"
                    ? "bg-violet-100 text-violet-700"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {item.icon}

                <span>{item.title}</span>
              </button>
            ))}

          </div>
        </aside>

        {/* MAIN */}

        <div className="flex-1">

          <header className="flex items-center justify-between border-b bg-white px-6 py-4">

            <div>
              <h1 className="text-xl font-bold">
                Scan Attendance
              </h1>

              <p className="text-sm text-slate-400">
                Mark your attendance
              </p>
            </div>

          </header>

          <main className="p-6">

            <div className="mx-auto max-w-xl rounded-2xl bg-white p-10 text-center shadow-sm">

              <QrCode
                sx={{
                  fontSize: 70,
                  color: "#94a3b8",
                }}
              />

              <h2 className="mt-4 text-xl font-bold">
                Attendance Not Available
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Faculty has not generated an attendance QR yet.
              </p>

            </div>

          </main>

        </div>

      </div>
    );
  }

  // ---------------- MAIN PAGE ----------------

  return (
    <div className="flex min-h-screen bg-slate-50">

      {/* ================= SIDEBAR ================= */}

      <aside className="w-64 border-r bg-white p-5">

        <h2 className="mb-8 text-xl font-bold text-violet-600">
          Smart Attendance
        </h2>

        <div className="space-y-2">

          {menuItems.map((item) => (
            <button
              key={item.title}
              onClick={() => navigate(item.path)}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left ${
                item.path === "/student-scan"
                  ? "bg-violet-100 text-violet-700"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {item.icon}

              <span>{item.title}</span>
            </button>
          ))}

        </div>

      </aside>

      {/* ================= MAIN ================= */}

      <div className="flex-1">

        {/* HEADER */}

        <header className="flex items-center justify-between border-b bg-white px-6 py-4">

          <div className="flex items-center gap-3">

            <ArrowBack
              className="cursor-pointer"
              onClick={() =>
                navigate("/student-dashboard")
              }
            />

            <div>

              <h1 className="text-xl font-bold">
                Scan Attendance
              </h1>

              <p className="text-sm text-slate-400">
                Mark your attendance
              </p>

            </div>

          </div>

          <div className="flex items-center gap-5">

            <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2">

              <Search />

              <span className="text-sm text-slate-400">
                Search
              </span>

            </div>

            <NotificationsNoneOutlined />

            <div className="flex items-center gap-2">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 font-bold text-white">
                AM
              </div>

              <span className="font-medium">
                Aslin Mercy
              </span>

            </div>

          </div>

        </header>

        {/* ================= CONTENT ================= */}

        <main className="p-6">

          {/* ================= SUBMITTED ================= */}

          {submitted ? (

            <div className="mx-auto max-w-xl rounded-2xl bg-white p-10 text-center shadow-sm">

              <CheckCircle
                sx={{
                  fontSize: 75,
                  color: "#10b981",
                }}
              />

              <h2 className="mt-4 text-2xl font-bold">
                Attendance Submitted
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Your attendance has been successfully recorded.
              </p>

              <div className="mt-6 rounded-xl bg-slate-50 p-5 text-left">

                <p>
                  <b>Subject:</b>{" "}
                  {session.subject}
                </p>

                <p className="mt-2">
                  <b>Faculty:</b>{" "}
                  {session.faculty}
                </p>

                <p className="mt-2">
                  <b>Room:</b>{" "}
                  {session.room}
                </p>

                <p className="mt-3 text-emerald-600">
                  ✓ Location Verified
                </p>

              </div>

              <button
                onClick={() =>
                  navigate("/student-dashboard")
                }
                className="mt-6 w-full rounded-xl bg-violet-600 py-3 font-semibold text-white"
              >
                Back to Dashboard
              </button>

            </div>

          ) : (

            <div className="grid gap-6 lg:grid-cols-2">

              {/* ================= CAMERA ================= */}

              <div className="rounded-2xl bg-white p-5 shadow-sm">

                <h2 className="text-lg font-bold">
                  Student Verification
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Keep your face inside the camera.
                </p>

                <div className="mt-5 overflow-hidden rounded-2xl bg-black">

                  {photo ? (

                    <img
                      src={photo}
                      alt="Student verification"
                      className="h-[400px] w-full object-cover"
                    />

                  ) : (

                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      className="h-[400px] w-full object-cover"
                    />

                  )}

                </div>

                <canvas
                  ref={canvasRef}
                  className="hidden"
                />

                {/* CAMERA BUTTON */}

                {!photo ? (

                  <button
                    onClick={capturePhoto}
                    disabled={cameraLoading}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >

                    <CameraAltOutlined />

                    {cameraLoading
                      ? "Starting Camera..."
                      : "Capture Photo"}

                  </button>

                ) : (

                  <button
                    onClick={retakePhoto}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                  >

                    <Replay />

                    Retake Photo

                  </button>

                )}

              </div>

              {/* ================= DETAILS ================= */}

              <div className="rounded-2xl bg-white p-6 shadow-sm">

                <h2 className="text-xl font-bold">
                  Attendance Details
                </h2>

                {/* SUBJECT */}

                <div className="mt-5 rounded-xl bg-slate-50 p-4">

                  <p className="text-xs text-slate-400">
                    Subject
                  </p>

                  <p className="mt-1 font-semibold">
                    {session.subject}
                  </p>

                </div>

                {/* FACULTY */}

                <div className="mt-4 rounded-xl bg-slate-50 p-4">

                  <p className="text-xs text-slate-400">
                    Faculty
                  </p>

                  <p className="mt-1 font-semibold">
                    {session.faculty}
                  </p>

                </div>

                {/* ROOM */}

                <div className="mt-4 rounded-xl bg-slate-50 p-4">

                  <p className="text-xs text-slate-400">
                    Room
                  </p>

                  <p className="mt-1 font-semibold">
                    {session.room}
                  </p>

                </div>

                {/* LOCATION */}

                <div className="mt-4 rounded-xl bg-slate-50 p-4">

                  <div className="flex items-center gap-2">

                    <LocationOnOutlined
                      className="text-emerald-500"
                    />

                    <span className="font-semibold">
                      Location
                    </span>

                  </div>

                  <p
                    className={`mt-2 text-sm ${
                      location
                        ? "text-emerald-600"
                        : "text-orange-500"
                    }`}
                  >

                    {location
                      ? "Location Verified ✓"
                      : "Getting location..."}

                  </p>

                  {location && (
                    <p className="mt-1 text-xs text-slate-400">
                      GPS location detected successfully.
                    </p>
                  )}

                </div>

                {/* ERROR */}

                {error && (

                  <div className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-600">

                    {error}

                    {!location && (
                      <button
                        onClick={getLocation}
                        className="mt-2 block font-semibold text-red-700 underline"
                      >
                        Try Location Again
                      </button>
                    )}

                  </div>

                )}

                {/* STATUS */}

                <div className="mt-5 rounded-xl border border-dashed border-slate-300 p-4">

                  <p className="text-sm font-semibold">
                    Verification Status
                  </p>

                  <div className="mt-3 space-y-2 text-sm">

                    <p>
                      {photo
                        ? "✓ Photo captured"
                        : "○ Capture your photo"}
                    </p>

                    <p>
                      {location
                        ? "✓ Location verified"
                        : "○ Waiting for location"}
                    </p>

                  </div>

                </div>

                {/* SUBMIT */}

                <button
                  onClick={submitAttendance}
                  disabled={!photo || !location}
                  className={`mt-5 w-full rounded-xl py-3 font-semibold transition ${
                    photo && location
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "cursor-not-allowed bg-slate-200 text-slate-400"
                  }`}
                >

                  {!photo
                    ? "Capture Photo to Continue"
                    : !location
                    ? "Waiting for Location..."
                    : "Submit Attendance"}

                </button>

              </div>

            </div>

          )}

        </main>

      </div>

    </div>
  );
};

export default StudentScanAttendance;