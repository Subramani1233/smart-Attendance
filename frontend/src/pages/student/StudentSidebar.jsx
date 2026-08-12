import { useLocation, useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  EventAvailableOutlined,
  AssessmentOutlined,
  CalendarMonthOutlined,
  SettingsOutlined,
  MenuBookOutlined,
  QrCode,
} from "@mui/icons-material";

function StudentSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: <HomeOutlined />,
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
      title: "Subjects",
      icon: <MenuBookOutlined />,
      path: "/student-subjects",
    },
    {
      title: "Scan Attendance",
      icon: <QrCode />,
      path: "/student-scan",
    },
    {
      title: "Settings",
      icon: <SettingsOutlined />,
      path: "/student-settings",
    },
  ];

  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-60 border-r border-slate-200 bg-white dark:border-slate-700 dark:bg-[#111827] md:block">

      {/* LOGO */}
      <div className="flex h-20 items-center gap-3 border-b border-slate-100 px-5 dark:border-slate-700">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-lg text-white">
          🎓
        </div>

        <div>
          <p className="text-sm font-bold text-slate-900 dark:text-white">
            College
          </p>

          <p className="text-[9px] text-slate-400">
            SMART ATTENDANCE
          </p>
        </div>

      </div>

      {/* MENU */}
      <div className="px-3 py-6">

        {menuItems.map((item) => {

          const active = location.pathname === item.path;

          return (
            <button
              key={item.title}
              onClick={() => navigate(item.path)}
              className={`mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition ${
                active
                  ? "bg-gradient-to-r from-blue-600 to-violet-600 font-semibold text-white shadow-md"
                  : "text-slate-500 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-400"
              }`}
            >

              <span className="flex w-5 items-center justify-center">
                {item.icon}
              </span>

              {item.title}

            </button>
          );
        })}

      </div>
    </aside>
  );
}

export default StudentSidebar;