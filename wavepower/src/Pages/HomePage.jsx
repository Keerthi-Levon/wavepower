import React from 'react'
 
import BecameAPartner from '../Components/Home/BecameAPartner'
import './home.css'
import RealStories from '../Components/Home/RealStories'
import TrustedBy from '../Components/Home/TrustedBy'
 import HomeBanner from '../Components/Home/HomeBanner'

 
export const HomePage = () => {
  return (
    <>
    <HomeBanner/>
    < TrustedBy/>
    <RealStories/>
    <BecameAPartner/>
    </>
  )
}
