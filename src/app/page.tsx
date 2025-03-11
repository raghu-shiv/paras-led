import { BestSellers } from "@/components/BestSellers";
import Divider from "@/components/Divider";
import Hero from "@/components/Hero";
import { LightingSolutions } from "@/components/LightingSolutions";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="bg-transparent">
      <Hero />
      {/* Responsive Divider */}
      <Divider />
      <BestSellers />
      <Divider />
      <LightingSolutions />
      <Divider />
      <Testimonials />
    </div>
  );
}
