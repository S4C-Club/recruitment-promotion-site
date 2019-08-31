import React from 'react';
import './styles/style.css';
import Intro from './pages/Intro';
import Welcome from './pages/Welcome';
import Footer from './pages/Footer';
import AboutUs from './pages/AboutUs';
import Recruitment from './pages/Recruitment';
import Tab from './components/Tab';
import Counter from './components/Counter';
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
      <hr/>
      <Counter />
      <Recruitment />
      <Tab/>
      <AboutUs/>
      
      <Footer />
       
    </div>
  );
}

export default App;
