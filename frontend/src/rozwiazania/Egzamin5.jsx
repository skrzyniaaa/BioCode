import './rozwiazania.css';

function Egzamin5() {
  return (
    <div className="page-container exams-section">
      <div className="page-content">
        <h2 className="page-title">Rozwiązanie – Egzamin INF.04 2024 styczeń</h2>
        <p className="page-subtitle">
          Walidacja numeru PESEL – sprawdzanie płci i sumy kontrolnej w Pythonie
        </p>

        <div className="solution-container">
          <section className="solution-section">
            <h3 className="section-heading">Opis zadania</h3>
            <p>
              Należy zaimplementować program w Pythonie, który:
            </p>
            <ul className="requirements-list">
              <li>Przechowuje numer PESEL jako zmienną tekstową (lub tablicę znaków).</li>
              <li>Posiada funkcję zwracającą płeć ('K' lub 'M') na podstawie 10. cyfry PESEL (parzysta – kobieta, nieparzysta – mężczyzna).</li>
              <li>Posiada funkcję sprawdzającą sumę kontrolną PESEL (ważna waga: 1,3,7,9,1,3,7,9,1,3).</li>
              <li>Program główny wczytuje PESEL z klawiatury, wyświetla płeć i informację o poprawności sumy kontrolnej.</li>
              <li>Komunikacja z użytkownikiem jest zrozumiała, nazewnictwo znaczące, kod czytelny.</li>
            </ul>
          </section>

          <section className="solution-section">
            <h3 className="section-heading">Wyjaśnienie krok po kroku</h3>
            <p>
              Poniższy kod realizuje wszystkie wymagania. Zastosowano funkcje bez zmiennych globalnych,
              a numer PESEL jest przekazywany jako argument (string).
            </p>
            <div className="code-block">
              <pre>{`def plec(pesel):
    """
    Określa płeć na podstawie 10. cyfry PESEL (indeks 9).
    Zwraca 'K' dla kobiety (cyfra parzysta) lub 'M' dla mężczyzny (cyfra nieparzysta).
    """
    cyfra = int(pesel[9])
    if cyfra % 2 == 0:
        return 'K'
    else:
        return 'M'

def suma_kontrolna(pesel):
    """
    Sprawdza sumę kontrolną PESEL.
    Wagi: 1,3,7,9,1,3,7,9,1,3 (dla pierwszych 10 cyfr).
    Oblicza sumę iloczynów, następnie uzupełnienie do pełnej dziesiątki.
    Zwraca True jeśli suma kontrolna się zgadza, False w przeciwnym razie.
    """
    wagi = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3]
    suma = 0
    for i in range(10):
        suma += int(pesel[i]) * wagi[i]
    reszta = suma % 10
    cyfra_kontrolna = 0 if reszta == 0 else 10 - reszta
    return cyfra_kontrolna == int(pesel[10])

def main():
    pesel = input("Podaj numer PESEL (11 cyfr): ").strip()
    
    # Podstawowa walidacja długości
    if len(pesel) != 11 or not pesel.isdigit():
        print("Błędny format. PESEL musi składać się z 11 cyfr.")
        return
    
    # Płeć
    if plec(pesel) == 'K':
        print("Płeć: Kobieta")
    else:
        print("Płeć: Mężczyzna")
    
    # Suma kontrolna
    if suma_kontrolna(pesel):
        print("Suma kontrolna: zgodna")
    else:
        print("Suma kontrolna: niezgodna")

if __name__ == "__main__":
    main()
`}</pre>
            </div>
          </section>
          
          <section className="solution-section">
            <h3 className="section-heading">Kluczowe elementy</h3>
            <div className="explanation-grid">
              <div className="explanation-card">
                <h4>Funkcja <code>plec</code></h4>
                <p>Pobiera 10. cyfrę (indeks 9) – jeśli parzysta → kobieta, nieparzysta → mężczyzna. Zwraca 'K' lub 'M'.</p>
              </div>
              <div className="explanation-card">
                <h4>Funkcja <code>suma_kontrolna</code></h4>
                <p>Oblicza sumę iloczynów pierwszych 10 cyfr i wag (1,3,7,9,1,3,7,9,1,3). Cyfra kontrolna = (10 - (suma % 10)) % 10. Porównuje z 11. cyfrą.</p>
              </div>
              <div className="explanation-card">
                <h4>Walidacja wejścia</h4>
                <p>Sprawdza, czy PESEL ma 11 cyfr i czy są to cyfry. W przypadku błędu wyświetla komunikat.</p>
              </div>
              <div className="explanation-card">
                <h4>Przechowywanie PESEL</h4>
                <p>Numer przechowywany jako string (zmienna tekstowa) – zgodne z założeniami.</p>
              </div>
              <div className="explanation-card">
                <h4>Brak zmiennych globalnych</h4>
                <p>Wszystkie dane przekazywane przez argumenty funkcji. Program główny testuje działanie.</p>
              </div>
              <div className="explanation-card">
                <h4>Czytelność kodu</h4>
                <p>Nazwy funkcji i zmiennych są znaczące (polskie), kod sformatowany zgodnie z PEP 8.</p>
              </div>
            </div>
          </section>
        </div>

        <button className="btn secondary back-button" onClick={() => window.history.back()}>
          Powrót
        </button>
      </div>
    </div>
  );
}

export default Egzamin5;