import { Building2, Facebook, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      {/* CTA Banner */}
      <div className="bg-primary py-12">
        <div className="container-main px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-2">
                Need Medical Assistance?
              </h3>
              <p className="text-primary-foreground/80">
                Book an appointment or call our helpline for immediate assistance.
              </p>
            </div>
            <a href="#contact" className="bg-background text-foreground px-8 py-4 rounded-full font-semibold hover:bg-background/90 transition-colors shadow-lg">
              Book Appointment
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 px-4">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <span className="font-display text-2xl font-bold">
                    Mom<span className="text-primary">Kid</span>Care
                  </span>
                  <p className="text-background/50 text-xs">Hospital & Child Care Center</p>
                </div>
              </div>
              <p className="text-background/70 leading-relaxed text-sm">
                A professional mother and child care hospital providing comprehensive 
                healthcare services with modern facilities and experienced specialists.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["About Us", "Our Doctors", "Patient Portal", "Health Records", "Find a Branch", "Careers"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hospital Services */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6">Hospital Services</h4>
              <ul className="space-y-3">
                {["Obstetrics & Gynecology", "Pediatrics", "Neonatology", "Vaccination Center", "Online Consultation", "Emergency Services"].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6">Stay Updated</h4>
              <p className="text-background/70 mb-4 text-sm">
                Subscribe for hospital updates, health tips, and awareness information.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10 py-6 px-4">
        <div className="container-main flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-background/60 text-xs text-center md:text-left space-y-1">
            <p>© 2024 MomKidCare Hospital. All rights reserved.</p>
            <p className="text-background/40">
              Disclaimer: All information is for general awareness only and does not replace professional medical advice.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-background/60">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform z-40"
      >
        <ArrowUp className="w-6 h-6 text-primary-foreground" />
      </button>
    </footer>
  );
};

export default Footer;
