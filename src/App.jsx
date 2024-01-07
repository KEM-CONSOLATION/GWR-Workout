import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import ScrollToTop from "./Components/ScrollToTop";
import AboutPage from "./Pages/AboutPage";
import EventPage from "./Pages/EventPage";
import FAQPage from "./Pages/FAQPage";

export default function App() {
  return (
    <div className=" font-Oswald">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/event" exact element={<EventPage />} />
          <Route path="/faq" exact element={<FAQPage />} />
        </Routes>
      </Router>
    </div>
  );
}
