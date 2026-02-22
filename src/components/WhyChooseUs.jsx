import { CheckCircle2, Shield, Award, Clock, Users, Stethoscope, Building2 } from "lucide-react";

const features = [
  "24/7 emergency services for mothers and children",
  "Board-certified OB-GYN and pediatric specialists",
  "Digital health records for easy access",
  "State-of-the-art medical facilities & equipment",
  "Online appointment booking & video consultation",
  "Multiple hospital branches across the region",
];

const highlights = [
  { icon: Shield, label: "NABH Accredited", color: "coral" },
  { icon: Stethoscope, label: "50+ Specialists", color: "mint" },
  { icon: Building2, label: "5 Branches", color: "lavender" },
  { icon: Clock, label: "24/7 Emergency", color: "peach" },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="section-padding bg-gradient-hero">
      <div className="container-main px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-3xl overflow-hidden shadow-medium">
                <div className="aspect-video bg-mint-light flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="text-6xl mb-4 block">🏥</span>
                    <p className="font-display text-xl font-semibold text-mint-dark">Our Hospital</p>
                    <p className="text-sm text-mint-dark/70 mt-1">Modern facilities for complete care</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-soft">
                <div className="aspect-square bg-coral-light flex items-center justify-center">
                  <div className="text-center p-4">
                    <span className="text-5xl mb-2 block">👶</span>
                    <p className="font-semibold text-coral-dark text-sm">Neonatal Care</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-soft">
                <div className="aspect-square bg-lavender flex items-center justify-center">
                  <div className="text-center p-4">
                    <span className="text-5xl mb-2 block">🤱</span>
                    <p className="font-semibold text-accent-foreground text-sm">Maternity Ward</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="absolute -bottom-8 left-4 right-4 bg-card rounded-2xl p-4 shadow-glow">
              <div className="grid grid-cols-4 gap-2">
                {highlights.map((h) => (
                  <div key={h.label} className="text-center">
                    <div className={`w-10 h-10 mx-auto rounded-xl bg-${h.color === 'coral' ? 'coral-light' : h.color === 'mint' ? 'mint-light' : h.color === 'lavender' ? 'lavender' : 'peach'} flex items-center justify-center mb-1`}>
                      <h.icon className={`w-5 h-5 ${h.color === 'coral' || h.color === 'peach' ? 'text-coral-dark' : h.color === 'mint' ? 'text-mint-dark' : 'text-accent-foreground'}`} />
                    </div>
                    <p className="text-[10px] font-semibold text-foreground leading-tight">{h.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 lg:pt-0 pt-12">
            <div>
              <span className="inline-block bg-coral-light text-coral-dark px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Why Choose Our Hospital
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Trusted Care for Your{" "}
                <span className="text-gradient">Family's Health</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We combine medical excellence with genuine compassion. Our hospital is 
                equipped with modern technology and staffed by experienced specialists 
                dedicated to mother and child healthcare.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="btn-primary">
                Book Appointment
              </a>
              <a href="#find-hospital" className="btn-outline">
                Find Nearest Branch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
