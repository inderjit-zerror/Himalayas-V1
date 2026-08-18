import ExploreFurtherSection from '@/components/journal/ExploreFurtherSection'
import FieldNotesGrid from '@/components/journal/Fieldnotesgrid'
import FilmstripGallery from '@/components/journal/Filmstripgallery'
import JournalHero from '@/components/journal/JournalHero'
import NotebookHero from '@/components/journal/Notebookhero'
import QuoteBanner from '@/components/journal/Quotebanner'
import StoryWithPolaroid from '@/components/journal/Storywithpolaroid'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-fit bg-white'>
      <JournalHero />
      <NotebookHero />
      <StoryWithPolaroid />
      <QuoteBanner />
      <FieldNotesGrid />
      <FilmstripGallery />
      <ExploreFurtherSection />
    </div>
  )
}

export default page
