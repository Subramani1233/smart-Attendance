import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentSettings() {
  const navigate = useNavigate();

  // =========================
  // DARK MODE
  // =========================

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // =========================
  // PROFILE
  // =========================

  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Aslin Mercy",
    phone: "+91 98765 43210",
  });

  const [savedProfile, setSavedProfile] = useState({
    name: "Aslin Mercy",
    phone: "+91 98765 43210",
  });

  // =========================
  // NOTIFICATIONS
  // =========================

  const [notifications, setNotifications] = useState(true);

  // =========================
  // PASSWORD
  // =========================

  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });

  // =========================
  // SAVE PROFILE
  // =========================

  const handleSaveProfile = () => {
    setSavedProfile(profile);
    setEditing(false);

    alert("Profile updated successfully!");
  };

  // =========================
  // CANCEL EDIT
  // =========================

  const handleCancelEdit = () => {
    setProfile(savedProfile);
    setEditing(false);
  };

  // =========================
  // PASSWORD UPDATE
  // =========================

  const handlePasswordUpdate = (e) => {
    e.preventDefault();

    if (!password.current) {
      alert("Please enter your current password.");
      return;
    }

    if (!password.newPassword) {
      alert("Please enter a new password.");
      return;
    }

    if (password.newPassword !== password.confirm) {
      alert("New password and confirm password do not match.");
      return;
    }

    alert("Password updated successfully!");

    setPassword({
      current: "",
      newPassword: "",
      confirm: "",
    });
  };

  // =========================
  // SIDEBAR
  // =========================

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
    <div className="min-h-screen bg-[#f7f9fc] text-slate-800 transition-colors duration-300 dark:bg-[#0f172a] dark:text-slate-100">

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

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

        {/* SIDEBAR MENU */}

        <div className="px-3 py-6">

          {menuItems.map((item) => {

            const active = item.name === "Settings";

            return (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition ${
                  active
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 font-semibold text-white shadow-md"
                    : "text-slate-500 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-400"
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

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="md:ml-60">

        {/* =================================================
            HEADER
        ================================================= */}

        <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-5 dark:border-slate-700 dark:bg-[#111827] sm:px-8">

          <div>

            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
              Settings
            </h1>

            <p className="mt-1 text-xs text-slate-400">
              Manage your account and preferences
            </p>

          </div>

          {/* HEADER RIGHT */}

          <div className="flex items-center gap-3">

            {/* NOTIFICATION ICON */}

            <button className="rounded-full bg-slate-100 p-2 text-sm transition hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700">
              🔔
            </button>

            {/* PROFILE */}

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-xs font-bold text-white">
              AM
            </div>

            <div className="hidden sm:block">

              <p className="text-xs font-semibold text-slate-800 dark:text-white">
                {profile.name}
              </p>

              <p className="text-[10px] text-slate-400">
                Student
              </p>

            </div>

          </div>

        </header>

        {/* =================================================
            CONTENT
        ================================================= */}

        <section className="space-y-6 p-4 sm:p-6 lg:p-8">

          {/* =================================================
              PROFILE INFORMATION
          ================================================= */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

            {/* PROFILE HEADER */}

            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-xl font-bold text-white">
                  AM
                </div>

                <div>

                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    Profile Information
                  </h2>

                  <p className="text-xs text-slate-400">
                    Manage your personal information
                  </p>

                </div>

              </div>

              {/* EDIT BUTTON */}

              <button
                onClick={() => {
                  if (editing) {
                    handleCancelEdit();
                  } else {
                    setEditing(true);
                  }
                }}
                className="rounded-xl border border-blue-200 px-4 py-2 text-xs font-semibold text-blue-600 transition hover:bg-blue-50 dark:border-blue-900 dark:hover:bg-slate-800"
              >
                {editing ? "Cancel" : "✏️ Edit Profile"}
              </button>

            </div>

            {/* FORM */}

            <div className="grid gap-5 md:grid-cols-2">

              {/* NAME */}

              <div>

                <label className="text-[10px] font-semibold text-slate-400">
                  FULL NAME
                </label>

                <input
                  value={profile.name}
                  disabled={!editing}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      name: e.target.value,
                    })
                  }
                  className={`mt-2 w-full rounded-xl border px-4 py-3 text-xs outline-none transition ${
                    editing
                      ? "border-blue-300 bg-white focus:border-blue-500 dark:border-blue-600 dark:bg-slate-800"
                      : "border-slate-200 bg-slate-50 dark:border-slate-600 dark:bg-slate-800"
                  } dark:text-white`}
                />

              </div>

              {/* ROLL NUMBER */}

              <div>

                <label className="text-[10px] font-semibold text-slate-400">
                  ROLL NUMBER
                </label>

                <input
                  value="CS23A001"
                  disabled
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                />

                <p className="mt-1 text-[9px] text-slate-400">
                  Roll number can only be changed by faculty/admin.
                </p>

              </div>

              {/* EMAIL */}

              <div>

                <label className="text-[10px] font-semibold text-slate-400">
                  COLLEGE EMAIL
                </label>

                <input
                  value="aslin@college.edu"
                  disabled
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                />

                <p className="mt-1 text-[9px] text-slate-400">
                  College email is managed by the institution.
                </p>

              </div>

              {/* PHONE */}

              <div>

                <label className="text-[10px] font-semibold text-slate-400">
                  PHONE NUMBER
                </label>

                <input
                  value={profile.phone}
                  disabled={!editing}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      phone: e.target.value,
                    })
                  }
                  className={`mt-2 w-full rounded-xl border px-4 py-3 text-xs outline-none transition ${
                    editing
                      ? "border-blue-300 bg-white focus:border-blue-500 dark:border-blue-600 dark:bg-slate-800"
                      : "border-slate-200 bg-slate-50 dark:border-slate-600 dark:bg-slate-800"
                  } dark:text-white`}
                />

              </div>

            </div>

            {/* SAVE BUTTON */}

            {editing && (
              <div className="mt-6 flex gap-3">

                <button
                  onClick={handleSaveProfile}
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-xs font-semibold text-white shadow-md transition hover:shadow-lg"
                >
                  💾 Save Changes
                </button>

                <button
                  onClick={handleCancelEdit}
                  className="rounded-xl border border-slate-200 px-5 py-3 text-xs font-semibold text-slate-500 transition hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>

              </div>
            )}

          </div>

          {/* =================================================
              ACADEMIC DETAILS
          ================================================= */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

            <div className="mb-5">

              <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                🎓 Academic Details
              </h2>

              <p className="mt-1 text-[10px] text-slate-400">
                Your current academic information
              </p>

            </div>

            <div className="grid gap-4 md:grid-cols-3">

              {/* DEPARTMENT */}

              <div className="rounded-xl bg-blue-50 p-4 dark:bg-slate-800">

                <p className="text-[9px] font-semibold text-slate-400">
                  DEPARTMENT
                </p>

                <p className="mt-2 text-xs font-bold text-blue-700 dark:text-blue-400">
                  Computer Science
                </p>

              </div>

              {/* YEAR */}

              <div className="rounded-xl bg-violet-50 p-4 dark:bg-slate-800">

                <p className="text-[9px] font-semibold text-slate-400">
                  YEAR
                </p>

                <p className="mt-2 text-xs font-bold text-violet-700 dark:text-violet-400">
                  3rd Year
                </p>

              </div>

              {/* SEMESTER */}

              <div className="rounded-xl bg-green-50 p-4 dark:bg-slate-800">

                <p className="text-[9px] font-semibold text-slate-400">
                  SEMESTER
                </p>

                <p className="mt-2 text-xs font-bold text-green-700 dark:text-green-400">
                  Semester 5
                </p>

              </div>

            </div>

            <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4 dark:border-slate-700 dark:bg-slate-800">

              <p className="text-[10px] text-slate-500 dark:text-slate-400">
                ℹ️ Department, year and semester details are maintained
                by faculty/admin and cannot be edited by students.
              </p>

            </div>

          </div>

          {/* =================================================
              PREFERENCES
          ================================================= */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

            <div className="mb-5">

              <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                ⚙️ Preferences
              </h2>

              <p className="mt-1 text-[10px] text-slate-400">
                Customize your student portal
              </p>

            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-700">

              {/* DARK MODE */}

              <div className="flex items-center justify-between gap-4 py-5">

                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
                    {darkMode ? "☀️" : "🌙"}
                  </div>

                  <div>

                    <p className="text-xs font-semibold text-slate-800 dark:text-white">
                      Dark Mode
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      Switch between light and dark theme
                    </p>

                  </div>

                </div>

                {/* DARK MODE SWITCH */}

                <button
                  onClick={() => setDarkMode(!darkMode)}
                  aria-label="Toggle dark mode"
                  className={`relative h-7 w-12 shrink-0 rounded-full transition ${
                    darkMode
                      ? "bg-blue-600"
                      : "bg-slate-300"
                  }`}
                >

                  <span
                    className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-all ${
                      darkMode
                        ? "left-6"
                        : "left-1"
                    }`}
                  />

                </button>

              </div>

              {/* NOTIFICATIONS */}

              <div className="flex items-center justify-between gap-4 py-5">

                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-slate-800">
                    🔔
                  </div>

                  <div>

                    <p className="text-xs font-semibold text-slate-800 dark:text-white">
                      Notifications
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      Receive attendance and academic updates
                    </p>

                  </div>

                </div>

                {/* NOTIFICATION SWITCH */}

                <button
                  onClick={() =>
                    setNotifications(!notifications)
                  }
                  aria-label="Toggle notifications"
                  className={`relative h-7 w-12 shrink-0 rounded-full transition ${
                    notifications
                      ? "bg-blue-600"
                      : "bg-slate-300"
                  }`}
                >

                  <span
                    className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-all ${
                      notifications
                        ? "left-6"
                        : "left-1"
                    }`}
                  />

                </button>

              </div>

            </div>

          </div>

          {/* =================================================
              CHANGE PASSWORD
          ================================================= */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

            <div className="mb-5">

              <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                🔒 Change Password
              </h2>

              <p className="mt-1 text-[10px] text-slate-400">
                Keep your student account secure
              </p>

            </div>

            <form
              onSubmit={handlePasswordUpdate}
              className="max-w-xl space-y-4"
            >

              {/* CURRENT PASSWORD */}

              <div>

                <label className="text-[10px] font-semibold text-slate-400">
                  CURRENT PASSWORD
                </label>

                <input
                  type={showPassword ? "text" : "password"}
                  value={password.current}
                  onChange={(e) =>
                    setPassword({
                      ...password,
                      current: e.target.value,
                    })
                  }
                  placeholder="Enter current password"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs outline-none transition focus:border-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                />

              </div>

              {/* NEW PASSWORD */}

              <div>

                <label className="text-[10px] font-semibold text-slate-400">
                  NEW PASSWORD
                </label>

                <input
                  type={showPassword ? "text" : "password"}
                  value={password.newPassword}
                  onChange={(e) =>
                    setPassword({
                      ...password,
                      newPassword: e.target.value,
                    })
                  }
                  placeholder="Enter new password"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs outline-none transition focus:border-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                />

              </div>

              {/* CONFIRM PASSWORD */}

              <div>

                <label className="text-[10px] font-semibold text-slate-400">
                  CONFIRM PASSWORD
                </label>

                <input
                  type={showPassword ? "text" : "password"}
                  value={password.confirm}
                  onChange={(e) =>
                    setPassword({
                      ...password,
                      confirm: e.target.value,
                    })
                  }
                  placeholder="Confirm new password"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs outline-none transition focus:border-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                />

              </div>

              {/* SHOW PASSWORD */}

              <label className="flex cursor-pointer items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400">

                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={(e) =>
                    setShowPassword(e.target.checked)
                  }
                  className="h-3.5 w-3.5"
                />

                Show password

              </label>

              {/* UPDATE */}

              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-xs font-semibold text-white shadow-md transition hover:shadow-lg"
              >
                Update Password
              </button>

            </form>

          </div>

          {/* =================================================
              LOGOUT
          ================================================= */}

          <div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm dark:border-red-900/40 dark:bg-[#111827]">

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

              <div>

                <h2 className="text-sm font-bold text-red-600">
                  Logout
                </h2>

                <p className="mt-1 text-[10px] text-slate-400">
                  Sign out from your student account
                </p>

              </div>

              <button
                onClick={() => navigate("/")}
                className="rounded-xl border border-red-200 px-5 py-2.5 text-xs font-semibold text-red-600 transition hover:bg-red-50 dark:border-red-900 dark:hover:bg-red-950"
              >
                Logout
              </button>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default StudentSettings;