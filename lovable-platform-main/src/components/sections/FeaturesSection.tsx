import { Code, Palette, BarChart3, Shield, Zap, Users } from "lucide-react";
import { services } from "@/data/mockCms";

const iconMap: Record<string, any> = { Code, Palette, BarChart3, Shield, Zap, Users };

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">What We Do</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            End-to-end digital services designed to help businesses launch, scale, and dominate.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Code;
            return (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
