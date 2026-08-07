import { Person } from "@mui/icons-material";

import PortalLogin from "../../components/auth/PortalLogin";

function FacultyLogin() {
  return (
    <PortalLogin
      role="Faculty"
      icon={<Person sx={{ fontSize: 34 }} />}
      dashboardPath="/faculty-dashboard"
      gradient="linear-gradient(135deg, #4F46E5, #7C3AED)"
      description="Login to manage student attendance, generate QR codes and access your faculty dashboard."
    />
  );
}

export default FacultyLogin;