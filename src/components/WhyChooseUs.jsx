import { CheckCircle2 } from "lucide-react";

const features = [
  "24/7 emergency support for all families",
  "Certified and experienced healthcare professionals",
  "Personalized care plans for every patient",
  "State-of-the-art medical facilities",
  "Affordable packages for every budget",
  "Comfortable and child-friendly environment",
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="section-padding bg-gradient-hero">
      <div className="container-main px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 rounded-3xl overflow-hidden shadow-medium">
                <div className="aspect-video bg-mint-light flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="text-6xl mb-4 block">👨‍👩‍👧‍👦</span>
                    <p className="font-display text-xl font-semibold text-mint-dark">Happy Families</p>
                  </div>
                </div>
              </div>
              {/* Two smaller images */}
              <div className="rounded-2xl overflow-hidden shadow-soft">
                <div className="aspect-square bg-coral-light flex items-center justify-center">
                  <div className="text-center p-4">
                    <span className="text-5xl mb-2 block">👶</span>
                    <p className="font-semibold text-coral-dark text-sm">Baby Care</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-soft">
                <div className="aspect-square bg-lavender flex items-center justify-center">
                  <div className="text-center p-4">
                    <span className="text-5xl mb-2 block">🤱</span>
                    <p className="font-semibold text-accent-foreground text-sm">Mother Care</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-card rounded-3xl p-6 shadow-glow">
              <div className="text-center">
                <h3 className="text-4xl font-display font-bold text-primary">15+</h3>
                <p className="text-muted-foreground">Years of Trust</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block bg-coral-light text-coral-dark px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Your Family's Health is Our{" "}
                <span className="text-gradient">Top Priority</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We understand that choosing healthcare for your family is one of the most 
                important decisions you'll make. That's why we combine medical excellence 
                with genuine compassion to create an experience that feels like family.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary">
                Book Consultation
              </button>
              <button className="btn-outline">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
