import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Chip,
} from "@mui/material";
import {
  CalendarMonthOutlined,
  EventOutlined,
  AssignmentOutlined,
  GroupsOutlined,
} from "@mui/icons-material";
import StudentSidebar from "../../components/StudentSidebar";

const timetable = [
  {
    day: "Monday",
    classes: [
      {
        time: "9:00 - 9:50",
        code: "HVE",
        subject: "Human Values & Ethics",
        room: "CSE-204",
      },
      {
        time: "9:50 - 10:40",
        code: "ITA",
        subject: "IT in Agricultural System",
        room: "CSE-204",
      },
      {
        time: "10:55 - 11:45",
        code: "TIF",
        subject: "Traditional Indian Foods",
        room: "CSE-204",
      },
      {
        time: "11:45 - 12:35",
        code: "CN",
        subject: "Computer Networks",
        room: "CSE-204",
      },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      {
        time: "9:00 - 9:50",
        code: "DBMS",
        subject: "Database Management",
        room: "CSE-204",
      },
      {
        time: "9:50 - 10:40",
        code: "WT",
        subject: "Web Technology",
        room: "LAB-2",
      },
      {
        time: "10:55 - 11:45",
        code: "AI",
        subject: "Artificial Intelligence",
        room: "CSE-204",
      },
      {
        time: "11:45 - 12:35",
        code: "SE",
        subject: "Software Engineering",
        room: "CSE-204",
      },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      {
        time: "9:00 - 9:50",
        code: "WT",
        subject: "Web Technology",
        room: "LAB-2",
      },
      {
        time: "9:50 - 10:40",
        code: "DBMS",
        subject: "Database Management",
        room: "CSE-204",
      },
      {
        time: "10:55 - 11:45",
        code: "CN",
        subject: "Computer Networks",
        room: "CSE-204",
      },
      {
        time: "11:45 - 12:35",
        code: "AI",
        subject: "Artificial Intelligence",
        room: "CSE-204",
      },
    ],
  },
  {
    day: "Thursday",
    classes: [
      {
        time: "9:00 - 9:50",
        code: "SE",
        subject: "Software Engineering",
        room: "CSE-204",
      },
      {
        time: "9:50 - 10:40",
        code: "AI",
        subject: "Artificial Intelligence",
        room: "CSE-204",
      },
      {
        time: "10:55 - 11:45",
        code: "DBMS",
        subject: "Database Management",
        room: "CSE-204",
      },
      {
        time: "11:45 - 12:35",
        code: "WT",
        subject: "Web Technology",
        room: "LAB-2",
      },
    ],
  },
  {
    day: "Friday",
    classes: [
      {
        time: "9:00 - 9:50",
        code: "CN",
        subject: "Computer Networks",
        room: "CSE-204",
      },
      {
        time: "9:50 - 10:40",
        code: "HVE",
        subject: "Human Values & Ethics",
        room: "CSE-204",
      },
      {
        time: "10:55 - 11:45",
        code: "ITA",
        subject: "IT in Agricultural System",
        room: "CSE-204",
      },
      {
        time: "11:45 - 12:35",
        code: "TIF",
        subject: "Traditional Indian Foods",
        room: "CSE-204",
      },
    ],
  },
];

