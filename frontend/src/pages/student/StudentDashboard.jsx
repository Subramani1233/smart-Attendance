import {
  Box,
  Typography,
  IconButton,
  Avatar,
  LinearProgress,
} from "@mui/material";

import {
  DashboardOutlined,
  EventAvailableOutlined,
  AssessmentOutlined,
  CalendarMonthOutlined,
  SettingsOutlined,
  Search,
  NotificationsNoneOutlined,
  MenuBookOutlined,
  AccessTimeOutlined,
  TrendingUpOutlined,
  QrCode,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Dashboard",
      icon: <DashboardOutlined />,
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
  title: "Scan Attendance",
  icon: <QrCode/>,
  path: "/student-scan",
},
    {
      title: "Settings",
      icon: <SettingsOutlined />,
      path: "/student-settings",
    },
  ];

  const attendanceData = [
    {
      subject: "Mathematics",
      date: "05 Aug 2026",
      time: "09:00 AM",
      status: "Present",
    },
    {
      subject: "Computer Science",
      date: "05 Aug 2026",
      time: "11:00 AM",
      status: "Present",
    },
    {
      subject: "Database Management",
      date: "04 Aug 2026",
      time: "02:00 PM",
      status: "Absent",
    },
    {
      subject: "Web Technology",
      date: "04 Aug 2026",
      time: "09:00 AM",
      status: "Present",
    },
    {
      subject: "Software Engineering",
      date: "03 Aug 2026",
      time: "11:00 AM",
      status: "Present",
    },
  ];

  const subjects = [
    {
      name: "Mathematics",
      percentage: 92,
    },
    {
      name: "Computer Science",
      percentage: 88,
    },
    {
      name: "Database Management",
      percentage: 82,
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        background: "#F8FAFF",
        color: "#111827",
      }}
    >
      {/* ================================================= */}
      {/* SIDEBAR */}
      {/* ================================================= */}

      <Box
        sx={{
          width: {
            xs: 80,
            md: 240,
          },

          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,

          background: "#FFFFFF",

          borderRight: "1px solid #E5E7EB",

          display: "flex",
          flexDirection: "column",

          zIndex: 10,
        }}
      >
        {/* Logo */}

        <Box
          sx={{
            height: 82,

            display: "flex",
            alignItems: "center",

            px: {
              xs: 2,
              md: 3,
            },

            gap: 1.5,

            borderBottom: "1px solid #F1F5F9",
          }}
        >
          <Box
            sx={{
              width: 42,
              height: 42,

              minWidth: 42,

              borderRadius: "12px",

              background:
                "linear-gradient(135deg, #2563EB, #6366F1)",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              color: "#FFFFFF",

              boxShadow:
                "0 8px 18px rgba(37,99,235,0.20)",
            }}
          >
            <MenuBookOutlined />
          </Box>

          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              College
            </Typography>

            <Typography
              sx={{
                fontSize: "9px",
                color: "#9CA3AF",
              }}
            >
              SMART ATTENDANCE
            </Typography>
          </Box>
        </Box>

        {/* Navigation */}

        <Box
          sx={{
            px: {
              xs: 1,
              md: 1.5,
            },

            py: 3,

            flex: 1,
          }}
        >
          {menuItems.map((item) => {
            const active =
              item.title === "Dashboard";

            return (
              <Box
                key={item.title}
                onClick={() => navigate(item.path)}
                sx={{
                  height: 48,

                  display: "flex",
                  alignItems: "center",

                  gap: 1.5,

                  px: {
                    xs: 1.2,
                    md: 2,
                  },

                  mb: 1,

                  borderRadius: "10px",

                  cursor: "pointer",

                  color: active
                    ? "#FFFFFF"
                    : "#64748B",

                  background: active
                    ? "linear-gradient(135deg, #2563EB, #6366F1)"
                    : "transparent",

                  boxShadow: active
                    ? "0 8px 18px rgba(37,99,235,0.16)"
                    : "none",

                  transition: "0.2s",

                  "&:hover": {
                    background: active
                      ? "linear-gradient(135deg, #2563EB, #6366F1)"
                      : "#F1F5FF",

                    color: active
                      ? "#FFFFFF"
                      : "#4F46E5",
                  },

                  justifyContent: {
                    xs: "center",
                    md: "flex-start",
                  },
                }}
              >
                {item.icon}

                <Typography
                  sx={{
                    display: {
                      xs: "none",
                      md: "block",
                    },

                    fontSize: "13px",

                    fontWeight: active
                      ? 600
                      : 500,
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* Sidebar Bottom */}

        <Box
          sx={{
            p: 2,

            borderTop: "1px solid #F1F5F9",

            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "10px",
              color: "#9CA3AF",
              textAlign: "center",
            }}
          >
            Smart Attendance System
          </Typography>
        </Box>
      </Box>

      {/* ================================================= */}
      {/* MAIN CONTENT */}
      {/* ================================================= */}

      <Box
        sx={{
          flex: 1,

          ml: {
            xs: "80px",
            md: "240px",
          },

          minWidth: 0,
        }}
      >
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <Box
          sx={{
            height: 82,

            background: "#FFFFFF",

            borderBottom:
              "1px solid #E5E7EB",

            display: "flex",
            alignItems: "center",

            justifyContent: "space-between",

            px: {
              xs: 2,
              md: 4,
            },
          }}
        >
          {/* Title */}

          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "18px",
                  md: "22px",
                },

                fontWeight: 700,
                color: "#111827",
              }}
            >
              Dashboard
            </Typography>

            <Typography
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },

                fontSize: "11px",
                color: "#94A3B8",
              }}
            >
              Welcome back, Student
            </Typography>
          </Box>

          {/* Search */}

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },

              width: 230,

              height: 40,

              background: "#F8FAFC",

              border:
                "1px solid #E5E7EB",

              borderRadius: "9px",

              alignItems: "center",

              px: 1.5,

              gap: 1,
            }}
          >
            <Search
              sx={{
                fontSize: 18,
                color: "#94A3B8",
              }}
            />

            <Typography
              sx={{
                fontSize: "12px",
                color: "#94A3B8",
              }}
            >
              Search...
            </Typography>
          </Box>

          {/* Right */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <IconButton
              sx={{
                color: "#64748B",
                background: "#F8FAFC",
              }}
            >
              <NotificationsNoneOutlined
                sx={{ fontSize: 21 }}
              />
            </IconButton>

            <Avatar
              sx={{
                width: 38,
                height: 38,

                background:
                  "linear-gradient(135deg, #2563EB, #6366F1)",

                fontSize: "13px",

                fontWeight: 600,
              }}
            >
              AS
            </Avatar>

            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                Aslin Mercy
              </Typography>

              <Typography
                sx={{
                  fontSize: "10px",
                  color: "#94A3B8",
                }}
              >
                Student
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ================================================= */}
        {/* DASHBOARD CONTENT */}
        {/* ================================================= */}

        <Box
          sx={{
            p: {
              xs: 2,
              md: 4,
            },
          }}
        >
          {/* Top Cards */}

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              },

              gap: 2.5,

              mb: 3,
            }}
          >
            {/* Attendance */}

            <Box
              sx={{
                background: "#FFFFFF",

                border:
                  "1px solid #E5E7EB",

                borderRadius: "14px",

                p: 2.5,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "11px",
                      color: "#94A3B8",
                      mb: 1,
                    }}
                  >
                    Attendance
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#111827",
                    }}
                  >
                    85%
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "10px",
                      color: "#22C55E",
                      mt: 0.5,
                    }}
                  >
                    ↑ 4.5% this month
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: 48,
                    height: 48,

                    borderRadius: "12px",

                    background: "#EEF2FF",

                    color: "#4F46E5",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TrendingUpOutlined />
                </Box>
              </Box>
            </Box>

            {/* Present */}

            <Box
              sx={{
                background: "#FFFFFF",

                border:
                  "1px solid #E5E7EB",

                borderRadius: "14px",

                p: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: "11px",
                  color: "#94A3B8",
                  mb: 1,
                }}
              >
                Present Days
              </Typography>

              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: 700,
                }}
              >
                42
              </Typography>

              <Typography
                sx={{
                  fontSize: "10px",
                  color: "#64748B",
                  mt: 0.5,
                }}
              >
                This semester
              </Typography>
            </Box>

            {/* Absent */}

            <Box
              sx={{
                background: "#FFFFFF",

                border:
                  "1px solid #E5E7EB",

                borderRadius: "14px",

                p: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: "11px",
                  color: "#94A3B8",
                  mb: 1,
                }}
              >
                Absent Days
              </Typography>

              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: 700,
                }}
              >
                7
              </Typography>

              <Typography
                sx={{
                  fontSize: "10px",
                  color: "#EF4444",
                  mt: 0.5,
                }}
              >
                Need attention
              </Typography>
            </Box>

            {/* Classes */}

            <Box
              sx={{
                background: "#FFFFFF",

                border:
                  "1px solid #E5E7EB",

                borderRadius: "14px",

                p: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: "11px",
                  color: "#94A3B8",
                  mb: 1,
                }}
              >
                Total Classes
              </Typography>

              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: 700,
                }}
              >
                49
              </Typography>

              <Typography
                sx={{
                  fontSize: "10px",
                  color: "#64748B",
                  mt: 0.5,
                }}
              >
                This semester
              </Typography>
            </Box>
          </Box>

          {/* ================================================= */}
          {/* MIDDLE SECTION */}
          {/* ================================================= */}

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                lg: "1.2fr 0.8fr",
              },

              gap: 2.5,

              mb: 3,
            }}
          >
            {/* Attendance Overview */}

            <Box
              sx={{
                background: "#FFFFFF",

                border:
                  "1px solid #E5E7EB",

                borderRadius: "14px",

                p: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent:
                    "space-between",

                  mb: 3,
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: 700,
                    }}
                  >
                    Attendance Overview
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "11px",
                      color: "#94A3B8",
                      mt: 0.5,
                    }}
                  >
                    Subject-wise attendance
                  </Typography>
                </Box>

               <TrendingUpOutlined sx={{color: "#4F46E5", }}/>
              </Box>

              {subjects.map((subject) => (
                <Box
                  key={subject.name}
                  sx={{
                    mb: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent:
                        "space-between",

                      mb: 0.8,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 500,
                      }}
                    >
                      {subject.name}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#4F46E5",
                      }}
                    >
                      {subject.percentage}%
                    </Typography>
                  </Box>

                  <LinearProgress
                    variant="determinate"
                    value={subject.percentage}
                    sx={{
                      height: 7,

                      borderRadius: 10,

                      background: "#EEF2FF",

                      "& .MuiLinearProgress-bar": {
                        borderRadius: 10,

                        background:
                          "linear-gradient(90deg, #2563EB, #6366F1)",
                      },
                    }}
                  />
                </Box>
              ))}
            </Box>

            {/* Calendar */}

            <Box
              sx={{
                background: "#FFFFFF",

                border:
                  "1px solid #E5E7EB",

                borderRadius: "14px",

                p: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 700,
                }}
              >
                Attendance Calendar
              </Typography>

              <Typography
                sx={{
                  fontSize: "11px",
                  color: "#94A3B8",
                  mt: 0.5,
                  mb: 2.5,
                }}
              >
                August 2026
              </Typography>

              {/* Week */}

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(7, 1fr)",

                  gap: 1,

                  mb: 1,
                }}
              >
                {[
                  "S",
                  "M",
                  "T",
                  "W",
                  "T",
                  "F",
                  "S",
                ].map((day, index) => (
                  <Typography
                    key={index}
                    sx={{
                      textAlign: "center",
                      fontSize: "10px",
                      color: "#94A3B8",
                      fontWeight: 600,
                    }}
                  >
                    {day}
                  </Typography>
                ))}
              </Box>

              {/* Dates */}

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(7, 1fr)",

                  gap: 1,
                }}
              >
                {Array.from(
                  { length: 31 },
                  (_, index) => {
                    const day = index + 1;

                    const presentDays = [
                      3, 4, 5, 7, 10, 11,
                      12, 14, 17, 18,
                      19, 21, 24,
                    ];

                    const absentDays = [
                      6, 13, 20,
                    ];

                    const isPresent =
                      presentDays.includes(day);

                    const isAbsent =
                      absentDays.includes(day);

                    return (
                      <Box
                        key={day}
                        sx={{
                          height: 28,

                          display: "flex",
                          alignItems: "center",
                          justifyContent:
                            "center",

                          borderRadius: "7px",

                          fontSize: "10px",

                          background:
                            isPresent
                              ? "#DCFCE7"
                              : isAbsent
                              ? "#FEE2E2"
                              : "transparent",

                          color:
                            isPresent
                              ? "#16A34A"
                              : isAbsent
                              ? "#DC2626"
                              : "#64748B",

                          fontWeight:
                            isPresent || isAbsent
                              ? 600
                              : 400,
                        }}
                      >
                        {day}
                      </Box>
                    );
                  }
                )}
              </Box>

              {/* Legend */}

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mt: 2.5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 0.6,
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#22C55E",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "9px",
                      color: "#64748B",
                    }}
                  >
                    Present
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 0.6,
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#EF4444",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "9px",
                      color: "#64748B",
                    }}
                  >
                    Absent
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* ================================================= */}
          {/* BOTTOM SECTION */}
          {/* ================================================= */}

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                lg: "1.4fr 0.6fr",
              },

              gap: 2.5,
            }}
          >
            {/* Recent Attendance */}

            <Box
              sx={{
                background: "#FFFFFF",

                border:
                  "1px solid #E5E7EB",

                borderRadius: "14px",

                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  p: 3,

                  display: "flex",

                  justifyContent:
                    "space-between",

                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: 700,
                    }}
                  >
                    Recent Attendance
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "11px",
                      color: "#94A3B8",
                    }}
                  >
                    Your latest attendance records
                  </Typography>
                </Box>

                <AccessTimeOutlined
                  sx={{
                    color: "#6366F1",
                  }}
                />
              </Box>

              {/* Table Header */}

              <Box
                sx={{
                  display: "grid",

                  gridTemplateColumns:
                    "1.5fr 1.3fr 1fr 0.8fr",

                  px: 3,
                  py: 1.5,

                  background: "#F8FAFC",

                  borderTop:
                    "1px solid #F1F5F9",

                  borderBottom:
                    "1px solid #F1F5F9",
                }}
              >
                {[
                  "Subject",
                  "Date",
                  "Time",
                  "Status",
                ].map((item) => (
                  <Typography
                    key={item}
                    sx={{
                      fontSize: "10px",
                      color: "#94A3B8",
                      fontWeight: 600,
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>

              {/* Rows */}

              {attendanceData.map(
                (item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "grid",

                      gridTemplateColumns:
                        "1.5fr 1.3fr 1fr 0.8fr",

                      px: 3,
                      py: 1.7,

                      borderBottom:
                        index !==
                        attendanceData.length - 1
                          ? "1px solid #F1F5F9"
                          : "none",

                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "11px",
                        fontWeight: 600,
                      }}
                    >
                      {item.subject}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "10px",
                        color: "#64748B",
                      }}
                    >
                      {item.date}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "10px",
                        color: "#64748B",
                      }}
                    >
                      {item.time}
                    </Typography>

                    <Box
                      sx={{
                        display: "inline-flex",
                        width: "fit-content",

                        px: 1,

                        py: 0.5,

                        borderRadius: "20px",

                        background:
                          item.status ===
                          "Present"
                            ? "#DCFCE7"
                            : "#FEE2E2",

                        color:
                          item.status ===
                          "Present"
                            ? "#16A34A"
                            : "#DC2626",

                        fontSize: "9px",

                        fontWeight: 600,
                      }}
                    >
                      {item.status}
                    </Box>
                  </Box>
                )
              )}
            </Box>

            {/* Student Profile */}

            <Box
              sx={{
                background: "#FFFFFF",

                border:
                  "1px solid #E5E7EB",

                borderRadius: "14px",

                p: 3,

                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  textAlign: "left",

                  fontSize: "15px",

                  fontWeight: 700,

                  mb: 2,
                }}
              >
                Student Profile
              </Typography>

              <Avatar
                sx={{
                  width: 75,
                  height: 75,

                  mx: "auto",
                  mb: 1.5,

                  background:
                    "linear-gradient(135deg, #2563EB, #6366F1)",

                  fontSize: "22px",

                  fontWeight: 600,
                }}
              >
                AM
              </Avatar>

              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                Aslin Mercy
              </Typography>

              <Typography
                sx={{
                  fontSize: "10px",
                  color: "#94A3B8",
                  mb: 2.5,
                }}
              >
                B.Tech Computer Science
              </Typography>

              <Box
                sx={{
                  display: "grid",

                  gridTemplateColumns:
                    "1fr 1fr",

                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    background: "#F8FAFC",

                    borderRadius: "9px",

                    p: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "9px",
                      color: "#94A3B8",
                    }}
                  >
                    Year
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    3rd Year
                  </Typography>
                </Box>

                <Box
                  sx={{
                    background: "#F8FAFC",

                    borderRadius: "9px",

                    p: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "9px",
                      color: "#94A3B8",
                    }}
                  >
                    Semester
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    VI
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default StudentDashboard;