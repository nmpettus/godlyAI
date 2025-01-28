import { Hero } from "@/components/Hero";
import { FeaturedApps } from "@/components/FeaturedApps";
import { About } from "@/components/About";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <FeaturedApps />
    </main>
  );
};

export default Index;