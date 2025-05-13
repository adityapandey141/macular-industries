import React from 'react'
import AboutUsHeader from '@/components/AboutHeader'
import About from '@/components/About'
import Vision from '@/components/Vision'
import TeamSection from '@/components/TeamSection'
import CTA2 from '@/components/CTA2'

const page = () => {
  return (
    <div>
      <AboutUsHeader/>
      <About/>
      <Vision/>
      <TeamSection/>
      <CTA2/>
    </div>
  )
}

export default page