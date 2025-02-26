import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/home/home";
import AboutHome from "./components/about/home/home";
import Navbar from "./components/home/navbar/navbar";
import Footer from "./components/home/footer/footer";
import Tecnalogy from "./components/home/tecnalogy/tecnalogy";
import Text from "./components/home/text/text";
import Directions from "./components/home/directions/directions";
import Meet from "./components/home/meet/meet";
import Innovation from "./components/home/innovation/innovation";
import AboutText from "./components/about/text/text"
import AboutServices from "./components/about/services/services"
import AboutCard from "./components/about/card/card"
import AboutTeam from "./components/about/team/team"
const App = () => {
  const [showOnlyAbout, setShowOnlyAbout] = useState(false);

  return (
    <Router>
      <Navbar setShowOnlyAbout={setShowOnlyAbout} />
      <Routes>
      <Route
  path="/"
  element={
    showOnlyAbout ? (
      <>
        <AboutHome />
        <AboutText />
        <AboutServices />
        <AboutCard />
        <AboutTeam />
      </>
    ) : (
      <>
        <Home />
        <Tecnalogy />
        <Text />
        <Directions />
        <Meet />
        <Innovation />
        <Footer />
      </>
    )
  }
/>
      </Routes>
    </Router>
  );
};

export default App;
