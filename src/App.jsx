import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Presentation from './components/Presentation';
import PrayerTimes from './components/PrayerTimes';
import PlacesToVisit from './components/PlacesToVisit';
import GalleryCarousel from './components/GalleryCarousel';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App w-screen">
        <main className="w-screen">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Presentation />
                                    <PlacesToVisit />
<GalleryCarousel />
                                    <PrayerTimes />
                  <Contact />
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
