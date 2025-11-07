import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { Problems } from "@/components/sections/Problems";
import { Platform } from "@/components/sections/Platform";
import { Methodology } from "@/components/sections/Methodology";
import { Roles } from "@/components/sections/Roles";
import { Benefits } from "@/components/sections/Benefits";
import { Cases } from "@/components/sections/Cases";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ValueProposition />
      <Problems />
      <Platform />
      <Methodology />
      <Roles />
      <Benefits />
      <Cases />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
