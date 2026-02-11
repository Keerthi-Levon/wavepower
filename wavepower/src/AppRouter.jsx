import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import { HomePage } from "./Pages/HomePage";
import WavePowerpage from "./Pages/WavePowerPage/WavePowerpage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Aboutuspage from "./Pages/Aboutus/Aboutuspage";
import BlogPage from "./Pages/BlogPage/BlogPage";
import WaveEnergyMain from "./Pages/wave energy/WaveEnergyMain";
import UpcomingMain from "./Pages/upcomig projects/UpcomingMain";
// import ScrollToTop from "./Components/ScrollToTop"; // if exists

const Loader = () => {
  return <div className="loader"></div>;
};

const MainContent = () => {
  const [loading] = useState(false);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage/>}/>
            <Route path="/wave-power" element={<WavePowerpage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/about" element={<Aboutuspage/>}/>
            <Route path=" " element={<WaveEnergyMain/>}/>
            <Route path="/wave-energy" element={<UpcomingMain/>}/>
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}

      <MainContent />
    </BrowserRouter>
  );
};

export default AppRouter;
