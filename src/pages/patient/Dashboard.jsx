import DashboardLayout from "../../components/DashboardLayout";
import { useAuth } from "../../contexts/AuthContext";
import {
  CalendarCheck, FileUp, Syringe, MessageCircle,
  Stethoscope, Activity, Heart, Moon, TrendingUp
} from "lucide-react";

const Dashboard = () => {
  const { currentUser } = useAuth();
  const firstName = currentUser?.displayName?.split(" ")[0] || "User";

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  const quickActions = [
    { label: "Book Appointment", icon: CalendarCheck, color: "text-primary" },
    { label: "Upload Report", icon: FileUp, color: "text-mint-dark" },
    { label: "Vaccination Due", icon: Syringe, color: "text-amber-600" },
    { label: "Chat Doctor", icon: MessageCircle, color: "text-purple-500" },
  ];

  const upcomingEvents = [
    { title: "Dr. Priya – Checkup", date: "Feb 11, 10:00 AM", icon: Stethoscope, color: "bg-primary/10 text-primary" },
    { title: "Tdap Vaccination Due", date: "Feb 15", icon: Syringe, color: "bg-amber-100 text-amber-600" },
    { title: "Nutrition Review", date: "Feb 12, 2:00 PM", icon: Activity, color: "bg-mint-light text-mint-dark" },
    { title: "Prenatal Yoga Class", date: "Tomorrow, 7:00 AM", icon: Heart, color: "bg-lavender text-purple-600" },
  ];

  const healthStats = [
    { label: "Weight", value: "62 kg", sub: "+0.5 kg", icon: TrendingUp, color: "text-primary" },
    { label: "Blood Pressure", value: "118/76", sub: "Normal", icon: Activity, color: "text-mint-dark" },
    { label: "Heart Rate", value: "78 bpm", sub: "Resting", icon: Heart, color: "text-primary" },
    { label: "Sleep", value: "7.5 hrs", sub: "+30 min", icon: Moon, color: "text-purple-500" },
  ];

  return (
    <DashboardLayout role="patient">
      {/* Hero Banner */}
      <div className="rounded-3xl p-8 mb-8 text-primary-foreground relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(4 85% 65%), hsl(20 80% 70%))" }}>
        <p className="text-sm opacity-90">{greeting}</p>
        <h1 className="font-display text-3xl font-bold mt-1">Welcome back, {firstName}</h1>
        <p className="text-sm opacity-80 mt-2">Week 24 of your journey. Your next appointment is in 3 days.</p>
        <div className="flex gap-4 mt-6">
          {[
            { val: "24", label: "Weeks" },
            { val: "3", label: "Days to Appt" },
            { val: "5", label: "Tasks Today" },
          ].map((s) => (
            <div key={s.label} className="bg-primary-foreground/20 backdrop-blur-sm rounded-2xl px-5 py-3 text-center">
              <p className="text-2xl font-bold">{s.val}</p>
              <p className="text-xs opacity-80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {quickActions.map((a) => (
          <button key={a.label} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all text-center group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <a.icon className={`w-5 h-5 ${a.color}`} />
            </div>
            <p className="text-sm font-medium text-foreground">{a.label}</p>
          </button>
        ))}
      </div>

      {/* Upcoming + Health */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-2xl p-6 shadow-soft">
          <h2 className="font-display text-xl font-bold text-foreground mb-5">Upcoming</h2>
          <div className="space-y-4">
            {upcomingEvents.map((ev) => (
              <div key={ev.title} className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl ${ev.color} flex items-center justify-center`}>
                  <ev.icon className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{ev.title}</p>
                  <p className="text-xs text-muted-foreground">{ev.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-2xl p-6 shadow-soft">
          <h2 className="font-display text-xl font-bold text-foreground mb-5">Health Snapshot</h2>
          <div className="grid grid-cols-2 gap-4">
            {healthStats.map((s) => (
              <div key={s.label} className="bg-muted/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <s.icon className={`w-4 h-4 ${s.color}`} />
                  <span className="text-xs text-muted-foreground">{s.label}</span>
                </div>
                <p className="text-xl font-bold text-foreground">{s.value}</p>
                <p className={`text-xs ${s.color}`}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
