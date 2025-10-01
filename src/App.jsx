import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Presentation from './components/Presentation';
import PrayerTimes from './components/PrayerTimes';
import PlacesToVisit from './components/PlacesToVisit';

function App() {
  return (
    <div className="App w-screen">
      <Header data-theme="light"/>
      <main className=" w-screen">
        <Hero />
      <Presentation />
      <PrayerTimes />
      <PlacesToVisit />
      </main>
      <Footer />
    </div>
  );
}

export default App;
