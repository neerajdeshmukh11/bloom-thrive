import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Mother of 2",
    image: "👩",
    rating: 5,
    text: "The care we received during my pregnancy was exceptional. The doctors were not just professionals but like family. My baby and I are healthy and happy thanks to MomKidCare!",
  },
  {
    name: "Anita Patel",
    role: "First-time Mom",
    image: "👩‍🦰",
    rating: 5,
    text: "As a first-time mom, I was nervous about everything. The lactation support team was incredibly patient and helpful. They made breastfeeding so much easier for me.",
  },
  {
    name: "Rahul & Meera",
    role: "Happy Parents",
    image: "👨‍👩‍👧",
    rating: 5,
    text: "From prenatal classes to pediatric care, MomKidCare has been with us every step. The home care service after delivery was a blessing. Highly recommend!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-card overflow-hidden">
      <div className="container-main px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-mint-light text-mint-dark px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Stories from{" "}
            <span className="text-gradient">Happy Families</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Hear what the families we've served have to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-gradient-hero rounded-3xl p-8 relative group hover:shadow-medium transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-8 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-coral-light flex items-center justify-center text-3xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
