import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Patient - Maternity Ward",
    image: "👩",
    rating: 5,
    text: "The care we received at MomKidCare Hospital during my delivery was outstanding. The doctors and nurses were very supportive and the facilities were excellent. Highly recommend!",
  },
  {
    name: "Anita Patel",
    role: "Patient - Pediatric Care",
    image: "👩‍🦰",
    rating: 5,
    text: "The pediatric team is wonderful. From vaccinations to regular checkups, everything is handled professionally. The digital health records make follow-ups so convenient.",
  },
  {
    name: "Rahul & Meera",
    role: "Patients - Prenatal Care",
    image: "👨‍👩‍👧",
    rating: 5,
    text: "Booking appointments online was so easy. The doctors took time to explain everything during consultations. The hospital is clean, well-equipped, and the staff is caring.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-card overflow-hidden">
      <div className="container-main px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-mint-light text-mint-dark px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Patient Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            What Our{" "}
            <span className="text-gradient">Patients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real experiences from families who trust MomKidCare Hospital for their healthcare needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gradient-hero rounded-3xl p-8 relative group hover:shadow-medium transition-all duration-300"
            >
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-8 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

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
