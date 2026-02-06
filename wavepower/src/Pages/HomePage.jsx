import React from 'react'
 
import BecameAPartner from '../Components/Home/BecameAPartner'
import './home.css'
import RealStories from '../Components/Home/RealStories'
import TrustedBy from '../Components/Home/TrustedBy'
 import HomeBanner from '../Components/Home/HomeBanner'
import WhoWeAre from '../Components/Home/WhoWeAre'
import TechnologySection from '../Components/Home/TechnologySection'

 
export const HomePage = () => {
  return (
    <>
    <HomeBanner/>
    <WhoWeAre/>
    <TechnologySection/>
    < TrustedBy/>
    <RealStories/>
    <BecameAPartner/>
    </>
  )
}
