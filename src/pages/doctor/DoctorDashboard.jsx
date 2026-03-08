import DashboardLayout from "../../components/DashboardLayout";
import { useAuth } from "../../contexts/AuthContext";
import { Users, CalendarCheck, Clock, FileText, TrendingUp } from "lucide-react";

const DoctorDashboard = () => {
  const { currentUser } = useAuth();
  const firstName = currentUser?.displayName?.split(" ")[0] || "Doctor";

  const stats = [
    { label: "Total Patients", value: "128", icon: Users, color: "text-primary" },
    { label: "Today's Appointments", value: "8", icon: CalendarCheck, color: "text-mint-dark" },
    { label: "Pending Reviews", value: "3", icon: Clock, color: "text-amber-500" },
    { label: "Reports", value: "45", icon: FileText, color: "text-purple-500" },
  ];

  return (
    <DashboardLayout role="doctor">
      <div className="rounded-3xl p-8 mb-8 text-primary-foreground relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(168 45% 45%), hsl(168 45% 60%))" }}>
        <p className="text-sm opacity-90">Welcome back</p>
        <h1 className="font-display text-3xl font-bold mt-1">Dr. {firstName}</h1>
        <p className="text-sm opacity-80 mt-2">You have 8 appointments today and 3 pending reviews.</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-card rounded-2xl shadow-soft p-6 text-center">
            <s.icon className={`w-6 h-6 ${s.color} mx-auto mb-3`} />
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-2xl shadow-soft p-6">
        <h2 className="font-display text-xl font-bold text-foreground mb-4">Today's Schedule</h2>
        <p className="text-muted-foreground text-sm">Schedule management will be available once connected to the backend.</p>
      </div>
    </DashboardLayout>
  );
};

export default DoctorDashboard;
