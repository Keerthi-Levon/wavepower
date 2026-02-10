import React from 'react'
import './About.css'
import AboutusBanner from '../../Components/Aboutus/AboutusBanner'
import Aboutuswave from '../../Components/Aboutus/Aboutuswave'
import AboutStory from '../../Components/Aboutus/AboutStory'
import ContactTeamleaders from '../../Components/Contact/ContactTeamleaders'
import TrustedBy from '../../Components/Home/TrustedBy'
const Aboutuspage = () => {
  return (
    <div>
      <AboutusBanner/>
      <Aboutuswave/>
      <AboutStory/>
      <ContactTeamleaders/>
      <TrustedBy/>
    </div>
  )
}

export default Aboutuspage
