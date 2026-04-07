import './rozwiazania.css';

function Egzamin4() {
  return (
    <div className="page-container exams-section">
      <div className="page-content">
        <h2 className="page-title">Rozwiązanie – Egzamin INF.04 2024 czerwiec</h2>
        <p className="page-subtitle">
          Gra w kości – losowanie kostek i liczenie punktów (suma oczek z powtórzeń)
        </p>

        <div className="solution-container">
          <section className="solution-section">
            <h3 className="section-heading">Opis zadania</h3>
            <p>
              Należy zaimplementować program w Pythonie, który:
            </p>
            <ul className="requirements-list">
              <li>Pobiera liczbę kostek (3–10) – powtarza aż podana wartość będzie poprawna.</li>
              <li>Losuje tyle liczb (1–6) – symulacja rzutu kośćmi.</li>
              <li>Wyświetla wynik każdej kostki w formacie "Kostka X: Y".</li>
              <li>Liczy punkty: suma oczek tych liczb, które wystąpiły co najmniej dwa razy.</li>
              <li>Wyświetla zdobyte punkty.</li>
              <li>Pyta o kontynuację (t – kolejna runda, n – zakończenie).</li>
              <li>Zawiera funkcję losującą (bez zmiennych globalnych) oraz funkcję liczącą punkty (zwracającą sumę).</li>
            </ul>
          </section>

          <section className="solution-section">
            <h3 className="section-heading">Wyjaśnienie krok po kroku</h3>
            <p>
              Poniższy kod realizuje wszystkie wymagania. Zastosowano podejście strukturalne z funkcjami – brak zmiennych globalnych,
              wszystkie dane przekazywane przez argumenty i zwracane.
            </p>
            <div className="code-block">
              <pre>{`import random

def rzuc_kostkami(liczba_kostek):
    """
    Losuje wyniki dla podanej liczby kostek (każda od 1 do 6).
    Argument: liczba_kostek (int)
    Zwraca: listę wylosowanych wartości.
    """
    wyniki = [random.randint(1, 6) for _ in range(liczba_kostek)]
    return wyniki

def oblicz_punkty(wyniki):
    """
    Oblicza punkty: suma oczek tych wartości, które wystąpiły co najmniej dwa razy.
    Argument: lista wyników rzutów.
    Zwraca: sumę punktów (int).
    """
    punkty = 0
    for wartosc in set(wyniki):
        ile = wyniki.count(wartosc)
        if ile >= 2:
            punkty += wartosc * ile
    return punkty

def wyswietl_wyniki(wyniki):
    """Wyświetla wynik każdej kostki."""
    print("\\nWyniki rzutów:")
    for i, oczka in enumerate(wyniki, 1):
        print(f"Kostka {i}: {oczka}")

def main():
    print("=== GRA W KOŚCI ===\\n")
    
    while True:
        # 1. Pobranie liczby kostek (3-10)
        while True:
            try:
                n = int(input("Podaj liczbę kostek (3-10): "))
                if 3 <= n <= 10:
                    break
                else:
                    print("Liczba musi być z przedziału 3-10. Spróbuj ponownie.")
            except ValueError:
                print("Błędna wartość. Podaj liczbę całkowitą.")
        
        # 2. Losowanie
        wyniki = rzuc_kostkami(n)
        
        # 3. Wyświetlenie wyników
        wyswietl_wyniki(wyniki)
        
        # 4. Obliczenie i wyświetlenie punktów
        punkty = oblicz_punkty(wyniki)
        print(f"\\nZdobyte punkty: {punkty}")
        
        # 5. Kontynuacja?
        while True:
            odp = input("\\nCzy chcesz zagrać ponownie? (t - tak, n - nie): ").lower()
            if odp in ('t', 'n'):
                break
            print("Odpowiedź musi być 't' lub 'n'.")
        
        if odp == 'n':
            print("\\nDziękuję za grę!")
            break
        print("\\n" + "-"*30 + "\\n")

if __name__ == "__main__":
    main()
`}</pre>
            </div>
          </section>

          <section className="solution-section">
            <h3 className="section-heading">Kluczowe elementy</h3>
            <div className="explanation-grid">
              <div className="explanation-card">
                <h4>Pobieranie liczby kostek</h4>
                <p>Pętla <code>while True</code> z walidacją zakresu 3–10. Obsługa błędu <code>ValueError</code>.</p>
              </div>
              <div className="explanation-card">
                <h4>Funkcja <code>rzuc_kostkami</code></h4>
                <p>Generuje listę wyników – wykorzystuje wyrażenie listowe i <code>random.randint</code>. Bez zmiennych globalnych.</p>
              </div>
              <div className="explanation-card">
                <h4>Funkcja <code>oblicz_punkty</code></h4>
                <p>Iteruje po zbiorze unikalnych wartości (<code>set(wyniki)</code>). Dla każdej wartości sprawdza liczbę wystąpień – jeśli ≥2, dodaje wartość * liczba wystąpień.</p>
              </div>
              <div className="explanation-card">
                <h4>Wyświetlanie wyników</h4>
                <p>Funkcja <code>wyswietl_wyniki</code> – format "Kostka X: Y" z numeracją od 1.</p>
              </div>
              <div className="explanation-card">
                <h4>Kontynuacja gry</h4>
                <p>Pętla pobierająca odpowiedź 't' lub 'n' (konwersja na małe litery). Przy 't' – nowa runda, przy 'n' – zakończenie.</p>
              </div>
              <div className="explanation-card">
                <h4>Brak zmiennych globalnych</h4>
                <p>Wszystkie dane przekazywane przez argumenty i zwracane. Funkcja <code>main</code> steruje przebiegiem.</p>
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

export default Egzamin4;