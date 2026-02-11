import React from 'react'
import './waveEnergy.css'
import WaveEnergyBanner from '../../Components/WaveEnergy/WaveEnergyBanner'
import StayUpToDate from '../../Components/WaveEnergy/StayUpToDate'
import WaveEnergy from '../../Components/WaveEnergy/WaveEnergy'
import KeyReasons from '../../Components/WaveEnergy/KeyReasons'
import FrequentlyAskedQuestions from '../../Components/WaveEnergy/FrequentlyAskedQuestions'
import TrustedBy from "../../Components/Home/TrustedBy";
import RealStories from "../../Components/Home/RealStories";
import BecameAPartner from "../../Components/Home/BecameAPartner";
import ContactLeaders from '../../Components/WaveEnergy/NeedHelpMakingDecision'

const WaveEnergyMain = () => {
  return (
    <div>
      <WaveEnergyBanner/>
      <StayUpToDate/>
      <WaveEnergy/>
      <KeyReasons/>
      <FrequentlyAskedQuestions/>
      <ContactLeaders/>
      <TrustedBy />
      <RealStories />
      <BecameAPartner />
    </div>
  )
}

export default WaveEnergyMain
