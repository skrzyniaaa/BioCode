import './css/Egzaminy.css';
import { Link } from 'react-router-dom';

function Egzaminy() {
  const egzaminy = [
    {
      id: 1,
      tytul: "Egzamin zawodowy INF.04 2026 styczeń",
      doPobraniaPlik: new URL('../assets/egzamin1.pdf', import.meta.url).href
    },
    {
      id: 2,
      tytul: "Egzamin zawodowy INF.04 2025 czerwiec",
      doPobraniaPlik: new URL('../assets/egzamin2.pdf', import.meta.url).href
    },
    {
      id: 3,
      tytul: "Egzamin zawodowy INF.04 2025 styczeń",
      doPobraniaPlik: new URL('../assets/egzamin3.pdf', import.meta.url).href
    },
    {
      id: 4,
      tytul: "Egzamin zawodowy INF.04 2024 czerwiec",
      doPobraniaPlik: new URL('../assets/egzamin4.pdf', import.meta.url).href
    },
    {
      id: 5,
      tytul: "Egzamin zawodowy INF.04 2024 styczeń",
      doPobraniaPlik: new URL('../assets/egzamin5.pdf', import.meta.url).href
    },
    {
      id: 6,
      tytul: "Egzamin zawodowy INF.04 2023 czerwiec",
      doPobraniaPlik: new URL('../assets/egzamin6.pdf', import.meta.url).href
    },
    {
      id: 7,
      tytul: "Egzamin zawodowy INF.04 2023 styczeń",
      doPobraniaPlik: new URL('../assets/egzamin7.pdf', import.meta.url).href
    },
    {
      id: 8,
      tytul: "Egzamin zawodowy INF.04 2022 czerwiec",
      doPobraniaPlik: new URL('../assets/egzamin8.pdf', import.meta.url).href
    },
    {
      id: 9,
      tytul: "Egzamin zawodowy INF.04 2022 styczeń",
      doPobraniaPlik: new URL('../assets/egzamin9.pdf', import.meta.url).href
    }
  ];

  const handlePobierz = (url, nazwa) => {
    if (url) {
      const link = document.createElement('a');
      link.href = url;
      link.download = nazwa || url.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("Plik nie jest jeszcze dostępny.");
    }
  };

  return (
    <div className="page-container exams-section">
      <div className="page-content">
        <h2>Egzaminy praktyczne INF.04</h2>
        <p className="subtitle">
          Wybierz arkusz egzaminacyjny, pobierz treść zadania lub sprawdź przykładowe rozwiązanie.
        </p>

        <div className="exams-grid">
          {egzaminy.map((egz) => (
            <div className="exam-card" key={egz.id}>
              <div className="exam-header">
                <span className="exam-badge">Egzamin {egz.id}</span>
                <h3>{egz.tytul}</h3>
              </div>
              <div className="exam-actions">
                <Link to={`/rozwiazanie/${egz.id}`} className="btn secondary small">
                  Rozwiązanie
                </Link>
                <button
                  className="btn primary small"
                  onClick={() => handlePobierz(egz.doPobraniaPlik, `arkusz_egz${egz.id}.pdf`)}
                >
                  Plik do pobrania
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Egzaminy;