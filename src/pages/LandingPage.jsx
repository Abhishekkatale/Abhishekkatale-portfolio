// App.js
import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Project from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <div className="font-sans bg-[#D8DBD5]">
      <Header />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;