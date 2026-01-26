import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-mother-child.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 w-32 h-32 bg-coral-light rounded-full opacity-60 animate-float blur-xl" />
      <div className="absolute top-48 right-20 w-48 h-48 bg-mint-light rounded-full opacity-60 animate-float-delayed blur-xl" />
      <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-lavender rounded-full opacity-50 animate-float blur-xl" />

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)] py-12 px-4">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-coral-light text-coral-dark px-4 py-2 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Trusted by 10,000+ Happy Families
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              Expert Care for{" "}
              <span className="text-gradient">Mom & Baby</span>{" "}
              Every Step of the Way
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              From pregnancy to parenthood, we provide comprehensive healthcare services 
              with compassionate professionals dedicated to nurturing the health and 
              happiness of mothers and children.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center gap-2 group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline flex items-center justify-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
                </div>
                Watch Our Story
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <h3 className="text-3xl font-display font-bold text-foreground">15+</h3>
                <p className="text-muted-foreground text-sm">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold text-foreground">50+</h3>
                <p className="text-muted-foreground text-sm">Expert Doctors</p>
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold text-foreground">98%</h3>
                <p className="text-muted-foreground text-sm">Happy Families</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-[3rem] overflow-hidden shadow-glow">
                <img
                  src={heroImage}
                  alt="Mother caring for baby"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-medium animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-mint-light flex items-center justify-center">
                    <span className="text-2xl">👶</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Baby Care</p>
                    <p className="text-sm text-muted-foreground">24/7 Support</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-medium animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-coral-light flex items-center justify-center">
                    <span className="text-2xl">🤰</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Pregnancy</p>
                    <p className="text-sm text-muted-foreground">Expert Guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
