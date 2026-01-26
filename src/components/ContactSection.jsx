import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-hero">
      <div className="container-main px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div>
              <span className="inline-block bg-coral-light text-coral-dark px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                We're Here to{" "}
                <span className="text-gradient">Help You</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Have questions about our services? Want to book an appointment? 
                Reach out to us and our friendly team will get back to you promptly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-coral-light flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-coral-dark" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">+1 234 567 890</p>
                  <p className="text-muted-foreground">+1 234 567 891</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-mint-light flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-mint-dark" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">hello@momkidcare.com</p>
                  <p className="text-muted-foreground">support@momkidcare.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-lavender flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">123 Healthcare Avenue,</p>
                  <p className="text-muted-foreground">Medical District, City - 100001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-peach flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-coral-dark" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground mb-1">Working Hours</h4>
                  <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-muted-foreground">Emergency: 24/7 Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-card rounded-3xl p-8 shadow-medium">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-foreground font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">Service Interested In</label>
                <select className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                  <option value="">Select a service</option>
                  <option value="pregnancy">Pregnancy Care</option>
                  <option value="newborn">Newborn Care</option>
                  <option value="pediatric">Pediatric Services</option>
                  <option value="lactation">Lactation Support</option>
                  <option value="home">Home Care Services</option>
                  <option value="parenting">Parenting Classes</option>
                </select>
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
