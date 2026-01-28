import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import CV from './pages/CV';
import { profile } from './data/profile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-dark-900 text-white min-h-screen flex flex-col">
        <Navigation />
        
        {/* Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer socials={profile.socials} />
      </div>
    </Router>
  );
}

export default App;
