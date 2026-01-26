import { useState } from "react";
import { ChevronRight, Activity } from "lucide-react";

const PregnancyCalculator = () => {
  const [lastPeriod, setLastPeriod] = useState("");
  const [result, setResult] = useState(null);

  const calculateDueDate = () => {
    if (!lastPeriod) return;
    
    const lmpDate = new Date(lastPeriod);
    const dueDate = new Date(lmpDate);
    dueDate.setDate(dueDate.getDate() + 280); // 40 weeks
    
    const today = new Date();
    const diffTime = dueDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffDays / 7);
    
    const pregnancyWeek = 40 - diffWeeks;
    const trimester = pregnancyWeek <= 12 ? 1 : pregnancyWeek <= 27 ? 2 : 3;

    setResult({
      dueDate: dueDate.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      daysLeft: diffDays > 0 ? diffDays : 0,
      weeksLeft: diffWeeks > 0 ? diffWeeks : 0,
      currentWeek: pregnancyWeek > 0 ? pregnancyWeek : 1,
      trimester
    });
  };

  const trimesterInfo = {
    1: {
      title: "First Trimester",
      tips: ["Take folic acid supplements", "Stay hydrated", "Get plenty of rest", "Avoid alcohol & smoking"],
      color: "coral"
    },
    2: {
      title: "Second Trimester", 
      tips: ["Continue prenatal vitamins", "Start gentle exercises", "Plan your nursery", "Schedule anatomy scan"],
      color: "mint"
    },
    3: {
      title: "Third Trimester",
      tips: ["Prepare hospital bag", "Practice breathing exercises", "Monitor baby movements", "Rest when needed"],
      color: "lavender"
    }
  };

  return (
    <section className="section-padding bg-card">
      <div className="container-main px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Calculator */}
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-10 shadow-medium">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                <Activity className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-foreground">
                  Due Date Calculator
                </h3>
                <p className="text-muted-foreground text-sm">Know your expected delivery date</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-foreground font-medium mb-2">
                  First Day of Last Menstrual Period
                </label>
                <input
                  type="date"
                  value={lastPeriod}
                  onChange={(e) => setLastPeriod(e.target.value)}
                  className="w-full px-4 py-4 rounded-2xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <button 
                onClick={calculateDueDate}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                Calculate Due Date
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Results */}
            {result && (
              <div className="mt-8 space-y-4 animate-fade-in">
                <div className="bg-card rounded-2xl p-6 text-center">
                  <p className="text-muted-foreground text-sm mb-1">Your Expected Due Date</p>
                  <h4 className="text-2xl font-display font-bold text-primary">
                    {result.dueDate}
                  </h4>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-coral-light rounded-xl p-4 text-center">
                    <p className="text-2xl font-display font-bold text-coral-dark">{result.currentWeek}</p>
                    <p className="text-xs text-coral-dark">Weeks Pregnant</p>
                  </div>
                  <div className="bg-mint-light rounded-xl p-4 text-center">
                    <p className="text-2xl font-display font-bold text-mint-dark">{result.weeksLeft}</p>
                    <p className="text-xs text-mint-dark">Weeks Left</p>
                  </div>
                  <div className="bg-lavender rounded-xl p-4 text-center">
                    <p className="text-2xl font-display font-bold text-accent-foreground">{result.daysLeft}</p>
                    <p className="text-xs text-accent-foreground">Days Left</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right - Trimester Info */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-mint-light text-mint-dark px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Pregnancy Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Your Journey Through{" "}
                <span className="text-gradient">Each Trimester</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Understand what's happening at each stage and get personalized tips for a healthy pregnancy.
              </p>
            </div>

            <div className="space-y-4">
              {Object.entries(trimesterInfo).map(([num, info]) => (
                <div 
                  key={num}
                  className={`rounded-2xl p-6 border-2 transition-all ${
                    result?.trimester === parseInt(num) 
                      ? `border-primary bg-${info.color}-light shadow-medium` 
                      : 'border-border bg-card hover:border-primary/30'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-full bg-${info.color === 'coral' ? 'coral-light' : info.color === 'mint' ? 'mint-light' : 'lavender'} flex items-center justify-center`}>
                      <span className="font-display font-bold text-foreground">{num}</span>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-foreground">{info.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {num === "1" ? "Weeks 1-12" : num === "2" ? "Weeks 13-27" : "Weeks 28-40"}
                      </p>
                    </div>
                    {result?.trimester === parseInt(num) && (
                      <span className="ml-auto bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                        You are here
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {info.tips.map((tip) => (
                      <span key={tip} className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
                        {tip}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PregnancyCalculator;
