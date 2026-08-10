import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  Avatar,
  IconButton,
  TextField,
  Button,
  Switch,
  Divider,
  Paper,
} from "@mui/material";

import {
  DashboardOutlined,
  EventAvailableOutlined,
  AssessmentOutlined,
  CalendarMonthOutlined,
  SettingsOutlined,
  NotificationsNoneOutlined,
  MenuBookOutlined,
  QrCode,
  LogoutOutlined,
  EditOutlined,
  SaveOutlined,
} from "@mui/icons-material";

const menuItems = [
  {
    label: "Dashboard",
    icon: <DashboardOutlined />,
    path: "/student-dashboard",
  },
  {
    label: "Attendance",
    icon: <EventAvailableOutlined />,
    path: "/student-attendance",
  },
  {
    label: "Scan Attendance",
    icon: <QrCode />,
    path: "/student/scan-attendance",
  },
  {
    label: "Results",
    icon: <AssessmentOutlined />,
    path: "/student/results",
  },
  {
    label: "Timetable",
    icon: <CalendarMonthOutlined />,
    path: "/student/timetable",
  },
  {
    label: "Settings",
    icon: <SettingsOutlined />,
    path: "/student/settings",
  },
];

export default function StudentSettings() {
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Aslin Mercy",
    email: "aslinmercy@gmail.com",
    registerNo: "21BTECH001",
    department: "Computer Science",
    year: "3rd Year",
    phone: "9876543210",
  });

  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);

  const handleChange = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    setEditing(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        display: "flex",
      }}
    >
      {/* SIDEBAR */}
      <Box
        sx={{
          width: "258px",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          background: "#ffffff",
          borderRight: "1px solid #e5e7eb",
          display: "flex",
          flexDirection: "column",
          zIndex: 1000,
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            height: "82px",
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            px: 3,
            borderBottom: "1px solid #f1f5f9",
          }}
        >
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: "12px",
              background:
                "linear-gradient(135deg, #2563eb, #4f46e5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 800,
              fontSize: 20,
            }}
          >
            SA
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: 17,
                fontWeight: 800,
                color: "#111827",
              }}
            >
              Smart Attendance
            </Typography>

            <Typography
              sx={{
                fontSize: 11,
                color: "#94a3b8",
              }}
            >
              Student Portal
            </Typography>
          </Box>
        </Box>

        {/* Menu */}
        <Box sx={{ px: 2, py: 3, flex: 1 }}>
          <Typography
            sx={{
              fontSize: 11,
              fontWeight: 700,
              color: "#94a3b8",
              px: 1.5,
              mb: 1.5,
              textTransform: "uppercase",
              letterSpacing: 0.8,
            }}
          >
            Main Menu
          </Typography>

          {menuItems.map((item) => {
            const active = item.label === "Settings";

            return (
              <Box
                key={item.label}
                onClick={() => navigate(item.path)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  px: 1.5,
                  py: 1.4,
                  mb: 0.7,
                  borderRadius: "10px",
                  cursor: "pointer",
                  backgroundColor: active
                    ? "#eff6ff"
                    : "transparent",
                  color: active
                    ? "#2563eb"
                    : "#64748b",
                  "&:hover": {
                    backgroundColor: "#f1f5f9",
                    color: "#2563eb",
                  },
                }}
              >
                {React.cloneElement(item.icon, {
                  sx: {
                    fontSize: 21,
                    color: active
                      ? "#2563eb"
                      : "#64748b",
                  },
                })}

                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: active ? 700 : 500,
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* Bottom Profile */}
        <Box
          sx={{
            borderTop: "1px solid #f1f5f9",
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.3,
            }}
          >
            <Avatar
              sx={{
                width: 38,
                height: 38,
                background:
                  "linear-gradient(135deg, #2563eb, #7c3aed)",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              AM
            </Avatar>

            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#1e293b",
                }}
              >
                Aslin Mercy
              </Typography>

              <Typography
                sx={{
                  fontSize: 11,
                  color: "#94a3b8",
                }}
              >
                Student
              </Typography>
            </Box>

            <IconButton size="small">
              <LogoutOutlined
                sx={{
                  fontSize: 19,
                  color: "#64748b",
                }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* MAIN CONTENT */}
      <Box
        sx={{
          marginLeft: "258px",
          width: "calc(100% - 258px)",
          minHeight: "100vh",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            height: 82,
            background: "#fff",
            borderBottom: "1px solid #e5e7eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 4,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 800,
                color: "#0f172a",
              }}
            >
              Settings
            </Typography>

            <Typography
              sx={{
                fontSize: 13,
                color: "#94a3b8",
                mt: 0.3,
              }}
            >
              Manage your profile and preferences
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <IconButton>
              <NotificationsNoneOutlined
                sx={{ color: "#64748b" }}
              />
            </IconButton>

            <Avatar
              sx={{
                width: 38,
                height: 38,
                background:
                  "linear-gradient(135deg, #2563eb, #7c3aed)",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              AM
            </Avatar>
          </Box>
        </Box>

        {/* PAGE CONTENT */}
        <Box
          sx={{
            p: 4,
            maxWidth: 1100,
          }}
        >
          {/* PROFILE */}
          <Paper
            elevation={0}
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              p: 3,
              mb: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 3,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#0f172a",
                  }}
                >
                  Profile Information
                </Typography>

                <Typography
                  sx={{
                    fontSize: 13,
                    color: "#94a3b8",
                    mt: 0.5,
                  }}
                >
                  Update your personal information
                </Typography>
              </Box>

              {!editing ? (
                <Button
                  variant="outlined"
                  startIcon={<EditOutlined />}
                  onClick={() => setEditing(true)}
                  sx={{
                    borderRadius: "9px",
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                >
                  Edit Profile
                </Button>
              ) : (
                <Button
                  variant="contained"
                  startIcon={<SaveOutlined />}
                  onClick={handleSave}
                  sx={{
                    borderRadius: "9px",
                    textTransform: "none",
                    fontWeight: 700,
                    background: "#2563eb",
                    "&:hover": {
                      background: "#1d4ed8",
                    },
                  }}
                >
                  Save Changes
                </Button>
              )}
            </Box>

            {/* Avatar */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 3,
              }}
            >
              <Avatar
                sx={{
                  width: 76,
                  height: 76,
                  background:
                    "linear-gradient(135deg, #2563eb, #7c3aed)",
                  fontSize: 24,
                  fontWeight: 700,
                }}
              >
                AM
              </Avatar>

              <Box>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 800,
                  }}
                >
                  {profile.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 13,
                    color: "#64748b",
                  }}
                >
                  {profile.department} • {profile.year}
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ mb: 3 }} />

            {/* FORM */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1fr",
                },
                gap: 2.5,
              }}
            >
              <TextField
                label="Full Name"
                value={profile.name}
                disabled={!editing}
                onChange={(e) =>
                  handleChange("name", e.target.value)
                }
                fullWidth
              />

              <TextField
                label="Email"
                value={profile.email}
                disabled={!editing}
                onChange={(e) =>
                  handleChange("email", e.target.value)
                }
                fullWidth
              />

              <TextField
                label="Register Number"
                value={profile.registerNo}
                disabled
                fullWidth
              />

              <TextField
                label="Department"
                value={profile.department}
                disabled={!editing}
                onChange={(e) =>
                  handleChange(
                    "department",
                    e.target.value
                  )
                }
                fullWidth
              />

              <TextField
                label="Year"
                value={profile.year}
                disabled={!editing}
                onChange={(e) =>
                  handleChange("year", e.target.value)
                }
                fullWidth
              />

              <TextField
                label="Phone Number"
                value={profile.phone}
                disabled={!editing}
                onChange={(e) =>
                  handleChange("phone", e.target.value)
                }
                fullWidth
              />
            </Box>
          </Paper>

          {/* PREFERENCES */}
          <Paper
            elevation={0}
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              p: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 800,
                color: "#0f172a",
                mb: 0.5,
              }}
            >
              Preferences
            </Typography>

            <Typography
              sx={{
                fontSize: 13,
                color: "#94a3b8",
                mb: 2,
              }}
            >
              Manage your notification preferences
            </Typography>

            <Divider sx={{ mb: 1 }} />

            {/* PUSH NOTIFICATIONS */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                py: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <NotificationsNoneOutlined
                  sx={{ color: "#2563eb" }}
                />

                <Box>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 700,
                    }}
                  >
                    Push Notifications
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "#94a3b8",
                    }}
                  >
                    Receive attendance and academic
                    notifications
                  </Typography>
                </Box>
              </Box>

              <Switch
                checked={notifications}
                onChange={(e) =>
                  setNotifications(e.target.checked)
                }
              />
            </Box>

            <Divider />

            {/* EMAIL ALERTS */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                py: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <MenuBookOutlined
                  sx={{ color: "#7c3aed" }}
                />

                <Box>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 700,
                    }}
                  >
                    Email Alerts
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "#94a3b8",
                    }}
                  >
                    Receive important updates through
                    email
                  </Typography>
                </Box>
              </Box>

              <Switch
                checked={emailAlerts}
                onChange={(e) =>
                  setEmailAlerts(e.target.checked)
                }
              />
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}