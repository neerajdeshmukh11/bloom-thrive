import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  LayoutDashboard, Heart, Baby, Syringe, Stethoscope,
  UtensilsCrossed, Dumbbell, User, Settings, LogOut, Building2
} from "lucide-react";

const patientLinks = [
  { name: "Dashboard", path: "/patient/dashboard", icon: LayoutDashboard },
  { name: "Health Timeline", path: "/patient/health-timeline", icon: Heart },
  { name: "Child Profile", path: "/patient/child-profile", icon: Baby },
  { name: "Vaccinations", path: "/patient/vaccinations", icon: Syringe },
  { name: "Consultations", path: "/patient/consultations", icon: Stethoscope },
  { name: "Diet Plans", path: "/patient/diet-plans", icon: UtensilsCrossed },
  { name: "Yoga & Exercise", path: "/patient/yoga-exercise", icon: Dumbbell },
  { name: "My Profile", path: "/patient/my-profile", icon: User },
];

const doctorLinks = [
  { name: "Dashboard", path: "/doctor/dashboard", icon: LayoutDashboard },
  { name: "Appointments", path: "/doctor/appointments", icon: Stethoscope },
  { name: "Patients", path: "/doctor/patients", icon: User },
  { name: "Consultations", path: "/doctor/consultations", icon: Heart },
  { name: "Settings", path: "/doctor/settings", icon: Settings },
];

const DashboardSidebar = ({ role = "patient" }) => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const links = role === "doctor" ? doctorLinks : patientLinks;

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border flex flex-col z-40">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <span className="font-display text-xl font-bold text-primary">
          Ma<span className="text-foreground">Care</span>
        </span>
        <p className="text-xs text-muted-foreground mt-0.5">Maternal & Child Wellness</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-foreground hover:bg-muted"
              }`
            }
          >
            <link.icon className="w-4.5 h-4.5" />
            {link.name}
          </NavLink>
        ))}
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">
              {currentUser?.displayName || "User"}
            </p>
            <p className="text-xs text-muted-foreground capitalize">{role}</p>
          </div>
        </div>

        <button
          onClick={() => navigate(role === "doctor" ? "/doctor/settings" : "/patient/my-profile")}
          className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-all mb-1"
        >
          <Settings className="w-4 h-4" /> Settings
        </button>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-xl transition-all"
        >
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
