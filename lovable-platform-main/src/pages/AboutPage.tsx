import Layout from "@/components/layout/Layout";
import { testimonials } from "@/data/mockCms";
import { Quote } from "lucide-react";

const AboutPage = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">About Meridian</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We're a digital product studio specializing in building scalable CMS platforms and beautiful websites for ambitious companies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2022, Meridian was born from the frustration of managing content across dozens of client websites using legacy tools. We built a multi-tenant CMS from the ground up — one that gives every client a unique, blazing-fast website while keeping everything manageable from a single platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { number: "50+", label: "Websites Launched" },
              { number: "99.9%", label: "Uptime SLA" },
              { number: "< 1s", label: "Avg. Page Load" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-8 bg-section-alt rounded-lg">
                <p className="font-serif text-4xl text-primary mb-2">{stat.number}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="font-serif text-3xl text-foreground mb-8">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="border border-border rounded-lg p-6">
                  <Quote className="w-6 h-6 text-primary/20 mb-3" />
                  <p className="text-sm text-foreground italic mb-4">"{t.quote}"</p>
                  <p className="text-sm font-semibold text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
