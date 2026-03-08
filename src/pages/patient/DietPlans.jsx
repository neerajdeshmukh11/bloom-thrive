import DashboardLayout from "../../components/DashboardLayout";
import { Flame, Leaf, Clock } from "lucide-react";

const meals = [
  { type: "Breakfast", cal: "320 kcal", name: "Oats with Nuts & Berries", desc: "Steel-cut oats with almonds, walnuts, and mixed berries.", tags: ["High Fiber", "Iron-Rich"], color: "text-primary" },
  { type: "Mid-Morning", cal: "180 kcal", name: "Banana Smoothie", desc: "Banana, milk, honey, and a pinch of cardamom.", tags: ["Calcium", "Potassium"], color: "text-pink-500" },
  { type: "Lunch", cal: "520 kcal", name: "Dal, Rice & Vegetable Curry", desc: "Yellow dal with spinach, brown rice, and mixed veg sabzi.", tags: ["Protein", "Folate"], color: "text-primary" },
  { type: "Evening Snack", cal: "150 kcal", name: "Roasted Chana & Fruit", desc: "Roasted chickpeas with seasonal fruit.", tags: ["Fiber", "Iron"], color: "text-amber-500" },
  { type: "Dinner", cal: "450 kcal", name: "Roti, Paneer & Salad", desc: "Whole wheat roti with paneer bhurji and fresh salad.", tags: ["Protein", "Calcium"], color: "text-mint-dark" },
];

const DietPlans = () => {
  return (
    <DashboardLayout role="patient">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Diet Plan</h1>
          <p className="text-muted-foreground text-sm">Trimester 2 · Vegetarian</p>
        </div>
        <button className="px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted transition-all flex items-center gap-2">
          <Clock className="w-4 h-4" /> Filters
        </button>
      </div>

      {/* Summary */}
      <div className="bg-card rounded-2xl shadow-soft p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-semibold text-foreground">Daily Summary</h3>
          <span className="text-sm text-muted-foreground">Week 24</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: Flame, val: "1,620", label: "Calories", color: "text-primary" },
            { icon: Leaf, val: "68g", label: "Protein", color: "text-mint-dark" },
            { icon: Clock, val: "5", label: "Meals", color: "text-amber-500" },
          ].map((s) => (
            <div key={s.label} className="bg-muted/50 rounded-xl p-4 text-center">
              <s.icon className={`w-5 h-5 ${s.color} mx-auto mb-2`} />
              <p className="text-2xl font-bold text-foreground">{s.val}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Meals */}
      <div className="space-y-4">
        {meals.map((m) => (
          <div key={m.name} className="bg-card rounded-2xl shadow-soft p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs font-semibold ${m.color} bg-primary/5 px-3 py-1 rounded-full`}>{m.type}</span>
              <span className="text-xs text-muted-foreground">{m.cal}</span>
            </div>
            <h3 className="font-display font-semibold text-foreground mb-1">{m.name}</h3>
            <p className="text-sm text-muted-foreground mb-3">{m.desc}</p>
            <div className="flex gap-2">
              {m.tags.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground mt-8 text-center italic">
        ⚠ All information provided is for general awareness only and does not replace professional medical consultation.
      </p>
    </DashboardLayout>
  );
};

export default DietPlans;
