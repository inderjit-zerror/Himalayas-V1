import OurStoryHero from '@/components/our-story/Ourstoryhero'
import PartnershipsSection from '@/components/our-story/Partnershipssection'
import RidersSection from '@/components/our-story/Riderssection'
import TeamSection from '@/components/our-story/Teamsection'
import React from 'react'

const page = () => {
  return (
    <>
      <OurStoryHero/>
      <PartnershipsSection />
      <TeamSection />
      <RidersSection/>
    </>
  )
}

export default page
