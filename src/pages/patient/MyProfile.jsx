import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { useAuth } from "../../contexts/AuthContext";
import { User, Phone, Calendar, MapPin, AlertCircle, Baby } from "lucide-react";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const statusOptions = ["Planning Pregnancy", "Currently Pregnant", "Postpartum"];

const MyProfile = () => {
  const { currentUser } = useAuth();
  const [selectedBlood, setSelectedBlood] = useState("");
  const [status, setStatus] = useState("Currently Pregnant");

  return (
    <DashboardLayout role="patient">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">My Profile</h1>
        <p className="text-muted-foreground text-sm">Manage your personal & pregnancy details</p>
      </div>

      {/* Personal Info */}
      <div className="bg-card rounded-2xl shadow-soft p-6 mb-6">
        <h2 className="font-display text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
          <User className="w-5 h-5 text-primary" /> Personal Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
            <input
              type="text"
              defaultValue={currentUser?.displayName || ""}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Date of Birth</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="date"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Blood Group</label>
            <div className="flex flex-wrap gap-2">
              {bloodGroups.map((bg) => (
                <button
                  key={bg}
                  onClick={() => setSelectedBlood(bg)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                    selectedBlood === bg
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {bg}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <label className="block text-sm font-medium text-foreground mb-1.5">Address</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Your address"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-6">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-sm">
            <AlertCircle className="w-4 h-4 text-amber-500" /> Emergency Contact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Contact Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Contact Phone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pregnancy Details */}
      <div className="bg-card rounded-2xl shadow-soft p-6">
        <h2 className="font-display text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
          <Baby className="w-5 h-5 text-secondary" /> Pregnancy Details
        </h2>
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">Current Status</label>
          <div className="flex gap-2">
            {statusOptions.map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={`px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                  status === s
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <button className="btn-primary text-sm py-3 px-8">Save Profile</button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyProfile;
