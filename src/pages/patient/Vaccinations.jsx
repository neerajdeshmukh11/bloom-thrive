import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { Syringe, CheckCircle, Clock } from "lucide-react";

const motherVaccines = [
  { name: "Flu Vaccine (Influenza)", due: "—", note: "Once during pregnancy" },
  { name: "Tetanus Toxoid (TT-2)", due: "—", note: "4 weeks after TT-1" },
  { name: "Tetanus Toxoid (TT-1)", due: "—", note: "Given around 16 weeks of pregnancy" },
  { name: "TdAP Booster", due: "—", note: "Between 27–36 weeks of pregnancy" },
];

const Vaccinations = () => {
  const [completed, setCompleted] = useState({});

  const toggleDone = (name) => {
    setCompleted((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <DashboardLayout role="patient">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Vaccination Schedule</h1>
        <p className="text-muted-foreground text-sm">Mother & baby immunization tracker</p>
      </div>

      <div className="flex gap-2 mb-6">
        <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground">Mother</span>
      </div>

      <div className="space-y-4">
        {motherVaccines.map((v) => (
          <div key={v.name} className="bg-card rounded-2xl shadow-soft p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Syringe className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{v.name}</p>
                <p className="text-xs text-muted-foreground">Due: {v.due}</p>
                <p className="text-xs text-muted-foreground">{v.note}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {completed[v.name] ? (
                <span className="text-xs font-medium text-mint-dark flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" /> Done
                </span>
              ) : (
                <span className="text-xs font-medium text-amber-500 flex items-center gap-1">
                  <Clock className="w-4 h-4" /> Upcoming
                </span>
              )}
              <button
                onClick={() => toggleDone(v.name)}
                className="px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted transition-all flex items-center gap-1"
              >
                <CheckCircle className="w-3.5 h-3.5" /> Done
              </button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Vaccinations;
