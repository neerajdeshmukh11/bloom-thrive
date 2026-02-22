import { 
  UserPlus, 
  CalendarCheck, 
  LayoutDashboard, 
  FileText, 
  Upload, 
  Syringe, 
  Bell, 
  Video, 
  MapPin,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: UserPlus,
    title: "Patient Registration",
    description: "Quick and easy digital patient registration for mothers and children with secure data management.",
    color: "coral",
    badge: "Core"
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking",
    description: "Book appointments with specialized doctors online. Choose your preferred date, time, and department.",
    color: "mint",
    badge: "Online"
  },
  {
    icon: LayoutDashboard,
    title: "Doctor Dashboard",
    description: "Dedicated dashboard for doctors to manage patients, view schedules, and update medical records.",
    color: "lavender",
    badge: "For Doctors"
  },
  {
    icon: FileText,
    title: "Digital Health Records",
    description: "Secure electronic health records accessible anytime. Complete medical history at your fingertips.",
    color: "peach",
    badge: "Secure"
  },
  {
    icon: Upload,
    title: "Prescription Upload",
    description: "Upload and store prescriptions digitally. Easy access for follow-up visits and pharmacy reference.",
    color: "coral",
    badge: "Easy Upload"
  },
  {
    icon: Syringe,
    title: "Vaccination Tracking",
    description: "Complete immunization schedule tracking from birth to 5 years with timely reminders for parents.",
    color: "mint",
    badge: "Smart Alerts"
  },
  {
    icon: Bell,
    title: "Reminder Notifications",
    description: "Automated reminders for upcoming appointments, vaccinations, follow-ups, and medication schedules.",
    color: "lavender",
    badge: "Automated"
  },
  {
    icon: Video,
    title: "Doctor–Patient Consultation",
    description: "Online video consultations with hospital doctors. Especially helpful for patients in rural areas.",
    color: "peach",
    badge: "Virtual"
  },
  {
    icon: MapPin,
    title: "Hospital Branch Locator",
    description: "Find the nearest hospital branch with map-based navigation, contact details, and available services.",
    color: "coral",
    badge: "Map-Based"
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
      <div className="absolute top-20 right-10 w-64 h-64 bg-coral-light rounded-full opacity-30 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-mint-light rounded-full opacity-40 blur-3xl" />

      <div className="container-main px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Hospital Management Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Complete Hospital{" "}
            <span className="text-gradient">Management System</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From patient registration to doctor consultations — our comprehensive hospital 
            platform streamlines every aspect of mother and child care.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

                <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl`} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-medium max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Ready to Experience Better Healthcare?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Register as a patient today and access all our hospital services digitally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Register as Patient
              </a>
              <a href="#services" className="btn-outline">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
