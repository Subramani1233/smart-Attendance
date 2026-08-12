import React, { useState } from "react";

import {
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  Switch,
  Divider,
  Paper,
} from "@mui/material";

import {
  NotificationsNoneOutlined,
  MenuBookOutlined,
  EditOutlined,
  SaveOutlined,
} from "@mui/icons-material";

export default function StudentSettings() {
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
        minHeight: "calc(100vh - 82px)",
        backgroundColor: "#F8FAFC",
        p: {
          xs: 2,
          sm: 3,
          md: 4,
        },
      }}
    >
      {/* PAGE TITLE */}

      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            fontSize: {
              xs: 22,
              md: 26,
            },
            fontWeight: 800,
            color: "#0F172A",
          }}
        >
          Settings
        </Typography>

        <Typography
          sx={{
            fontSize: 13,
            color: "#94A3B8",
            mt: 0.5,
          }}
        >
          Manage your profile and preferences
        </Typography>
      </Box>

      {/* ========================= */}
      {/* PROFILE INFORMATION */}
      {/* ========================= */}

      <Paper
        elevation={0}
        sx={{
          border: "1px solid #E5E7EB",
          borderRadius: "16px",
          p: {
            xs: 2,
            sm: 3,
          },
          mb: 3,
          background: "#FFFFFF",
        }}
      >
        {/* TITLE */}

        <Box
          sx={{
            display: "flex",
            alignItems: {
              xs: "flex-start",
              sm: "center",
            },
            justifyContent: "space-between",
            gap: 2,
            mb: 3,
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 800,
                color: "#0F172A",
              }}
            >
              Profile Information
            </Typography>

            <Typography
              sx={{
                fontSize: 13,
                color: "#94A3B8",
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
                borderColor: "#CBD5E1",
                color: "#2563EB",
                "&:hover": {
                  borderColor: "#2563EB",
                  background: "#EFF6FF",
                },
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
                background:
                  "linear-gradient(135deg,#2563EB,#6366F1)",
                boxShadow:
                  "0 6px 14px rgba(37,99,235,0.18)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg,#1D4ED8,#4F46E5)",
                },
              }}
            >
              Save Changes
            </Button>
          )}
        </Box>

        {/* PROFILE HEADER */}

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
                "linear-gradient(135deg,#2563EB,#7C3AED)",
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
                color: "#0F172A",
              }}
            >
              {profile.name}
            </Typography>

            <Typography
              sx={{
                fontSize: 13,
                color: "#64748B",
                mt: 0.3,
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

      {/* ========================= */}
      {/* PREFERENCES */}
      {/* ========================= */}

      <Paper
        elevation={0}
        sx={{
          border: "1px solid #E5E7EB",
          borderRadius: "16px",
          p: {
            xs: 2,
            sm: 3,
          },
          background: "#FFFFFF",
        }}
      >
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 800,
            color: "#0F172A",
          }}
        >
          Preferences
        </Typography>

        <Typography
          sx={{
            fontSize: 13,
            color: "#94A3B8",
            mt: 0.5,
            mb: 2,
          }}
        >
          Manage your notification preferences
        </Typography>

        <Divider />

        {/* PUSH NOTIFICATIONS */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
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
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "10px",
                background: "#EFF6FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <NotificationsNoneOutlined
                sx={{
                  color: "#2563EB",
                  fontSize: 21,
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#1E293B",
                }}
              >
                Push Notifications
              </Typography>

              <Typography
                sx={{
                  fontSize: 12,
                  color: "#94A3B8",
                  mt: 0.3,
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
            gap: 2,
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
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "10px",
                background: "#F5F3FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MenuBookOutlined
                sx={{
                  color: "#7C3AED",
                  fontSize: 21,
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#1E293B",
                }}
              >
                Email Alerts
              </Typography>

              <Typography
                sx={{
                  fontSize: 12,
                  color: "#94A3B8",
                  mt: 0.3,
                }}
              >
                Receive important updates through email
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
  );
}