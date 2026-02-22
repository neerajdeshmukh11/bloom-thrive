import { MapPin, Phone, Clock, Navigation, Star } from "lucide-react";

const branches = [
  {
    name: "MomKidCare - City Center",
    address: "123 Healthcare Avenue, Medical District",
    phone: "+91 1234 567 890",
    hours: "24/7 Emergency | OPD: 9AM - 8PM",
    services: ["Maternity", "Pediatrics", "NICU", "Emergency"],
    rating: 4.8,
    distance: "2.3 km",
  },
  {
    name: "MomKidCare - West Branch",
    address: "456 Wellness Road, West Side",
    phone: "+91 1234 567 891",
    hours: "OPD: 9AM - 6PM | Emergency: 24/7",
    services: ["Maternity", "Vaccination", "Pediatrics"],
    rating: 4.6,
    distance: "5.1 km",
  },
  {
    name: "MomKidCare - South Clinic",
    address: "789 Care Street, South Colony",
    phone: "+91 1234 567 892",
    hours: "OPD: 10AM - 7PM",
    services: ["Prenatal", "Vaccination", "Consultation"],
    rating: 4.7,
    distance: "8.4 km",
  },
];

const HospitalLocator = () => {
  return (
    <section id="find-hospital" className="section-padding bg-gradient-hero">
      <div className="container-main px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 bg-lavender text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4" />
            Find Our Branches
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Nearest Hospital{" "}
            <span className="text-gradient">Branch Locator</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Find the MomKidCare hospital branch nearest to you with services, timings, and directions.
          </p>
        </div>

        {/* Map Placeholder */}
        <div className="bg-card rounded-3xl shadow-medium overflow-hidden mb-8">
          <div className="aspect-[16/6] bg-mint-light flex items-center justify-center relative">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-mint-dark mx-auto mb-3 animate-float" />
              <p className="font-display text-xl font-bold text-mint-dark">Interactive Map</p>
              <p className="text-sm text-mint-dark/70 mt-1">Map integration will show hospital locations near you</p>
            </div>
            {/* Decorative pins */}
            <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <MapPin className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <MapPin className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="absolute bottom-1/3 left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <MapPin className="w-4 h-4 text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* Branch Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch) => (
            <div key={branch.name} className="bg-card rounded-3xl p-6 shadow-soft hover:shadow-medium transition-all group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display font-bold text-foreground text-lg leading-tight">{branch.name}</h3>
                <div className="flex items-center gap-1 bg-peach px-2 py-1 rounded-full">
                  <Star className="w-3.5 h-3.5 fill-coral-dark text-coral-dark" />
                  <span className="text-xs font-bold text-coral-dark">{branch.rating}</span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{branch.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">{branch.phone}</p>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{branch.hours}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {branch.services.map((s) => (
                  <span key={s} className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full">{s}</span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm font-semibold text-primary">{branch.distance} away</span>
                <button className="flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors">
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalLocator;
