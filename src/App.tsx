import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Home</h1>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/about">About</Link> |{' '}
        <Link to="/services">Services</Link>
      </nav>
      <p>Welcome to the new homepage!</p>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: 40 }}>
      <h1>About</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

function Services() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Services</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;