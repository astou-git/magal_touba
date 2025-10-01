import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Presentation from './components/Presentation';
import PrayerTimes from './components/PrayerTimes';
import PlacesToVisit from './components/PlacesToVisit';
import GalleryCarousel from './components/GalleryCarousel';
import Inscription from './components/Inscription';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App w-screen">
        <Header data-theme="light"/>
        <main className="w-screen">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Presentation />
                  <PrayerTimes />
                  <GalleryCarousel />
                  <PlacesToVisit />
                  <Contact />
                </>
              }
            />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
