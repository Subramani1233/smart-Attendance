import React, { useMemo, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  InputAdornment,
  Chip,
  Button,
  Divider,
} from "@mui/material";

import {
  Search,
  MenuBookOutlined,
  PersonOutlined,
  LocationOnOutlined,
  DescriptionOutlined,
  AssignmentOutlined,
  DownloadOutlined,
  CloseOutlined,
  SchoolOutlined,
} from "@mui/icons-material";

const subjects = [
  {
    code: "MA301",
    name: "Mathematics",
    faculty: "Dr. Priya Kumar",
    credits: 4,
    room: "CSE-204",
    attendance: 90,
    hours: "4 Hours / Week",
    notes: [
      {
        title: "Unit 1 - Matrices",
        description: "Introduction to matrices and mathematical operations.",
        file: "Mathematics Unit 1 Notes.pdf",
      },
      {
        title: "Unit 2 - Differential Equations",
        description: "Important concepts and solved examples.",
        file: "Mathematics Unit 2 Notes.pdf",
      },
      {
        title: "Unit 3 - Probability",
        description: "Probability concepts, formulas and examples.",
        file: "Mathematics Unit 3 Notes.pdf",
      },
    ],
    materials: [
      "Mathematics Reference Book.pdf",
      "Important Formula Sheet.pdf",
    ],
    assignments: [
      {
        title: "Matrix Problems",
        dueDate: "18 Aug 2026",
        status: "Pending",
      },
      {
        title: "Probability Assignment",
        dueDate: "25 Aug 2026",
        status: "Pending",
      },
    ],
  },

  {
    code: "CS302",
    name: "Computer Science",
    faculty: "Mr. Arun Kumar",
    credits: 4,
    room: "CSE-204",
    attendance: 91,
    hours: "4 Hours / Week",
    notes: [
      {
        title: "Unit 1 - Computer Fundamentals",
        description: "Basic computer architecture and fundamentals.",
        file: "Computer Science Unit 1 Notes.pdf",
      },
      {
        title: "Unit 2 - Operating Systems",
        description: "Processes, memory management and scheduling.",
        file: "Operating Systems Notes.pdf",
      },
      {
        title: "Unit 3 - Computer Architecture",
        description: "CPU, memory and system architecture.",
        file: "Computer Architecture Notes.pdf",
      },
    ],
    materials: [
      "Computer Science Reference.pdf",
      "Operating Systems PPT.pdf",
    ],
    assignments: [
      {
        title: "OS Scheduling",
        dueDate: "20 Aug 2026",
        status: "Submitted",
      },
      {
        title: "Computer Architecture",
        dueDate: "28 Aug 2026",
        status: "Pending",
      },
    ],
  },

  {
    code: "CS303",
    name: "Database Management",
    faculty: "Mrs. Priya",
    credits: 4,
    room: "CSE-204",
    attendance: 80,
    hours: "4 Hours / Week",
    notes: [
      {
        title: "Unit 1 - Database Fundamentals",
        description: "Database concepts, architecture and data models.",
        file: "DBMS Unit 1 Notes.pdf",
      },
      {
        title: "Unit 2 - ER Model",
        description: "Entity relationship diagrams and database design.",
        file: "DBMS ER Model Notes.pdf",
      },
      {
        title: "Unit 3 - SQL",
        description: "SQL commands, queries and database operations.",
        file: "DBMS SQL Notes.pdf",
      },
    ],
    materials: [
      "DBMS Reference Material.pdf",
      "SQL Commands Cheat Sheet.pdf",
    ],
    assignments: [
      {
        title: "ER Diagram",
        dueDate: "16 Aug 2026",
        status: "Pending",
      },
      {
        title: "SQL Queries",
        dueDate: "23 Aug 2026",
        status: "Pending",
      },
    ],
  },

  {
    code: "CS304",
    name: "Web Technology",
    faculty: "Mr. Suresh",
    credits: 3,
    room: "LAB-2",
    attendance: 90,
    hours: "4 Hours / Week",
    notes: [
      {
        title: "Unit 1 - HTML & CSS",
        description: "Web page structure, HTML elements and CSS styling.",
        file: "Web Technology Unit 1 Notes.pdf",
      },
      {
        title: "Unit 2 - JavaScript",
        description: "JavaScript fundamentals and DOM manipulation.",
        file: "JavaScript Notes.pdf",
      },
      {
        title: "Unit 3 - React",
        description: "React components, props, state and routing.",
        file: "React Notes.pdf",
      },
    ],
    materials: [
      "HTML CSS Reference.pdf",
      "JavaScript Practice Questions.pdf",
    ],
    assignments: [
      {
        title: "Responsive Website",
        dueDate: "19 Aug 2026",
        status: "Submitted",
      },
      {
        title: "React Mini Project",
        dueDate: "30 Aug 2026",
        status: "Pending",
      },
    ],
  },

  {
    code: "CS305",
    name: "Software Engineering",
    faculty: "Dr. Rajesh",
    credits: 3,
    room: "CSE-204",
    attendance: 85,
    hours: "3 Hours / Week",
    notes: [
      {
        title: "Unit 1 - Software Process",
        description: "Software development life cycle and process models.",
        file: "Software Engineering Unit 1.pdf",
      },
      {
        title: "Unit 2 - Agile Methodology",
        description: "Agile principles, Scrum and development practices.",
        file: "Agile Methodology Notes.pdf",
      },
      {
        title: "Unit 3 - Software Testing",
        description: "Testing methods and software quality assurance.",
        file: "Software Testing Notes.pdf",
      },
    ],
    materials: [
      "Software Engineering Reference.pdf",
      "Agile Scrum Guide.pdf",
    ],
    assignments: [
      {
        title: "SDLC Assignment",
        dueDate: "21 Aug 2026",
        status: "Pending",
      },
      {
        title: "Software Testing",
        dueDate: "27 Aug 2026",
        status: "Pending",
      },
    ],
  },

  {
    code: "CS306",
    name: "Computer Networks",
    faculty: "Mr. Daniel",
    credits: 3,
    room: "CSE-204",
    attendance: 88,
    hours: "3 Hours / Week",
    notes: [
      {
        title: "Unit 1 - Network Fundamentals",
        description: "Introduction to computer networks and protocols.",
        file: "Computer Networks Unit 1.pdf",
      },
      {
        title: "Unit 2 - OSI Model",
        description: "OSI reference model and networking layers.",
        file: "OSI Model Notes.pdf",
      },
      {
        title: "Unit 3 - TCP/IP",
        description: "TCP/IP architecture and communication protocols.",
        file: "TCP IP Notes.pdf",
      },
    ],
    materials: [
      "Computer Networks Reference.pdf",
      "Networking Protocols.pdf",
    ],
    assignments: [
      {
        title: "OSI Model",
        dueDate: "22 Aug 2026",
        status: "Submitted",
      },
      {
        title: "TCP/IP Assignment",
        dueDate: "29 Aug 2026",
        status: "Pending",
      },
    ],
  },
];

