import { useState } from 'react';
import './css/FiszkiGra.css';
import { useNavigate } from 'react-router-dom';

const QUESTIONS = [
  { id: 1, text: "Przedstawiony zapis w języku C# oznacza definicję klasy Car, która:", options: ["jest klasą bazową (nie dziedziczy po żadnej klasie)", "jest zaprzyjaźniona z klasą Vehicle", "dziedziczy po Vehicle", "korzysta z pól prywatnych klasy Vehicle"], correct: "C" },
  { id: 2, text: "Mechanizm obietnic (ang. promises) w języku JavaScript ma na celu:", options: ["zastąpić mechanizm dziedziczenia w programowaniu obiektowym", "obsłużyć przechwytywanie błędów aplikacji", "poprawić czytelność kodu synchronicznego", "obsłużyć funkcjonalność związaną z kodem asynchronicznym"], correct: "D" },
  { id: 3, text: "Zapisane w kodzie szesnastkowym składowe RGB koloru #AA41FF po przekształceniu do kodu dziesiętnego wynoszą kolejno:", options: ["160, 64, 255", "160, 65, 255", "170, 64, 255", "170, 65, 255"], correct: "D" },
  { id: 4, text: "Oznaczeniem komentarza jednoliniowego w języku Python jest:", options: ["#", "!", "\"\"", "//"], correct: "A" },
  { id: 5, text: "Aplikacje Web wykonane we frameworku Angular lub bibliotece React i działające na domyślnych ustawieniach portów można uruchomić na lokalnym serwerze, wpisując w przeglądarce:", options: ["localhost:8000 (React) lub localhost:49887 (Angular)", "localhost:8080 (React) lub localhost:8000 (Angular)", "localhost:3000 (React) lub localhost:4200 (Angular)", "localhost:5001 (React) lub localhost:8080 (Angular)"], correct: "C" },
  { id: 6, text: "Co można powiedzieć o metodach klasy Point? (zakładając przeciążenie)", options: ["Są przeładowane (przeciążone)", "Zawierają błąd, gdyż nazwy metod muszą się różnić", "Zawierają przeładowanie (przeciążenie) operatora", "Pełnią funkcję konstruktorów w zależności od liczby parametrów"], correct: "D" },
  { id: 7, text: "Aby zaprojektować zestaw danych do zainicjowania algorytmu sortowania bąbelkowego tablicy, należy zastosować przynajmniej typy:", options: ["jeden tablicowy, dwa liczbowe do kontroli pętli, jeden do zamiany elementów miejscami", "jeden tablicowy, jeden liczbowy do kontroli pętli, dwa do zamiany elementów miejscami", "dwa tablicowe, jeden liczbowy do kontroli pętli", "dwa tablicowe, dwa do zamiany elementów miejscami"], correct: "A" },
  { id: 8, text: "Utworzenie procedury składowej o nazwie dodajUsera w MS SQL rozpoczyna się od poleceń:", options: ["add dodajUsera procedure", "create procedure dodajUsera", "create dodajUsera procedure", "add procedure dodajUsera"], correct: "B" },
  { id: 9, text: "Okna dialogowe niemodalne służą do:", options: ["kontrolowania stanu aplikacji poprzez systemy menu", "blokowania działania aplikacji na czas wprowadzenia i zatwierdzenia danych", "kontrolowania ustawień aplikacji, jako okno pozostające otwarte na ekranie przez cały czas trwania aplikacji", "wyświetlania komunikatów z koniecznością ich potwierdzenia, aby dalej kontynuować działanie aplikacji"], correct: "C" },
  { id: 10, text: "Rekomendacje standardu WCAG 2.0 związane z percepcją dotyczą:", options: ["przedstawienia komponentów interfejsu użytkownika", "zapewnienia wystarczającej ilości czasu na przeczytanie i przetworzenie treści", "zapewnienia interakcji pomiędzy komponentami użytkownika przy użyciu klawiatury", "zrozumienia i rzetelności w dostarczonych treściach na stronie"], correct: "A" },
  { id: 11, text: "Przedstawione oznaczenie praw Creative Commons (wersja standardowa) pozwala na darmowe korzystanie z utworu:", options: ["pod warunkiem pozostawienia go w oryginalnej postaci", "w celu zmiany lub remiksowania", "w celach komercyjnych", "pod warunkiem udostępnienia go na tej samej licencji"], correct: "D" },
  { id: 12, text: "W metodach klasy GoldCustomer są widoczne jedynie pola (wg typowej hermetyzacji):", options: ["GoldPoints, Name, Id, Age", "GoldPoints, Name", "GoldPoints, Name, Id", "GoldPoints"], correct: "D" }
];

