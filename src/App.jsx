import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import ScrollToTop from "./Components/ScrollToTop";
import AboutPage from "./Pages/AboutPage";

export default function App() {
  return (
    <div className=" font-Oswald">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/about" exact element={<AboutPage />} />
          {/* <Route path="/blog" exact element={<BlogPage />} />
          <Route path="/service" exact element={<ServicePage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
