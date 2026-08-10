import React, { useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import {
  ArrowLeft,
  Camera,
  CheckCircle2,
  RotateCcw,
  XCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentQRScanner = () => {
  const navigate = useNavigate();

  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
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
  const startScanner = async () => {
    setError("");

    try {
      const qr = new Html5Qrcode("qr-reader");

      await qr.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 },
        async (text) => {
          try {
            const data = JSON.parse(text);

            if (data.type !== "ATTENDANCE") {
              setError("Invalid attendance QR");
              return;
            }

            await qr.stop();
            setScanning(false);
            setResult(data);
          } catch {
            setError("Invalid QR code");
          }
        },
        () => {}
      );

      setScanning(true);
    } catch {
      setError("Please allow camera permission");
    }
  };

  const markAttendance = () => {
    localStorage.setItem(
      "latestAttendance",
      JSON.stringify({
        ...result,
        student: "Aslin Mercy",
        status: "Present",
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      })
    );

    setResult({ ...result, marked: true });
  };

  const scanAgain = () => {
    setResult(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">

      <div className="mx-auto flex max-w-3xl items-center gap-4">
        <button
          onClick={() => navigate("/student-dashboard")}
          className="rounded-xl bg-white p-3 shadow-sm"
        >
          <ArrowLeft size={20} />
        </button>

        <div>
          <h1 className="text-xl font-bold text-slate-900">
            Scan Attendance
          </h1>
          <p className="text-sm text-slate-400">
            Scan your faculty QR code
          </p>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-white p-6 shadow-sm">

        {!result ? (
          <>
            <div className="text-center">
              <Camera
                size={38}
                className="mx-auto text-violet-600"
              />

              <h2 className="mt-3 text-lg font-bold">
                Mark Attendance
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Point your camera at the faculty QR code.
              </p>
            </div>

            <div
              id="qr-reader"
              className="mx-auto mt-6 max-w-md overflow-hidden rounded-2xl"
            />

            {!scanning && (
              <button
                onClick={startScanner}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 font-semibold text-white"
              >
                <Camera size={18} />
                Start Camera
              </button>
            )}

            {error && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-600">
                <XCircle size={18} />
                {error}
              </div>
            )}
          </>
        ) : result.marked ? (
          <div className="py-12 text-center">
            <CheckCircle2
              size={65}
              className="mx-auto text-emerald-500"
            />

            <h2 className="mt-4 text-2xl font-bold">
              Attendance Marked!
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Your attendance has been recorded successfully.
            </p>

            <button
              onClick={() => navigate("/student-dashboard")}
              className="mt-6 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white"
            >
              Back to Dashboard
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-emerald-500" />

              <div>
                <h2 className="font-bold">
                  QR Detected
                </h2>

                <p className="text-xs text-emerald-600">
                  Attendance session found
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 rounded-xl bg-slate-50 p-5">

              <div>
                <p className="text-xs text-slate-400">
                  Subject
                </p>
                <p className="font-semibold">
                  {result.subject || "Unknown"}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">
                  Faculty
                </p>
                <p className="font-semibold">
                  {result.faculty || "Faculty"}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">
                  Room
                </p>
                <p className="font-semibold">
                  {result.room || "Classroom"}
                </p>
              </div>

            </div>

            <button
              onClick={markAttendance}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 font-semibold text-white"
            >
              <CheckCircle2 size={18} />
              Mark Attendance
            </button>

            <button
              onClick={scanAgain}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 font-semibold text-slate-600"
            >
              <RotateCcw size={17} />
              Scan Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentQRScanner;