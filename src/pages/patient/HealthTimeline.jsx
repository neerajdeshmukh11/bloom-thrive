import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { Heart, Plus, Upload } from "lucide-react";

const filters = ["All", "Pre-Pregnancy", "Trimester 1", "Trimester 2", "Trimester 3", "Postpartum"];

const HealthTimeline = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [events, setEvents] = useState([]);

  return (
    <DashboardLayout role="patient">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Health Timeline</h1>
          <p className="text-muted-foreground text-sm">Your complete maternal health journey</p>
        </div>
        <button className="btn-primary flex items-center gap-2 text-sm py-3 px-5">
          <Upload className="w-4 h-4" /> Add Event
        </button>
      </div>

      <div className="flex gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === f
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {events.length === 0 && (
        <div className="bg-card rounded-2xl shadow-soft p-16 text-center">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">No events recorded yet</h3>
          <p className="text-muted-foreground text-sm mb-6">Add your first health event to start the timeline</p>
          <button className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm font-medium text-foreground hover:bg-muted transition-all">
            <Upload className="w-4 h-4" /> Add Event
          </button>
        </div>
      )}
    </DashboardLayout>
  );
};

export default HealthTimeline;
