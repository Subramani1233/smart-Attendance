import { Routes, Route, Navigate } from "react-router-dom";

// =========================
// AUTH
// =========================
import LoginSelection from "./pages/auth/LoginSelection";
import StudentLogin from "./pages/auth/StudentLogin";
import FacultyLogin from "./pages/auth/FacultyLogin";
import AdminLogin from "./pages/auth/AdminLogin";

// =========================
// STUDENT
// =========================
import StudentLayout from "./layouts/StudentLayout";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentAttendance from "./pages/student/StudentAttendance";
import StudentResults from "./pages/student/StudentResults";
import StudentTimetable from "./pages/student/StudentTimetable";
import StudentSubjects from "./pages/student/StudentSubjects";
import StudentSettings from "./pages/student/StudentSettings";
import StudentScanAttendance from "./pages/student/StudentScanAttendance";

// =========================
// FACULTY
// =========================
import FacultyDashboard from "./pages/faculty/FacultyDashboard";
import FacultyAttendanceQR from "./pages/faculty/FacultyAttendanceQR";

function App() {
  return (
    <Routes>
      {/* =========================
          AUTH ROUTES
      ========================= */}
      <Route path="/" element={<LoginSelection />} />
      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/faculty-login" element={<FacultyLogin />} />
      <Route path="/admin-login" element={<AdminLogin />} />

      {/* =========================
          STUDENT ROUTES
      ========================= */}
      <Route element={<StudentLayout />}>
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student-attendance" element={<StudentAttendance />} />
        <Route path="/student-results" element={<StudentResults />} />
        <Route path="/student-timetable" element={<StudentTimetable />} />
        <Route path="/student-subjects"element={<StudentSubjects />}/>
        <Route path="/student-settings" element={<StudentSettings />} />
        <Route path="/student-scan" element={<StudentScanAttendance />} />
      </Route>

      {/* =========================
          FACULTY ROUTES
      ========================= */}
      <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
      <Route path="/faculty-attendance-qr" element={<FacultyAttendanceQR />} />

      {/* =========================
          UNKNOWN ROUTE
      ========================= */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;