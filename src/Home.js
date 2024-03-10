import React from "react";
import SlideNavBar from "./components/SlideNavBar";
import Profile from "./components/Profile/Profile";

import Particle from "./components/Particles.jsx";

function Home() {
  return (
    <div>
      <Particle />
      <SlideNavBar />
      <Profile />
    </div>
  );
}

export default Home;
