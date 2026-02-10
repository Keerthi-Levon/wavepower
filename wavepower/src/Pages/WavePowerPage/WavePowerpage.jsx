import React from "react";
import "./WavePower.css";
import WaveBanner from "../../Components/WavePage/WaveBanner";
import { WhatisWave } from "../../Components/WavePage/WhatisWave";
import HowOurWavepower from "../../Components/WavePage/HowOurWavepower";
import TrustedBy from "../../Components/Home/TrustedBy";
import RealStories from "../../Components/Home/RealStories";
import BecameAPartner from "../../Components/Home/BecameAPartner";
import ContactLeaders from '../../Components/Contact/ContactHelp'
import InsideOurWavePower from "../../Components/WavePage/InsideOurWavePower";
import CoreSystemComponenets from "../../Components/WavePage/CoreSystemComponenets";
import WhereWavepowerCanBeUsed from "../../Components/WavePage/WhereWavepowerCanBeUsed";

const WavePowerpage = () => {
  return (
    <div>
      <WaveBanner />
      <WhatisWave />
      <HowOurWavepower />
      <InsideOurWavePower/>
      <WhereWavepowerCanBeUsed/>
      <CoreSystemComponenets/>
      <ContactLeaders/>
      <TrustedBy />
      <RealStories />
      <BecameAPartner />
    </div>
  );
};

export default WavePowerpage;
