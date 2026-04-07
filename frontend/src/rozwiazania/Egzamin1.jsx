import './rozwiazania.css';

function Egzamin1() {
  return (
    <div className="page-container exams-section">
      <div className="page-content">
        <h2 className="page-title">Rozwiązanie – Egzamin INF.04 2026 styczeń</h2>
        <p className="page-subtitle">
          Klasa „Kość” w Pythonie – pełna implementacja zgodna z wymaganiami CKE
        </p>

        <div className="solution-container">
          <section className="solution-section">
            <h3 className="section-heading">Opis zadania</h3>
            <p>
              Należy zaimplementować klasę <code>Kosc</code> (lub <code>Kość</code>) spełniającą następujące wymagania:
            </p>
            <ul className="requirements-list">
              <li>Statyczne pole liczące liczbę utworzonych instancji.</li>
              <li>Tablica z nazwami plików graficznych (kosc0.png … kosc6.png).</li>
              <li>Pole przechowujące liczbę oczek (1–6, przy błędnym argumencie – 0).</li>
              <li>Pole identyfikator pliku (indeks tablicy, czyli liczba oczek).</li>
              <li>Pole logiczne informujące, czy kość jest dostępna.</li>
              <li>Konstruktor jednoargumentowy (z walidacją) i bezargumentowy (losowanie).</li>
              <li>Metoda <code>rzuc()</code> – losuje nową wartość, tylko gdy kość dostępna.</li>
              <li>Metoda <code>blokuj()</code> – ustawia dostępność na False.</li>
              <li>Metoda <code>napis()</code> – zwraca słowny opis liczby oczek.</li>
              <li>Program główny testujący działanie klasy.</li>
            </ul>
          </section>

          <section className="solution-section">
            <h3 className="section-heading">Wyjaśnienie krok po kroku</h3>
            <p>
              Poniższy kod realizuje wszystkie wymagania. Kluczowe decyzje projektowe zostały omówione w komentarzach oraz w sekcji po kodzie.
            </p>
            <div className="code-block">
              <pre>{`import random

class Kosc:
    # Pole statyczne (zmienna klasowa) – licznik instancji
    licznik_instancji = 0
    
    # Tablica nazw plików – ogólnodostępna
    pliki = [f"kosc{i}.png" for i in range(7)]   # indeks 0..6
    
    def __init__(self, wartosc=None):
        """
        Konstruktor.
        - Jeśli podano wartość (1-6) – ustawia tę wartość.
        - Jeśli wartość jest spoza zakresu – ustawia 0.
        - Jeśli brak argumentu – losuje z zakresu 1-6.
        """
        if wartosc is not None:
            if wartosc in (1,2,3,4,5,6):
                self.oczek = wartosc
                self.id_pliku = wartosc
            else:
                self.oczek = 0
                self.id_pliku = 0
        else:
            self.oczek = random.randint(1,6)
            self.id_pliku = self.oczek
        
        self.dostepna = True
        Kosc.licznik_instancji += 1
    
    def rzuc(self):
        """Losuje nową wartość tylko jeśli kość jest dostępna."""
        if self.dostepna:
            nowa = random.randint(1,6)
            self.oczek = nowa
            self.id_pliku = nowa
    
    def blokuj(self):
        """Blokuje kość – staje się niedostępna."""
        self.dostepna = False
    
    def napis(self):
        """Zwraca słowną reprezentację liczby oczek."""
        slownik = {
            1: "jeden", 2: "dwa", 3: "trzy",
            4: "cztery", 5: "pięć", 6: "sześć",
            0: "zero (błędna wartość)"
        }
        return slownik.get(self.oczek, "nieznana")
    
    def info(self):
        return f"Oczka: {self.oczek}, plik: {self.pliki[self.id_pliku]}, dostępna: {self.dostepna}"

# ========== PROGRAM GŁÓWNY ==========
if __name__ == "__main__":
    try:
        podana = int(input("Podaj liczbę oczek dla pierwszej kości (1-6): "))
        kosc1 = Kosc(podana)
    except ValueError:
        print("Błędna wartość, tworzę kość z domyślnym losowaniem.")
        kosc1 = Kosc()
    
    kosc2 = Kosc()
    
    for i, kosc in enumerate([kosc1, kosc2], 1):
        print(f"\\n--- Kość {i} ---")
        print(f"Liczba utworzonych instancji: {Kosc.licznik_instancji}")
        print(f"Liczba oczek (liczbowo): {kosc.oczek}")
        print(f"Liczba oczek (słownie): {kosc.napis()}")
        print(f"Nazwa pliku: {Kosc.pliki[kosc.id_pliku]}")
    
    print("\\n--- Test rzutu i blokowania ---")
    kosc1.rzuc()
    print(f"Po rzucie: {kosc1.info()}")
    kosc1.blokuj()
    print(f"Po blokadzie: {kosc1.info()}")
    kosc1.rzuc()
    print(f"Próba rzutu po blokadzie: {kosc1.info()}")
`}</pre>
            </div>
          </section>

          <section className="solution-section">
            <h3 className="section-heading">Kluczowe elementy</h3>
            <div className="explanation-grid">
              <div className="explanation-card">
                <h4>Pole statyczne <code>licznik_instancji</code></h4>
                <p>Zmienna klasowa, inkrementowana w konstruktorze. Dzięki niej możemy śledzić liczbę utworzonych obiektów. Dostępna jako <code>Kosc.licznik_instancji</code>.</p>
              </div>
              <div className="explanation-card">
                <h4>Tablica <code>pliki</code></h4>
                <p>Lista nazw plików od <code>kosc0.png</code> do <code>kosc6.png</code>. Indeks odpowiada liczbie oczek (dla 0 – plik błędu). Użyta do wyświetlenia poprawnej nazwy pliku.</p>
              </div>
              <div className="explanation-card">
                <h4>Konstruktor z domyślnym <code>None</code></h4>
                <p>W Pythonie nie ma przeciążania konstruktorów. Stosujemy jeden konstruktor z opcjonalnym argumentem. Walidacja: jeśli podano wartość spoza 1-6, ustawiamy 0.</p>
              </div>
              <div className="explanation-card">
                <h4>Metoda <code>rzuc()</code></h4>
                <p>Warunek <code>if self.dostepna</code> gwarantuje, że niedostępna kość nie zmieni wartości. Losowanie nowej wartości z zakresu 1-6.</p>
              </div>
              <div className="explanation-card">
                <h4>Metoda <code>napis()</code></h4>
                <p>Słownik mapujący liczby na polskie nazwy. Dla 0 zwraca opis błędu. Dzięki temu spełniamy wymóg zwracania tekstu.</p>
              </div>
              <div className="explanation-card">
                <h4>Program główny</h4>
                <p>Demonstruje użycie obu konstruktorów, wyświetla wymagane informacje oraz testuje rzut i blokowanie. Obsługuje błąd wejścia.</p>
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

export default Egzamin1;