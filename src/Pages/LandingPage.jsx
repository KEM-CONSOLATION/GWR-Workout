import React from "react";
import HeroSection from "../Components/HeroSection";
import EventDetails from "../Components/EventDetails";
import Achievements from "../Components/Achievements";
import Outline from "../Components/Outline";
import Difference from "../Components/Difference";
import Connect from "../Components/Connect";
import Footer from "../Components/Footer";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <EventDetails />
      <Achievements />
      <Outline />
      <Difference />
      <Connect />
      <Footer />
    </div>
  );
};

export default LandingPage;
