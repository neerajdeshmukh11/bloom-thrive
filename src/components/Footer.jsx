import { Heart, Facebook, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react";

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
                Ready to Start Your Journey?
              </h3>
              <p className="text-primary-foreground/80">
                Book a consultation today and experience the difference of compassionate care.
              </p>
            </div>
            <button className="bg-background text-foreground px-8 py-4 rounded-full font-semibold hover:bg-background/90 transition-colors shadow-lg">
              Book Appointment Now
            </button>
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
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <span className="font-display text-2xl font-bold">
                    Mom<span className="text-primary">Kid</span>Care
                  </span>
                </div>
              </div>
              <p className="text-background/70 leading-relaxed">
                Dedicated to providing exceptional healthcare services for mothers and 
                children with compassion, expertise, and love.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["About Us", "Our Services", "Our Team", "Testimonials", "Blog", "Careers"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-background/70 hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6">Our Services</h4>
              <ul className="space-y-3">
                {["Pregnancy Care", "Newborn Care", "Pediatric Services", "Lactation Support", "Home Care", "Parenting Classes"].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-background/70 hover:text-primary transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6">Stay Updated</h4>
              <p className="text-background/70 mb-4">
                Subscribe to our newsletter for parenting tips and healthcare updates.
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
          <p className="text-background/60 text-sm text-center md:text-left">
            © 2024 MomKidCare. All rights reserved. Made with ❤️ for families.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/60">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform z-50"
      >
        <ArrowUp className="w-6 h-6 text-primary-foreground" />
      </button>
    </footer>
  );
};

export default Footer;
