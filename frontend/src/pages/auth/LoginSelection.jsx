import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";

import {
  School,
  Person,
  AdminPanelSettings,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

function LoginSelection() {
  const navigate = useNavigate();

  const roles = [
    {
      title: "Student",
      subtitle: "Student Portal",
      icon: <School sx={{ fontSize: 34 }} />,
      gradient:
        "linear-gradient(135deg, #2563EB, #6366F1)",
      path: "/student-login",
    },

    {
      title: "Faculty",
      subtitle: "Faculty Portal",
      icon: <Person sx={{ fontSize: 34 }} />,
      gradient:
        "linear-gradient(135deg, #4F46E5, #7C3AED)",
      path: "/faculty-login",
    },

    {
      title: "Admin",
      subtitle: "Admin Portal",
      icon: (
        <AdminPanelSettings
          sx={{ fontSize: 34 }}
        />
      ),
      gradient:
        "linear-gradient(135deg, #6366F1, #8B5CF6)",
      path: "/admin-login",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",

        background:
          "linear-gradient(135deg, #F8FAFF 0%, #EEF2FF 100%)",

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        px: 3,

        py: 6,
      }}
    >
      <Container maxWidth="md">
        {/* Header */}

        <Box
          sx={{
            textAlign: "center",
            mb: 6,
          }}
        >
          <Box
            sx={{
              width: 64,
              height: 64,

              borderRadius: "18px",

              background:
                "linear-gradient(135deg, #2563EB, #7C3AED)",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              color: "#FFFFFF",

              mx: "auto",
              mb: 2,

              boxShadow:
                "0 15px 30px rgba(79,70,229,0.20)",
            }}
          >
            <School sx={{ fontSize: 36 }} />
          </Box>

          <Typography
            sx={{
              fontSize: {
                xs: "28px",
                sm: "38px",
              },

              fontWeight: 700,

              color: "#111827",

              mb: 1,
            }}
          >
            Smart Attendance System
          </Typography>

          <Typography
            sx={{
              color: "#6B7280",
              fontSize: "15px",
            }}
          >
            Select your login portal
          </Typography>
        </Box>

        {/* Cards */}

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(3, 1fr)",
            },

            gap: 3,
          }}
        >
          {roles.map((role) => (
            <Box
              key={role.title}
              onClick={() =>
                navigate(role.path)
              }
              sx={{
                background: "#FFFFFF",

                border:
                  "1px solid #E5E7EB",

                borderRadius: "20px",

                p: 3.5,

                textAlign: "center",

                cursor: "pointer",

                transition:
                  "all 0.3s ease",

                "&:hover": {
                  transform:
                    "translateY(-7px)",

                  boxShadow:
                    "0 20px 40px rgba(30,41,59,0.10)",

                  borderColor:
                    "#A5B4FC",
                },
              }}
            >
              {/* Icon */}

              <Box
                sx={{
                  width: 70,
                  height: 70,

                  borderRadius: "18px",

                  background:
                    role.gradient,

                  color: "#FFFFFF",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  mx: "auto",

                  mb: 2.5,

                  boxShadow:
                    "0 10px 22px rgba(79,70,229,0.18)",
                }}
              >
                {role.icon}
              </Box>

              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#111827",
                  mb: 0.5,
                }}
              >
                {role.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#6B7280",
                  mb: 3,
                }}
              >
                {role.subtitle}
              </Typography>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  height: 42,

                  borderRadius: "9px",

                  textTransform: "none",

                  fontSize: "13px",

                  fontWeight: 600,

                  background:
                    role.gradient,

                  boxShadow: "none",

                  "&:hover": {
                    background:
                      role.gradient,

                    boxShadow:
                      "0 8px 20px rgba(79,70,229,0.20)",
                  },
                }}
              >
                Continue
              </Button>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default LoginSelection;