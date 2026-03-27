import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div
          className="rounded-2xl p-12 md:p-20 text-center relative overflow-hidden"
          style={{ background: "var(--hero-gradient)" }}
        >
          <h2 className="font-serif text-3xl md:text-5xl text-primary-foreground mb-4 relative z-10">
            Ready to Build Something Great?
          </h2>
          <p className="text-primary-foreground/70 max-w-md mx-auto mb-8 relative z-10">
            Let's discuss how our CMS platform can power your next digital project.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded font-medium text-sm inline-flex items-center gap-2 hover:opacity-90 transition-opacity relative z-10"
          >
            Let's Talk <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
