import React, { useEffect } from "react";
import "./styles/style.css";
import Intro from "./pages/Intro";
import Welcome from "./pages/Welcome";
import Footer from "./pages/Footer";
import AboutUs from "./pages/AboutUs";
import Recruitment from "./pages/Recruitment";
import Tab from "./components/Tab";
import BigGame from "./pages/BigGame";
import Header from "./components/Header";
import Counter from "./components/Counter";
import { PageView, initGA } from "./components/Tracking";
import Interview from "./pages/Interview";

function App() {
  useEffect(() => {
    initGA("UA-147064173-1");
    PageView();
  }, []);

  return (
    <div className="app">
      <Header />
      <Intro />
      <Welcome />
      <hr />
      <Counter />
      <Recruitment />
      {/* <BigGame /> */}
      <Interview />
      <Tab />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
