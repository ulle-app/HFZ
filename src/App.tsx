import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Certification from './pages/Certification';
import Membership from './pages/Membership';
import Trainers from './pages/Trainers';
import Contact from './pages/Contact';
import Transformations from './pages/Transformations';
import Nutrition from './pages/Nutrition';
import Challenges from './pages/Challenges';
import OnlineTraining from './pages/OnlineTraining';

function App() {
  return (
    <Router basename="/HFZ">
      <div className="min-h-screen bg-[#15171C]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/transformations" element={<Transformations />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/online-training" element={<OnlineTraining />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;