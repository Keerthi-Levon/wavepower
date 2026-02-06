import React from 'react'
import { HomeBanner } from '../Components/Home/HomeBanner'
import BecameAPartner from '../Components/Home/BecameAPartner'
import './home.css'
import RealStories from '../Components/Home/RealStories'
import TrustedBy from '../Components/Home/TrustedBy'
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