function StudentTimetable() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#F8FAFF",
        color: "#111827",
      }}
    >
      {/* ================= SIDEBAR ================= */}
      <StudentSidebar />

      {/* ================= MAIN CONTENT ================= */}
      <Box
        sx={{
          marginLeft: "258px",
          minHeight: "100vh",
        }}
      >
        {/* ================= HEADER ================= */}
        <Box
          sx={{
            height: "88px",
            background: "#FFFFFF",
            borderBottom: "1px solid #E5E7EB",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 4,
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "26px",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              Timetable
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                color: "#94A3B8",
                mt: 0.3,
              }}
            >
              Academic schedule & examinations
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#F1F5F9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              🔔
            </Box>

            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
              }}
            >
              AM
            </Box>

            <Box>
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
                  fontSize: "12px",
                  color: "#94A3B8",
                }}
              >
                Student
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ================= PAGE CONTENT ================= */}
        <Box
          sx={{
            p: 3,
            maxWidth: "1400px",
          }}
        >
          {/* ================= COURSE BANNER ================= */}
          <Paper
            elevation={0}
            sx={{
              borderRadius: "18px",
              p: 3,
              mb: 3,
              color: "#FFFFFF",
              background:
                "linear-gradient(135deg,#2563EB 0%,#7C2DFF 100%)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Typography
              sx={{
                fontSize: "13px",
                letterSpacing: "0.5px",
                opacity: 0.9,
              }}
            >
              ACADEMIC TIMETABLE
            </Typography>

            <Typography
              sx={{
                fontSize: "21px",
                fontWeight: 700,
                mt: 1,
              }}
            >
              B.Tech Computer Science
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                mt: 0.7,
                opacity: 0.9,
              }}
            >
              3rd Year • Semester 5 • Section A
            </Typography>

            <CalendarMonthOutlined
              sx={{
                position: "absolute",
                right: 28,
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: 54,
                opacity: 0.2,
              }}
            />
          </Paper>

          {/* ================= TABS ================= */}
          <Paper
            elevation={0}
            sx={{
              border: "1px solid #E2E8F0",
              borderRadius: "16px",
              p: 0.6,
              mb: 3,
              display: "flex",
              gap: 0.5,
              background: "#FFFFFF",
            }}
          >
            <Button
              startIcon={<CalendarMonthOutlined />}
              sx={{
                flex: 1,
                justifyContent: "center",
                borderRadius: "11px",
                py: 1.2,
                textTransform: "none",
                fontWeight: 700,
                color: "#FFFFFF",
                background:
                  "linear-gradient(135deg,#2563EB,#7C2DFF)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg,#2563EB,#7C2DFF)",
                },
              }}
            >
              Weekly Timetable
            </Button>

            <Button
              startIcon={<AssignmentOutlined />}
              sx={{
                flex: 1,
                textTransform: "none",
                color: "#64748B",
                fontWeight: 600,
              }}
            >
              Internal Exam
            </Button>

            <Button
              startIcon={<EventOutlined />}
              sx={{
                flex: 1,
                textTransform: "none",
                color: "#64748B",
                fontWeight: 600,
              }}
            >
              Weekly Exam
            </Button>

            <Button
              startIcon={<GroupsOutlined />}
              sx={{
                flex: 1,
                textTransform: "none",
                color: "#64748B",
                fontWeight: 600,
              }}
            >
              Events
            </Button>
          </Paper>

          {/* ================= WEEKLY TIMETABLE ================= */}
          <Paper
            elevation={0}
            sx={{
              border: "1px solid #E2E8F0",
              borderRadius: "18px",
              p: 2.5,
              background: "#FFFFFF",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2.5,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  Weekly Class Timetable
                </Typography>

                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#94A3B8",
                    mt: 0.5,
                  }}
                >
                  Monday to Friday • Regular academic schedule
                </Typography>
              </Box>

              <Chip
                label="View Only"
                sx={{
                  background: "#ECFDF5",
                  color: "#16A34A",
                  fontWeight: 600,
                  fontSize: "12px",
                }}
              />
            </Box>

            {/* ================= DAYS ================= */}
            {timetable.map((day) => (
              <Box
                key={day.day}
                sx={{
                  mb: 3,
                  border: "1px solid #E5E7EB",
                  borderRadius: "14px",
                  overflow: "hidden",
                }}
              >
                {/* DAY HEADER */}
                <Box
                  sx={{
                    px: 2,
                    py: 1.5,
                    background:
                      "linear-gradient(90deg,#2563EB,#7C2DFF)",
                    color: "#FFFFFF",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: 700,
                    }}
                  >
                    {day.day}
                  </Typography>
                </Box>

                {/* CLASSES */}
                {day.classes.map((item) => (
                  <Box
                    key={`${day.day}-${item.time}-${item.code}`}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      minHeight: "92px",
                      borderBottom: "1px solid #EEF2F7",
                      "&:last-child": {
                        borderBottom: "none",
                      },
                    }}
                  >
                    {/* TIME */}
                    <Box
                      sx={{
                        width: "130px",
                        px: 2,
                        flexShrink: 0,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "#64748B",
                        }}
                      >
                        {item.time}
                      </Typography>
                    </Box>

                    {/* SUBJECT */}
                    <Box
                      sx={{
                        flex: 1,
                        p: 1.5,
                      }}
                    >
                      <Box
                        sx={{
                          background: "#EFF6FF",
                          borderRadius: "11px",
                          px: 2,
                          py: 1.4,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#2563EB",
                          }}
                        >
                          {item.code}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "13px",
                            color: "#475569",
                            mt: 0.3,
                          }}
                        >
                          {item.subject}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "11px",
                            color: "#94A3B8",
                            mt: 0.5,
                          }}
                        >
                          📍 {item.room}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            ))}
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default StudentTimetable;