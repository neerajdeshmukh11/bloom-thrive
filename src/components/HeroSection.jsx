import { ArrowRight, Shield, Clock, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-mother-child.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden pt-32">
      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-32 h-32 bg-coral-light rounded-full opacity-60 animate-float blur-xl" />
      <div className="absolute top-56 right-20 w-48 h-48 bg-mint-light rounded-full opacity-60 animate-float-delayed blur-xl" />
      <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-lavender rounded-full opacity-50 animate-float blur-xl" />

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-140px)] py-12 px-4">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-coral-light text-coral-dark px-4 py-2 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              🏥 Trusted Hospital for Mother & Child Care
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              Complete Hospital Care for{" "}
              <span className="text-gradient">Mom & Baby</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              A professional mother and child care hospital providing patient registration, 
              doctor consultations, digital health records, vaccination tracking, and 
              comprehensive care — all under one roof.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2 group">
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="btn-outline flex items-center justify-center gap-2">
                Our Services
              </a>
            </div>

            {/* Hospital Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-coral-light flex items-center justify-center">
                  <Award className="w-5 h-5 text-coral-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground">15+</h3>
                  <p className="text-muted-foreground text-xs">Years Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-mint-light flex items-center justify-center">
                  <Users className="w-5 h-5 text-mint-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground">50+</h3>
                  <p className="text-muted-foreground text-xs">Expert Doctors</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-lavender flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground">10K+</h3>
                  <p className="text-muted-foreground text-xs">Happy Families</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-peach flex items-center justify-center">
                  <Clock className="w-5 h-5 text-coral-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground">24/7</h3>
                  <p className="text-muted-foreground text-xs">Emergency Care</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-glow">
                <img
                  src={heroImage}
                  alt="Mother and child at hospital"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-medium animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-mint-light flex items-center justify-center">
                    <span className="text-2xl">🩺</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Doctor On Call</p>
                    <p className="text-sm text-muted-foreground">24/7 Available</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-medium animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-coral-light flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Digital Records</p>
                    <p className="text-sm text-muted-foreground">100% Secure</p>
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
