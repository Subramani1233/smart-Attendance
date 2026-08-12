import React from "react";
import { Outlet } from "react-router-dom";
import StudentSidebar from "../components/StudentSidebar";

function StudentLayout() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a]">
      {/* Student Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <main className="min-h-screen md:ml-60">
        <Outlet />
      </main>
    </div>
  );
}

export default StudentLayout;