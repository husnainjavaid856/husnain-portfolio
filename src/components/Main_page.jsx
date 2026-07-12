import React from 'react'
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import About from './About/About';
import Skills from './Skills/Skills';
import  Contact  from './Contact/contact';
import Footer from './Footer/footer';



const Main_page = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
};



export default Main_page