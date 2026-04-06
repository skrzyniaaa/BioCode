import { Link } from 'react-router-dom';
import './css/Test.css';

function Test() {
  return (
    <div className="page-container test-section">
      <div className="page-content">
        <h2 className="page-title">Testy i fiszki</h2>
        <p className="page-subtitle">Wybierz tryb nauki</p>
        <div className="test-cards">
          <Link to="/test/fiszki" className="test-card">
            <div className="test-card-icon">📄</div>
            <h3>Fiszki normalne</h3>
            <p>Przeglądaj wszystkie pytania i odpowiedzi – ucz się w swoim tempie.</p>
          </Link>
          <Link to="/test/gra" className="test-card">
            <div className="test-card-icon">⚡</div>
            <h3>Gra w fiszki</h3>
            <p>Sprawdź swoją wiedzę w dynamicznym quizie – zdobywaj punkty i serie!</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Test;