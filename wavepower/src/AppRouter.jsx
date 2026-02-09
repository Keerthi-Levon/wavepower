import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import { HomePage } from "./Pages/HomePage";
import AboutPages from "./Pages/BlogPage/BlogPage";
import WavePowerpage from "./Pages/WavePowerPage/WavePowerpage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Aboutuspage from "./Pages/Aboutus/Aboutuspage";
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
            <Route path="/about-us" element={<AboutPages/>}/>
            <Route path="/wave-power" element={<WavePowerpage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/about" element={<Aboutuspage/>}/>
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
