import React, { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  ArrowLeft,
  QrCode,
  Clock,
  Users,
  CheckCircle2,
  Copy,
  RefreshCw,
  StopCircle,
  BookOpen,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const FacultyAttendanceQR = () => {
  const navigate = useNavigate();

  const [subject, setSubject] = useState("Web Development");
  const [room, setRoom] = useState("Room 204");

  const [isActive, setIsActive] = useState(false);

  // 5 minutes
  const [timeLeft, setTimeLeft] = useState(300);

  const [sessionId, setSessionId] = useState("");

  const [students, setStudents] = useState([
    {
      id: "STU001",
      name: "Arun Kumar",
      time: "09:42 AM",
    },
    {
      id: "STU002",
      name: "Priya S",
      time: "09:44 AM",
    },
    {
      id: "STU003",
      name: "Divya R",
      time: "09:48 AM",
    },
  ]);

  // =========================
  // Generate Session ID
  // =========================

  const generateSession = () => {
    const newSession =
      "ATT-" +
      Date.now().toString(36).toUpperCase() +
      "-" +
      Math.random().toString(36).substring(2, 7).toUpperCase();

    setSessionId(newSession);
    setTimeLeft(300);
    setIsActive(true);
  };

  // =========================
  // Timer
  // =========================

  useEffect(() => {
    if (!isActive || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  // Automatically stop when timer reaches 0
  useEffect(() => {
    if (timeLeft === 0) {
      setIsActive(false);
    }
  }, [timeLeft]);

  // =========================
  // Format Timer
  // =========================

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  };

  // =========================
  // QR Data
  // =========================

  const qrData = JSON.stringify({
    type: "ATTENDANCE",
    sessionId,
    subject,
    room,
    faculty: "Anitha S",
  });

  // =========================
  // Copy Session ID
  // =========================

  const copySessionId = () => {
    navigator.clipboard.writeText(sessionId);
  };

  // =========================
  // Stop Attendance
  // =========================

  const stopAttendance = () => {
    setIsActive(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* ================= HEADER ================= */}

      <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-6 shadow-sm backdrop-blur md:px-8">

        <div className="flex items-center gap-4">

          <button
            onClick={() => navigate("/faculty-dashboard")}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 hover:text-violet-600"
          >
            <ArrowLeft size={19} />
          </button>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              Attendance QR
            </h1>

            <p className="text-xs text-slate-400">
              Create and manage live attendance
            </p>
          </div>

        </div>

        {/* Status */}

        <div
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold ${
            isActive
              ? "bg-emerald-50 text-emerald-600"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${
              isActive
                ? "animate-pulse bg-emerald-500"
                : "bg-slate-400"
            }`}
          />

          {isActive ? "Attendance Active" : "Attendance Inactive"}
        </div>

      </header>

      {/* ================= MAIN ================= */}

      <main className="mx-auto max-w-7xl p-6 md:p-8">

        {/* Page Title */}

        <div className="mb-7">

          <h2 className="text-2xl font-bold text-slate-900">
            Faculty Attendance
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Generate a QR code and let students mark their attendance.
          </p>

        </div>

        {/* ================= GRID ================= */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* ======================================
              LEFT - QR CARD
          ====================================== */}

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">

            {/* Card Header */}

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <QrCode size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Attendance QR Code
                  </h3>

                  <p className="text-xs text-slate-400">
                    Students can scan this QR to mark attendance
                  </p>
                </div>

              </div>

              {isActive && (
                <div className="flex items-center gap-2 rounded-xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-500">
                  <Clock size={16} />
                  {formatTime()}
                </div>
              )}

            </div>

            {/* QR Area */}

            <div className="mt-8 flex flex-col items-center">

              <div
                className={`flex h-72 w-72 items-center justify-center rounded-3xl border-2 ${
                  isActive
                    ? "border-violet-200 bg-violet-50"
                    : "border-dashed border-slate-200 bg-slate-50"
                }`}
              >

                {isActive && sessionId ? (

                  <div className="rounded-2xl bg-white p-5 shadow-sm">

                    <QRCodeSVG
                      value={qrData}
                      size={220}
                      level="H"
                    />

                  </div>

                ) : (

                  <div className="text-center">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                      <QrCode size={34} />
                    </div>

                    <p className="mt-4 text-sm font-semibold text-slate-500">
                      QR Code Not Generated
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Generate a QR to start attendance
                    </p>

                  </div>

                )}

              </div>

              {/* Timer */}

              {isActive && (

                <div className="mt-5 text-center">

                  <p className="text-xs text-slate-400">
                    QR expires in
                  </p>

                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    {formatTime()}
                  </p>

                </div>

              )}

              {/* Session ID */}

              {sessionId && (

                <div className="mt-5 flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3">

                  <span className="text-xs text-slate-400">
                    Session:
                  </span>

                  <span className="font-mono text-xs font-semibold text-slate-600">
                    {sessionId}
                  </span>

                  <button
                    onClick={copySessionId}
                    className="ml-1 text-slate-400 transition hover:text-violet-600"
                    title="Copy session ID"
                  >
                    <Copy size={15} />
                  </button>

                </div>

              )}

            </div>

            {/* Buttons */}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              {!isActive ? (

                <button
                  onClick={generateSession}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700"
                >
                  <QrCode size={18} />
                  Generate QR Code
                </button>

              ) : (

                <>

                  <button
                    onClick={generateSession}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-violet-200 bg-violet-50 px-5 py-3 text-sm font-semibold text-violet-600 transition hover:bg-violet-100"
                  >
                    <RefreshCw size={18} />
                    Regenerate QR
                  </button>

                  <button
                    onClick={stopAttendance}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
                  >
                    <StopCircle size={18} />
                    End Attendance
                  </button>

                </>

              )}

            </div>

          </section>

          {/* ======================================
              RIGHT - SETTINGS
          ====================================== */}

          <section className="space-y-6">

            {/* Class Details */}

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h3 className="font-bold text-slate-900">
                Class Details
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Select the class for attendance
              </p>

              <div className="mt-5 space-y-4">

                {/* Subject */}

                <div>

                  <label className="mb-2 block text-xs font-semibold text-slate-500">
                    Subject
                  </label>

                  <div className="relative">

                    <BookOpen
                      size={17}
                      className="absolute left-3 top-3 text-slate-400"
                    />

                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-violet-400 focus:bg-white"
                    >
                      <option>Web Development</option>
                      <option>Database Management</option>
                      <option>UI / UX Design</option>
                      <option>Computer Networks</option>
                      <option>Operating Systems</option>
                    </select>

                  </div>

                </div>

                {/* Room */}

                <div>

                  <label className="mb-2 block text-xs font-semibold text-slate-500">
                    Classroom
                  </label>

                  <div className="relative">

                    <MapPin
                      size={17}
                      className="absolute left-3 top-3 text-slate-400"
                    />

                    <select
                      value={room}
                      onChange={(e) => setRoom(e.target.value)}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-violet-400 focus:bg-white"
                    >
                      <option>Room 204</option>
                      <option>Room 105</option>
                      <option>Lab 1</option>
                      <option>Lab 2</option>
                    </select>

                  </div>

                </div>

              </div>

            </div>

            {/* Security Info */}

            <div className="rounded-2xl border border-violet-100 bg-violet-50 p-6">

              <div className="flex gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-violet-900">
                    Secure Attendance
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-violet-700">
                    Each QR code contains a unique session ID
                    and automatically expires after 5 minutes.
                  </p>
                </div>

              </div>

            </div>

          </section>

        </div>

        {/* ======================================
            LIVE ATTENDANCE
        ====================================== */}

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          {/* Header */}

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <div>

              <div className="flex items-center gap-2">

                <h3 className="font-bold text-slate-900">
                  Live Attendance
                </h3>

                {isActive && (
                  <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    LIVE
                  </span>
                )}

              </div>

              <p className="mt-1 text-xs text-slate-400">
                Students who have scanned the QR code
              </p>

            </div>

            {/* Count */}

            <div className="flex items-center gap-3 rounded-xl bg-violet-50 px-4 py-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-violet-600">
                <Users size={18} />
              </div>

              <div>

                <p className="text-xs text-slate-400">
                  Present
                </p>

                <p className="text-lg font-bold text-violet-600">
                  {students.length} Students
                </p>

              </div>

            </div>

          </div>

          {/* Progress */}

          <div className="mt-6">

            <div className="mb-2 flex justify-between text-xs">

              <span className="font-medium text-slate-500">
                Attendance Progress
              </span>

              <span className="font-semibold text-violet-600">
                {students.length} / 40
              </span>

            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-100">

              <div
                className="h-full rounded-full bg-violet-600 transition-all"
                style={{
                  width: `${Math.min(
                    (students.length / 40) * 100,
                    100
                  )}%`,
                }}
              />

            </div>

          </div>

          {/* Student Table */}

          <div className="mt-6 overflow-x-auto">

            <table className="w-full min-w-[600px]">

              <thead>

                <tr className="border-b border-slate-100 text-left text-xs uppercase tracking-wide text-slate-400">

                  <th className="pb-4 font-semibold">
                    Student
                  </th>

                  <th className="pb-4 font-semibold">
                    Student ID
                  </th>

                  <th className="pb-4 font-semibold">
                    Time
                  </th>

                  <th className="pb-4 font-semibold">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {students.map((student) => (

                  <tr
                    key={student.id}
                    className="border-b border-slate-50 last:border-none"
                  >

                    <td className="py-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-600">
                          {student.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>

                        <span className="text-sm font-semibold text-slate-700">
                          {student.name}
                        </span>

                      </div>

                    </td>

                    <td className="py-4 text-sm text-slate-500">
                      {student.id}
                    </td>

                    <td className="py-4 text-sm text-slate-500">
                      {student.time}
                    </td>

                    <td className="py-4">

                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">

                        <CheckCircle2 size={13} />

                        Present

                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </section>

      </main>
    </div>
  );
};

export default FacultyAttendanceQR;