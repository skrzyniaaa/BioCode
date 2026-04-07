import './rozwiazania.css';

function Egzamin3() {
  return (
    <div className="page-container exams-section">
      <div className="page-content">
        <h2 className="page-title">Rozwiązanie – Egzamin INF.04 2025 styczeń</h2>
        <p className="page-subtitle">
          Klasa operująca na tablicy liczb całkowitych – implementacja w Pythonie
        </p>

        <div className="solution-container">
          <section className="solution-section">
            <h3 className="section-heading">Opis zadania</h3>
            <p>
              Należy zaimplementować klasę <code>Tablica</code> (lub <code>Tab</code>) spełniającą następujące wymagania:
            </p>
            <ul className="requirements-list">
              <li>Prywatne pola: tablica liczb całkowitych (lista w Pythonie) oraz liczba elementów (rozmiar).</li>
              <li>Konstruktor przyjmujący rozmiar, ustawia rozmiar i wypełnia tablicę losowymi liczbami 1–1000.</li>
              <li>Metoda wyświetlająca wszystkie elementy w formacie "indeks: wartość".</li>
              <li>Metoda wyszukująca pierwsze wystąpienie podanej wartości – zwraca indeks lub -1.</li>
              <li>Metoda wyświetlająca wszystkie wartości nieparzyste i zwracająca ich liczbę.</li>
              <li>Metoda obliczająca średnią arytmetyczną i zwracająca ją.</li>
              <li>Wszystkie metody są publiczne (dostępne poza klasą).</li>
              <li>Program główny tworzy obiekt o rozmiarze większym od 20 i testuje wszystkie metody.</li>
            </ul>
          </section>

          <section className="solution-section">
            <h3 className="section-heading">Wyjaśnienie krok po kroku</h3>
            <p>
              Poniższy kod realizuje wszystkie wymagania. Zastosowano konwencję nazewnictwa z podkreśleniem dla pól prywatnych,
              a metody są publiczne. W Pythonie prywatność jest sygnalizowana przez pojedyncze podkreślenie.
            </p>
            <div className="code-block">
              <pre>{`import random

class Tablica:
    def __init__(self, rozmiar):
        """
        Konstruktor – tworzy tablicę o podanym rozmiarze i wypełnia losowymi liczbami 1..1000.
        """
        self._rozmiar = rozmiar
        self._tablica = [random.randint(1, 1000) for _ in range(rozmiar)]

    def wyswietl(self):
        """Wyświetla wszystkie elementy tablicy w formacie 'indeks: wartość'."""
        for i, wartosc in enumerate(self._tablica):
            print(f"{i}: {wartosc}")

    def wyszukaj(self, wartosc):
        """Zwraca indeks pierwszego wystąpienia wartości lub -1, jeśli nie znaleziono."""
        for i in range(self._rozmiar):
            if self._tablica[i] == wartosc:
                return i
        return -1

    def wyswietl_nieparzyste(self):
        """Wyświetla wszystkie nieparzyste wartości i zwraca ich liczbę."""
        nieparzyste = [val for val in self._tablica if val % 2 != 0]
        for val in nieparzyste:
            print(val, end=" ")
        print()
        return len(nieparzyste)

    def srednia(self):
        """Oblicza i zwraca średnią arytmetyczną elementów tablicy."""
        if self._rozmiar == 0:
            return 0.0
        return sum(self._tablica) / self._rozmiar

# ========== PROGRAM GŁÓWNY ==========
if __name__ == "__main__":
    # Tworzymy obiekt z rozmiarem większym od 20
    tab = Tablica(25)

    print("=== Wyświetlenie wszystkich elementów ===")
    tab.wyswietl()

    print("\\n=== Wyszukiwanie wartości 500 ===")
    indeks = tab.wyszukaj(500)
    if indeks != -1:
        print(f"Znaleziono pod indeksem {indeks}")

    print("\\n=== Liczby nieparzyste i ich ilość ===")
    ile = tab.wyswietl_nieparzyste()
    print(f"Ilość liczb nieparzystych: {ile}")

    print("\\n=== Średnia arytmetyczna ===")
    print(f"Średnia: {tab.srednia():.2f}")
`}</pre>
            </div>
          </section>

          <section className="solution-section">
            <h3 className="section-heading">Kluczowe elementy</h3>
            <div className="explanation-grid">
              <div className="explanation-card">
                <h4>Pola prywatne</h4>
                <p><code>_rozmiar</code> i <code>_tablica</code> – pojedyncze podkreślenie sygnalizuje, że nie powinny być używane poza klasą.</p>
              </div>
              <div className="explanation-card">
                <h4>Konstruktor</h4>
                <p>Przyjmuje rozmiar, zapisuje go i tworzy listę z losowymi liczbami 1–1000 (lista składana).</p>
              </div>
              <div className="explanation-card">
                <h4>Metoda <code>wyszukaj</code></h4>
                <p>Przechodzi przez tablicę i zwraca indeks pierwszego wystąpienia lub -1. Spełnia wymóg.</p>
              </div>
              <div className="explanation-card">
                <h4>Metoda <code>wyswietl_nieparzyste</code></h4>
                <p>Filtruje listę, wyświetla wartości i zwraca ich liczbę. Użyto wyrażenia listowego.</p>
              </div>
              <div className="explanation-card">
                <h4>Metoda <code>srednia</code></h4>
                <p>Sumuje elementy i dzieli przez rozmiar. Zabezpieczenie przed dzieleniem przez zero.</p>
              </div>
              <div className="explanation-card">
                <h4>Program główny</h4>
                <p>Tworzy tablicę 25 elementów, testuje wszystkie metody – wyświetlanie, wyszukiwanie (brak komunikatu przy -1), nieparzyste i średnią.</p>
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

export default Egzamin3;