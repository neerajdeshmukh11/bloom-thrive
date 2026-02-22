import { useState } from "react";
import { Utensils, Dumbbell, ChevronDown, ChevronUp, Leaf, Apple, Fish, Milk, AlertTriangle } from "lucide-react";

const dietPlans = {
  "First Trimester": {
    foods: [
      { name: "Folic Acid Rich Foods", items: "Spinach, lentils, fortified cereals, oranges", icon: Leaf },
      { name: "Protein Sources", items: "Eggs, lean meat, beans, tofu, nuts", icon: Fish },
      { name: "Calcium Foods", items: "Milk, yogurt, cheese, almonds", icon: Milk },
      { name: "Iron Rich Foods", items: "Red meat, spinach, beans, dried fruits", icon: Apple },
    ],
    avoid: ["Raw eggs", "Unpasteurized dairy", "High-mercury fish", "Alcohol", "Excess caffeine"],
    tips: "Eat small, frequent meals to manage nausea. Stay hydrated and consult your doctor about prenatal vitamins."
  },
  "Second Trimester": {
    foods: [
      { name: "Omega-3 Fatty Acids", items: "Salmon, walnuts, chia seeds, flaxseed", icon: Fish },
      { name: "Vitamin D Foods", items: "Fortified milk, eggs, sunlight exposure", icon: Milk },
      { name: "Fiber Rich Foods", items: "Whole grains, fruits, vegetables, legumes", icon: Leaf },
      { name: "Complex Carbs", items: "Brown rice, oats, quinoa, sweet potato", icon: Apple },
    ],
    avoid: ["Processed foods", "Excess salt", "Sugary drinks", "Raw seafood", "Deli meats"],
    tips: "Focus on nutrient-dense foods. Consult your doctor about calorie requirements for your specific needs."
  },
  "Third Trimester": {
    foods: [
      { name: "High Protein", items: "Chicken, fish, eggs, Greek yogurt, lentils", icon: Fish },
      { name: "Iron & Vitamin C", items: "Spinach with citrus, bell peppers, tomatoes", icon: Apple },
      { name: "Healthy Fats", items: "Avocado, olive oil, nuts, seeds", icon: Leaf },
      { name: "Calcium Boost", items: "Dairy, fortified plant milk, leafy greens", icon: Milk },
    ],
    avoid: ["Spicy foods (if causing discomfort)", "Large meals", "Gas-causing foods"],
    tips: "Eat smaller meals more frequently. Stay hydrated and discuss any dietary concerns with your doctor."
  }
};

const yogaExercises = {
  "First Trimester": [
    { name: "Gentle Walking", benefit: "Improves circulation, boosts mood", duration: "20-30 minutes" },
    { name: "Deep Breathing", benefit: "Reduces stress, improves oxygen flow", duration: "10 minutes" },
    { name: "Gentle Stretching", benefit: "Relieves tension, improves flexibility", duration: "10 minutes" },
    { name: "Relaxation", benefit: "Calms mind, reduces anxiety", duration: "10 minutes" },
  ],
  "Second Trimester": [
    { name: "Prenatal Yoga (with guidance)", benefit: "Builds strength, improves balance", duration: "20-30 minutes" },
    { name: "Gentle Swimming", benefit: "Low-impact full body exercise", duration: "20 minutes" },
    { name: "Pelvic Floor Exercises", benefit: "Strengthens pelvic muscles", duration: "10 minutes" },
    { name: "Light Walking", benefit: "Maintains fitness safely", duration: "20-30 minutes" },
  ],
  "Third Trimester": [
    { name: "Breathing Exercises", benefit: "Prepares for labor breathing", duration: "15 minutes" },
    { name: "Pelvic Floor Exercises", benefit: "Strengthens for delivery", duration: "10 minutes" },
    { name: "Gentle Stretching", benefit: "Relieves back and hip tension", duration: "10 minutes" },
    { name: "Relaxation & Meditation", benefit: "Mental preparation for birth", duration: "15-20 minutes" },
  ]
};

