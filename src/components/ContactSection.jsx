import { Phone, Mail, MapPin, Clock, Send, AlertTriangle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-hero">
      <div className="container-main px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div>
              <span className="inline-block bg-coral-light text-coral-dark px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Contact Us
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Book an{" "}
                <span className="text-gradient">Appointment</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Schedule your visit with our specialists. Walk-ins are also welcome 
                during working hours. For emergencies, call us anytime.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-coral-light flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-coral-dark" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground mb-1">Phone / Emergency</h4>
                  <p className="text-muted-foreground">+91 1234 567 890</p>
                  <p className="text-muted-foreground">Emergency: 108</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-mint-light flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-mint-dark" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">info@momkidcare.com</p>
                  <p className="text-muted-foreground">appointments@momkidcare.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-lavender flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground mb-1">Hospital Address</h4>
                  <p className="text-muted-foreground">123 Healthcare Avenue,</p>
                  <p className="text-muted-foreground">Medical District, City - 100001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-peach flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-coral-dark" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground mb-1">OPD Hours</h4>
                  <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-muted-foreground">Emergency & ICU: 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Appointment Form */}
          <div className="bg-card rounded-3xl p-8 shadow-medium">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Book an Appointment
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-foreground font-medium mb-2 text-sm">Patient Name</label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2 text-sm">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Contact number"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2 text-sm">Email Address</label>
                <input
                  type="email"
                  placeholder="Email for confirmation"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-foreground font-medium mb-2 text-sm">Department</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                    <option value="">Select department</option>
                    <option value="obstetrics">Obstetrics & Gynecology</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="neonatology">Neonatology</option>
                    <option value="vaccination">Vaccination</option>
                    <option value="general">General Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2 text-sm">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2 text-sm">Additional Notes</label>
                <textarea
                  rows={3}
                  placeholder="Any specific concerns or requirements..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                Book Appointment
                <Send className="w-5 h-5" />
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Our team will confirm your appointment via phone/email within 24 hours.
              </p>
            </form>
          </div>
        </div>

        {/* Disclaimer Banner */}
        <div className="mt-16 bg-peach rounded-3xl p-6 flex items-start gap-4 max-w-4xl mx-auto">
          <AlertTriangle className="w-8 h-8 text-coral-dark flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-display font-bold text-coral-dark mb-1">⚠️ Disclaimer</h4>
            <p className="text-coral-dark text-sm leading-relaxed">
              All information provided on this website is for general awareness only and does not 
              replace professional medical consultation. Always consult with qualified healthcare 
              professionals for medical advice, diagnosis, or treatment. In case of emergency, 
              please call 108 or visit the nearest hospital immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
