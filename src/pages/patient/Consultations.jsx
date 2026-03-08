import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { Star, CalendarCheck } from "lucide-react";

const doctors = [
  { name: "Dr. Priya Sharma", specialty: "Obstetrician", fee: "₹500", rating: 4.8, reviews: 120, initials: "PS", color: "bg-secondary" },
  { name: "Dr. Anita Gupta", specialty: "Pediatrician", fee: "₹400", rating: 4.6, reviews: 95, initials: "AG", color: "bg-lavender" },
  { name: "Dr. Meena Rao", specialty: "Gynecologist", fee: "₹600", rating: 4.9, reviews: 200, initials: "MR", color: "bg-peach" },
];

const specialties = ["All", "Obstetrician", "Pediatrician", "Gynecologist"];

const Consultations = () => {
  const [tab, setTab] = useState("find");
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? doctors : doctors.filter((d) => d.specialty === filter);

  return (
    <DashboardLayout role="patient">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Consultations</h1>
        <p className="text-muted-foreground text-sm">Connect with trusted healthcare professionals</p>
      </div>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setTab("find")}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
            tab === "find" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
          }`}
        >
          Find Doctors
        </button>
        <button
          onClick={() => setTab("bookings")}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
            tab === "bookings" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
          }`}
        >
          My Bookings
        </button>
      </div>

      {tab === "find" && (
        <>
          <div className="flex gap-2 mb-6">
            {specialties.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((d) => (
              <div key={d.name} className="bg-card rounded-2xl shadow-soft p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full ${d.color} flex items-center justify-center text-sm font-bold text-foreground`}>
                    {d.initials}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{d.name}</p>
                    <p className="text-xs text-muted-foreground">{d.specialty}</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 text-sm">
                    <Star className="w-3.5 h-3.5 fill-current" /> {d.rating} ({d.reviews})
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Fee: {d.fee}</p>
                <button className="w-full py-3 rounded-xl text-sm font-semibold text-primary-foreground flex items-center justify-center gap-2"
                  style={{ background: "linear-gradient(135deg, hsl(4 85% 65%), hsl(20 80% 70%))" }}>
                  <CalendarCheck className="w-4 h-4" /> Book Consultation
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {tab === "bookings" && (
        <div className="bg-card rounded-2xl shadow-soft p-16 text-center">
          <p className="text-muted-foreground">No bookings yet. Find a doctor and book your first consultation.</p>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Consultations;
