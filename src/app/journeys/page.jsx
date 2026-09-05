import ExpeditionPage from "@/components/journeys/ExpeditionPage";
import HimalayanCircuitsCarouselJ from "@/components/journeys/HimalayanCircuitsCarouselJ";
import ImageSlider from "@/components/journeys/ImageSlider";
import LadakhSection from "@/components/journeys/LadakhSection";
import PullQuote from "@/components/journeys/Pullquote";
import ScreenDiv from "@/components/journeys/ScreenDiv";
import ScreenDiv2 from "@/components/journeys/ScreenDiv2";
import React from "react";

const page = () => {
  const myImages1 = [
    "/pic/13.jpg", // Ladakh mountain road
    "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1920&auto=format&fit=crop", // High altitude pass & valley
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1920&auto=format&fit=crop", // Himalayan peaks
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1920&auto=format&fit=crop", // High-altitude lake landscape
  ];
  const myImages2 = [
    "/pic/14.jpg", // Himalayan peaks
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1920&auto=format&fit=crop", // High-altitude lake landscape
    "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1920&auto=format&fit=crop", // Ladakh mountain road
    "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1920&auto=format&fit=crop", // High altitude pass & valley
  ];
  const myImages3 = [
    "/pic/16.jpg", // High-altitude lake landscape
    "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1920&auto=format&fit=crop", // Himalayan peaks
    // Ladakh mountain road
    "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1920&auto=format&fit=crop", // High altitude pass & valley
  ];
  const myImages4 = [
    "/img/CD2.jpeg", // Ladakh mountain road
    "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1920&auto=format&fit=crop", // High altitude pass & valley
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1920&auto=format&fit=crop", // Himalayan peaks
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1920&auto=format&fit=crop", // High-altitude lake landscape
  ];

  return (
    <>
      <ExpeditionPage />
      <ScreenDiv />
      <LadakhSection />
      <ScreenDiv2 />
      <ImageSlider images={myImages1} />
      <ImageSlider images={myImages2} />
      <PullQuote />
      <ImageSlider images={myImages3} />
      <ImageSlider images={myImages4} />
      <HimalayanCircuitsCarouselJ />
    </>
  );
};

export default page;
