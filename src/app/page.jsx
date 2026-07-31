import Hero from "@/components/home/Hero";
import HimalayanCircuitsCarousel from "@/components/home/Himalayancircuitscarousel";
import StorySection from "@/components/home/Storysection";
import Video from "@/components/home/Video";
import { createPageMetadata } from "@/lib/seo";

const HomePage = () => {
  return (
    <>
    <Hero />
    <StorySection />
    <Video/>
    <HimalayanCircuitsCarousel />
    </>
  );
};

export default HomePage;

export async function generateMetadata() {
  return createPageMetadata("/");
}
