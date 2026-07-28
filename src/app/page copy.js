import HeroSection from "@/components/home/HeroSection";
import AccommodationSection from "@/components/home/AccommodationSection";
import IntroSection from "@/components/home/IntroSection";
import OffersSection from "@/components/home/OffersSection";
import FacilitiesSection from "@/components/home/FacilitiesSection";

export default function Home() {
  return (
    <div className="bg-white text-stone-800 min-h-screen overflow-x-hidden">
      <HeroSection />
      <IntroSection />
      <AccommodationSection />
      <OffersSection />
      <FacilitiesSection />
    </div>
  );
}
