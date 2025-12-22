import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Features from './components/Features';
import Footer from './components/Footer';

import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Courses />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