const DietYogaSection = () => {
  const [activeTrimester, setActiveTrimester] = useState("First Trimester");
  const [activeTab, setActiveTab] = useState("diet");
  const [expandedSection, setExpandedSection] = useState(null);

  const trimesters = ["First Trimester", "Second Trimester", "Third Trimester"];

  return (
    <section id="diet-yoga" className="section-padding bg-card">
      <div className="container-main px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 bg-mint-light text-mint-dark px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Leaf className="w-4 h-4" />
            General Wellness Information
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Diet & Exercise{" "}
            <span className="text-gradient">Guidelines</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            General nutrition information and safe exercise suggestions for each trimester. 
            Always follow your doctor's specific advice.
          </p>
        </div>

        {/* Trimester Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {trimesters.map((trimester) => (
            <button
              key={trimester}
              onClick={() => setActiveTrimester(trimester)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTrimester === trimester
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {trimester}
            </button>
          ))}
        </div>

        {/* Diet/Yoga Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-muted p-1 rounded-full inline-flex">
            <button
              onClick={() => setActiveTab("diet")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === "diet" ? 'bg-card shadow-soft text-foreground' : 'text-muted-foreground'
              }`}
            >
              <Utensils className="w-5 h-5" />
              Diet Information
            </button>
            <button
              onClick={() => setActiveTab("yoga")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === "yoga" ? 'bg-card shadow-soft text-foreground' : 'text-muted-foreground'
              }`}
            >
              <Dumbbell className="w-5 h-5" />
              Exercise Guide
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "diet" ? (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-gradient-hero rounded-3xl p-8">
                <h3 className="text-xl font-display font-bold text-foreground mb-6">
                  Generally Recommended Foods
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {dietPlans[activeTrimester].foods.map((food) => (
                    <div key={food.name} className="bg-card rounded-2xl p-5 shadow-soft">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-mint-light flex items-center justify-center">
                          <food.icon className="w-5 h-5 text-mint-dark" />
                        </div>
                        <h4 className="font-semibold text-foreground">{food.name}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{food.items}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div 
                className="bg-coral-light rounded-3xl overflow-hidden cursor-pointer"
                onClick={() => setExpandedSection(expandedSection === 'avoid' ? null : 'avoid')}
              >
                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-xl font-display font-bold text-coral-dark">
                    Foods Generally to Avoid
                  </h3>
                  {expandedSection === 'avoid' ? (
                    <ChevronUp className="w-6 h-6 text-coral-dark" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-coral-dark" />
                  )}
                </div>
                {expandedSection === 'avoid' && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="flex flex-wrap gap-2">
                      {dietPlans[activeTrimester].avoid.map((item) => (
                        <span key={item} className="bg-card text-coral-dark px-4 py-2 rounded-full text-sm">
                          ❌ {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-mint-light rounded-3xl p-6">
                <h3 className="font-display font-bold text-mint-dark mb-2">💡 General Tip</h3>
                <p className="text-mint-dark">{dietPlans[activeTrimester].tips}</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4 animate-fade-in">
              {yogaExercises[activeTrimester].map((exercise, index) => (
                <div 
                  key={exercise.name}
                  className="bg-gradient-hero rounded-2xl p-6 flex items-center gap-6 hover:shadow-medium transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-lavender flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-display font-bold text-accent-foreground">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-bold text-foreground text-lg">{exercise.name}</h4>
                    <p className="text-muted-foreground">{exercise.benefit}</p>
                  </div>
                  <div className="bg-card px-4 py-2 rounded-full shadow-soft hidden sm:block">
                    <span className="text-sm font-medium text-foreground">{exercise.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Universal Disclaimer */}
          <div className="mt-8 bg-peach rounded-3xl p-6 flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-coral-dark flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display font-bold text-coral-dark mb-1">⚠️ Important Disclaimer</h3>
              <p className="text-coral-dark text-sm">
                All information provided here is for general awareness only and does not replace 
                professional medical consultation. Always consult your doctor before making any 
                changes to your diet or starting any exercise routine during pregnancy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DietYogaSection;
