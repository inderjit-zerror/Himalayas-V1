import ExploreFurtherSection from "@/components/journal/ExploreFurtherSection";
import FieldNotesGrid from "@/components/journal/Fieldnotesgrid";
import Filmstripgallery from "@/components/journal/Filmstripgallery";
import NotebookHero from "@/components/journal/Notebookhero";
import NotebookHeroSection from "@/components/journal/NotebookHeroSection";
import QuoteBanner from "@/components/journal/Quotebanner";
import StoryWithPolaroid from "@/components/journal/Storywithpolaroid";
import React from "react";

const page = () => {
  return (
    <>
      <NotebookHeroSection />
      <StoryWithPolaroid />

      <FieldNotesGrid />
      <Filmstripgallery />
      <ExploreFurtherSection />
    </>
  );
};

export default page;
