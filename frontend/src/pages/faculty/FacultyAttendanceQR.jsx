import React, { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  ArrowLeft,
  QrCode,
  Play,
  Square,
  CheckCircle2,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const FacultyAttendanceQR = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);
  const [session, setSession] = useState(null);
  const [students, setStudents] = useState([]);

  const startAttendance = () => {
    const newSession = {
      id: "SESSION-" + Date.now(),
      type: "ATTENDANCE",
      subject: "Web Development",
      faculty: "Faculty",
      room: "Lab 2",
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    localStorage.setItem("attendanceSession", JSON.stringify(newSession));
    localStorage.setItem("attendanceActive", "true");

    setSession(newSession);
    setActive(true);
  };

  const stopAttendance = () => {
    localStorage.setItem("attendanceActive", "false");
    setActive(false);
  };

  const loadStudents = () => {
    const data = JSON.parse(
      localStorage.getItem("attendanceRecords") || "[]"
    );

    setStudents(data);
  };

  useEffect(() => {
    const savedSession = JSON.parse(
      localStorage.getItem("attendanceSession") || "null"
    );

    const isActive =
      localStorage.getItem("attendanceActive") === "true";

    if (savedSession && isActive) {
      setSession(savedSession);
      setActive(true);
    }

    loadStudents();

    const timer = setInterval(loadStudents, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="flex items-center justify-between border-b bg-white px-6 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/faculty-dashboard")}
            className="rounded-xl bg-slate-100 p-2"
          >
            <ArrowLeft size={20} />
          </button>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Attendance QR
            </h1>

            <p className="text-sm text-slate-400">
              Generate attendance session
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              active ? "bg-emerald-500" : "bg-slate-300"
            }`}
          />

          {active ? "Session Active" : "Session Inactive"}
        </div>
      </header>

      <main className="mx-auto max-w-5xl p-6">

        {/* Main Card */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* QR Section */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                <QrCode size={30} />
              </div>

              <h2 className="mt-4 text-xl font-bold">
                Faculty Attendance QR
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Students can attend while this session is active.
              </p>
            </div>

            {active && session ? (
              <>
                <div className="mt-6 flex justify-center rounded-2xl border bg-white p-6">
                  <QRCodeSVG
                    value={JSON.stringify(session)}
                    size={230}
                  />
                </div>

                <div className="mt-5 space-y-2 rounded-xl bg-slate-50 p-4 text-sm">
                  <p>
                    <b>Subject:</b> {session.subject}
                  </p>

                  <p>
                    <b>Room:</b> {session.room}
                  </p>

                  <p>
                    <b>Started:</b> {session.time}
                  </p>
                </div>

                <button
                  onClick={stopAttendance}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 py-3 font-semibold text-white"
                >
                  <Square size={18} />
                  Stop Attendance
                </button>
              </>
            ) : (
              <div className="mt-8 rounded-2xl border border-dashed p-10 text-center">
                <QrCode
                  size={55}
                  className="mx-auto text-slate-300"
                />

                <p className="mt-4 text-sm text-slate-400">
                  Generate QR to start attendance.
                </p>

                <button
                  onClick={startAttendance}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 font-semibold text-white"
                >
                  <Play size={18} />
                  Generate QR
                </button>
              </div>
            )}
          </div>

          {/* Attendance List */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">
                  Attendance
                </h2>

                <p className="text-sm text-slate-400">
                  Live attendance records
                </p>
              </div>

              <Users className="text-violet-600" />
            </div>

            <div className="mt-6 space-y-3">

              {students.length === 0 ? (
                <div className="rounded-xl bg-slate-50 p-8 text-center">
                  <p className="text-sm text-slate-400">
                    No students have submitted attendance yet.
                  </p>
                </div>
              ) : (
                students.map((student, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-xl bg-slate-50 p-4"
                  >
                    <div>
                      <p className="font-semibold">
                        {student.student}
                      </p>

                      <p className="text-xs text-slate-400">
                        {student.time}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-sm font-semibold text-emerald-600">
                      <CheckCircle2 size={17} />
                      Present
                    </div>
                  </div>
                ))
              )}

            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default FacultyAttendanceQR;