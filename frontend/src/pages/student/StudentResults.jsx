import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Select,
  MenuItem,
  LinearProgress,
} from "@mui/material";

import {
  DashboardOutlined,
  EventAvailableOutlined,
  AssessmentOutlined,
  CalendarMonthOutlined,
  SettingsOutlined,
  NotificationsNoneOutlined,
  MenuBookOutlined,
  TrendingUpOutlined,
  SchoolOutlined,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";

function StudentResults() {
  const navigate = useNavigate();

  const [selectedSemester, setSelectedSemester] = useState("Semester 5");

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
      title: "Settings",
      icon: <SettingsOutlined />,
      path: "/student-settings",
    },
  ];

  // Faculty-updated result data will come here later
  const semesterResults = {
    "Semester 1": {
      sgpa: "8.20",
      credits: "20",
      subjects: [
        {
          code: "MA101",
          subject: "Engineering Mathematics",
          internal: 22,
          assignment: 9,
          external: 65,
          total: 96,
          grade: "A+",
          result: "Pass",
        },
        {
          code: "CS101",
          subject: "Programming Fundamentals",
          internal: 21,
          assignment: 8,
          external: 62,
          total: 91,
          grade: "A+",
          result: "Pass",
        },
        {
          code: "EC101",
          subject: "Digital Electronics",
          internal: 20,
          assignment: 9,
          external: 58,
          total: 87,
          grade: "A",
          result: "Pass",
        },
      ],
    },

    "Semester 2": {
      sgpa: "8.50",
      credits: "22",
      subjects: [
        {
          code: "MA102",
          subject: "Discrete Mathematics",
          internal: 23,
          assignment: 9,
          external: 64,
          total: 96,
          grade: "A+",
          result: "Pass",
        },
        {
          code: "CS102",
          subject: "Data Structures",
          internal: 22,
          assignment: 10,
          external: 61,
          total: 93,
          grade: "A+",
          result: "Pass",
        },
        {
          code: "CS103",
          subject: "Object Oriented Programming",
          internal: 21,
          assignment: 9,
          external: 59,
          total: 89,
          grade: "A",
          result: "Pass",
        },
      ],
    },

    "Semester 3": {
      sgpa: "8.10",
      credits: "21",
      subjects: [
        {
          code: "CS201",
          subject: "Database Management",
          internal: 20,
          assignment: 8,
          external: 60,
          total: 88,
          grade: "A",
          result: "Pass",
        },
        {
          code: "CS202",
          subject: "Computer Networks",
          internal: 21,
          assignment: 9,
          external: 57,
          total: 87,
          grade: "A",
          result: "Pass",
        },
        {
          code: "CS203",
          subject: "Operating Systems",
          internal: 19,
          assignment: 8,
          external: 55,
          total: 82,
          grade: "B+",
          result: "Pass",
        },
      ],
    },

    "Semester 4": {
      sgpa: "8.70",
      credits: "22",
      subjects: [
        {
          code: "CS204",
          subject: "Software Engineering",
          internal: 23,
          assignment: 10,
          external: 64,
          total: 97,
          grade: "A+",
          result: "Pass",
        },
        {
          code: "CS205",
          subject: "Web Technology",
          internal: 22,
          assignment: 9,
          external: 63,
          total: 94,
          grade: "A+",
          result: "Pass",
        },
        {
          code: "CS206",
          subject: "Computer Architecture",
          internal: 21,
          assignment: 9,
          external: 59,
          total: 89,
          grade: "A",
          result: "Pass",
        },
      ],
    },

    "Semester 5": {
      sgpa: "8.60",
      credits: "22",
      subjects: [
        {
          code: "CS301",
          subject: "Advanced Database Management",
          internal: 22,
          assignment: 9,
          external: 65,
          total: 96,
          grade: "A+",
          result: "Pass",
        },
        {
          code: "CS302",
          subject: "Web Technology",
          internal: 21,
          assignment: 10,
          external: 64,
          total: 95,
          grade: "A+",
          result: "Pass",
        },
        {
          code: "CS303",
          subject: "Software Engineering",
          internal: 22,
          assignment: 9,
          external: 61,
          total: 92,
          grade: "A+",
          result: "Pass",
        },
        {
          code: "CS304",
          subject: "Artificial Intelligence",
          internal: 20,
          assignment: 8,
          external: 58,
          total: 86,
          grade: "A",
          result: "Pass",
        },
      ],
    },

    "Semester 6": {
      sgpa: "8.80",
      credits: "21",
      subjects: [
        {
          code: "CS305",
          subject: "Machine Learning",
          internal: 23,
          assignment: 10,
          external: 64,
          total: 97,
          grade: "A+",
          result: "Pass",
        },
        {
          code: "CS306",
          subject: "Cloud Computing",
          internal: 22,
          assignment: 9,
          external: 62,
          total: 93,
          grade: "A+",
          result: "Pass",
        },
        {
          code: "CS307",
          subject: "Mobile Application Development",
          internal: 21,
          assignment: 9,
          external: 59,
          total: 89,
          grade: "A",
          result: "Pass",
        },
      ],
    },

    "Semester 7": {
      sgpa: "9.00",
      credits: "20",
      subjects: [
        {
          code: "CS401",
          subject: "Cyber Security",
          internal: 24,
          assignment: 10,
          external: 65,
          total: 99,
          grade: "A+",
          result: "Pass",
        },
        {
          code: "CS402",
          subject: "Big Data Analytics",
          internal: 23,
          assignment: 9,
          external: 63,
          total: 95,
          grade: "A+",
          result: "Pass",
        },
      ],
    },

    "Semester 8": {
      sgpa: "9.20",
      credits: "18",
      subjects: [
        {
          code: "CS403",
          subject: "Project",
          internal: 24,
          assignment: 10,
          external: 65,
          total: 99,
          grade: "A+",
          result: "Pass",
        },
        {
          code: "CS404",
          subject: "Professional Practice",
          internal: 23,
          assignment: 10,
          external: 64,
          total: 97,
          grade: "A+",
          result: "Pass",
        },
      ],
    },
  };

  const currentResult =
    semesterResults[selectedSemester];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        background: "#F8FAFF",
        color: "#111827",
      }}
    >
      {/* ================= SIDEBAR ================= */}

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
                "linear-gradient(135deg,#2563EB,#6366F1)",
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
            const active = item.title === "Results";

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
                    ? "linear-gradient(135deg,#2563EB,#6366F1)"
                    : "transparent",
                  boxShadow: active
                    ? "0 8px 18px rgba(37,99,235,0.16)"
                    : "none",
                  transition: "0.2s",
                  "&:hover": {
                    background: active
                      ? "linear-gradient(135deg,#2563EB,#6366F1)"
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
                    fontWeight: active ? 600 : 500,
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            );
          })}
        </Box>

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

      {/* ================= MAIN ================= */}

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
        {/* HEADER */}

        <Box
          sx={{
            height: 82,
            background: "#FFFFFF",
            borderBottom: "1px solid #E5E7EB",
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
              Results
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
              View your academic performance
            </Typography>
          </Box>

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
                  "linear-gradient(135deg,#2563EB,#6366F1)",
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

        {/* ================= CONTENT ================= */}

        <Box
          sx={{
            p: {
              xs: 2,
              md: 4,
            },
          }}
        >
          {/* Student Information */}

          <Box
            sx={{
              background:
                "linear-gradient(135deg,#2563EB,#6366F1)",
              borderRadius: "16px",
              p: {
                xs: 2.5,
                md: 3,
              },
              color: "#FFFFFF",
              mb: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Avatar
                sx={{
                  width: 58,
                  height: 58,
                  background:
                    "rgba(255,255,255,0.18)",
                  fontWeight: 700,
                }}
              >
                AM
              </Avatar>

              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  Aslin Mercy
                </Typography>

                <Typography
                  sx={{
                    fontSize: "11px",
                    opacity: 0.85,
                    mt: 0.4,
                  }}
                >
                  B.Tech Computer Science • 3rd Year
                </Typography>

                <Typography
                  sx={{
                    fontSize: "10px",
                    opacity: 0.75,
                    mt: 0.3,
                  }}
                >
                  Register No: CSE2024001
                </Typography>
              </Box>
            </Box>

            <WorkspacePremiumOutlined
              sx={{
                fontSize: {
                  xs: 35,
                  md: 48,
                },
                opacity: 0.8,
              }}
            />
          </Box>

          {/* ================= SUMMARY ================= */}

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr 1fr",
                md: "repeat(4,1fr)",
              },
              gap: 2,
              mb: 3,
            }}
          >
            {/* CGPA */}

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
                Overall CGPA
              </Typography>

              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: 700,
                }}
              >
                8.62
              </Typography>

              <Typography
                sx={{
                  fontSize: "10px",
                  color: "#22C55E",
                  mt: 0.5,
                }}
              >
                Excellent
              </Typography>
            </Box>

            {/* SGPA */}

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
                Current SGPA
              </Typography>

              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: 700,
                }}
              >
                {currentResult.sgpa}
              </Typography>

              <Typography
                sx={{
                  fontSize: "10px",
                  color: "#4F46E5",
                  mt: 0.5,
                }}
              >
                {selectedSemester}
              </Typography>
            </Box>

            {/* Credits */}

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
                Credits Earned
              </Typography>

              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: 700,
                }}
              >
                102
              </Typography>

              <Typography
                sx={{
                  fontSize: "10px",
                  color: "#64748B",
                  mt: 0.5,
                }}
              >
                Total credits
              </Typography>
            </Box>

            {/* Backlogs */}

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
                Backlogs
              </Typography>

              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: 700,
                }}
              >
                0
              </Typography>

              <Typography
                sx={{
                  fontSize: "10px",
                  color: "#22C55E",
                  mt: 0.5,
                }}
              >
                All cleared
              </Typography>
            </Box>
          </Box>

          {/* ================= SEMESTER SELECT ================= */}

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
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
                gap: 2,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 700,
                  }}
                >
                  Academic Results
                </Typography>

                <Typography
                  sx={{
                    fontSize: "11px",
                    color: "#94A3B8",
                    mt: 0.5,
                  }}
                >
                  View your semester-wise marks
                </Typography>
              </Box>

              <Select
                size="small"
                value={selectedSemester}
                onChange={(e) =>
                  setSelectedSemester(e.target.value)
                }
                sx={{
                  minWidth: 140,
                  height: 40,
                  borderRadius: "9px",
                  fontSize: "12px",
                }}
              >
                <MenuItem value="Semester 1">
                  Semester 1
                </MenuItem>

                <MenuItem value="Semester 2">
                  Semester 2
                </MenuItem>

                <MenuItem value="Semester 3">
                  Semester 3
                </MenuItem>

                <MenuItem value="Semester 4">
                  Semester 4
                </MenuItem>

                <MenuItem value="Semester 5">
                  Semester 5
                </MenuItem>

                <MenuItem value="Semester 6">
                  Semester 6
                </MenuItem>

                <MenuItem value="Semester 7">
                  Semester 7
                </MenuItem>

                <MenuItem value="Semester 8">
                  Semester 8
                </MenuItem>
              </Select>
            </Box>

            {/* ================= 4 YEARS ================= */}

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr 1fr",
                  md: "repeat(4,1fr)",
                },
                gap: 1.5,
                mb: 3,
              }}
            >
              {[
                {
                  year: "Year 1",
                  semesters: ["Semester 1", "Semester 2"],
                },
                {
                  year: "Year 2",
                  semesters: ["Semester 3", "Semester 4"],
                },
                {
                  year: "Year 3",
                  semesters: ["Semester 5", "Semester 6"],
                },
                {
                  year: "Year 4",
                  semesters: ["Semester 7", "Semester 8"],
                },
              ].map((year) => (
                <Box
                  key={year.year}
                  sx={{
                    background: "#F8FAFC",
                    borderRadius: "10px",
                    p: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "#64748B",
                      mb: 1,
                    }}
                  >
                    {year.year}
                  </Typography>

                  {year.semesters.map((semester) => (
                    <Box
                      key={semester}
                      onClick={() =>
                        setSelectedSemester(semester)
                      }
                      sx={{
                        px: 1.2,
                        py: 0.9,
                        mb: 0.6,
                        borderRadius: "7px",
                        cursor: "pointer",

                        background:
                          selectedSemester ===
                          semester
                            ? "#EEF2FF"
                            : "#FFFFFF",

                        color:
                          selectedSemester ===
                          semester
                            ? "#4F46E5"
                            : "#64748B",

                        fontSize: "10px",
                        fontWeight:
                          selectedSemester ===
                          semester
                            ? 600
                            : 500,

                        border:
                          "1px solid #E5E7EB",

                        "&:hover": {
                          background: "#EEF2FF",
                          color: "#4F46E5",
                        },
                      }}
                    >
                      {semester}
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>

            {/* ================= SEMESTER INFO ================= */}

            <Box
              sx={{
                display: "flex",
                gap: 2,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  background: "#EEF2FF",
                  borderRadius: "10px",
                  px: 2,
                  py: 1.2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "9px",
                    color: "#64748B",
                  }}
                >
                  SGPA
                </Typography>

                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#4F46E5",
                  }}
                >
                  {currentResult.sgpa}
                </Typography>
              </Box>

              <Box
                sx={{
                  background: "#F0FDF4",
                  borderRadius: "10px",
                  px: 2,
                  py: 1.2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "9px",
                    color: "#64748B",
                  }}
                >
                  Credits
                </Typography>

                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#16A34A",
                  }}
                >
                  {currentResult.credits}
                </Typography>
              </Box>
            </Box>

            {/* ================= MARKS TABLE ================= */}

            <Box
              sx={{
                overflowX: "auto",
              }}
            >
              <Box
                sx={{
                  minWidth: 750,
                }}
              >
                {/* Header */}

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns:
                      "1.5fr 0.8fr 0.9fr 0.8fr 0.7fr 0.6fr 0.7fr",

                    px: 2,
                    py: 1.5,

                    background: "#F8FAFC",

                    borderTop:
                      "1px solid #E5E7EB",

                    borderBottom:
                      "1px solid #E5E7EB",
                  }}
                >
                  {[
                    "Subject",
                    "Internal",
                    "Assignment",
                    "External",
                    "Total",
                    "Grade",
                    "Result",
                  ].map((heading) => (
                    <Typography
                      key={heading}
                      sx={{
                        fontSize: "10px",
                        color: "#94A3B8",
                        fontWeight: 600,
                      }}
                    >
                      {heading}
                    </Typography>
                  ))}
                </Box>

                {/* Rows */}

                {currentResult.subjects.map(
                  (subject) => (
                    <Box
                      key={subject.code}
                      sx={{
                        display: "grid",
                        gridTemplateColumns:
                          "1.5fr 0.8fr 0.9fr 0.8fr 0.7fr 0.6fr 0.7fr",

                        px: 2,
                        py: 1.8,

                        borderBottom:
                          "1px solid #F1F5F9",

                        alignItems: "center",

                        "&:hover": {
                          background: "#FAFBFF",
                        },
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "11px",
                            fontWeight: 600,
                          }}
                        >
                          {subject.subject}
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
                          fontSize: "11px",
                        }}
                      >
                        {subject.internal}/25
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "11px",
                        }}
                      >
                        {subject.assignment}/10
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "11px",
                        }}
                      >
                        {subject.external}/75
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "11px",
                          fontWeight: 700,
                        }}
                      >
                        {subject.total}
                      </Typography>

                      <Box
                        sx={{
                          width: 30,
                          height: 30,
                          borderRadius: "8px",
                          background: "#EEF2FF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#4F46E5",
                          fontSize: "10px",
                          fontWeight: 700,
                        }}
                      >
                        {subject.grade}
                      </Box>

                      <Typography
                        sx={{
                          fontSize: "10px",
                          color:
                            subject.result === "Pass"
                              ? "#16A34A"
                              : "#EF4444",
                          fontWeight: 600,
                        }}
                      >
                        {subject.result}
                      </Typography>
                    </Box>
                  )
                )}
              </Box>
            </Box>
          </Box>

          {/* ================= CURRENT PERFORMANCE ================= */}

          <Box
            sx={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "14px",
              p: {
                xs: 2,
                md: 3,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 3,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "10px",
                  background: "#EEF2FF",
                  color: "#4F46E5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TrendingUpOutlined />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 700,
                  }}
                >
                  Current Semester Performance
                </Typography>

                <Typography
                  sx={{
                    fontSize: "10px",
                    color: "#94A3B8",
                  }}
                >
                  Internal and assignment performance
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "repeat(3,1fr)",
                },
                gap: 2,
              }}
            >
              <Box
                sx={{
                  border: "1px solid #E5E7EB",
                  borderRadius: "10px",
                  p: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "10px",
                    color: "#94A3B8",
                    mb: 1,
                  }}
                >
                  Internal Marks
                </Typography>

                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: 700,
                  }}
                >
                  88%
                </Typography>

                <LinearProgress
                  variant="determinate"
                  value={88}
                  sx={{
                    mt: 1,
                    height: 5,
                    borderRadius: 5,
                    background: "#EEF2FF",
                    "& .MuiLinearProgress-bar":
                      {
                        background: "#4F46E5",
                        borderRadius: 5,
                      },
                  }}
                />
              </Box>

              <Box
                sx={{
                  border: "1px solid #E5E7EB",
                  borderRadius: "10px",
                  p: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "10px",
                    color: "#94A3B8",
                    mb: 1,
                  }}
                >
                  Assignment Marks
                </Typography>

                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: 700,
                  }}
                >
                  92%
                </Typography>

                <LinearProgress
                  variant="determinate"
                  value={92}
                  sx={{
                    mt: 1,
                    height: 5,
                    borderRadius: 5,
                    background: "#F0FDF4",
                    "& .MuiLinearProgress-bar":
                      {
                        background: "#22C55E",
                        borderRadius: 5,
                      },
                  }}
                />
              </Box>

              <Box
                sx={{
                  border: "1px solid #E5E7EB",
                  borderRadius: "10px",
                  p: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "10px",
                    color: "#94A3B8",
                    mb: 1,
                  }}
                >
                  Overall Performance
                </Typography>

                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: 700,
                  }}
                >
                  90%
                </Typography>

                <LinearProgress
                  variant="determinate"
                  value={90}
                  sx={{
                    mt: 1,
                    height: 5,
                    borderRadius: 5,
                    background: "#FFF7ED",
                    "& .MuiLinearProgress-bar":
                      {
                        background: "#F59E0B",
                        borderRadius: 5,
                      },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default StudentResults;