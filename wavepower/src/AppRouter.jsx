import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import { HomePage } from "./Pages/HomePage";
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
