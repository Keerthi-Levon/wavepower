import React from 'react'
 
import BecameAPartner from '../Components/Home/BecameAPartner'
import './home.css'
import RealStories from '../Components/Home/RealStories'
import TrustedBy from '../Components/Home/TrustedBy'
import HomeBanner from '../Components/Home/HomeBanner'
import WhoWeAre from '../Components/Home/WhoWeAre'
import TechnologySection from '../Components/Home/TechnologySection'
import BenifitsOfEcoWavwpower from '../Components/Home/BenifitsOfEcoWavwpower'
import ProjectsAndInstallations from '../Components/Home/ProjectsAndInstallations'
import WhyChooseUs from '../Components/Home/WhyChooseUs'

 
export const HomePage = () => {
  return (
    <>
    <HomeBanner/>
    <WhoWeAre/>
    <TechnologySection/>
    <BenifitsOfEcoWavwpower/>
    <ProjectsAndInstallations/>
    <WhyChooseUs/>
    <TrustedBy/>
    <RealStories/>
    <BecameAPartner/>
    </>
  )
}
