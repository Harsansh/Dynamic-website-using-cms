import { Quote } from "lucide-react";
import { testimonials } from "@/data/mockCms";

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Client Voices</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Don't take our word for it — hear from the teams we've worked with.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative border border-border rounded-lg p-8 bg-card"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 text-sm italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
