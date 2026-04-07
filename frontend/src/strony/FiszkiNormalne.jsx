import { useState } from 'react';
import './css/FiszkiNormalne.css';

const QUESTIONS = [
  { id: 1, text: "Przedstawiony zapis w języku C# oznacza definicję klasy Car, która:", options: ["jest klasą bazową (nie dziedziczy po żadnej klasie)", "jest zaprzyjaźniona z klasą Vehicle", "dziedziczy po Vehicle", "korzysta z pól prywatnych klasy Vehicle"], correct: "C", answer: "C. dziedziczy po Vehicle" },
  { id: 2, text: "Mechanizm obietnic (ang. promises) w języku JavaScript ma na celu:", options: ["zastąpić mechanizm dziedziczenia w programowaniu obiektowym", "obsłużyć przechwytywanie błędów aplikacji", "poprawić czytelność kodu synchronicznego", "obsłużyć funkcjonalność związaną z kodem asynchronicznym"], correct: "D", answer: "D. obsłużyć funkcjonalność związaną z kodem asynchronicznym" },
  { id: 3, text: "Zapisane w kodzie szesnastkowym składowe RGB koloru #AA41FF po przekształceniu do kodu dziesiętnego wynoszą kolejno:", options: ["160, 64, 255", "160, 65, 255", "170, 64, 255", "170, 65, 255"], correct: "D", answer: "D. 170, 65, 255" },
  { id: 4, text: "Oznaczeniem komentarza jednoliniowego w języku Python jest:", options: ["#", "!", "\"\"", "//"], correct: "A", answer: "A. #" },
  { id: 5, text: "Aplikacje Web wykonane we frameworku Angular lub bibliotece React i działające na domyślnych ustawieniach portów można uruchomić na lokalnym serwerze, wpisując w przeglądarce:", options: ["localhost:8000 (React) lub localhost:49887 (Angular)", "localhost:8080 (React) lub localhost:8000 (Angular)", "localhost:3000 (React) lub localhost:4200 (Angular)", "localhost:5001 (React) lub localhost:8080 (Angular)"], correct: "C", answer: "C. localhost:3000 (React) lub localhost:4200 (Angular)" },
  { id: 6, text: "Co można powiedzieć o metodach klasy Point? (zakładając przeciążenie)", options: ["Są przeładowane (przeciążone)", "Zawierają błąd, gdyż nazwy metod muszą się różnić", "Zawierają przeładowanie (przeciążenie) operatora", "Pełnią funkcję konstruktorów w zależności od liczby parametrów"], correct: "D", answer: "D. Pełnią funkcję konstruktorów w zależności od liczby parametrów" },
  { id: 7, text: "Aby zaprojektować zestaw danych do zainicjowania algorytmu sortowania bąbelkowego tablicy, należy zastosować przynajmniej typy:", options: ["jeden tablicowy, dwa liczbowe do kontroli pętli, jeden do zamiany elementów miejscami", "jeden tablicowy, jeden liczbowy do kontroli pętli, dwa do zamiany elementów miejscami", "dwa tablicowe, jeden liczbowy do kontroli pętli", "dwa tablicowe, dwa do zamiany elementów miejscami"], correct: "A", answer: "A. jeden tablicowy, dwa liczbowe do kontroli pętli, jeden do zamiany elementów miejscami" },
  { id: 8, text: "Utworzenie procedury składowej o nazwie dodajUsera w MS SQL rozpoczyna się od poleceń:", options: ["add dodajUsera procedure", "create procedure dodajUsera", "create dodajUsera procedure", "add procedure dodajUsera"], correct: "B", answer: "B. create procedure dodajUsera" },
  { id: 9, text: "Okna dialogowe niemodalne służą do:", options: ["kontrolowania stanu aplikacji poprzez systemy menu", "blokowania działania aplikacji na czas wprowadzenia i zatwierdzenia danych", "kontrolowania ustawień aplikacji, jako okno pozostające otwarte na ekranie przez cały czas trwania aplikacji", "wyświetlania komunikatów z koniecznością ich potwierdzenia, aby dalej kontynuować działanie aplikacji"], correct: "C", answer: "C. kontrolowania ustawień aplikacji, jako okno pozostające otwarte na ekranie przez cały czas trwania aplikacji" },
  { id: 10, text: "Rekomendacje standardu WCAG 2.0 związane z percepcją dotyczą:", options: ["przedstawienia komponentów interfejsu użytkownika", "zapewnienia wystarczającej ilości czasu na przeczytanie i przetworzenie treści", "zapewnienia interakcji pomiędzy komponentami użytkownika przy użyciu klawiatury", "zrozumienia i rzetelności w dostarczonych treściach na stronie"], correct: "A", answer: "A. przedstawienia komponentów interfejsu użytkownika" },
  { id: 11, text: "Przedstawione oznaczenie praw Creative Commons (wersja standardowa) pozwala na darmowe korzystanie z utworu:", options: ["pod warunkiem pozostawienia go w oryginalnej postaci", "w celu zmiany lub remiksowania", "w celach komercyjnych", "pod warunkiem udostępnienia go na tej samej licencji"], correct: "D", answer: "D. pod warunkiem udostępnienia go na tej samej licencji" },
  { id: 12, text: "W metodach klasy GoldCustomer są widoczne jedynie pola (wg typowej hermetyzacji):", options: ["GoldPoints, Name, Id, Age", "GoldPoints, Name", "GoldPoints, Name, Id", "GoldPoints"], correct: "D", answer: "D. GoldPoints" }
];

function FiszkiNormalne() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const total = QUESTIONS.length;

  const nextCard = () => {
    if (currentIndex + 1 < total) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowAnswer(false);
    }
  };

  const toggleAnswer = () => setShowAnswer(!showAnswer);

  return (
    <div className="page-container flashcards-section">
      <div className="page-content">
        <h2 className="page-title">Fiszki</h2>
        <p className="page-subtitle">Kliknij w kartę, aby zobaczyć odpowiedź.</p>

        <div className="flashcard-container">
          <div className={`flashcard ${showAnswer ? 'flipped' : ''}`} onClick={toggleAnswer}>
            <div className="flashcard-front">
              <div className="flashcard-counter">
                {currentIndex + 1} / {total}
              </div>
              <div className="flashcard-question">
                {QUESTIONS[currentIndex].text}
              </div>
              <div className="flashcard-hint">Kliknij, aby zobaczyć odpowiedź</div>
            </div>
            <div className="flashcard-back">
              <div className="flashcard-counter">
                Odpowiedź
              </div>
              <div className="flashcard-answer">
                {QUESTIONS[currentIndex].answer}
              </div>
              <div className="flashcard-hint">Kliknij, aby wrócić do pytania</div>
            </div>
          </div>
        </div>

        <div className="flashcard-nav">
          <button className="btn secondary" onClick={prevCard} disabled={currentIndex === 0}>
            ← Poprzednia
          </button>
          <button className="btn secondary" onClick={nextCard} disabled={currentIndex === total - 1}>
            Następna →
          </button>
        </div>

        <button className="btn secondary back-button" onClick={() => window.history.back()}>
          Powrót
        </button>
      </div>
    </div>
  );
}

export default FiszkiNormalne;