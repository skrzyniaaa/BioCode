import { useState } from 'react'
import './App.css'
import logo from './assets/logo.jpg'


function App() {
  return (
    <div className="app">
      {/* Nawigacja */}
      <nav className="navbar">
        <div className="nav-left">
          <img src={logo} alt="BioCode Logo" className="logo" />
          <h2>BioCode</h2>
        </div>

        <div className="nav-center">
          <a href="App.jsx" className="nav-link active">Główna</a>
          <a href="#" className="nav-link">Nauka</a>
          <a href="#" className="nav-link">Test</a>
          <a href="#" className="nav-link">Egzaminy</a>
        </div>

        <div className="nav-right">
          <a href="#" className="nav-link">Konto</a>
          <a href="#" className="nav-link">Kontakt</a>
        </div>
      </nav>

      {/* Środek */}
      <main className="hero">
        <div className="hero-content">
          <h2>Witaj w BioCode</h2>
          <p>Aplikacja stworzona do przygotowania się do egzaminu praktycznego <strong>INF.04</strong></p>
          
         
        </div>
      </main>

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
  )
}

export default App