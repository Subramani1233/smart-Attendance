import { Routes, Route, Navigate } from "react-router-dom";

import LoginSelection from "./pages/auth/LoginSelection";
import StudentLogin from "./pages/auth/StudentLogin";
import FacultyLogin from "./pages/auth/FacultyLogin";
import AdminLogin from "./pages/auth/AdminLogin";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentAttendance from "./pages/student/StudentAttendance";
import StudentResults from "./pages/student/StudentResults";
import StudentTimetable from "./pages/student/StudentTimetable";
import StudentSettings from "./pages/student/StudentSettings";
import FacultyDashboard from "./pages/faculty/FacultyDashboard";
import FacultyAttendanceQR from "./pages/faculty/FacultyAttendanceQR";
import StudentQRScanner from "./pages/student/StudentQRScanner";
function App() {
  return (
    <Routes>
      {/* Main Login Selection */}
      <Route
        path="/"
        element={<LoginSelection />}
      />

      {/* Student Login */}
      <Route
        path="/student-login"
        element={<StudentLogin />}
      />

      {/* Faculty Login */}
      <Route
        path="/faculty-login"
        element={<FacultyLogin />}
      />

      {/* Admin Login */}
      <Route
        path="/admin-login"
        element={<AdminLogin />}
      />
      <Route
  path="/student-dashboard"
  element={<StudentDashboard />}
/>
<Route
  path="/student-attendance"
  element={<StudentAttendance />}

/>
<Route
  path="/student-results"
  element={<StudentResults />}
/>
<Route
  path="/student-timetable"
  element={<StudentTimetable />}
/>
<Route
  path="/student-settings"
  element={<StudentSettings />}
/>
<Route
  path="/faculty-dashboard"
  element={<FacultyDashboard />}
/>
<Route
  path="/faculty-attendance-qr"
  element={<FacultyAttendanceQR />}
/>
<Route
  path="/student-scan"
  element={<StudentQRScanner />}
/>
      {/* Unknown URL */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default App;