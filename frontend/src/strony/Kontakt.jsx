import './css/Kontakt.css';
function Kontakt() {
  return (
    <div className="kontakt-container">
      <h1 className="kontakt-title">Kontakt</h1>
      <p className="kontakt-subtitle">Zespół BioCode</p>

      <div className="kontakt-content">
        <div className="info-box1">
          <h2>Nasz Zespół</h2>
          <ul>
            <li><strong>Mateusz Skrzyszowski</strong> - Developer</li>
            <li><strong>Mateusz Kocniowski</strong> - Developer</li>
            <li><strong>Adrian Dobosz</strong> - Developer</li>
          </ul>
        </div>

        <div className="info-box2">
          <h2>Repozytorium projektu</h2>
          <p>
            Cały kod źródłowy aplikacji znajdziesz tutaj:
          </p>
          <a 
            href="https://github.com/skrzyniaaa/BioCode.git" 
            target="_blank" 
            
            className="github-link"
          >
            https://github.com/skrzyniaaa/BioCode.git
          </a>
        </div>

        <div className="info-box">
          <h2>Kontakt</h2>
          <p>
            Masz pytania? Chcesz zgłosić błąd?<br />
            Napisz do nas na Discordzie lub przez GitHub Issues.
          </p>
          <p><strong>Email:</strong> biocode.inf04@gmail.com</p>
          <p><strong>Discord:</strong></p>
        </div>
      </div>

      {/* Prosty formularz kontaktowy */}
      <div className="form-box">
        <h2>Wyślij wiadomość</h2>
        <form>
          <input type="text" placeholder="Twoje imię" required />
          <input type="email" placeholder="Twój email" required />
          <textarea placeholder="Twoja wiadomość..." rows="6" required></textarea>
          <button type="submit" className="btn primary">Wyślij wiadomość</button>
        </form>
      </div>
    </div>
  );
}

export default Kontakt;