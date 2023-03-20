import { Link, Routes, Route, BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About.js';
import FAQ from './FAQ.js';
import Highlight from './Hightlight';
import Pricing from './Pricing.js';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/highlight" element={<Highlight />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
