import React, { useMemo, useState } from "react";

import {
  Box,
  Typography,
  Paper,
  Avatar,
  LinearProgress,
  TextField,
  InputAdornment,
  Chip,
  IconButton,
} from "@mui/material";

import {
  Search,
  TrendingUpOutlined,
  EmojiEventsOutlined,
  NotificationsNoneOutlined,
  SchoolOutlined,
  CheckCircleOutlined,
} from "@mui/icons-material";

export default function StudentResults() {
  const [search, setSearch] = useState("");

  // =========================
  // SUBJECT RESULTS
  // =========================

  const subjects = [
    {
      code: "MA301",
      name: "Mathematics",
      internal: 28,
      external: 62,
      total: 90,
      max: 100,
      grade: "A+",
      gradePoint: 9,
      result: "Pass",
    },
    {
      code: "CS302",
      name: "Computer Science",
      internal: 26,
      external: 58,
      total: 84,
      max: 100,
      grade: "A",
      gradePoint: 8,
      result: "Pass",
    },
    {
      code: "CS303",
      name: "Database Management",
      internal: 24,
      external: 54,
      total: 78,
      max: 100,
      grade: "B+",
      gradePoint: 7,
      result: "Pass",
    },
    {
      code: "CS304",
      name: "Web Technology",
      internal: 27,
      external: 60,
      total: 87,
      max: 100,
      grade: "A+",
      gradePoint: 9,
      result: "Pass",
    },
    {
      code: "CS305",
      name: "Software Engineering",
      internal: 25,
      external: 56,
      total: 81,
      max: 100,
      grade: "A",
      gradePoint: 8,
      result: "Pass",
    },
    {
      code: "CS306",
      name: "Computer Networks",
      internal: 22,
      external: 49,
      total: 71,
      max: 100,
      grade: "B+",
      gradePoint: 7,
      result: "Pass",
    },
  ];

  // =========================
  // FILTER
  // =========================

  const filteredSubjects = useMemo(() => {
    return subjects.filter(
      (subject) =>
        subject.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        subject.code
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  }, [search]);

  // =========================
  // CALCULATIONS
  // =========================

  const totalMarks = subjects.reduce(
    (sum, subject) => sum + subject.total,
    0
  );

  const maxMarks = subjects.reduce(
    (sum, subject) => sum + subject.max,
    0
  );

  const percentage = Math.round(
    (totalMarks / maxMarks) * 100
  );

  const averageGradePoint =
    subjects.reduce(
      (sum, subject) => sum + subject.gradePoint,
      0
    ) / subjects.length;

  const cgpa = averageGradePoint.toFixed(1);

  // =========================
  // GRADE COLOR
  // =========================

  const getGradeColor = (grade) => {
    if (grade === "A+") {
      return {
        background: "#DCFCE7",
        color: "#16A34A",
      };
    }

    if (grade === "A") {
      return {
        background: "#DBEAFE",
        color: "#2563EB",
      };
    }

    if (grade === "B+") {
      return {
        background: "#FEF3C7",
        color: "#D97706",
      };
    }

    return {
      background: "#F1F5F9",
      color: "#64748B",
    };
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 82px)",
        background: "#F8FAFC",
        p: {
          xs: 2,
          sm: 3,
          md: 4,
        },
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
                 Academic Results
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
                 View your semester examination results
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
      {/* ========================= */}
      {/* RESULT SUMMARY */}
      {/* ========================= */}

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
        {/* Percentage */}

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
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: 11,
                  color: "#94A3B8",
                  mb: 1,
                }}
              >
                Overall Percentage
              </Typography>

              <Typography
                sx={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#0F172A",
                }}
              >
                {percentage}%
              </Typography>

              <Typography
                sx={{
                  fontSize: 10,
                  color: "#22C55E",
                  mt: 0.5,
                }}
              >
                Excellent performance
              </Typography>
            </Box>

            <Box
              sx={{
                width: 46,
                height: 46,
                borderRadius: "12px",
                background: "#EEF2FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TrendingUpOutlined
                sx={{
                  color: "#4F46E5",
                  fontSize: 23,
                }}
              />
            </Box>
          </Box>
        </Paper>

        {/* CGPA */}

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
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: 11,
                  color: "#94A3B8",
                  mb: 1,
                }}
              >
                Current CGPA
              </Typography>

              <Typography
                sx={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#0F172A",
                }}
              >
                {cgpa}
              </Typography>

              <Typography
                sx={{
                  fontSize: 10,
                  color: "#64748B",
                  mt: 0.5,
                }}
              >
                Out of 10.0
              </Typography>
            </Box>

            <Box
              sx={{
                width: 46,
                height: 46,
                borderRadius: "12px",
                background: "#F5F3FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <EmojiEventsOutlined
                sx={{
                  color: "#7C3AED",
                  fontSize: 23,
                }}
              />
            </Box>
          </Box>
        </Paper>

        {/* Subjects */}

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
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: 11,
                  color: "#94A3B8",
                  mb: 1,
                }}
              >
                Subjects
              </Typography>

              <Typography
                sx={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#0F172A",
                }}
              >
                {subjects.length}
              </Typography>

              <Typography
                sx={{
                  fontSize: 10,
                  color: "#64748B",
                  mt: 0.5,
                }}
              >
                This semester
              </Typography>
            </Box>

            <Box
              sx={{
                width: 46,
                height: 46,
                borderRadius: "12px",
                background: "#EFF6FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SchoolOutlined
                sx={{
                  color: "#2563EB",
                  fontSize: 23,
                }}
              />
            </Box>
          </Box>
        </Paper>

        {/* Result */}

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
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: 11,
                  color: "#94A3B8",
                  mb: 1,
                }}
              >
                Semester Result
              </Typography>

              <Typography
                sx={{
                  fontSize: 25,
                  fontWeight: 800,
                  color: "#16A34A",
                }}
              >
                PASS
              </Typography>

              <Typography
                sx={{
                  fontSize: 10,
                  color: "#64748B",
                  mt: 0.5,
                }}
              >
                All subjects cleared
              </Typography>
            </Box>

            <Box
              sx={{
                width: 46,
                height: 46,
                borderRadius: "12px",
                background: "#DCFCE7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircleOutlined
                sx={{
                  color: "#16A34A",
                  fontSize: 23,
                }}
              />
            </Box>
          </Box>
        </Paper>
      </Box>

      {/* ========================= */}
      {/* PERFORMANCE CARD */}
      {/* ========================= */}

      <Paper
        elevation={0}
        sx={{
          border: "1px solid #E5E7EB",
          borderRadius: "14px",
          p: {
            xs: 2,
            md: 3,
          },
          mb: 3,
          background: "#FFFFFF",
        }}
      >
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 800,
            color: "#0F172A",
          }}
        >
          Academic Performance
        </Typography>

        <Typography
          sx={{
            fontSize: 11,
            color: "#94A3B8",
            mt: 0.5,
            mb: 2.5,
          }}
        >
          Overall marks achieved in the current semester
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: 11,
              fontWeight: 600,
              color: "#475569",
            }}
          >
            Total Marks
          </Typography>

          <Typography
            sx={{
              fontSize: 11,
              fontWeight: 700,
              color: "#4F46E5",
            }}
          >
            {totalMarks} / {maxMarks}
          </Typography>
        </Box>

        <LinearProgress
          variant="determinate"
          value={percentage}
          sx={{
            height: 9,
            borderRadius: 10,
            background: "#EEF2FF",

            "& .MuiLinearProgress-bar": {
              borderRadius: 10,
              background:
                "linear-gradient(90deg,#2563EB,#6366F1)",
            },
          }}
        />
      </Paper>

      {/* ========================= */}
      {/* SUBJECT RESULTS */}
      {/* ========================= */}

      <Paper
        elevation={0}
        sx={{
          border: "1px solid #E5E7EB",
          borderRadius: "14px",
          overflow: "hidden",
          background: "#FFFFFF",
        }}
      >
        {/* Header */}

        <Box
          sx={{
            p: {
              xs: 2,
              md: 3,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 800,
              color: "#0F172A",
            }}
          >
            Subject-wise Results
          </Typography>

          <Typography
            sx={{
              fontSize: 11,
              color: "#94A3B8",
              mt: 0.5,
            }}
          >
            Detailed marks and grades for each subject
          </Typography>
        </Box>

        {/* Desktop Table Header */}

        <Box
          sx={{
            display: {
              xs: "none",
              md: "grid",
            },

            gridTemplateColumns:
              "1.2fr 1.4fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr",

            px: 3,
            py: 1.5,

            background: "#F8FAFC",

            borderTop: "1px solid #F1F5F9",
            borderBottom: "1px solid #F1F5F9",
          }}
        >
          {[
            "Subject",
            "Name",
            "Internal",
            "External",
            "Total",
            "Grade",
            "Result",
          ].map((item) => (
            <Typography
              key={item}
              sx={{
                fontSize: 10,
                color: "#94A3B8",
                fontWeight: 700,
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* RESULT ROWS */}

        {filteredSubjects.map((subject, index) => {
          const gradeStyle = getGradeColor(
            subject.grade
          );

          return (
            <Box key={subject.code}>
              {/* Desktop */}

              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "grid",
                  },

                  gridTemplateColumns:
                    "1.2fr 1.4fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr",

                  px: 3,
                  py: 2,

                  alignItems: "center",

                  borderBottom:
                    index !==
                    filteredSubjects.length - 1
                      ? "1px solid #F1F5F9"
                      : "none",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#2563EB",
                  }}
                >
                  {subject.code}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#1E293B",
                  }}
                >
                  {subject.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 11,
                    color: "#64748B",
                  }}
                >
                  {subject.internal}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 11,
                    color: "#64748B",
                  }}
                >
                  {subject.external}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 800,
                    color: "#0F172A",
                  }}
                >
                  {subject.total}
                </Typography>

                <Box>
                  <Chip
                    label={subject.grade}
                    size="small"
                    sx={{
                      height: 25,
                      fontSize: 10,
                      fontWeight: 800,
                      background:
                        gradeStyle.background,
                      color: gradeStyle.color,
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#16A34A",
                  }}
                >
                  {subject.result}
                </Typography>
              </Box>

              {/* Mobile Card */}

              <Box
                sx={{
                  display: {
                    xs: "block",
                    md: "none",
                  },

                  p: 2,

                  borderBottom:
                    index !==
                    filteredSubjects.length - 1
                      ? "1px solid #F1F5F9"
                      : "none",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: 1.5,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#2563EB",
                      }}
                    >
                      {subject.code}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#1E293B",
                        mt: 0.3,
                      }}
                    >
                      {subject.name}
                    </Typography>
                  </Box>

                  <Chip
                    label={subject.grade}
                    size="small"
                    sx={{
                      height: 26,
                      fontSize: 10,
                      fontWeight: 800,
                      background:
                        gradeStyle.background,
                      color: gradeStyle.color,
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(3,1fr)",
                    gap: 1,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 9,
                        color: "#94A3B8",
                      }}
                    >
                      Internal
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 13,
                        fontWeight: 700,
                      }}
                    >
                      {subject.internal}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: 9,
                        color: "#94A3B8",
                      }}
                    >
                      External
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 13,
                        fontWeight: 700,
                      }}
                    >
                      {subject.external}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: 9,
                        color: "#94A3B8",
                      }}
                    >
                      Total
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 13,
                        fontWeight: 800,
                      }}
                    >
                      {subject.total}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 10,
                      color: "#64748B",
                    }}
                  >
                    Grade Point:{" "}
                    <b>{subject.gradePoint}</b>
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: "#16A34A",
                    }}
                  >
                    {subject.result}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}

        {/* NO RESULT */}

        {filteredSubjects.length === 0 && (
          <Box
            sx={{
              py: 6,
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                color: "#94A3B8",
              }}
            >
              No subjects found
            </Typography>
          </Box>
        )}
      </Paper>

      {/* ========================= */}
      {/* FOOTER NOTE */}
      {/* ========================= */}

      <Box
        sx={{
          mt: 2.5,
          p: 2,
          borderRadius: "10px",
          background: "#EFF6FF",
          border: "1px solid #DBEAFE",
        }}
      >
        <Typography
          sx={{
            fontSize: 11,
            color: "#475569",
            lineHeight: 1.6,
          }}
        >
          <b>Note:</b> Results shown above are sample
          academic records. Final marks and grades will
          be updated by the faculty or administration.
        </Typography>
      </Box>
    </Box>
  );
}