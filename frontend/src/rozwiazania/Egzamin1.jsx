// komponenty/rozwiazania/Egzamin1.jsx
import './rozwiazania.css'; // jeśli masz wspólny CSS

function Egzamin1() {
  return (
    <div className="page-container exams-section">
      <div className="page-content">
        <h2>Rozwiązanie – Egzamin INF.04 2026 styczeń</h2>
        <p className="subtitle">Pełna implementacja aplikacji konsolowej i webowej.</p>
        <div className="solution-container">
          <h3 className="solution-heading">Część I – Aplikacja konsolowa (Python)</h3>
          <p>Treść rozwiązania...</p>
          <div className="code-block">
            <pre>{`# Twój kod`}</pre>
          </div>
        </div>
        <button className="btn secondary" onClick={() => window.history.back()}>Powrót</button>
      </div>
    </div>
  );
}

export default Egzamin1;   // <--- BEZ TEGO BĘDZIE BŁĄD