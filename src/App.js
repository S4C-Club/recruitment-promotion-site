import React from 'react';
import './styles/style.css';
import Intro from './pages/Intro';
import Welcome from './pages/Welcome';
import Footer from './pages/Footer';
import AboutUs from './pages/AboutUs';
import Recruitment from './pages/Recruitment';
import Tab from './components/Tab';
<<<<<<< HEAD
import Counter from './components/Counter';
=======
import BigGame from './pages/BigGame';
import Header from './components/Header';
>>>>>>> origin/biggame-feature
function App() {
  return (
    <div className="app">
      {/* <header className="App-header">
        <h1 className="title">S4C Club</h1>
      </header>
      <Intro />
      <AboutUs/> */}
      <Header/>
      <Intro />
      <Welcome />
      <hr/>
      <Counter />
      <Recruitment />
      <BigGame/>
      <Tab/>
      <AboutUs/>
      
      <Footer />
       
    </div>
  );
}

export default App;
