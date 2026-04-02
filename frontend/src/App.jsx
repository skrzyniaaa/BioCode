import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Glowna from './strony/Glowna';
import Nauka from './strony/Nauka';
import Test from './strony/Test';
import Egzaminy from './strony/Egzaminy';
import Konto from './strony/Konto';
import Kontakt from './strony/Kontakt';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Nawigacja */}
        <nav className="navbar">
          <div className="nav-left">
            <img src="src/assets/logo.jpg" alt="BioCode" className="logo" />
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

        {/* Routing podstron */}
        <Routes>
          <Route path="/" element={<Glowna />} />
          <Route path="/nauka" element={<Nauka />} />
          <Route path="/test" element={<Test />} />
          <Route path="/egzaminy" element={<Egzaminy />} />
          <Route path="/konto" element={<Konto />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>

        {/* Stopka */}
      <footer className="footer">
        <div className="creators">
          <h3>Twórcy BioCode</h3>
          <p>Stworzone z pasją do nauki</p>
          
          <div className="creators-list">
            <div className="creator">
              <div className="circle">MS</div>
              <p>Mateusz Skrzyszowski<br /><span>Developer</span></p>
            </div>
            <div className="creator">
              <div className="circle">MK</div>
              <p>Mateusz Kocniowski<br /><span>Developer</span></p>
            </div>
            <div className="creator">
              <div className="circle">AD</div>
              <p>Adrian Dobosz<br /><span>Developer</span></p>
            </div>
          </div>
        </div>

        <div className="copyright">
          © 2026 BioCode. Wszystkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
    </Router>
  );
}

export default App;