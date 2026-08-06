import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import {
  ArrowBack,
  Visibility,
  VisibilityOff,
  School,
} from "@mui/icons-material";

function StudentLogin() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary Login
    navigate("/student-dashboard");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#020617,#0F172A,#1E293B)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Card
        sx={{
          width: 420,
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate("/")}
            sx={{ mb: 2 }}
          >
            Back
          </Button>

          <Box textAlign="center" mb={4}>
            <School
              sx={{
                fontSize: 70,
                color: "#3B82F6",
              }}
            />

            <Typography
              variant="h4"
              fontWeight="bold"
              mt={2}
            >
              Student Login
            </Typography>

            <Typography color="text.secondary">
              Login to your student account
            </Typography>
          </Box>

          <form onSubmit={handleLogin}>
            <TextField
              label="College Email"
              type="email"
              margin="normal"
              fullWidth
              required
            />

            <TextField
              label="Password"
              margin="normal"
              fullWidth
              required
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                    >
                      {showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={1}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="Remember Me"
              />

              <Typography
                sx={{
                  cursor: "pointer",
                  color: "#60A5FA",
                }}
              >
                Forgot Password?
              </Typography>
            </Box>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{
                mt: 3,
                py: 1.5,
              }}
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default StudentLogin;