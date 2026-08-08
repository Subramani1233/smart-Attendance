import React from "react";
import {
  LayoutDashboard,
  ClipboardCheck,
  BookOpen,
  Settings,
  Search,
  Bell,
  ChevronDown,
  Users,
  UserCheck,
  UserX,
  TrendingUp,
  QrCode,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const FacultyDashboard = () => {
    const navigate = useNavigate();
  const stats = [
    {
      title: "Total Students",
      value: "120",
      icon: Users,
      change: "+8 this month",
    },
    {
      title: "Present Today",
      value: "108",
      icon: UserCheck,
      change: "90% attendance",
    },
    {
      title: "Absent Today",
      value: "12",
      icon: UserX,
      change: "10% absent",
    },
    {
      title: "Attendance Rate",
      value: "90%",
      icon: TrendingUp,
      change: "+4.2% this week",
    },
  ];

  const classes = [
    {
      subject: "Web Development",
      time: "09:00 AM - 10:00 AM",
      room: "Room 204",
      students: "42 Students",
      status: "Completed",
    },
    {
      subject: "Database Management",
      time: "11:00 AM - 12:00 PM",
      room: "Room 105",
      students: "38 Students",
      status: "Upcoming",
    },
    {
      subject: "UI / UX Design",
      time: "02:00 PM - 03:00 PM",
      room: "Lab 2",
      students: "40 Students",
      status: "Upcoming",
    },
  ];

  const recentAttendance = [
    {
      name: "Arun Kumar",
      id: "STU001",
      subject: "Web Development",
      time: "09:42 AM",
      status: "Present",
    },
    {
      name: "Priya S",
      id: "STU002",
      subject: "Web Development",
      time: "09:44 AM",
      status: "Present",
    },
    {
      name: "Rahul M",
      id: "STU003",
      subject: "Web Development",
      time: "09:51 AM",
      status: "Late",
    },
    {
      name: "Divya R",
      id: "STU004",
      subject: "Web Development",
      time: "09:55 AM",
      status: "Present",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* ================= SIDEBAR ================= */}
      <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-slate-200 bg-white">

        {/* Logo */}
        <div className="flex h-20 items-center gap-3 border-b border-slate-100 px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-md">
            <ClipboardCheck size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              SmartAttend
            </h1>
            <p className="text-xs text-slate-400">
              Faculty Portal
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 px-4 py-6">

          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Main Menu
          </p>

          <button className="flex w-full items-center gap-3 rounded-xl bg-violet-50 px-4 py-3 text-sm font-semibold text-violet-600">
            <LayoutDashboard size={19} />
            Dashboard
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-violet-600">
            <ClipboardCheck size={19} />
            Attendance
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-violet-600">
            <BookOpen size={19} />
            Subjects
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-violet-600">
            <Settings size={19} />
            Settings
          </button>

        </nav>

        {/* Faculty Profile */}
        <div className="border-t border-slate-100 p-4">
          <div className="flex items-center gap-3 rounded-xl p-2">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 font-semibold text-violet-600">
              AS
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-800">
                Anitha S
              </p>
              <p className="truncate text-xs text-slate-400">
                Faculty
              </p>
            </div>

            <ChevronDown size={16} className="text-slate-400" />

          </div>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="ml-64 min-h-screen">

        {/* ================= HEADER ================= */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-8 backdrop-blur">

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Faculty Dashboard
            </h2>

            <p className="text-sm text-slate-400">
              Manage your classes and attendance
            </p>
          </div>

          <div className="flex items-center gap-5">

            {/* Search */}
            <div className="hidden items-center gap-2 rounded-xl bg-slate-50 px-4 py-2.5 md:flex">
              <Search size={18} className="text-slate-400" />

              <input
                type="text"
                placeholder="Search students..."
                className="w-48 bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>

            {/* Notification */}
            <button className="relative rounded-xl p-2.5 transition hover:bg-slate-100">
              <Bell size={21} className="text-slate-500" />

              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            {/* Profile */}
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-sm font-semibold text-violet-600">
                AS
              </div>

              <ChevronDown size={16} className="text-slate-400" />
            </div>

          </div>
        </header>

        {/* ================= CONTENT ================= */}
        <div className="space-y-7 p-8">

          {/* Welcome */}
          <section className="flex flex-col justify-between gap-5 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 p-7 text-white shadow-lg md:flex-row md:items-center">

            <div>
              <p className="mb-1 text-sm text-violet-100">
                Saturday, August 8, 2026
              </p>

              <h1 className="text-2xl font-bold">
                Good Morning, Anitha! 👋
              </h1>

              <p className="mt-2 max-w-lg text-sm text-violet-100">
                Here's what's happening with your classes and
                attendance today.
              </p>
            </div>

            {/* QR Button */}
           <button
  onClick={() => navigate("/faculty-attendance-qr")}
  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
>
  <QrCode size={18} />
  Create QR Code
</button>

          </section>

          {/* ================= STATS ================= */}
          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >

                  <div className="flex items-start justify-between">

                    <div>
                      <p className="text-sm font-medium text-slate-400">
                        {stat.title}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-slate-900">
                        {stat.value}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                      <Icon size={21} />
                    </div>

                  </div>

                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-emerald-500">
                    <ArrowUpRight size={14} />
                    {stat.change}
                  </div>

                </div>
              );
            })}

          </section>

          {/* ================= QR + TODAY'S CLASSES ================= */}
          <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">

            {/* QR Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900">
                    Attendance QR
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    Share QR with your students
                  </p>
                </div>

                <div className="rounded-xl bg-violet-50 p-2.5 text-violet-600">
                  <QrCode size={20} />
                </div>
              </div>

              {/* QR Placeholder */}
              <div className="mx-auto mt-6 flex h-44 w-44 items-center justify-center rounded-2xl border-2 border-dashed border-violet-200 bg-violet-50">
                <div className="text-center">
                  <QrCode
                    size={80}
                    strokeWidth={1.5}
                    className="mx-auto text-violet-500"
                  />

                  <p className="mt-2 text-xs font-medium text-violet-500">
                    QR not generated
                  </p>
                </div>
              </div>

              <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 text-sm font-semibold text-white transition hover:bg-violet-700">
                <QrCode size={18} />
                Create QR Code
              </button>

            </div>

            {/* Today's Classes */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">

              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900">
                    Today's Classes
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    Your scheduled classes for today
                  </p>
                </div>

                <button className="text-sm font-medium text-violet-600 hover:underline">
                  View All
                </button>
              </div>

              <div className="space-y-3">

                {classes.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-4 rounded-xl border border-slate-100 p-4 transition hover:bg-slate-50 md:flex-row md:items-center md:justify-between"
                  >

                    <div className="flex items-center gap-4">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <BookOpen size={20} />
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-slate-800">
                          {item.subject}
                        </h4>

                        <div className="mt-1 flex flex-wrap gap-3 text-xs text-slate-400">
                          <span className="flex items-center gap-1">
                            <Clock size={13} />
                            {item.time}
                          </span>

                          <span>{item.room}</span>
                          <span>{item.students}</span>
                        </div>
                      </div>

                    </div>

                    <span
                      className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${
                        item.status === "Completed"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      {item.status}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </section>

          {/* ================= ATTENDANCE TABLE ================= */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center justify-between">

              <div>
                <h3 className="font-bold text-slate-900">
                  Recent Attendance
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                  Latest attendance records
                </p>
              </div>

              <button className="text-sm font-medium text-violet-600 hover:underline">
                View All
              </button>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full min-w-[650px] text-left">

                <thead>
                  <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
                    <th className="pb-4 font-semibold">
                      Student
                    </th>

                    <th className="pb-4 font-semibold">
                      Subject
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

                  {recentAttendance.map((student, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-50 last:border-none"
                    >

                      <td className="py-4">

                        <div className="flex items-center gap-3">

                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                            {student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-slate-700">
                              {student.name}
                            </p>

                            <p className="text-xs text-slate-400">
                              {student.id}
                            </p>
                          </div>

                        </div>

                      </td>

                      <td className="py-4 text-sm text-slate-500">
                        {student.subject}
                      </td>

                      <td className="py-4 text-sm text-slate-500">
                        {student.time}
                      </td>

                      <td className="py-4">

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            student.status === "Present"
                              ? "bg-emerald-50 text-emerald-600"
                              : "bg-amber-50 text-amber-600"
                          }`}
                        >
                          {student.status}
                        </span>

                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </section>

        </div>
      </main>
    </div>
  );
};

export default FacultyDashboard;