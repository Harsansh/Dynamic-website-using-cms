import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block bg-primary/20 text-primary-foreground text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Multi-Tenant CMS Platform
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] mb-6">
            Build. Manage.{" "}
            <span className="text-primary">Publish.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 leading-relaxed">
            A WordPress-killing CMS that powers unique websites for every client — with full multi-tenancy, SEO, and a block editor built for the modern web.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded font-medium text-sm inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="border border-primary-foreground/20 text-primary-foreground px-8 py-3.5 rounded font-medium text-sm hover:bg-primary-foreground/5 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-primary-foreground/30" />
        <div className="absolute bottom-20 right-40 w-96 h-96 rounded-full border border-primary-foreground/20" />
      </div>
    </section>
  );
};

export default HeroSection;
