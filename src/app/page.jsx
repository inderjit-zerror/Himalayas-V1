import ChooseYourPath from "@/components/home/Chooseyourpath";
import CuratedItineraries from "@/components/home/Curateditineraries";
import Hero from "@/components/home/Hero";
import HimalayanCircuitsCarousel from "@/components/home/Himalayancircuitscarousel";
import HimalayanCircuitsCarousel2 from "@/components/home/HimalayanCircuitsCarousel2";
import JourneysRemembered from "@/components/home/Journeysremembered";
import OurStory from "@/components/home/Ourstory";
import PeopleBehindJourneys from "@/components/home/Peoplebehindjourneys";
import SiteFooter from "@/components/home/Sitefooter";
import StorySection from "@/components/home/Storysection";
import Video from "@/components/home/Video";
import WhyDiscoverHimalayas from "@/components/home/Whydiscoverhimalayas";
import { createPageMetadata } from "@/lib/seo";

const HomePage = () => {
  return (
    <>
      <Hero />
      <StorySection />
      <Video />
      <OurStory />
      <CuratedItineraries />
      <HimalayanCircuitsCarousel />
      <HimalayanCircuitsCarousel2 />
      <PeopleBehindJourneys />
      <JourneysRemembered />
      <WhyDiscoverHimalayas />


    </>
  );
};

export default HomePage;

export async function generateMetadata() {
  return createPageMetadata("/");
}
