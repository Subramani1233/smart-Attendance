import { useState } from "react";
import { useNavigate } from "react-router-dom";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const periods = [
  "9:00 - 9:50",
  "9:50 - 10:40",
  "10:55 - 11:45",
  "11:45 - 12:35",
  "1:15 - 1:55",
  "1:55 - 2:35",
  "2:50 - 3:30",
];

const timetable = {
  Monday: [
    ["HVE", "Human Values & Ethics", "CSE-204"],
    ["ITA", "IT in Agricultural System", "CSE-204"],
    ["TIF", "Traditional Indian Foods", "CSE-204"],
    ["HVE", "Human Values & Ethics", "CSE-204"],
    ["POM", "Principles of Management", "CSE-204"],
    ["POM", "Principles of Management", "CSE-204"],
    ["PT", "Skill Training", "Ground"],
  ],

  Tuesday: [
    ["ITA", "IT in Agricultural System", "CSE-204"],
    ["HVE", "Human Values & Ethics", "CSE-204"],
    ["POM", "Principles of Management", "CSE-204"],
    ["POM", "Principles of Management", "CSE-204"],
    ["TIF", "Traditional Indian Foods", "CSE-204"],
    ["ITA", "IT in Agricultural System", "CSE-204"],
    ["PT", "Skill Training", "Ground"],
  ],

  Wednesday: [
    ["POM", "Principles of Management", "CSE-204"],
    ["POM", "Principles of Management", "CSE-204"],
    ["TIF", "Traditional Indian Foods", "CSE-204"],
    ["ITA", "IT in Agricultural System", "CSE-204"],
    ["TIF", "Traditional Indian Foods", "CSE-204"],
    ["HVE", "Human Values & Ethics", "CSE-204"],
    ["PT", "Skill Training", "Ground"],
  ],

  Thursday: [
    ["TIF", "Traditional Indian Foods", "CSE-204"],
    ["ITA", "IT in Agricultural System", "CSE-204"],
    ["HVE", "Human Values & Ethics", "CSE-204"],
    ["HVE", "Human Values & Ethics", "CSE-204"],
    ["TIF", "Traditional Indian Foods", "CSE-204"],
    ["ITA", "IT in Agricultural System", "CSE-204"],
    ["NPTEL", "NPTEL / PT", "Seminar Hall"],
  ],

  Friday: [
    ["TIF", "Traditional Indian Foods", "CSE-204"],
    ["NAAN", "Naan Mudhalvan", "Lab"],
    ["NAAN", "Naan Mudhalvan", "Lab"],
    ["NAAN", "Naan Mudhalvan", "Lab"],
    ["HVE", "Human Values & Ethics", "CSE-204"],
    ["ITA", "IT in Agricultural System", "CSE-204"],
    ["PT", "Skill Training", "Ground"],
  ],
};

const internalExams = [
  {
    date: "12 Sep 2026",
    day: "Saturday",
    subject: "Database Management",
    code: "CS301",
    time: "9:30 AM - 11:00 AM",
    room: "CSE-204",
  },
  {
    date: "14 Sep 2026",
    day: "Monday",
    subject: "Web Technology",
    code: "CS302",
    time: "9:30 AM - 11:00 AM",
    room: "CSE-204",
  },
  {
    date: "16 Sep 2026",
    day: "Wednesday",
    subject: "Artificial Intelligence",
    code: "CS304",
    time: "9:30 AM - 11:00 AM",
    room: "CSE-204",
  },
  {
    date: "18 Sep 2026",
    day: "Friday",
    subject: "Software Engineering",
    code: "CS303",
    time: "9:30 AM - 11:00 AM",
    room: "CSE-204",
  },
];

const weeklyExams = [
  {
    day: "Monday",
    subject: "Database Management",
    time: "9:00 - 9:30 AM",
    room: "CSE-204",
  },
  {
    day: "Wednesday",
    subject: "Web Technology",
    time: "9:00 - 9:30 AM",
    room: "CSE-204",
  },
  {
    day: "Friday",
    subject: "Artificial Intelligence",
    time: "9:00 - 9:30 AM",
    room: "CSE-204",
  },
];

