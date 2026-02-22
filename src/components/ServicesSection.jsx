import { 
  Heart, 
  Baby, 
  Stethoscope, 
  ClipboardList,
  Syringe,
  Video,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Pregnancy Care",
    description: "Comprehensive prenatal care with regular checkups, ultrasounds, and expert guidance throughout your pregnancy.",
    color: "coral",
  },
  {
    icon: Baby,
    title: "Newborn & Baby Care",
    description: "Expert neonatal care including health screenings, growth monitoring, and developmental assessments.",
    color: "mint",
  },
  {
    icon: Stethoscope,
    title: "Mother Care & Recovery",
    description: "Postnatal care for mothers including recovery support, health monitoring, and wellness consultations.",
    color: "lavender",
  },
  {
    icon: Syringe,
    title: "Immunization Services",
    description: "Complete vaccination program from birth to 5 years with schedule tracking and reminder notifications.",
    color: "peach",
  },
  {
    icon: Video,
    title: "Online Consultation",
    description: "Video consultations with our hospital doctors from the comfort of your home. Ideal for follow-ups and rural patients.",
    color: "mint",
  },
  {
    icon: ClipboardList,
    title: "Health Records & Reports",
    description: "Digital health records, lab reports, and prescription management — all securely stored and accessible online.",
    color: "coral",
  },
];

const colorMap = {
  coral: "bg-coral-light text-coral-dark",
  mint: "bg-mint-light text-mint-dark",
  lavender: "bg-lavender text-accent-foreground",
  peach: "bg-peach text-coral-dark",
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="container-main px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-coral-light text-coral-dark px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Hospital Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Comprehensive Care for{" "}
            <span className="text-gradient">Every Stage</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From pregnancy checkups to baby care and beyond — our hospital provides 
            end-to-end services with qualified medical professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-gradient group cursor-pointer hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl ${colorMap[service.color]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Book Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#contact" className="btn-primary">
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
