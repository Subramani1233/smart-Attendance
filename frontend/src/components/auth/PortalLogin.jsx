import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import {
  EmailOutlined,
  LockOutlined,
  Visibility,
  VisibilityOff,
  ArrowBack,
} from "@mui/icons-material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PortalLogin({
  role,
  icon,
  description,
  gradient,
  dashboardPath,
}) {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        background: "#FFFFFF",
      }}
    >
      {/* ================================================= */}
      {/* LEFT - LOGIN FORM */}
      {/* ================================================= */}

      <Box
        sx={{
          width: {
            xs: "100%",
            md: "50%",
          },

          minHeight: "100vh",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          px: {
            xs: 3,
            sm: 6,
            md: 10,
            lg: 12,
          },

          py: 4,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "430px",
          }}
        >
          {/* Back Button */}

          <IconButton
            onClick={() => navigate("/")}
            sx={{
              mb: 4,
              color: "#6B7280",

              "&:hover": {
                background: "#F3F4F6",
              },
            }}
          >
            <ArrowBack />
          </IconButton>

          {/* Logo */}

          <Box
            sx={{
              width: 58,
              height: 58,
              borderRadius: "16px",

              background: gradient,

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              color: "#FFFFFF",

              mb: 3,

              boxShadow:
                "0 12px 25px rgba(79,70,229,0.20)",
            }}
          >
            {icon}
          </Box>

          {/* Heading */}

          <Typography
            sx={{
              fontSize: {
                xs: "30px",
                sm: "38px",
              },

              fontWeight: 700,

              color: "#111827",

              letterSpacing: "-0.8px",

              mb: 1,
            }}
          >
            Welcome back
          </Typography>

          <Typography
            sx={{
              fontSize: "15px",
              color: "#6B7280",
              mb: 4,
            }}
          >
            Login to your {role.toLowerCase()} account
          </Typography>

          {/* Email */}

          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              color: "#374151",
              mb: 1,
            }}
          >
            Email Address
          </Typography>

          <TextField
            fullWidth
            placeholder={`Enter your ${role.toLowerCase()} email`}
            type="email"
            size="medium"
            sx={{
              mb: 2.5,

              "& .MuiOutlinedInput-root": {
                height: 52,
                borderRadius: "10px",
                background: "#FAFAFA",

                "& fieldset": {
                  borderColor: "#E5E7EB",
                },

                "&:hover fieldset": {
                  borderColor: "#C7D2FE",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#6366F1",
                  borderWidth: "1px",
                },
              },

              "& input": {
                fontSize: "14px",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined
                    sx={{
                      fontSize: 20,
                      color: "#9CA3AF",
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />

          {/* Password */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#374151",
              }}
            >
              Password
            </Typography>

            <Button
              sx={{
                textTransform: "none",
                fontSize: "12px",
                color: "#4F46E5",
                p: 0,
                minWidth: 0,
              }}
            >
              Forgot Password?
            </Button>
          </Box>

          <TextField
            fullWidth
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            size="medium"
            sx={{
              mb: 1.5,

              "& .MuiOutlinedInput-root": {
                height: 52,
                borderRadius: "10px",
                background: "#FAFAFA",

                "& fieldset": {
                  borderColor: "#E5E7EB",
                },

                "&:hover fieldset": {
                  borderColor: "#C7D2FE",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#6366F1",
                  borderWidth: "1px",
                },
              },

              "& input": {
                fontSize: "14px",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined
                    sx={{
                      fontSize: 20,
                      color: "#9CA3AF",
                    }}
                  />
                </InputAdornment>
              ),

              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOff
                        sx={{
                          color: "#9CA3AF",
                          fontSize: 20,
                        }}
                      />
                    ) : (
                      <Visibility
                        sx={{
                          color: "#9CA3AF",
                          fontSize: 20,
                        }}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Remember Me */}

          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) =>
                  setRememberMe(e.target.checked)
                }
                size="small"
                sx={{
                  color: "#CBD5E1",

                  "&.Mui-checked": {
                    color: "#4F46E5",
                  },
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#6B7280",
                }}
              >
                Remember me
              </Typography>
            }
            sx={{
              mb: 2.5,
              ml: -1,
            }}
          />

          {/* Login Button */}

          <Button
            fullWidth
            variant="contained"
            onClick={() => navigate(dashboardPath)}
            sx={{
              height: 52,

              borderRadius: "10px",

              textTransform: "none",

              fontSize: "15px",

              fontWeight: 600,

              background: gradient,

              boxShadow:
                "0 10px 25px rgba(79,70,229,0.20)",

              "&:hover": {
                background: gradient,
                boxShadow:
                  "0 14px 30px rgba(79,70,229,0.28)",
                transform: "translateY(-1px)",
              },

              transition: "all 0.2s ease",
            }}
          >
            Login
          </Button>

          {/* Bottom */}

          <Typography
            sx={{
              textAlign: "center",
              fontSize: "12px",
              color: "#9CA3AF",
              mt: 4,
            }}
          >
            Secure access to your {role.toLowerCase()} portal
          </Typography>
        </Box>
      </Box>

      {/* ================================================= */}
      {/* RIGHT - WELCOME PANEL */}
      {/* ================================================= */}

      <Box
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },

          width: "50%",

          minHeight: "100vh",

          background: gradient,

          position: "relative",

          overflow: "hidden",

          alignItems: "center",
          justifyContent: "center",

          color: "#FFFFFF",
        }}
      >
        {/* Background Circle 1 */}

        <Box
          sx={{
            position: "absolute",

            width: 520,
            height: 520,

            borderRadius: "50%",

            background:
              "rgba(255,255,255,0.07)",

            top: -230,
            right: -150,
          }}
        />

        {/* Background Circle 2 */}

        <Box
          sx={{
            position: "absolute",

            width: 400,
            height: 400,

            borderRadius: "50%",

            background:
              "rgba(255,255,255,0.05)",

            bottom: -200,
            left: -160,
          }}
        />

        {/* Content */}

        <Box
          sx={{
            position: "relative",

            zIndex: 2,

            textAlign: "center",

            maxWidth: "520px",

            px: 5,
          }}
        >
          {/* Illustration Area */}

          <Box
            sx={{
              width: 180,
              height: 180,

              borderRadius: "50%",

              background:
                "rgba(255,255,255,0.12)",

              border:
                "1px solid rgba(255,255,255,0.18)",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              mx: "auto",

              mb: 5,

              boxShadow:
                "0 25px 60px rgba(0,0,0,0.12)",
            }}
          >
            <Box
              sx={{
                width: 120,
                height: 120,

                borderRadius: "30px",

                background:
                  "rgba(255,255,255,0.16)",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                border:
                  "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {icon}
            </Box>
          </Box>

          {/* Welcome */}

          <Typography
            sx={{
              fontSize: {
                md: "40px",
                lg: "48px",
              },

              fontWeight: 700,

              lineHeight: 1.15,

              mb: 1,
            }}
          >
            Welcome to
          </Typography>

          <Typography
            sx={{
              fontSize: {
                md: "28px",
                lg: "34px",
              },

              fontWeight: 500,

              mb: 2,
            }}
          >
            {role} Portal
          </Typography>

          <Typography
            sx={{
              fontSize: "15px",

              lineHeight: 1.7,

              opacity: 0.85,

              maxWidth: "420px",

              mx: "auto",
            }}
          >
            {description}
          </Typography>

          {/* Small Badge */}

          <Box
            sx={{
              display: "inline-flex",

              alignItems: "center",

              gap: 1,

              mt: 4,

              px: 2.5,
              py: 1,

              borderRadius: "30px",

              background:
                "rgba(255,255,255,0.12)",

              border:
                "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#FFFFFF",
              }}
            />

            <Typography
              sx={{
                fontSize: "12px",
              }}
            >
              Smart Attendance System
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PortalLogin;