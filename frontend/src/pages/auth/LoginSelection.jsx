import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { School, Person, AdminPanelSettings } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function LoginSelection() {
  const navigate = useNavigate();

  const roles = [
    {
      title: "Student",
      icon: <School sx={{ fontSize: 55 }} />,
      color: "#3B82F6",
      path: "/student-login",
    },
    {
      title: "Faculty",
      icon: <Person sx={{ fontSize: 55 }} />,
      color: "#10B981",
      path: "/faculty-login",
    },
    {
      title: "Admin",
      icon: <AdminPanelSettings sx={{ fontSize: 55 }} />,
      color: "#8B5CF6",
      path: "/admin-login",
    },
  ];

  return (
   <Box
  sx={{
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
       <Container
    maxWidth="md"
    sx={{
      textAlign: "center",
    }}
  >
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          gutterBottom
        >
          Smart Attendance System
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          mb={6}
        >
          Choose your login portal
        </Typography>
<Grid
  container
  spacing={4}
  justifyContent="center"
  alignItems="center"
  sx={{
    maxWidth: "900px",
    margin: "0 auto",
  }}
>
        {roles.map((role) => (
            <Grid item xs={12} md={4} key={role.title}>
              <Card
                sx={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: ".3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 0 25px ${role.color}`,
                  },
                }}
              >
                <CardContent
                  sx={{
                    textAlign: "center",
                    py: 6,
                  }}
                >
                  <Box color={role.color}>
                    {role.icon}
                  </Box>

                  <Typography
                    variant="h5"
                    mt={2}
                    mb={1}
                    fontWeight="bold"
                  >
                    {role.title}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    mb={4}
                  >
                    Login as {role.title}
                  </Typography>

                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    onClick={() => navigate(role.path)}
                  >
                    Continue
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default LoginSelection;