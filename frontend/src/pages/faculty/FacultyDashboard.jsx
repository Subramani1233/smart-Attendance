import React, { useMemo, useState } from "react";
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
  FileText,
  Download,
  CalendarDays,
  Lock,
  Mail,
  LogOut,
  AlertTriangle,
  Info,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const FacultyDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("dashboard");
  const [attendanceSearch, setAttendanceSearch] = useState("");
  const [attendanceSubject, setAttendanceSubject] = useState("All");
  const [attendanceClass, setAttendanceClass] = useState("All");
  const [attendanceStatus, setAttendanceStatus] = useState("All");
  const [attendanceDate, setAttendanceDate] = useState("");
  const [studentSearch, setStudentSearch] = useState("");
  const [studentClass, setStudentClass] = useState("All");
  const [studentStatus, setStudentStatus] = useState("All");

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

  const attendanceRecords = [
    {
      student: "Arun Kumar",
      regNo: "STU001",
      subject: "Web Development",
      class: "BCA-A",
      date: "2026-08-12",
      status: "Present",
      time: "09:42 AM",
      qrStatus: "Scanned",
    },
    {
      student: "Priya S",
      regNo: "STU002",
      subject: "Database Management",
      class: "BCA-A",
      date: "2026-08-12",
      status: "Absent",
      time: "11:00 AM",
      qrStatus: "Not scanned",
    },
    {
      student: "Rahul M",
      regNo: "STU003",
      subject: "UI / UX Design",
      class: "BCA-B",
      date: "2026-08-12",
      status: "Present",
      time: "02:00 PM",
      qrStatus: "Scanned",
    },
    {
      student: "Divya R",
      regNo: "STU004",
      subject: "Web Development",
      class: "BCA-A",
      date: "2026-08-12",
      status: "Present",
      time: "09:55 AM",
      qrStatus: "Scanned",
    },
  ];

  const studentList = [
    {
      name: "Arun Kumar",
      regNo: "STU001",
      class: "BCA-A",
      status: "Active",
      attendance: "92%",
    },
    {
      name: "Priya S",
      regNo: "STU002",
      class: "BCA-A",
      status: "Active",
      attendance: "86%",
    },
    {
      name: "Rahul M",
      regNo: "STU003",
      class: "BCA-B",
      status: "Low Attendance",
      attendance: "68%",
    },
    {
      name: "Divya R",
      regNo: "STU004",
      class: "BCA-A",
      status: "Active",
      attendance: "94%",
    },
  ];

  const reports = [
    {
      title: "Daily Report",
      value: "Today",
      icon: CalendarDays,
      description: "Present vs absent count",
    },
    {
      title: "Weekly Summary",
      value: "7 days",
      icon: FileText,
      description: "Attendance trends",
    },
    {
      title: "Subject-wise",
      value: "By subject",
      icon: BookOpen,
      description: "Compare subjects",
    },
    {
      title: "Student-wise",
      value: "By student",
      icon: Users,
      description: "Individual records",
    },
  ];

  const notifications = [
    {
      title: "Low Attendance Alert",
      message: "Rahul M attendance dropped below 75%.",
      type: "alert",
    },
    {
      title: "QR Expired",
      message: "Your last QR code session expired 20 minutes ago.",
      type: "warning",
    },
    {
      title: "Session Completed",
      message: "UI / UX Design attendance is now closed.",
      type: "info",
    },
    {
      title: "New Attendance Activity",
      message: "12 students scanned the class QR code.",
      type: "info",
    },
  ];

  const filteredAttendance = useMemo(() => {
    return attendanceRecords.filter((record) => {
      const matchesSearch =
        attendanceSearch === "" ||
        record.student.toLowerCase().includes(attendanceSearch.toLowerCase()) ||
        record.regNo.toLowerCase().includes(attendanceSearch.toLowerCase());
      const matchesSubject =
        attendanceSubject === "All" || record.subject === attendanceSubject;
      const matchesClass =
        attendanceClass === "All" || record.class === attendanceClass;
      const matchesStatus =
        attendanceStatus === "All" || record.status === attendanceStatus;
      const matchesDate =
        attendanceDate === "" || record.date === attendanceDate;

      return (
        matchesSearch &&
        matchesSubject &&
        matchesClass &&
        matchesStatus &&
        matchesDate
      );
    });
  }, [attendanceSearch, attendanceSubject, attendanceClass, attendanceStatus, attendanceDate]);

  const filteredStudents = useMemo(() => {
    return studentList.filter((student) => {
      const matchesSearch =
        studentSearch === "" ||
        student.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
        student.regNo.toLowerCase().includes(studentSearch.toLowerCase());
      const matchesClass =
        studentClass === "All" || student.class === studentClass;
      const matchesStatus =
        studentStatus === "All" || student.status === studentStatus;
      return matchesSearch && matchesClass && matchesStatus;
    });
  }, [studentSearch, studentClass, studentStatus]);

  const renderSection = () => {
    switch (activeSection) {
      case "attendance":
        return (
          <section className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Attendance</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Search, filter and review attendance records.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                <input
                  type="text"
                  value={attendanceSearch}
                  onChange={(e) => setAttendanceSearch(e.target.value)}
                  placeholder="Search student"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
                />
                <input
                  type="date"
                  value={attendanceDate}
                  onChange={(e) => setAttendanceDate(e.target.value)}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
                />
                <select
                  value={attendanceSubject}
                  onChange={(e) => setAttendanceSubject(e.target.value)}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
                >
                  <option>All</option>
                  <option>Web Development</option>
                  <option>Database Management</option>
                  <option>UI / UX Design</option>
                </select>
                <select
                  value={attendanceClass}
                  onChange={(e) => setAttendanceClass(e.target.value)}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
                >
                  <option>All</option>
                  <option>BCA-A</option>
                  <option>BCA-B</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-500">Status:</span>
                <select
                  value={attendanceStatus}
                  onChange={(e) => setAttendanceStatus(e.target.value)}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
                >
                  <option>All</option>
                  <option>Present</option>
                  <option>Absent</option>
                </select>
              </div>
              <div className="text-sm text-slate-400">
                QR status shows whether the student scanned the QR code.
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full min-w-[900px] text-left">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-400">
                  <tr>
                    <th className="px-4 py-4 font-semibold">Student</th>
                    <th className="px-4 py-4 font-semibold">Subject</th>
                    <th className="px-4 py-4 font-semibold">Class</th>
                    <th className="px-4 py-4 font-semibold">Date</th>
                    <th className="px-4 py-4 font-semibold">Status</th>
                    <th className="px-4 py-4 font-semibold">QR Attendance Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAttendance.map((record, index) => (
                    <tr key={index} className="border-t border-slate-100">
                      <td className="px-4 py-4 text-sm text-slate-700">{record.student}</td>
                      <td className="px-4 py-4 text-sm text-slate-500">{record.subject}</td>
                      <td className="px-4 py-4 text-sm text-slate-500">{record.class}</td>
                      <td className="px-4 py-4 text-sm text-slate-500">{record.date}</td>
                      <td className="px-4 py-4 text-sm font-semibold text-slate-700">
                        <span
                          className={`rounded-full px-3 py-1 text-xs ${
                            record.status === "Present"
                              ? "bg-emerald-50 text-emerald-600"
                              : "bg-rose-50 text-rose-600"
                          }`}
                        >
                          {record.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-500">{record.qrStatus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );

      case "students":
        return (
          <section className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Students</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Search student records and view attendance percentages.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <input
                  type="text"
                  value={studentSearch}
                  onChange={(e) => setStudentSearch(e.target.value)}
                  placeholder="Search student"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
                />
                <select
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
                >
                  <option>All</option>
                  <option>BCA-A</option>
                  <option>BCA-B</option>
                </select>
                <select
                  value={studentStatus}
                  onChange={(e) => setStudentStatus(e.target.value)}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
                >
                  <option>All</option>
                  <option>Active</option>
                  <option>Low Attendance</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full min-w-[820px] text-left">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-400">
                  <tr>
                    <th className="px-4 py-4 font-semibold">Student Name</th>
                    <th className="px-4 py-4 font-semibold">Register No</th>
                    <th className="px-4 py-4 font-semibold">Class / Section</th>
                    <th className="px-4 py-4 font-semibold">Status</th>
                    <th className="px-4 py-4 font-semibold">Attendance %</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student, index) => (
                    <tr key={index} className="border-t border-slate-100 hover:bg-slate-50">
                      <td className="px-4 py-4 text-sm text-slate-700">{student.name}</td>
                      <td className="px-4 py-4 text-sm text-slate-500">{student.regNo}</td>
                      <td className="px-4 py-4 text-sm text-slate-500">{student.class}</td>
                      <td className="px-4 py-4 text-sm font-semibold text-slate-700">{student.status}</td>
                      <td className="px-4 py-4 text-sm text-slate-500">{student.attendance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );

      case "reports":
        return (
          <section className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Reports</h3>
                <p className="mt-1 text-sm text-slate-400">
                  View daily, weekly, monthly, and student-wise attendance insights.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 rounded-2xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-700">
                <Download size={16} />
                Export / Download
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {reports.map((report, index) => {
                const Icon = report.icon;
                return (
                  <div key={index} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-violet-600 shadow-sm">
                        <Icon size={20} />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-slate-500">{report.title}</p>
                        <h4 className="text-xl font-semibold text-slate-900">{report.value}</h4>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-slate-500">{report.description}</p>
                  </div>
                );
              })}
            </div>
          </section>
        );

      case "notifications":
        return (
          <section className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Notifications</h3>
              <p className="mt-1 text-sm text-slate-400">
                Stay informed with low attendance alerts, QR expirations, and session updates.
              </p>
            </div>

            <div className="space-y-4">
              {notifications.map((item, index) => (
                <div key={index} className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="mt-1 h-10 w-10 rounded-2xl bg-white p-2 text-violet-600 shadow-sm">
                    {item.type === "alert" ? <AlertTriangle size={20} /> : <Info size={20} />}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );

      case "settings":
        return (
          <section className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Settings</h3>
              <p className="mt-1 text-sm text-slate-400">
                Update faculty info, notification preferences, and logout.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-500">Faculty Name</p>
                <p className="mt-2 text-sm text-slate-900">Anitha S</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-500">Faculty ID</p>
                <p className="mt-2 text-sm text-slate-900">FAC-3021</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-500">Email</p>
                <p className="mt-2 text-sm text-slate-900">anitha.s@smartattend.edu</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-500">Department</p>
                <p className="mt-2 text-sm text-slate-900">Computer Science</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <button className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                <Lock size={16} className="inline-block mr-2" />
                Change Password
              </button>
              <button className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                <Bell size={16} className="inline-block mr-2" />
                Notification Settings
              </button>
            </div>

            <button className="mt-2 inline-flex items-center gap-2 rounded-2xl bg-rose-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-600">
              <LogOut size={16} />
              Logout
            </button>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <aside className="fixed left-0 top-0 z-40 flex h-screen w-72 flex-col border-r border-slate-200 bg-white">
        <div className="flex h-20 items-center gap-3 border-b border-slate-100 px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-md">
            <ClipboardCheck size={22} />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900">SmartAttend</h1>
            <p className="text-xs text-slate-400">Faculty Portal</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-4 py-6">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Faculty Dashboard</p>
          {[
            { label: "Dashboard", value: "dashboard", icon: LayoutDashboard },
            { label: "Attendance", value: "attendance", icon: ClipboardCheck },
            { label: "Students", value: "students", icon: Users },
            { label: "Reports", value: "reports", icon: FileText },
            { label: "Notifications", value: "notifications", icon: Bell },
            { label: "Settings", value: "settings", icon: Settings },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.value;
            return (
              <button
                key={item.value}
                onClick={() => setActiveSection(item.value)}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-violet-50 text-violet-600"
                    : "text-slate-500 hover:bg-slate-50 hover:text-violet-600"
                }`}
              >
                <Icon size={19} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="border-t border-slate-100 p-4">
          <div className="flex items-center gap-3 rounded-xl p-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 font-semibold text-violet-600">AS</div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-800">Anitha S</p>
              <p className="truncate text-xs text-slate-400">Faculty</p>
            </div>
            <ChevronDown size={16} className="text-slate-400" />
          </div>
        </div>
      </aside>

      <main className="ml-72 min-h-screen">
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-8 backdrop-blur">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Faculty Dashboard</h2>
            <p className="text-sm text-slate-400">Manage your classes and attendance</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="hidden items-center gap-2 rounded-2xl bg-slate-50 px-4 py-2.5 md:flex">
              <Search size={18} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search students..."
                className="w-48 bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
            <button className="relative rounded-2xl p-2.5 transition hover:bg-slate-100">
              <Bell size={21} className="text-slate-500" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-sm font-semibold text-violet-600">AS</div>
              <ChevronDown size={16} className="text-slate-400" />
            </div>
          </div>
        </header>

        <div className="space-y-7 p-8">
          <section className="flex flex-col justify-between gap-5 rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 p-7 text-white shadow-lg md:flex-row md:items-center">
            <div>
              <p className="mb-1 text-sm text-violet-100">Saturday, August 8, 2026</p>
              <h1 className="text-2xl font-bold">Good Morning, Anitha! 👋</h1>
              <p className="mt-2 max-w-2xl text-sm text-violet-100">
                Here's what's happening with your classes and attendance today.
              </p>
            </div>
            <button
              onClick={() => navigate("/faculty-attendance-qr")}
              className="mt-4 flex w-full max-w-xs items-center justify-center gap-2 rounded-2xl bg-white/10 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              <QrCode size={18} />
              Generate QR Code
            </button>
          </section>

          {activeSection === "dashboard" && (
            <>
              <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-medium text-slate-400">{stat.title}</p>
                          <h3 className="mt-3 text-3xl font-bold text-slate-900">{stat.value}</h3>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                          <Icon size={22} />
                        </div>
                      </div>
                      <p className="mt-5 text-sm font-medium text-emerald-500">{stat.change}</p>
                    </div>
                  );
                })}
              </section>

              <section className="grid gap-6 xl:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900">Attendance QR</h3>
                      <p className="mt-1 text-xs text-slate-400">Share QR with your students</p>
                    </div>
                    <div className="rounded-2xl bg-violet-50 p-2.5 text-violet-600">
                      <QrCode size={20} />
                    </div>
                  </div>
                  <div className="mx-auto mt-6 flex h-44 w-44 items-center justify-center rounded-3xl border-2 border-dashed border-violet-200 bg-violet-50">
                    <div className="text-center">
                      <QrCode size={80} strokeWidth={1.5} className="mx-auto text-violet-500" />
                      <p className="mt-2 text-xs font-medium text-violet-500">QR not generated</p>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate("/faculty-attendance-qr")}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-600 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
                  >
                    <QrCode size={18} />
                    Create QR Code
                  </button>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900">Today's Classes</h3>
                      <p className="mt-1 text-xs text-slate-400">Your scheduled classes for today</p>
                    </div>
                    <button className="text-sm font-medium text-violet-600 hover:underline">View All</button>
                  </div>
                  <div className="space-y-4">
                    {classes.map((item, index) => (
                      <div key={index} className="flex flex-col gap-4 rounded-3xl border border-slate-100 p-4 transition hover:bg-slate-50 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                            <BookOpen size={20} />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-slate-800">{item.subject}</h4>
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
                        <span className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${item.status === "Completed" ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600"}`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900">Recent Attendance</h3>
                    <p className="mt-1 text-xs text-slate-400">Latest attendance records</p>
                  </div>
                  <button className="text-sm font-medium text-violet-600 hover:underline">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[650px] text-left">
                    <thead>
                      <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
                        <th className="pb-4 font-semibold">Student</th>
                        <th className="pb-4 font-semibold">Subject</th>
                        <th className="pb-4 font-semibold">Time</th>
                        <th className="pb-4 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendanceRecords.map((student, index) => (
                        <tr key={index} className="border-b border-slate-50 last:border-none">
                          <td className="py-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                                {student.student.split(" ").map((n) => n[0]).join("")}
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-slate-700">{student.student}</p>
                                <p className="text-xs text-slate-400">{student.regNo}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 text-sm text-slate-500">{student.subject}</td>
                          <td className="py-4 text-sm text-slate-500">{student.time}</td>
                          <td className="py-4">
                            <span className={`rounded-full px-3 py-1 text-xs font-medium ${student.status === "Present" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"}`}>
                              {student.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </>
          )}

          {activeSection !== "dashboard" && renderSection()}
        </div>
      </main>
    </div>
  );
};

export default FacultyDashboard;
