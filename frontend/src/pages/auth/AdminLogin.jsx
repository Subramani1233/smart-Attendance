import { AdminPanelSettings } from "@mui/icons-material";

import PortalLogin from "../../components/auth/PortalLogin";

function AdminLogin() {
  return (
    <PortalLogin
      role="Admin"
      icon={
        <AdminPanelSettings
          sx={{ fontSize: 34 }}
        />
      }
      dashboardPath="/admin-dashboard"
      gradient="linear-gradient(135deg, #6366F1, #8B5CF6)"
      description="Login to manage students, faculty, attendance records and the complete system."
    />
  );
}

export default AdminLogin;