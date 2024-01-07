import React from "react";
import EventHero from "../Components/EventHero";
import EventContent from "../Components/EventContent";
import Footer from "../Components/Footer";

const EventPage = () => {
  return (
    <div>
      <EventHero />
      <EventContent />
      {/* <Connect /> */}
      <Footer />
    </div>
  );
};

export default EventPage;
