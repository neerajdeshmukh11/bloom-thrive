import { 
  MessageCircle, 
  Salad, 
  Volume2, 
  Syringe, 
  Video, 
  Calendar,
  BookOpen,
  Baby,
  AlertCircle,
  MapPin,
  Users,
  Moon,
  Timer,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "24/7 AI Chatbot",
    description: "Get instant answers to your health questions, guidance, and personalized tips for you and your baby anytime.",
    color: "coral",
    badge: "AI Powered"
  },
  {
    icon: Salad,
    title: "Diet & Nutrition Plans",
    description: "Stage-wise personalized nutrition advice to ensure optimal health during pregnancy and postpartum recovery.",
    color: "mint",
    badge: "Personalized"
  },
  {
    icon: Volume2,
    title: "Multilingual Voice Support",
    description: "Health information read aloud in your preferred regional language using advanced text-to-speech technology.",
    color: "lavender",
    badge: "10+ Languages"
  },
  {
    icon: Syringe,
    title: "Vaccination Reminders",
    description: "Never miss an immunization! Automatic alerts for your child's complete vaccination schedule from birth to 5 years.",
    color: "peach",
    badge: "Smart Alerts"
  },
  {
    icon: Video,
    title: "Online Doctor Consultation",
    description: "Schedule video appointments with certified doctors from the comfort of your home. Perfect for rural areas.",
    color: "coral",
    badge: "Verified Doctors"
  },
  {
    icon: Calendar,
    title: "Delivery Date Predictor",
    description: "Calculate your expected delivery date and receive stage-based pregnancy tips tailored to your journey.",
    color: "mint",
    badge: "Accurate"
  },
  {
    icon: BookOpen,
    title: "Pregnancy Care Guide",
    description: "Comprehensive month-by-month guide with precautions during pregnancy and postnatal care tips.",
    color: "lavender",
    badge: "Expert Verified"
  },
  {
    icon: Baby,
    title: "Baby Growth Tracker",
    description: "Track your baby's developmental milestones, weight, height, and celebrate every achievement.",
    color: "peach",
    badge: "Milestone Alerts"
  },
  {
    icon: AlertCircle,
    title: "Emergency SOS",
    description: "One-tap emergency button to quickly connect with hospitals, ambulances, and emergency contacts.",
    color: "coral",
    badge: "24/7 Available"
  },
  {
    icon: MapPin,
    title: "Hospital Finder",
    description: "Find nearby hospitals, clinics, and maternity centers with ratings, directions, and contact details.",
    color: "mint",
    badge: "GPS Enabled"
  },
  {
    icon: Users,
    title: "Mom Community",
    description: "Connect with other mothers, share experiences, ask questions, and build a supportive network.",
    color: "lavender",
    badge: "Active Community"
  },
  {
    icon: Timer,
    title: "Contraction Timer",
    description: "Track your contractions during labor with easy-to-use timer and guidance on when to go to hospital.",
    color: "peach",
    badge: "Labor Ready"
  },
];

const colorMap = {
  coral: {
    bg: "bg-coral-light",
    text: "text-coral-dark",
    border: "border-coral-light"
  },
  mint: {
    bg: "bg-mint-light",
    text: "text-mint-dark",
    border: "border-mint-light"
  },
  lavender: {
    bg: "bg-lavender",
    text: "text-accent-foreground",
    border: "border-lavender"
  },
  peach: {
    bg: "bg-peach",
    text: "text-coral-dark",
    border: "border-peach"
  },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-coral-light rounded-full opacity-30 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-mint-light rounded-full opacity-40 blur-3xl" />

      <div className="container-main px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Everything You Need for a{" "}
            <span className="text-gradient">Healthy Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From AI-powered assistance to expert consultations, our comprehensive platform 
            supports you through every step of motherhood.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const colors = colorMap[feature.color];
            return (
              <div
                key={feature.title}
                className="group bg-card rounded-3xl p-6 shadow-soft hover:shadow-medium hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Badge */}
                <div className={`absolute top-4 right-4 ${colors.bg} ${colors.text} text-xs font-semibold px-3 py-1 rounded-full`}>
                  {feature.badge}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-7 h-7 ${colors.text}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-display font-bold text-foreground mb-2 pr-16">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl`} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-medium max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of happy mothers who trust MomKidCare for their family's health and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Get Started Free
              </button>
              <button className="btn-outline">
                Explore All Features
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
