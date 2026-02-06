import React from 'react'
import './About.css'
import AboutusBanner from '../../Components/Aboutus/AboutusBanner'
import Aboutuswave from '../../Components/Aboutus/Aboutuswave'
import AboutStory from '../../Components/Aboutus/AboutStory'
import ContactTeamleaders from '../../Components/Contact/ContactTeamleaders'
const Aboutuspage = () => {
  return (
    <div>
      <AboutusBanner/>
      <Aboutuswave/>
      <AboutStory/>
      <ContactTeamleaders/>
    </div>
  )
}

export default Aboutuspage
