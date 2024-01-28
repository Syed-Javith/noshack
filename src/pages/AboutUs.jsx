import React from 'react'
import RecognisedBy from '../components/RecognisedBy/RecognisedBy'
import AboutUsHeader from '../components/AboutUsHeader/AboutUsHeader'
import OurValues from '../components/OurValues/OurValues'
import AboutCreators from '../components/AboutCreators/AboutCreators'
const AboutUs = () => {
  return (
    <div>
      <AboutUsHeader />
      <RecognisedBy />
      <OurValues />
      <AboutCreators/>
    </div>
  )
}

export default AboutUs