const events = [
  {
    type: "Workshop",
    title: "AI & Future Technologies",
    date: "Today",
    time: "10:00 AM - 12:00 PM",
    venue: "Seminar Hall",
  },
  {
    type: "Seminar",
    title: "Career Guidance Seminar",
    date: "18 Sep 2026",
    time: "2:00 PM - 4:00 PM",
    venue: "Auditorium",
  },
  {
    type: "Meeting",
    title: "Department Student Meeting",
    date: "20 Sep 2026",
    time: "11:00 AM - 12:00 PM",
    venue: "CSE Block",
  },
];

function StudentTimetable() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("weekly");

  const menuItems = [
    {
      name: "Dashboard",
      icon: "▣",
      path: "/student-dashboard",
    },
    {
      name: "Attendance",
      icon: "✓",
      path: "/student-attendance",
    },
    {
      name: "Results",
      icon: "▤",
      path: "/student-results",
    },
    {
      name: "Timetable",
      icon: "▦",
      path: "/student-timetable",
    },
    {
      name: "Settings",
      icon: "⚙",
      path: "/student-settings",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-800">

      {/* SIDEBAR */}

      <aside className="fixed left-0 top-0 hidden h-screen w-60 border-r border-slate-200 bg-white md:block">

        {/* Logo */}

        <div className="flex h-20 items-center gap-3 border-b border-slate-100 px-5">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-lg text-white">
            🎓
          </div>

          <div>
            <p className="text-sm font-bold text-slate-900">
              College
            </p>

            <p className="text-[9px] text-slate-400">
              SMART ATTENDANCE
            </p>
          </div>

        </div>

        {/* Menu */}

        <div className="px-3 py-6">

          {menuItems.map((item) => {

            const active = item.name === "Timetable";

            return (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition ${
                  active
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 font-semibold text-white shadow-md"
                    : "text-slate-500 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <span className="w-5 text-center">
                  {item.icon}
                </span>

                {item.name}
              </button>
            );
          })}

        </div>

      </aside>

      {/* MAIN */}

      <main className="md:ml-60">

        {/* HEADER */}

        <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-8">

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Timetable
            </h1>

            <p className="mt-1 text-xs text-slate-400">
              Academic schedule & examinations
            </p>
          </div>

          <div className="flex items-center gap-3">

            <button className="rounded-full bg-slate-100 p-2 text-sm">
              🔔
            </button>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-xs font-bold text-white">
              AM
            </div>

            <div className="hidden sm:block">
              <p className="text-xs font-semibold">
                Aslin Mercy
              </p>

              <p className="text-[10px] text-slate-400">
                Student
              </p>
            </div>

          </div>

        </header>

        {/* CONTENT */}

        <section className="p-4 sm:p-6 lg:p-8">

          {/* CLASS DETAILS */}

          <div className="mb-6 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-5 text-white shadow-lg">

            <div className="flex items-center justify-between">

              <div>

                <p className="mb-2 text-xs text-blue-100">
                  ACADEMIC TIMETABLE
                </p>

                <h2 className="text-lg font-bold">
                  B.Tech Computer Science
                </h2>

                <p className="mt-1 text-xs text-blue-100">
                  3rd Year • Semester 5 • Section A
                </p>

              </div>

              <div className="hidden text-5xl opacity-30 sm:block">
                📅
              </div>

            </div>

          </div>

          {/* TABS */}

          <div className="mb-6 flex overflow-x-auto rounded-xl border border-slate-200 bg-white p-1">

            <button
              onClick={() => setActiveTab("weekly")}
              className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-xs font-semibold ${
                activeTab === "weekly"
                  ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              📅 Weekly Timetable
            </button>

            <button
              onClick={() => setActiveTab("internal")}
              className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-xs font-semibold ${
                activeTab === "internal"
                  ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              📝 Internal Exam
            </button>

            <button
              onClick={() => setActiveTab("weeklyExam")}
              className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-xs font-semibold ${
                activeTab === "weeklyExam"
                  ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              📋 Weekly Exam
            </button>

            <button
              onClick={() => setActiveTab("events")}
              className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-xs font-semibold ${
                activeTab === "events"
                  ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              📢 Events
            </button>

          </div>

          {/* WEEKLY TIMETABLE */}

          {activeTab === "weekly" && (
            <>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <div className="mb-5 flex items-center justify-between">

                  <div>
                    <h2 className="text-sm font-bold text-slate-900">
                      Weekly Class Timetable
                    </h2>

                    <p className="mt-1 text-[10px] text-slate-400">
                      Monday to Friday • Regular academic schedule
                    </p>
                  </div>

                  <span className="rounded-lg bg-green-50 px-3 py-1.5 text-[9px] font-semibold text-green-600">
                    View Only
                  </span>

                </div>

                {/* DESKTOP TABLE */}

                <div className="hidden overflow-x-auto lg:block">

                  <table className="w-full min-w-[900px] border-collapse">

                    <thead>

                      <tr className="bg-slate-50">

                        <th className="border border-slate-200 p-3 text-left text-[10px] font-bold text-slate-500">
                          TIME
                        </th>

                        {days.map((day) => (
                          <th
                            key={day}
                            className="border border-slate-200 p-3 text-center text-[10px] font-bold text-slate-600"
                          >
                            {day.toUpperCase()}
                          </th>
                        ))}

                      </tr>

                    </thead>

                    <tbody>

                      {periods.map((period, index) => (

                        <tr key={period}>

                          <td className="border border-slate-200 bg-slate-50 p-3 text-[9px] font-semibold text-slate-500">
                            {period}
                          </td>

                          {days.map((day) => {

                            const item = timetable[day][index];

                            return (
                              <td
                                key={`${day}-${period}`}
                                className="border border-slate-200 p-2 align-top"
                              >

                                <div className="min-h-[75px] rounded-lg bg-blue-50 p-2">

                                  <p className="text-[11px] font-bold text-blue-700">
                                    {item[0]}
                                  </p>

                                  <p className="mt-1 text-[9px] leading-3 text-slate-600">
                                    {item[1]}
                                  </p>

                                  <p className="mt-2 text-[8px] text-slate-400">
                                    📍 {item[2]}
                                  </p>

                                </div>

                              </td>
                            );
                          })}

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>

                {/* MOBILE */}

                <div className="space-y-4 lg:hidden">

                  {days.map((day) => (

                    <div
                      key={day}
                      className="overflow-hidden rounded-xl border border-slate-200"
                    >

                      <div className="bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 text-xs font-bold text-white">
                        {day}
                      </div>

                      <div className="divide-y divide-slate-100">

                        {timetable[day].map((item, index) => (

                          <div
                            key={`${day}-${index}`}
                            className="flex gap-3 p-3"
                          >

                            <div className="w-24 shrink-0 pt-2">
                              <p className="text-[9px] font-semibold text-slate-500">
                                {periods[index]}
                              </p>
                            </div>

                            <div className="flex-1 rounded-lg bg-blue-50 p-3">

                              <p className="text-xs font-bold text-blue-700">
                                {item[0]}
                              </p>

                              <p className="mt-1 text-[10px] text-slate-600">
                                {item[1]}
                              </p>

                              <p className="mt-1 text-[9px] text-slate-400">
                                📍 {item[2]}
                              </p>

                            </div>

                          </div>

                        ))}

                      </div>

                    </div>

                  ))}

                </div>

              </div>

              {/* SPECIAL EVENTS */}

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <div className="mb-5">

                  <h2 className="text-sm font-bold">
                    📢 Special Schedule
                  </h2>

                  <p className="mt-1 text-[10px] text-slate-400">
                    Workshops, seminars, meetings and special classes
                  </p>

                </div>

                <div className="grid gap-4 md:grid-cols-3">

                  {events.map((event) => (

                    <div
                      key={event.title}
                      className="rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50"
                    >

                      <div className="flex items-center justify-between">

                        <span className="rounded-md bg-violet-50 px-2 py-1 text-[9px] font-semibold text-violet-600">
                          {event.type}
                        </span>

                        <span className="text-[9px] text-slate-400">
                          {event.date}
                        </span>

                      </div>

                      <h3 className="mt-4 text-xs font-bold">
                        {event.title}
                      </h3>

                      <div className="mt-3 space-y-1 text-[9px] text-slate-500">
                        <p>🕐 {event.time}</p>
                        <p>📍 {event.venue}</p>
                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </>
          )}

          {/* INTERNAL EXAM */}

          {activeTab === "internal" && (

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="mb-6 flex items-center justify-between">

                <div>
                  <h2 className="text-sm font-bold">
                    Internal Examination Timetable
                  </h2>

                  <p className="mt-1 text-[10px] text-slate-400">
                    Semester 5 • Internal Assessment
                  </p>
                </div>

                <span className="rounded-lg bg-green-50 px-3 py-1.5 text-[9px] font-semibold text-green-600">
                  View Only
                </span>

              </div>

              <div className="space-y-3">

                {internalExams.map((exam) => (

                  <div
                    key={exam.code}
                    className="grid gap-4 rounded-xl border border-slate-200 p-4 md:grid-cols-[140px_1fr_200px_100px]"
                  >

                    <div>
                      <p className="text-xs font-bold">
                        {exam.date}
                      </p>

                      <p className="mt-1 text-[9px] text-slate-400">
                        {exam.day}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-bold text-blue-700">
                        {exam.subject}
                      </p>

                      <p className="mt-1 text-[9px] text-slate-400">
                        Code: {exam.code}
                      </p>
                    </div>

                    <div className="text-[10px] text-slate-500">
                      <p>🕐 {exam.time}</p>
                      <p className="mt-1">📍 {exam.room}</p>
                    </div>

                    <div>
                      <span className="rounded-md bg-green-50 px-2 py-1 text-[9px] font-semibold text-green-600">
                        Scheduled
                      </span>
                    </div>

                  </div>

                ))}

              </div>

            </div>

          )}

          {/* WEEKLY EXAM */}

          {activeTab === "weeklyExam" && (

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="mb-6">

                <h2 className="text-sm font-bold">
                  Weekly Examination
                </h2>

                <p className="mt-1 text-[10px] text-slate-400">
                  Weekly assessment schedule
                </p>

              </div>

              <div className="grid gap-4 md:grid-cols-3">

                {weeklyExams.map((exam) => (

                  <div
                    key={exam.day}
                    className="rounded-xl border border-slate-200 p-5 hover:border-blue-200 hover:bg-blue-50"
                  >

                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-lg">
                      📝
                    </div>

                    <p className="text-xs font-bold">
                      {exam.day}
                    </p>

                    <h3 className="mt-2 text-sm font-bold text-blue-700">
                      {exam.subject}
                    </h3>

                    <div className="mt-3 space-y-2 text-[10px] text-slate-500">
                      <p>🕐 {exam.time}</p>
                      <p>📍 {exam.room}</p>
                    </div>

                    <span className="mt-4 inline-block rounded-md bg-violet-50 px-2 py-1 text-[9px] font-semibold text-violet-600">
                      Weekly Test
                    </span>

                  </div>

                ))}

              </div>

            </div>

          )}

          {/* EVENTS */}

          {activeTab === "events" && (

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="mb-6">

                <h2 className="text-sm font-bold">
                  Workshops & Special Events
                </h2>

                <p className="mt-1 text-[10px] text-slate-400">
                  Events updated by faculty
                </p>

              </div>

              <div className="grid gap-4 md:grid-cols-2">

                {events.map((event) => (

                  <div
                    key={event.title}
                    className="rounded-xl border border-slate-200 p-5 hover:border-blue-200"
                  >

                    <div className="flex items-center justify-between">

                      <div className="text-3xl">
                        📢
                      </div>

                      <span className="rounded-md bg-violet-50 px-2 py-1 text-[9px] font-semibold text-violet-600">
                        {event.type}
                      </span>

                    </div>

                    <h3 className="mt-4 text-sm font-bold">
                      {event.title}
                    </h3>

                    <div className="mt-4 space-y-2 border-t border-slate-100 pt-3 text-[10px] text-slate-500">

                      <p>📅 {event.date}</p>

                      <p>🕐 {event.time}</p>

                      <p>📍 {event.venue}</p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          )}

        </section>

      </main>

    </div>
  );
}

export default StudentTimetable;