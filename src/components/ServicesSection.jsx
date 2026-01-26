import { 
  Baby, 
  Heart, 
  Stethoscope, 
  Users, 
  Home,
  Milk,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Pregnancy Care",
    description: "Comprehensive prenatal care with regular checkups, ultrasounds, and expert guidance throughout your pregnancy journey.",
    color: "coral",
  },
  {
    icon: Baby,
    title: "Newborn Care",
    description: "Expert care for your newborn including health screenings, vaccinations, and developmental monitoring.",
    color: "mint",
  },
  {
    icon: Stethoscope,
    title: "Pediatric Services",
    description: "Complete pediatric healthcare from infancy through adolescence with personalized treatment plans.",
    color: "lavender",
  },
  {
    icon: Milk,
    title: "Lactation Support",
    description: "Professional lactation consultants to help with breastfeeding challenges and ensure healthy nutrition.",
    color: "peach",
  },
  {
    icon: Home,
    title: "Home Care Services",
    description: "Trained professionals visit your home for post-delivery care, baby massage, and mother support.",
    color: "mint",
  },
  {
    icon: Users,
    title: "Parenting Classes",
    description: "Educational workshops on baby care, nutrition, child development, and parenting techniques.",
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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-coral-light text-coral-dark px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Comprehensive Care for{" "}
            <span className="text-gradient">Every Stage</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From the moment you discover your pregnancy to watching your child grow, 
            we're here with expert care and unwavering support.
          </p>
        </div>

        {/* Services Grid */}
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
              <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