function FiszkiGra() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const currentQuestion = QUESTIONS[currentIndex];
  const totalQuestions = QUESTIONS.length;
  const progress = ((currentIndex + (answered ? 1 : 0)) / totalQuestions) * 100;

  const handleAnswer = (optionKey) => {
    if (answered || gameOver) return;
    const isCorrect = (optionKey === currentQuestion.correct);
    setSelectedOption(optionKey);
    setAnswered(true);

    if (isCorrect) {
      const pointsEarned = 10 + streak * 5;
      setScore(prev => prev + pointsEarned);
      setStreak(prev => prev + 1);
      setFeedback('correct');
    } else {
      setLives(prev => prev - 1);
      setStreak(0);
      setFeedback('wrong');
      if (lives - 1 <= 0) {
        setGameOver(true);
      }
    }
  };

  const nextQuestion = () => {
    if (!answered && !gameOver) return;
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex(prev => prev + 1);
      setAnswered(false);
      setSelectedOption(null);
      setFeedback(null);
    } else {
      setGameOver(true);
    }
  };

  const restartGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setLives(3);
    setGameOver(false);
    setAnswered(false);
    setSelectedOption(null);
    setFeedback(null);
  };

  if (gameOver) {
    const won = lives > 0;
    return (
      <div className="quiz-panel">
        <div className="game-end">
          <h2>{won ? "Gratulacje! Ukończyłeś wszystkie pytania!" : "Koniec gry"}</h2>
          <div className="final-score">Twój wynik: {score} pkt</div>
          <div>Najdłuższa seria: {streak}</div>
          <button className="restart-btn" onClick={restartGame}>Zagraj ponownie</button>
          <button className="restart-btn" onClick={() => navigate('/test')} style={{ marginLeft: '10px' }}>Powrót do testów</button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-panel">
      <div className="stats">
        <div className="stat"><span>Punkty</span><span className="stat-value">{score}</span></div>
        <div className="stat"><span>Seria</span><span className="stat-value streak-fire">{streak}</span></div>
        <div className="stat lives">
          <span>Życia</span>
          {[...Array(3)].map((_, i) => (
            <span key={i} className={`heart ${i < lives ? 'active' : 'lost'}`}>❤️</span>
          ))}
        </div>
      </div>

      <div className="progress">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="question-counter">
        Pytanie {currentIndex + 1} / {totalQuestions}
      </div>

      <div className="question-text">{currentQuestion.text}</div>

      <div className="options">
        {['A', 'B', 'C', 'D'].map((key, idx) => {
          let optionClass = "option-btn";
          if (answered) {
            if (key === currentQuestion.correct) optionClass += " correct-feedback";
            else if (key === selectedOption && key !== currentQuestion.correct) optionClass += " wrong-feedback";
          }
          return (
            <button
              key={key}
              className={optionClass}
              onClick={() => handleAnswer(key)}
              disabled={answered}
            >
              <strong>{key}.</strong> {currentQuestion.options[idx]}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="next-info">
          {feedback === 'correct' ? 'Dobra odpowiedź!' : 'Źle!'}
          <button className="restart-btn" onClick={nextQuestion}>Następne pytanie</button>
        </div>
      )}
    </div>
  );
}

export default FiszkiGra;