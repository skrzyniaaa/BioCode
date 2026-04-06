import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Glowna from './strony/Glowna';
import Nauka from './strony/Nauka';
import Test from './strony/Test';
import Egzaminy from './strony/Egzaminy';
import Konto from './strony/Konto';
import Kontakt from './strony/Kontakt';
import Gra from './strony/Gra';
import FiszkiNormalne from './strony/FiszkiNormalne';
import FiszkiGra from './strony/FiszkiGra';

import Egzamin1 from './rozwiazania/Egzamin1';
import Egzamin2 from './rozwiazania/Egzamin2';
import Egzamin3 from './rozwiazania/Egzamin3';
import Egzamin4 from './rozwiazania/Egzamin4';
import Egzamin5 from './rozwiazania/Egzamin5';
import Egzamin6 from './rozwiazania/Egzamin6';
import Egzamin7 from './rozwiazania/Egzamin7';
import Egzamin8 from './rozwiazania/Egzamin8';
import Egzamin9 from './rozwiazania/Egzamin9';

import './App.css';

// Komponent obsługujący kliknięcia w logo
function Logo() {
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount === 5) {
      setClickCount(0);
      navigate('/gra');
    }
  };

  return (
    <img
      src="/src/assets/logo.jpg"
      alt="BioCode"
      className="logo"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    />
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-left">
            <Logo />
            <h1>BioCode</h1>
          </div>
          <div className="nav-center">
            <NavLink to="/" className="nav-link">Główna</NavLink>
            <NavLink to="/nauka" className="nav-link">Nauka</NavLink>
            <NavLink to="/test" className="nav-link">Test</NavLink>
            <NavLink to="/egzaminy" className="nav-link">Egzaminy</NavLink>
          </div>
          <div className="nav-right">
            <NavLink to="/konto" className="nav-link">Konto</NavLink>
            <NavLink to="/kontakt" className="nav-link">Kontakt</NavLink>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Glowna />} />
          <Route path="/nauka" element={<Nauka />} />
          <Route path="/test" element={<Test />} />
          <Route path="/egzaminy" element={<Egzaminy />} />
          <Route path="/konto" element={<Konto />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/gra" element={<Gra />} />
          <Route path="/rozwiazanie/1" element={<Egzamin1 />} />
          <Route path="/rozwiazanie/2" element={<Egzamin2 />} />
          <Route path="/rozwiazanie/3" element={<Egzamin3 />} />
          <Route path="/rozwiazanie/4" element={<Egzamin4 />} />
          <Route path="/rozwiazanie/5" element={<Egzamin5 />} />
          <Route path="/rozwiazanie/6" element={<Egzamin6 />} />
          <Route path="/rozwiazanie/7" element={<Egzamin7 />} />
          <Route path="/rozwiazanie/8" element={<Egzamin8 />} />
          <Route path="/rozwiazanie/9" element={<Egzamin9 />} />
          <Route path="/test/fiszki" element={<FiszkiNormalne />} />
          <Route path="/test/gra" element={<FiszkiGra />} />
        </Routes>

        <footer className="footer">
          <div className="creators">
            <h3>Twórcy</h3>
            <div className="creators-list">
              <div className="creator">
                <div className="circle">A</div>
                <span>Adrian Dobosz</span>
              </div>
              <div className="creator">
                <div className="circle">M</div>
                <span>Mateusz Kocniowski</span>
              </div>
              <div className="creator">
                <div className="circle">M</div>
                <span>Mateusz Skrzyszowski</span>
              </div>
            </div>
            <div className="copyright">
              &copy; 2025 BioCode - Wszystkie prawa zastrzeżone
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;