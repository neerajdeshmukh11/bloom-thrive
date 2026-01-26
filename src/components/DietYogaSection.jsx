import { useState } from "react";
import { Utensils, Dumbbell, ChevronDown, ChevronUp, Leaf, Apple, Fish, Milk } from "lucide-react";

const dietPlans = {
  "First Trimester": {
    foods: [
      { name: "Folic Acid Rich Foods", items: "Spinach, lentils, fortified cereals, oranges", icon: Leaf },
      { name: "Protein Sources", items: "Eggs, lean meat, beans, tofu, nuts", icon: Fish },
      { name: "Calcium Foods", items: "Milk, yogurt, cheese, almonds", icon: Milk },
      { name: "Iron Rich Foods", items: "Red meat, spinach, beans, dried fruits", icon: Apple },
    ],
    avoid: ["Raw eggs", "Unpasteurized dairy", "High-mercury fish", "Alcohol", "Excess caffeine"],
    tips: "Eat small, frequent meals to combat nausea. Stay hydrated and take prenatal vitamins."
  },
  "Second Trimester": {
    foods: [
      { name: "Omega-3 Fatty Acids", items: "Salmon, walnuts, chia seeds, flaxseed", icon: Fish },
      { name: "Vitamin D Foods", items: "Fortified milk, eggs, sunlight exposure", icon: Milk },
      { name: "Fiber Rich Foods", items: "Whole grains, fruits, vegetables, legumes", icon: Leaf },
      { name: "Complex Carbs", items: "Brown rice, oats, quinoa, sweet potato", icon: Apple },
    ],
    avoid: ["Processed foods", "Excess salt", "Sugary drinks", "Raw seafood", "Deli meats"],
    tips: "Increase calorie intake by 300-350 calories. Focus on nutrient-dense foods."
  },
  "Third Trimester": {
    foods: [
      { name: "High Protein", items: "Chicken, fish, eggs, Greek yogurt, lentils", icon: Fish },
      { name: "Iron & Vitamin C", items: "Spinach with citrus, bell peppers, tomatoes", icon: Apple },
      { name: "Healthy Fats", items: "Avocado, olive oil, nuts, seeds", icon: Leaf },
      { name: "Calcium Boost", items: "Dairy, fortified plant milk, leafy greens", icon: Milk },
    ],
    avoid: ["Spicy foods", "Large meals", "Lying down after eating", "Gas-causing foods"],
    tips: "Eat smaller meals more frequently. Stay hydrated and monitor for swelling."
  }
};

const yogaExercises = {
  "First Trimester": [
    { name: "Cat-Cow Stretch", benefit: "Relieves back pain, improves flexibility", duration: "5-10 minutes" },
    { name: "Gentle Walking", benefit: "Improves circulation, boosts mood", duration: "20-30 minutes" },
    { name: "Deep Breathing", benefit: "Reduces stress, improves oxygen flow", duration: "10 minutes" },
    { name: "Seated Forward Bend", benefit: "Stretches hamstrings, calms mind", duration: "5 minutes" },
  ],
  "Second Trimester": [
    { name: "Prenatal Yoga Flow", benefit: "Builds strength, improves balance", duration: "20-30 minutes" },
    { name: "Butterfly Pose", benefit: "Opens hips, relieves tension", duration: "5-10 minutes" },
    { name: "Side-Lying Leg Lifts", benefit: "Strengthens legs and hips", duration: "10 minutes" },
    { name: "Supported Triangle Pose", benefit: "Stretches sides, improves balance", duration: "5 minutes" },
  ],
  "Third Trimester": [
    { name: "Supported Squats", benefit: "Prepares for labor, opens pelvis", duration: "5-10 minutes" },
    { name: "Pelvic Floor Exercises", benefit: "Strengthens for delivery", duration: "10 minutes" },
    { name: "Wall Push-Ups", benefit: "Maintains arm strength safely", duration: "5 minutes" },
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
            Wellness Guide
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Diet & Yoga Plans for{" "}
            <span className="text-gradient">Every Stage</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Personalized nutrition advice and safe exercises tailored to each trimester of your pregnancy journey.
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
              Diet Plan
            </button>
            <button
              onClick={() => setActiveTab("yoga")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === "yoga" ? 'bg-card shadow-soft text-foreground' : 'text-muted-foreground'
              }`}
            >
              <Dumbbell className="w-5 h-5" />
              Yoga & Exercise
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "diet" ? (
            <div className="space-y-6 animate-fade-in">
              {/* Recommended Foods */}
              <div className="bg-gradient-hero rounded-3xl p-8">
                <h3 className="text-xl font-display font-bold text-foreground mb-6">
                  Recommended Foods
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

              {/* Foods to Avoid */}
              <div 
                className="bg-coral-light rounded-3xl overflow-hidden cursor-pointer"
                onClick={() => setExpandedSection(expandedSection === 'avoid' ? null : 'avoid')}
              >
                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-xl font-display font-bold text-coral-dark">
                    Foods to Avoid
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

              {/* Tips */}
              <div className="bg-mint-light rounded-3xl p-6">
                <h3 className="font-display font-bold text-mint-dark mb-2">💡 Pro Tip</h3>
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
                  <div className="bg-card px-4 py-2 rounded-full shadow-soft">
                    <span className="text-sm font-medium text-foreground">{exercise.duration}</span>
                  </div>
                </div>
              ))}

              <div className="bg-lavender rounded-3xl p-6 mt-6">
                <h3 className="font-display font-bold text-accent-foreground mb-2">⚠️ Safety First</h3>
                <p className="text-accent-foreground">
                  Always consult your doctor before starting any exercise routine. Avoid lying flat on your back after the first trimester. Stop if you feel dizzy, short of breath, or experience pain.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DietYogaSection;
