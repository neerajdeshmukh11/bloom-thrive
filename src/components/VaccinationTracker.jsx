import { useState } from "react";
import { Syringe, Bell, Check, AlertCircle } from "lucide-react";

const vaccinationSchedule = [
  {
    age: "At Birth",
    vaccines: [
      { name: "BCG", description: "Protects against Tuberculosis" },
      { name: "Hepatitis B - Birth Dose", description: "First dose within 24 hours" },
      { name: "OPV - Zero Dose", description: "Oral Polio Vaccine" }
    ]
  },
  {
    age: "6 Weeks",
    vaccines: [
      { name: "DTwP/DTaP 1", description: "Diphtheria, Tetanus, Pertussis" },
      { name: "IPV 1", description: "Injectable Polio Vaccine" },
      { name: "Hep B 2", description: "Hepatitis B - Second Dose" },
      { name: "Hib 1", description: "Haemophilus influenzae type b" },
      { name: "Rotavirus 1", description: "Rotavirus vaccine" },
      { name: "PCV 1", description: "Pneumococcal Conjugate Vaccine" }
    ]
  },
  {
    age: "10 Weeks",
    vaccines: [
      { name: "DTwP/DTaP 2", description: "Second dose" },
      { name: "IPV 2", description: "Second dose" },
      { name: "Hib 2", description: "Second dose" },
      { name: "Rotavirus 2", description: "Second dose" },
      { name: "PCV 2", description: "Second dose" }
    ]
  },
  {
    age: "14 Weeks",
    vaccines: [
      { name: "DTwP/DTaP 3", description: "Third dose" },
      { name: "IPV 3", description: "Third dose" },
      { name: "Hep B 3", description: "Third dose" },
      { name: "Hib 3", description: "Third dose" },
      { name: "Rotavirus 3", description: "Third dose" },
      { name: "PCV 3", description: "Third dose" }
    ]
  },
  {
    age: "6 Months",
    vaccines: [
      { name: "OPV 1", description: "Oral Polio - First dose" },
      { name: "Hep B 4", description: "Fourth dose (if needed)" }
    ]
  },
  {
    age: "9 Months",
    vaccines: [
      { name: "MMR 1", description: "Measles, Mumps, Rubella - First dose" },
      { name: "OPV 2", description: "Oral Polio - Second dose" }
    ]
  },
  {
    age: "12 Months",
    vaccines: [
      { name: "Hepatitis A 1", description: "First dose" },
      { name: "PCV Booster", description: "Pneumococcal Booster" }
    ]
  },
  {
    age: "15 Months",
    vaccines: [
      { name: "MMR 2", description: "Second dose" },
      { name: "Varicella 1", description: "Chickenpox vaccine" }
    ]
  },
  {
    age: "18 Months",
    vaccines: [
      { name: "DTwP/DTaP Booster 1", description: "First booster" },
      { name: "IPV Booster", description: "Polio booster" },
      { name: "Hib Booster", description: "Hib booster" },
      { name: "Hepatitis A 2", description: "Second dose" }
    ]
  },
  {
    age: "4-6 Years",
    vaccines: [
      { name: "DTwP/DTaP Booster 2", description: "Second booster" },
      { name: "OPV 3", description: "Third oral polio" },
      { name: "Varicella 2", description: "Second chickenpox dose" },
      { name: "MMR 3", description: "Third dose (optional)" }
    ]
  }
];

const VaccinationTracker = () => {
  const [selectedAge, setSelectedAge] = useState("At Birth");
  const [completedVaccines, setCompletedVaccines] = useState([]);

  const toggleVaccine = (vaccineName) => {
    setCompletedVaccines(prev => 
      prev.includes(vaccineName) 
        ? prev.filter(v => v !== vaccineName)
        : [...prev, vaccineName]
    );
  };

  const selectedSchedule = vaccinationSchedule.find(s => s.age === selectedAge);
  const totalVaccines = vaccinationSchedule.reduce((acc, s) => acc + s.vaccines.length, 0);
  const completionPercentage = Math.round((completedVaccines.length / totalVaccines) * 100);

  return (
    <section id="vaccination" className="section-padding bg-gradient-hero">
      <div className="container-main px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-coral-light text-coral-dark px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Syringe className="w-4 h-4" />
            Vaccination Schedule
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Complete Immunization{" "}
            <span className="text-gradient">Tracker</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Track your child's vaccinations from birth to 5 years. Never miss an important immunization with our smart reminder system.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left - Age Selection */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-3xl p-6 shadow-soft sticky top-24">
              <h3 className="font-display font-bold text-foreground mb-4">Select Age</h3>
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                {vaccinationSchedule.map((schedule) => {
                  const scheduleVaccines = schedule.vaccines.map(v => v.name);
                  const completed = scheduleVaccines.filter(v => completedVaccines.includes(v)).length;
                  const total = scheduleVaccines.length;
                  const isComplete = completed === total;

                  return (
                    <button
                      key={schedule.age}
                      onClick={() => setSelectedAge(schedule.age)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                        selectedAge === schedule.age 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted hover:bg-muted/80 text-foreground'
                      }`}
                    >
                      <span className="font-medium">{schedule.age}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm ${selectedAge === schedule.age ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                          {completed}/{total}
                        </span>
                        {isComplete && (
                          <Check className={`w-4 h-4 ${selectedAge === schedule.age ? 'text-primary-foreground' : 'text-green-500'}`} />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Progress */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Overall Progress</span>
                  <span className="font-semibold text-foreground">{completionPercentage}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${completionPercentage}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {completedVaccines.length} of {totalVaccines} vaccines completed
                </p>
              </div>
            </div>
          </div>

          {/* Right - Vaccine Details */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-3xl p-8 shadow-soft">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    {selectedAge}
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedSchedule?.vaccines.length} vaccines recommended
                  </p>
                </div>
                <button className="btn-secondary text-sm py-2 px-4 flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  Set Reminder
                </button>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {selectedSchedule?.vaccines.map((vaccine) => {
                  const isCompleted = completedVaccines.includes(vaccine.name);
                  return (
                    <div
                      key={vaccine.name}
                      onClick={() => toggleVaccine(vaccine.name)}
                      className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                        isCompleted 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-border hover:border-primary/50 bg-muted/30'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{vaccine.name}</h4>
                          <p className="text-sm text-muted-foreground">{vaccine.description}</p>
                        </div>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isCompleted ? 'bg-green-500' : 'border-2 border-border'
                        }`}>
                          {isCompleted && <Check className="w-4 h-4 text-white" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Important Note */}
              <div className="mt-8 p-4 bg-coral-light rounded-2xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-coral-dark flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-coral-dark">Important Note</p>
                  <p className="text-sm text-coral-dark/80">
                    Always consult with your pediatrician before vaccinations. Some vaccines may have specific timing requirements based on your child's health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VaccinationTracker;
