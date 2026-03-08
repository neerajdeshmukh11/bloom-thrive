import DashboardLayout from "../../components/DashboardLayout";
import { CheckCircle, AlertTriangle, Play, Clock } from "lucide-react";

const exercises = [
  { name: "Prenatal Sun Salutation", desc: "Modified surya namaskar for second trimester.", time: "15 min", level: "Gentle", safe: true },
  { name: "Pelvic Floor Exercises", desc: "Kegel exercises to strengthen pelvic muscles.", time: "10 min", level: "Easy", safe: true },
  { name: "Breathing & Meditation", desc: "Deep breathing and guided visualization.", time: "20 min", level: "Easy", safe: true },
  { name: "Prenatal Stretching", desc: "Full body stretches safe for all trimesters.", time: "12 min", level: "Gentle", safe: true },
  { name: "Hip Opening Sequence", desc: "Prepares hips for labor with gentle openers.", time: "18 min", level: "Moderate", safe: true },
  { name: "Deep Backbends", desc: "Not recommended during pregnancy.", time: "15 min", level: "Advanced", safe: false },
];

const YogaExercise = () => {
  return (
    <DashboardLayout role="patient">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Yoga & Exercise</h1>
        <p className="text-muted-foreground text-sm">Phase-safe workouts for trimester 2</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {exercises.map((ex) => (
          <div
            key={ex.name}
            className={`bg-card rounded-2xl shadow-soft p-5 flex items-start justify-between ${
              !ex.safe ? "border-2 border-destructive/30" : ""
            }`}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                {ex.safe ? (
                  <CheckCircle className="w-5 h-5 text-mint-dark" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                )}
                <h3 className="font-display font-semibold text-foreground">{ex.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{ex.desc}</p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {ex.time}</span>
                <span className="px-2 py-0.5 rounded-full bg-muted">{ex.level}</span>
              </div>
            </div>
            {ex.safe && (
              <button className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center ml-4 hover:bg-primary/20 transition-colors">
                <Play className="w-5 h-5 text-primary" />
              </button>
            )}
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground mt-8 text-center italic">
        ⚠ All exercises should be done under doctor's guidance. This is for general awareness only.
      </p>
    </DashboardLayout>
  );
};

export default YogaExercise;
