import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main'
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

 

const App = () => {

  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className='container'>
      {loading ? (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
      ) 
      : 
      (
      <>
        <Header/>
        <Main/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </>
      )
    }
    </div>
  )
}

export default App;