function StudentSubjects() {
  const [search, setSearch] = useState("");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [activeTab, setActiveTab] = useState("notes");

  const filteredSubjects = useMemo(() => {
    return subjects.filter(
      (subject) =>
        subject.name.toLowerCase().includes(search.toLowerCase()) ||
        subject.code.toLowerCase().includes(search.toLowerCase()) ||
        subject.faculty.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const totalCredits = subjects.reduce(
    (total, subject) => total + subject.credits,
    0
  );

  return (
    <Box
      sx={{
        minHeight: "100%",
        background: "#F8FAFF",
        p: {
          xs: 2,
          md: 4,
        },
      }}
    >
      {/* ================= HEADER ================= */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: {
            xs: "flex-start",
            md: "center",
          },
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: 2,
          mb: 3,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                md: "26px",
              },
              fontWeight: 700,
              color: "#111827",
            }}
          >
            Subjects
          </Typography>

          <Typography
            sx={{
              fontSize: "13px",
              color: "#94A3B8",
              mt: 0.5,
            }}
          >
            View your current semester subjects and study materials
          </Typography>
        </Box>

        {/* SEARCH */}

        <TextField
          size="small"
          placeholder="Search subject..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            width: {
              xs: "100%",
              sm: 280,
            },
            "& .MuiOutlinedInput-root": {
              height: 42,
              borderRadius: "10px",
              background: "#FFFFFF",
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
                      fontSize: 19,
                      color: "#94A3B8",
                    }}
                  />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>

      {/* ================= SUMMARY CARDS ================= */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(3, 1fr)",
          },
          gap: 2,
          mb: 3,
        }}
      >
        {/* Total Subjects */}

        <Paper
          elevation={0}
          sx={{
            border: "1px solid #E5E7EB",
            borderRadius: "14px",
            p: 2.5,
            background: "#FFFFFF",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
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
                Total Subjects
              </Typography>

              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: 700,
                }}
              >
                {subjects.length}
              </Typography>

              <Typography
                sx={{
                  fontSize: "10px",
                  color: "#64748B",
                  mt: 0.5,
                }}
              >
                Current semester
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
              <MenuBookOutlined />
            </Box>
          </Box>
        </Paper>

        {/* Semester */}

        <Paper
          elevation={0}
          sx={{
            border: "1px solid #E5E7EB",
            borderRadius: "14px",
            p: 2.5,
            background: "#FFFFFF",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
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
                Current Semester
              </Typography>

              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: 700,
                }}
              >
                5
              </Typography>

              <Typography
                sx={{
                  fontSize: "10px",
                  color: "#64748B",
                  mt: 0.5,
                }}
              >
                B.Tech Computer Science
              </Typography>
            </Box>

            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "12px",
                background: "#ECFDF5",
                color: "#16A34A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SchoolOutlined />
            </Box>
          </Box>
        </Paper>

        {/* Credits */}

        <Paper
          elevation={0}
          sx={{
            border: "1px solid #E5E7EB",
            borderRadius: "14px",
            p: 2.5,
            background: "#FFFFFF",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
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
                Total Credits
              </Typography>

              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: 700,
                }}
              >
                {totalCredits}
              </Typography>

              <Typography
                sx={{
                  fontSize: "10px",
                  color: "#64748B",
                  mt: 0.5,
                }}
              >
                Academic credits
              </Typography>
            </Box>

            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "12px",
                background: "#F5F3FF",
                color: "#7C3AED",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AssignmentOutlined />
            </Box>
          </Box>
        </Paper>
      </Box>

      {/* ================= SUBJECTS ================= */}

      <Paper
        elevation={0}
        sx={{
          border: "1px solid #E5E7EB",
          borderRadius: "16px",
          p: {
            xs: 2,
            md: 3,
          },
          background: "#FFFFFF",
        }}
      >
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              fontSize: "17px",
              fontWeight: 700,
            }}
          >
            Current Semester Subjects
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              color: "#94A3B8",
              mt: 0.5,
            }}
          >
            Access subject information, notes and study materials
          </Typography>
        </Box>

        {filteredSubjects.length === 0 ? (
          <Box
            sx={{
              py: 6,
              textAlign: "center",
            }}
          >
            <Search
              sx={{
                fontSize: 45,
                color: "#CBD5E1",
                mb: 1,
              }}
            />

            <Typography
              sx={{
                fontSize: "14px",
                color: "#94A3B8",
              }}
            >
              No subjects found
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)",
                xl: "repeat(3, 1fr)",
              },
              gap: 2,
            }}
          >
            {filteredSubjects.map((subject) => (
              <Paper
                key={subject.code}
                elevation={0}
                sx={{
                  border: "1px solid #E5E7EB",
                  borderRadius: "14px",
                  p: 2,
                  transition: "0.2s",
                  "&:hover": {
                    borderColor: "#C7D2FE",
                    boxShadow:
                      "0 8px 25px rgba(37,99,235,0.08)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {/* Subject Header */}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1.2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        minWidth: 42,
                        borderRadius: "11px",
                        background:
                          "linear-gradient(135deg,#2563EB,#6366F1)",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <MenuBookOutlined fontSize="small" />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: "13px",
                          fontWeight: 700,
                        }}
                      >
                        {subject.name}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "10px",
                          color: "#94A3B8",
                          mt: 0.3,
                        }}
                      >
                        {subject.code}
                      </Typography>
                    </Box>
                  </Box>

                  <Chip
                    label={`${subject.attendance}%`}
                    size="small"
                    sx={{
                      height: 25,
                      fontSize: "10px",
                      fontWeight: 700,
                      background:
                        subject.attendance >= 85
                          ? "#DCFCE7"
                          : "#FEF3C7",
                      color:
                        subject.attendance >= 85
                          ? "#16A34A"
                          : "#D97706",
                    }}
                  />
                </Box>

                <Divider sx={{ mb: 1.8 }} />

                {/* Faculty */}

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 1.2,
                  }}
                >
                  <PersonOutlined
                    sx={{
                      fontSize: 18,
                      color: "#94A3B8",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "11px",
                      color: "#64748B",
                    }}
                  >
                    {subject.faculty}
                  </Typography>
                </Box>

                {/* Room */}

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 1.2,
                  }}
                >
                  <LocationOnOutlined
                    sx={{
                      fontSize: 18,
                      color: "#94A3B8",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "11px",
                      color: "#64748B",
                    }}
                  >
                    {subject.room}
                  </Typography>
                </Box>

                {/* Credits */}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "10px",
                      color: "#94A3B8",
                    }}
                  >
                    Credits: {subject.credits}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "10px",
                      color: "#94A3B8",
                    }}
                  >
                    {subject.hours}
                  </Typography>
                </Box>

                {/* Attendance */}

                <Box
                  sx={{
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      height: 6,
                      borderRadius: 10,
                      background: "#F1F5F9",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        width: `${subject.attendance}%`,
                        height: "100%",
                        borderRadius: 10,
                        background:
                          subject.attendance >= 85
                            ? "#22C55E"
                            : "#F59E0B",
                      }}
                    />
                  </Box>
                </Box>

                {/* View Button */}

                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => {
                    setSelectedSubject(subject);
                    setActiveTab("notes");
                  }}
                  sx={{
                    borderRadius: "9px",
                    textTransform: "none",
                    fontSize: "12px",
                    fontWeight: 600,
                    borderColor: "#DBEAFE",
                    color: "#2563EB",
                    "&:hover": {
                      background: "#EFF6FF",
                      borderColor: "#93C5FD",
                    },
                  }}
                >
                  View Subject
                </Button>
              </Paper>
            ))}
          </Box>
        )}
      </Paper>

      {/* ================= SUBJECT DETAILS ================= */}

      {selectedSubject && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            background: "rgba(15,23,42,0.45)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
          onClick={() => setSelectedSubject(null)}
        >
          <Paper
            elevation={0}
            onClick={(e) => e.stopPropagation()}
            sx={{
              width: "100%",
              maxWidth: 850,
              maxHeight: "90vh",
              overflowY: "auto",
              borderRadius: "18px",
              background: "#FFFFFF",
            }}
          >
            {/* Modal Header */}

            <Box
              sx={{
                p: {
                  xs: 2,
                  md: 3,
                },
                background:
                  "linear-gradient(135deg,#2563EB,#7C3AED)",
                color: "#FFFFFF",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "11px",
                    opacity: 0.8,
                  }}
                >
                  {selectedSubject.code}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: 700,
                    mt: 0.5,
                  }}
                >
                  {selectedSubject.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "12px",
                    opacity: 0.85,
                    mt: 0.5,
                  }}
                >
                  Faculty: {selectedSubject.faculty}
                </Typography>
              </Box>

              <Button
                onClick={() => setSelectedSubject(null)}
                sx={{
                  minWidth: 40,
                  width: 40,
                  height: 40,
                  borderRadius: "10px",
                  color: "#FFFFFF",
                  background: "rgba(255,255,255,0.15)",
                  "&:hover": {
                    background: "rgba(255,255,255,0.25)",
                  },
                }}
              >
                <CloseOutlined />
              </Button>
            </Box>

            {/* Subject Info */}

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                },
                gap: 1.5,
                p: 2.5,
              }}
            >
              <Box
                sx={{
                  background: "#F8FAFC",
                  borderRadius: "10px",
                  p: 1.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "9px",
                    color: "#94A3B8",
                  }}
                >
                  Attendance
                </Typography>

                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color:
                      selectedSubject.attendance >= 85
                        ? "#16A34A"
                        : "#D97706",
                  }}
                >
                  {selectedSubject.attendance}%
                </Typography>
              </Box>

              <Box
                sx={{
                  background: "#F8FAFC",
                  borderRadius: "10px",
                  p: 1.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "9px",
                    color: "#94A3B8",
                  }}
                >
                  Credits
                </Typography>

                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  {selectedSubject.credits}
                </Typography>
              </Box>

              <Box
                sx={{
                  background: "#F8FAFC",
                  borderRadius: "10px",
                  p: 1.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "9px",
                    color: "#94A3B8",
                  }}
                >
                  Room
                </Typography>

                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  {selectedSubject.room}
                </Typography>
              </Box>

              <Box
                sx={{
                  background: "#F8FAFC",
                  borderRadius: "10px",
                  p: 1.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "9px",
                    color: "#94A3B8",
                  }}
                >
                  Weekly Hours
                </Typography>

                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  {selectedSubject.hours}
                </Typography>
              </Box>
            </Box>

            {/* Tabs */}

            <Box
              sx={{
                px: 2.5,
                display: "flex",
                gap: 1,
                overflowX: "auto",
              }}
            >
              <Button
                startIcon={<DescriptionOutlined />}
                onClick={() => setActiveTab("notes")}
                sx={{
                  textTransform: "none",
                  borderRadius: "9px",
                  color:
                    activeTab === "notes"
                      ? "#2563EB"
                      : "#64748B",
                  background:
                    activeTab === "notes"
                      ? "#EFF6FF"
                      : "transparent",
                  fontWeight:
                    activeTab === "notes"
                      ? 700
                      : 500,
                }}
              >
                Notes
              </Button>

              <Button
                startIcon={<MenuBookOutlined />}
                onClick={() => setActiveTab("materials")}
                sx={{
                  textTransform: "none",
                  borderRadius: "9px",
                  color:
                    activeTab === "materials"
                      ? "#2563EB"
                      : "#64748B",
                  background:
                    activeTab === "materials"
                      ? "#EFF6FF"
                      : "transparent",
                  fontWeight:
                    activeTab === "materials"
                      ? 700
                      : 500,
                }}
              >
                Materials
              </Button>

              <Button
                startIcon={<AssignmentOutlined />}
                onClick={() => setActiveTab("assignments")}
                sx={{
                  textTransform: "none",
                  borderRadius: "9px",
                  color:
                    activeTab === "assignments"
                      ? "#2563EB"
                      : "#64748B",
                  background:
                    activeTab === "assignments"
                      ? "#EFF6FF"
                      : "transparent",
                  fontWeight:
                    activeTab === "assignments"
                      ? 700
                      : 500,
                }}
              >
                Assignments
              </Button>
            </Box>

            <Divider sx={{ mt: 1 }} />

            {/* ================= NOTES ================= */}

            {activeTab === "notes" && (
              <Box sx={{ p: 2.5 }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 700,
                    mb: 0.5,
                  }}
                >
                  Subject Notes
                </Typography>

                <Typography
                  sx={{
                    fontSize: "11px",
                    color: "#94A3B8",
                    mb: 2,
                  }}
                >
                  Unit-wise notes provided by your faculty
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                  }}
                >
                  {selectedSubject.notes.map((note) => (
                    <Paper
                      key={note.title}
                      elevation={0}
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
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            gap: 1.3,
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              width: 40,
                              height: 40,
                              minWidth: 40,
                              borderRadius: "10px",
                              background: "#EFF6FF",
                              color: "#2563EB",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <DescriptionOutlined fontSize="small" />
                          </Box>

                          <Box>
                            <Typography
                              sx={{
                                fontSize: "13px",
                                fontWeight: 700,
                              }}
                            >
                              {note.title}
                            </Typography>

                            <Typography
                              sx={{
                                fontSize: "10px",
                                color: "#94A3B8",
                                mt: 0.3,
                              }}
                            >
                              {note.description}
                            </Typography>

                            <Typography
                              sx={{
                                fontSize: "9px",
                                color: "#64748B",
                                mt: 0.5,
                              }}
                            >
                              📄 {note.file}
                            </Typography>
                          </Box>
                        </Box>

                        <Button
                          size="small"
                          startIcon={<DownloadOutlined />}
                          sx={{
                            textTransform: "none",
                            fontSize: "10px",
                            borderRadius: "8px",
                            flexShrink: 0,
                          }}
                        >
                          Download
                        </Button>
                      </Box>
                    </Paper>
                  ))}
                </Box>
              </Box>
            )}

            {/* ================= MATERIALS ================= */}

            {activeTab === "materials" && (
              <Box sx={{ p: 2.5 }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 700,
                    mb: 0.5,
                  }}
                >
                  Study Materials
                </Typography>

                <Typography
                  sx={{
                    fontSize: "11px",
                    color: "#94A3B8",
                    mb: 2,
                  }}
                >
                  Reference materials and learning resources
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                  }}
                >
                  {selectedSubject.materials.map((material) => (
                    <Box
                      key={material}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        border: "1px solid #E5E7EB",
                        borderRadius: "11px",
                        p: 1.7,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.2,
                        }}
                      >
                        <DescriptionOutlined
                          sx={{
                            color: "#7C3AED",
                          }}
                        />

                        <Typography
                          sx={{
                            fontSize: "12px",
                            fontWeight: 600,
                          }}
                        >
                          {material}
                        </Typography>
                      </Box>

                      <Button
                        size="small"
                        startIcon={<DownloadOutlined />}
                        sx={{
                          textTransform: "none",
                          fontSize: "10px",
                        }}
                      >
                        Download
                      </Button>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}

            {/* ================= ASSIGNMENTS ================= */}

            {activeTab === "assignments" && (
              <Box sx={{ p: 2.5 }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 700,
                    mb: 0.5,
                  }}
                >
                  Assignments
                </Typography>

                <Typography
                  sx={{
                    fontSize: "11px",
                    color: "#94A3B8",
                    mb: 2,
                  }}
                >
                  View your subject assignments and deadlines
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                  }}
                >
                  {selectedSubject.assignments.map((assignment) => (
                    <Box
                      key={assignment.title}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        border: "1px solid #E5E7EB",
                        borderRadius: "11px",
                        p: 1.8,
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 38,
                            height: 38,
                            borderRadius: "9px",
                            background: "#F5F3FF",
                            color: "#7C3AED",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <AssignmentOutlined fontSize="small" />
                        </Box>

                        <Box>
                          <Typography
                            sx={{
                              fontSize: "12px",
                              fontWeight: 700,
                            }}
                          >
                            {assignment.title}
                          </Typography>

                          <Typography
                            sx={{
                              fontSize: "10px",
                              color: "#94A3B8",
                              mt: 0.3,
                            }}
                          >
                            Due: {assignment.dueDate}
                          </Typography>
                        </Box>
                      </Box>

                      <Chip
                        label={assignment.status}
                        size="small"
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          background:
                            assignment.status === "Submitted"
                              ? "#DCFCE7"
                              : "#FEF3C7",
                          color:
                            assignment.status === "Submitted"
                              ? "#16A34A"
                              : "#D97706",
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
          </Paper>
        </Box>
      )}
    </Box>
  );
}

export default StudentSubjects;