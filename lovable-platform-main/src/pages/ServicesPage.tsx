import Layout from "@/components/layout/Layout";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CtaSection from "@/components/sections/CtaSection";

const ServicesPage = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl mb-8">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From strategy to execution, we deliver full-spectrum digital services that help businesses grow and compete in the modern landscape.
          </p>
        </div>
      </section>
      <FeaturesSection />
      <CtaSection />
    </Layout>
  );
};

export default ServicesPage;
