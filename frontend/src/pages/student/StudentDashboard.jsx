import {
  Box,
  Typography,
  IconButton,
  Avatar,
  LinearProgress,
} from "@mui/material";

import {
  Search,
  NotificationsNoneOutlined,
  MenuBookOutlined,
  AccessTimeOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";

function StudentDashboard() {
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
        background: "#F8FAFF",
        color: "#111827",
      }}
    >
      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <Box
        sx={{
          height: 82,
          
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          px: {
            xs: 2,
            md: 4,
          },
        }}
      >
        {/* TITLE */}

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

        {/* SEARCH */}

        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },

            width: 230,
            height: 40,

            background: "#F8FAFC",
            border: "1px solid #E5E7EB",
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

        {/* RIGHT */}

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
              sx={{
                fontSize: 21,
              }}
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
            AM
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
        {/* ================================================= */}
        {/* TOP CARDS */}
        {/* ================================================= */}

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
          {/* ATTENDANCE */}

          <Box
            sx={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "14px",
              p: 2.5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
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

          {/* PRESENT */}

          <Box
            sx={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
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

          {/* ABSENT */}

          <Box
            sx={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
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

          {/* TOTAL CLASSES */}

          <Box
            sx={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
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
          {/* ATTENDANCE OVERVIEW */}

          <Box
            sx={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "14px",
              p: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
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

              <TrendingUpOutlined
                sx={{
                  color: "#4F46E5",
                }}
              />
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
                    justifyContent: "space-between",
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

          {/* CALENDAR */}

          <Box
            sx={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
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

            {/* WEEK */}

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: 1,
                mb: 1,
              }}
            >
              {["S", "M", "T", "W", "T", "F", "S"].map(
                (day, index) => (
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
                )
              )}
            </Box>

            {/* DATES */}

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: 1,
              }}
            >
              {Array.from(
                {
                  length: 31,
                },
                (_, index) => {
                  const day = index + 1;

                  const presentDays = [
                    3, 4, 5, 7, 10, 11,
                    12, 14, 17, 18,
                    19, 21, 24,
                  ];

                  const absentDays = [6, 13, 20];

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
                        justifyContent: "center",

                        borderRadius: "7px",

                        fontSize: "10px",

                        background: isPresent
                          ? "#DCFCE7"
                          : isAbsent
                          ? "#FEE2E2"
                          : "transparent",

                        color: isPresent
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

            {/* LEGEND */}

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
          {/* RECENT ATTENDANCE */}

          <Box
            sx={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "14px",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                p: 3,

                display: "flex",
                justifyContent: "space-between",
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

            {/* TABLE HEADER */}

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

            {/* ROWS */}

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
                        item.status === "Present"
                          ? "#DCFCE7"
                          : "#FEE2E2",

                      color:
                        item.status === "Present"
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

          {/* STUDENT PROFILE */}

          <Box
            sx={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
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
                gridTemplateColumns: "1fr 1fr",
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
  );
}

export default StudentDashboard;