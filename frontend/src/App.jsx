import { useState } from 'react'
import './App.css'
import logo from './assets/logo.jpg'

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <img src={logo} alt="BioCode Logo" className="logo" />
          <h1>BioCode</h1>
        </div>

        <div className="nav-center">
          <a href="#" className="nav-link active">Główna</a>
          <a href="#" className="nav-link">Fiszki</a>
          <a href="#" className="nav-link">Quiz</a>
        </div>

        <div className="nav-right">
          <a href="#" className="nav-link">Konto</a>
          <a href="#" className="nav-link">Kontakt</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-content">
          <h2>Witaj w BioCode</h2>
          <p>Aplikacja stworzona do przygotowania się do egzaminu praktycznego <strong>INF.04</strong></p>
          
         
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="creators">
          <h3>Twórcy BioCode</h3>
          <p>Stworzone z pasją do nauki</p>
          
          <div className="creators-list">
            <div className="creator">
              <div className="circle">S</div>
              <p>Skrzniaaa<br /><span>Developer</span></p>
            </div>
            <div className="creator">
              <div className="circle">K</div>
              <p>Kocu<br /><span>Developer</span></p>
            </div>
            <div className="creator">
              <div className="circle">D</div>
              <p>Dobi<br /><span>Developer</span></p>
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