import SlideNavBar from "./components/SlideNavBar";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Particle from "./Practiles";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SlideNavBar />
        <Profile />
      </BrowserRouter>
    </div>
  );
}

export default App;
