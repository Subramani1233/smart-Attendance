import { useState } from "react";

import {
  Box,
  Typography,
  IconButton,
  Avatar,
  LinearProgress,
  TextField,
  InputAdornment,
} from "@mui/material";

import {
  Search,
  NotificationsNoneOutlined,
  CheckCircle,
  CancelOutlined,
  AccessTimeOutlined,
  TrendingUpOutlined,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";

function StudentAttendance() {
  const [search, setSearch] = useState("");
  const [month, setMonth] = useState("August 2026");

  const subjects = [
    {
      name: "Mathematics",
      code: "MA301",
      present: 18,
      absent: 2,
      total: 20,
      percentage: 90,
    },
    {
      name: "Computer Science",
      code: "CS302",
      present: 20,
      absent: 2,
      total: 22,
      percentage: 91,
    },
    {
      name: "Database Management",
      code: "CS303",
      present: 16,
      absent: 4,
      total: 20,
      percentage: 80,
    },
    {
      name: "Web Technology",
      code: "CS304",
      present: 19,
      absent: 2,
      total: 21,
      percentage: 90,
    },
    {
      name: "Software Engineering",
      code: "CS305",
      present: 17,
      absent: 3,
      total: 20,
      percentage: 85,
    },
  ];

  const attendanceHistory = [
    {
      date: "05 Aug 2026",
      day: "Wednesday",
      subject: "Mathematics",
      time: "09:00 AM",
      status: "Present",
    },
    {
      date: "05 Aug 2026",
      day: "Wednesday",
      subject: "Computer Science",
      time: "11:00 AM",
      status: "Present",
    },
    {
      date: "05 Aug 2026",
      day: "Wednesday",
      subject: "Database Management",
      time: "02:00 PM",
      status: "Absent",
    },
    {
      date: "04 Aug 2026",
      day: "Tuesday",
      subject: "Web Technology",
      time: "09:00 AM",
      status: "Present",
    },
    {
      date: "04 Aug 2026",
      day: "Tuesday",
      subject: "Software Engineering",
      time: "11:00 AM",
      status: "Present",
    },
    {
      date: "03 Aug 2026",
      day: "Monday",
      subject: "Mathematics",
      time: "09:00 AM",
      status: "Present",
    },
  ];

  const filteredHistory = attendanceHistory.filter((item) =>
    item.subject.toLowerCase().includes(search.toLowerCase())
  );

  const presentDays = [
    3,
    4,
    5,
    7,
    10,
    11,
    12,
    14,
    17,
    18,
    19,
    21,
    24,
  ];

  const absentDays = [6, 13, 20];

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
        <Box>
          <Typography
            sx={{
              fontSize: {
                xs: "18px",
                md: "22px",
              },
              fontWeight: 700,
            }}
          >
            Attendance
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
            Track and manage your attendance
          </Typography>
        </Box>

        {/* Search */}

        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            width: 240,
          }}
        >
          <TextField
            fullWidth
            size="small"
            placeholder="Search subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: 40,
                borderRadius: "9px",
                background: "#F8FAFC",

                "& fieldset": {
                  borderColor: "#E5E7EB",
                },
              },
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search
                      sx={{
                        fontSize: 18,
                        color: "#94A3B8",
                      }}
                    />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>

        {/* Profile */}

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
            <NotificationsNoneOutlined sx={{ fontSize: 21 }} />
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
      {/* CONTENT */}
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
        {/* SUMMARY CARDS */}
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
          {/* Overall */}

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
                  Overall Attendance
                </Typography>

                <Typography
                  sx={{
                    fontSize: "28px",
                    fontWeight: 700,
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
                  Good attendance
                </Typography>
              </Box>

              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "12px",
                  background: "#EEF2FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#4F46E5",
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
              Present
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
                color: "#22C55E",
                mt: 0.5,
              }}
            >
              Classes attended
            </Typography>
          </Box>

          {/* Absent */}

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
              Absent
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
              Classes missed
            </Typography>
          </Box>

          {/* Total */}

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
        {/* CALENDAR + OVERALL */}
        {/* ================================================= */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "0.9fr 1.1fr",
            },
            gap: 2.5,
            mb: 3,
          }}
        >
          {/* CALENDAR */}

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
                alignItems: "center",
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
                  Attendance Calendar
                </Typography>

                <Typography
                  sx={{
                    fontSize: "11px",
                    color: "#94A3B8",
                  }}
                >
                  Monthly attendance
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <IconButton
                  size="small"
                  onClick={() => setMonth("July 2026")}
                >
                  <KeyboardArrowLeft />
                </IconButton>

                <Typography
                  sx={{
                    fontSize: "11px",
                    fontWeight: 600,
                    minWidth: 90,
                    textAlign: "center",
                  }}
                >
                  {month}
                </Typography>

                <IconButton
                  size="small"
                  onClick={() => setMonth("September 2026")}
                >
                  <KeyboardArrowRight />
                </IconButton>
              </Box>
            </Box>

            {/* Days */}

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: 1,
                mb: 1,
              }}
            >
              {[
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
              ].map((day) => (
                <Typography
                  key={day}
                  sx={{
                    textAlign: "center",
                    fontSize: "9px",
                    color: "#94A3B8",
                    fontWeight: 600,
                  }}
                >
                  {day}
                </Typography>
              ))}
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: 1,
              }}
            >
              {Array.from({ length: 31 }, (_, index) => {
                const day = index + 1;

                const present = presentDays.includes(day);
                const absent = absentDays.includes(day);

                return (
                  <Box
                    key={day}
                    sx={{
                      height: 32,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                      fontSize: "10px",
                      fontWeight:
                        present || absent ? 600 : 400,
                      color: present
                        ? "#16A34A"
                        : absent
                        ? "#DC2626"
                        : "#64748B",
                      background: present
                        ? "#DCFCE7"
                        : absent
                        ? "#FEE2E2"
                        : "transparent",
                    }}
                  >
                    {day}
                  </Box>
                );
              })}
            </Box>

            {/* Legend */}

            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.6,
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#22C55E",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: "10px",
                    color: "#64748B",
                  }}
                >
                  Present
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.6,
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#EF4444",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: "10px",
                    color: "#64748B",
                  }}
                >
                  Absent
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* ATTENDANCE SCORE */}

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
                mb: 0.5,
              }}
            >
              Attendance Overview
            </Typography>

            <Typography
              sx={{
                fontSize: "11px",
                color: "#94A3B8",
                mb: 3,
              }}
            >
              Your current attendance performance
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                mb: 4,
              }}
            >
              {/* Circle */}

              <Box
                sx={{
                  width: 145,
                  height: 145,
                  minWidth: 145,
                  borderRadius: "50%",
                  background:
                    "conic-gradient(#4F46E5 0deg 306deg, #EEF2FF 306deg 360deg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: 112,
                    height: 112,
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "27px",
                      fontWeight: 700,
                      color: "#111827",
                    }}
                  >
                    85%
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "9px",
                      color: "#94A3B8",
                    }}
                  >
                    Overall
                  </Typography>
                </Box>
              </Box>

              {/* Stats */}

              <Box sx={{ flex: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 2,
                  }}
                >
                  <CheckCircle
                    sx={{
                      fontSize: 20,
                      color: "#22C55E",
                    }}
                  />

                  <Box>
                    <Typography
                      sx={{
                        fontSize: "11px",
                        color: "#94A3B8",
                      }}
                    >
                      Present
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 700,
                      }}
                    >
                      42 Classes
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <CancelOutlined
                    sx={{
                      fontSize: 20,
                      color: "#EF4444",
                    }}
                  />

                  <Box>
                    <Typography
                      sx={{
                        fontSize: "11px",
                        color: "#94A3B8",
                      }}
                    >
                      Absent
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 700,
                      }}
                    >
                      7 Classes
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "11px",
                    fontWeight: 600,
                  }}
                >
                  Attendance Progress
                </Typography>

                <Typography
                  sx={{
                    fontSize: "11px",
                    color: "#4F46E5",
                    fontWeight: 600,
                  }}
                >
                  85%
                </Typography>
              </Box>

              <LinearProgress
                variant="determinate"
                value={85}
                sx={{
                  height: 8,
                  borderRadius: 10,
                  background: "#EEF2FF",

                  "& .MuiLinearProgress-bar": {
                    borderRadius: 10,
                    background:
                      "linear-gradient(90deg,#2563EB,#6366F1)",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* ================================================= */}
        {/* SUBJECT ATTENDANCE */}
        {/* ================================================= */}

        <Box
          sx={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "14px",
            p: {
              xs: 2,
              md: 3,
            },
            mb: 3,
          }}
        >
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 700,
              }}
            >
              Subject-wise Attendance
            </Typography>

            <Typography
              sx={{
                fontSize: "11px",
                color: "#94A3B8",
                mt: 0.5,
              }}
            >
              Attendance percentage for each subject
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              gap: 2,
            }}
          >
            {subjects.map((subject) => (
              <Box
                key={subject.code}
                sx={{
                  border: "1px solid #E5E7EB",
                  borderRadius: "12px",
                  p: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1.5,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 600,
                      }}
                    >
                      {subject.name}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "9px",
                        color: "#94A3B8",
                        mt: 0.3,
                      }}
                    >
                      {subject.code}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color:
                        subject.percentage >= 85
                          ? "#16A34A"
                          : "#F59E0B",
                    }}
                  >
                    {subject.percentage}%
                  </Typography>
                </Box>

                <LinearProgress
                  variant="determinate"
                  value={subject.percentage}
                  sx={{
                    height: 6,
                    borderRadius: 10,
                    background: "#F1F5F9",

                    "& .MuiLinearProgress-bar": {
                      borderRadius: 10,
                      background:
                        subject.percentage >= 85
                          ? "#22C55E"
                          : "#F59E0B",
                    },
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 1.2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "9px",
                      color: "#94A3B8",
                    }}
                  >
                    Present: {subject.present}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "9px",
                      color: "#94A3B8",
                    }}
                  >
                    Absent: {subject.absent}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "9px",
                      color: "#94A3B8",
                    }}
                  >
                    Total: {subject.total}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ================================================= */}
        {/* ATTENDANCE HISTORY */}
        {/* ================================================= */}

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
              p: {
                xs: 2,
                md: 3,
              },
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
                Attendance History
              </Typography>

              <Typography
                sx={{
                  fontSize: "11px",
                  color: "#94A3B8",
                  mt: 0.5,
                }}
              >
                Recent attendance records
              </Typography>
            </Box>

            <AccessTimeOutlined
              sx={{
                color: "#6366F1",
              }}
            />
          </Box>

          {/* Mobile Search */}

          <Box
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
              px: 2,
              pb: 2,
            }}
          >
            <TextField
              fullWidth
              size="small"
              placeholder="Search subject..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: 40,
                  borderRadius: "9px",
                  background: "#F8FAFC",

                  "& fieldset": {
                    borderColor: "#E5E7EB",
                  },
                },
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search
                        sx={{
                          fontSize: 18,
                          color: "#94A3B8",
                        }}
                      />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>

          {/* Table Header */}

          <Box
            sx={{
              display: {
                xs: "none",
                md: "grid",
              },
              gridTemplateColumns:
                "1.2fr 1.1fr 1.4fr 1fr 0.8fr",
              px: 3,
              py: 1.5,
              background: "#F8FAFC",
              borderTop: "1px solid #F1F5F9",
              borderBottom: "1px solid #F1F5F9",
            }}
          >
            {[
              "Date",
              "Day",
              "Subject",
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

          {filteredHistory.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: {
                  xs: "flex",
                  md: "grid",
                },

                flexDirection: {
                  xs: "column",
                  md: "row",
                },

                gridTemplateColumns:
                  "1.2fr 1.1fr 1.4fr 1fr 0.8fr",

                px: {
                  xs: 2,
                  md: 3,
                },

                py: 1.8,

                gap: {
                  xs: 0.5,
                  md: 0,
                },

                borderBottom:
                  index !== filteredHistory.length - 1
                    ? "1px solid #F1F5F9"
                    : "none",
              }}
            >
              <Typography
                sx={{
                  fontSize: "11px",
                  fontWeight: 600,
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
                {item.day}
              </Typography>

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
                {item.time}
              </Typography>

              <Box
                sx={{
                  display: "inline-flex",
                  width: "fit-content",
                  px: 1.2,
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
          ))}

          {filteredHistory.length === 0 && (
            <Box
              sx={{
                py: 5,
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#94A3B8",
                }}
              >
                No attendance records found
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default StudentAttendance;