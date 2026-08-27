import ExploreFurtherSection from "@/components/journal/ExploreFurtherSection";
import FieldNotesGrid from "@/components/journal/Fieldnotesgrid";
import Filmstripgallery from "@/components/journal/Filmstripgallery";
import InteractiveNavigation from "@/components/journal/InteractiveNavigation";
import NotebookHero from "@/components/journal/Notebookhero";
import NotebookHeroSection from "@/components/journal/NotebookHeroSection";
import QuoteBanner from "@/components/journal/Quotebanner";
import QuoteSection from "@/components/journal/QuoteSection";
import StoryWithPolaroid from "@/components/journal/Storywithpolaroid";
import React from "react";

const page = () => {
  return (
    <>
    <InteractiveNavigation />
      <NotebookHeroSection />
      <StoryWithPolaroid />
      <QuoteSection />

      <div className=" relative w-full overflow-x-hidden">
        <div className="absolute top-0 w-full h-[100vh] left-0 z-[-1] overflow-hidden ">
          <img src="/img/BBG2.png" alt="IMG" className="w-full h-full " />
        </div>
        
      
        <FieldNotesGrid />
        <Filmstripgallery />
      </div>
      <ExploreFurtherSection />
    </>
  );
};

export default page;
