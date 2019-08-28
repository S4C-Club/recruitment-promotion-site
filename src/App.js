import React from 'react';
import './styles/style.css';
import Intro from './pages/Intro';
import Welcome from './pages/Welcome';
import Footer from './pages/Footer';
import AboutUs from './pages/AboutUs';
function App() {
  return (
    <div className="app">
      {/* <header className="App-header">
        <h1 className="title">S4C Club</h1>
      </header>
      <Intro />
      <AboutUs/> */}
      <Intro />
      <Welcome />
      <AboutUs/>
      <Footer />
       
    </div>
  );
}

export default App;
