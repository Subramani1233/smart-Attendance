import React from "react";
import { Box, Typography } from "@mui/material";
import {
  DashboardOutlined,
  EventAvailableOutlined,
  AssessmentOutlined,
  CalendarMonthOutlined,
  QrCodeScannerOutlined,
  SettingsOutlined,
  MenuBookOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

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
    icon: <QrCodeScannerOutlined />,
    path: "/student-scan",
  },
  {
    title: "Settings",
    icon: <SettingsOutlined />,
    path: "/student-settings",
  },
];

export default function StudentSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        width: "258px",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        backgroundColor: "#ffffff",
        borderRight: "1px solid #e5e7eb",
        display: "flex",
        flexDirection: "column",
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          height: "90px",
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          px: 3,
          borderBottom: "1px solid #eef0f4",
        }}
      >
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: "14px",
            background: "linear-gradient(135deg, #315eea, #5268f5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            boxShadow: "0 8px 20px rgba(49,94,234,0.2)",
          }}
        >
          <MenuBookOutlined />
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "17px",
              fontWeight: 700,
              color: "#111827",
              lineHeight: 1.2,
            }}
          >
            College
          </Typography>

          <Typography
            sx={{
              fontSize: "10px",
              fontWeight: 500,
              color: "#9ca3af",
              letterSpacing: "0.4px",
              mt: 0.3,
            }}
          >
            SMART ATTENDANCE
          </Typography>
        </Box>
      </Box>

      {/* Menu */}
      <Box sx={{ px: 1.5, pt: 2.5 }}>
        {menuItems.map((item) => {
          const active = location.pathname === item.path;

          return (
            <Box
              key={item.path}
              onClick={() => navigate(item.path)}
              sx={{
                height: "52px",
                display: "flex",
                alignItems: "center",
                gap: 2,
                px: 2,
                mb: 0.8,
                borderRadius: "11px",
                cursor: "pointer",

                background: active
                  ? "linear-gradient(135deg, #315eea, #5268f5)"
                  : "transparent",

                color: active ? "#ffffff" : "#50627d",

                boxShadow: active
                  ? "0 8px 18px rgba(49,94,234,0.18)"
                  : "none",

                transition: "all 0.2s ease",

                "&:hover": {
                  backgroundColor: active ? "transparent" : "#f5f7ff",
                },

                "& svg": {
                  fontSize: 23,
                },
              }}
            >
              {item.icon}

              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: active ? 600 : 500,
                }}
              >
                {item.title}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* Bottom */}
      <Box
        sx={{
          marginTop: "auto",
          px: 3,
          py: 2,
          borderTop: "1px solid #eef0f4",
        }}
      >
        <Typography
          sx={{
            fontSize: "11px",
            color: "#9ca3af",
            textAlign: "center",
          }}
        >
          Smart Attendance System
        </Typography>
      </Box>
    </Box>
  );
}