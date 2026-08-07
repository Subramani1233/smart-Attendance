import { School } from "@mui/icons-material";

import PortalLogin from "../../components/auth/PortalLogin";

function StudentLogin() {
  return (
    <PortalLogin
      role="Student"
      icon={<School sx={{ fontSize: 34 }} />}
      dashboardPath="/student-dashboard"
      gradient="linear-gradient(135deg, #2563EB, #6366F1)"
      description="Login to access your attendance, profile, academic information and personal dashboard."
    />
  );
}

export default StudentLogin;