import './rozwiazania.css';

function Egzamin9() {
  return (
    <div className="page-container exams-section">
      <div className="page-content">
        <h2 className="page-title">Rozwiązanie – Egzamin INF.04 2022 styczeń</h2>
        <p className="page-subtitle">
          Sortowanie przez wybieranie – malejące (klasa w Pythonie)
        </p>

        <div className="solution-container">
          {/* WSTĘP */}
          <section className="solution-section">
            <h3 className="section-heading">Opis zadania</h3>
            <p>
              Należy zaimplementować program w Pythonie, który:
            </p>
            <ul className="requirements-list">
              <li>Sortuje tablicę 10 liczb całkowitych metodą przez wybieranie (malejąco).</li>
              <li>Tablica jest polem klasy, wczytywana z klawiatury.</li>
              <li>Klasa zawiera co najmniej dwie metody: sortującą (publiczną) i szukającą wartości maksymalnej (prywatną).</li>
              <li>Metoda szukająca zwraca indeks wartości maksymalnej (lub samą wartość).</li>
              <li>Nie używa gotowych funkcji sortowania.</li>
              <li>Wyświetla posortowaną tablicę.</li>
            </ul>
          </section>

          {/* WYJAŚNIENIA KROK PO KROKU */}
          <section className="solution-section">
            <h3 className="section-heading">Wyjaśnienie krok po kroku</h3>
            <p>
              Poniższy kod implementuje klasę <code>Sorter</code> z polem <code>tablica</code>. Metoda <code>sortuj_malejaco</code> realizuje algorytm przez wybieranie:
              dla każdego indeksu i od 0 do n-1 znajdujemy indeks maksymalnej wartości w podtablicy i..n-1 i zamieniamy z elementem i.
              Metoda <code>_znajdz_indeks_maksimum</code> (prywatna) znajduje indeks największej wartości w podanym zakresie.
            </p>
            <div className="code-block">
              <pre>{`class Sorter:
    def __init__(self, rozmiar=10):
        self.tablica = [0] * rozmiar
        self.rozmiar = rozmiar

    def wczytaj(self):
        """Wczytuje 10 liczb całkowitych z klawiatury."""
        print(f"Podaj {self.rozmiar} liczb całkowitych:")
        for i in range(self.rozmiar):
            while True:
                try:
                    self.tablica[i] = int(input(f"Element {i+1}: "))
                    break
                except ValueError:
                    print("Błędna wartość, podaj liczbę całkowitą.")

    def _znajdz_indeks_maksimum(self, start):
        """
        Prywatna metoda szukająca indeksu maksymalnej wartości w podtablicy od start do końca.
        """
        indeks_max = start
        for i in range(start + 1, self.rozmiar):
            if self.tablica[i] > self.tablica[indeks_max]:
                indeks_max = i
        return indeks_max

    def sortuj_malejaco(self):
        """Sortuje tablicę malejąco przez wybieranie."""
        for i in range(self.rozmiar):
            maks_index = self._znajdz_indeks_maksimum(i)
            # Zamiana miejscami
            self.tablica[i], self.tablica[maks_index] = self.tablica[maks_index], self.tablica[i]

    def wyswietl(self):
        """Wyświetla tablicę."""
        print(", ".join(map(str, self.tablica)))

def main():
    sorter = Sorter(10)
    sorter.wczytaj()
    print("Tablica przed sortowaniem:")
    sorter.wyswietl()
    sorter.sortuj_malejaco()
    print("Tablica po sortowaniu malejącym:")
    sorter.wyswietl()

if __name__ == "__main__":
    main()
`}</pre>
            </div>
          </section>

          {/* OMÓWIENIE */}
          <section className="solution-section">
            <h3 className="section-heading">Kluczowe elementy</h3>
            <div className="explanation-grid">
              <div className="explanation-card">
                <h4>Klasa <code>Sorter</code></h4>
                <p>Przechowuje tablicę jako pole. Metoda <code>wczytaj</code> wypełnia ją danymi z klawiatury.</p>
              </div>
              <div className="explanation-card">
                <h4>Metoda prywatna <code>_znajdz_indeks_maksimum</code></h4>
                <p>Ograniczona widzialność (pojedyncze podkreślenie). Zwraca indeks największej wartości od pozycji start do końca.</p>
              </div>
              <div className="explanation-card">
                <h4>Sortowanie przez wybieranie</h4>
                <p>Dla każdego i wyszukujemy indeks maksimum w pozostałej części tablicy i zamieniamy z elementem i.</p>
              </div>
              <div className="explanation-card">
                <h4>Sortowanie malejące</h4>
                <p>Zamiast minimum szukamy maksimum – dzięki temu tablica jest sortowana od największej do najmniejszej.</p>
              </div>
              <div className="explanation-card">
                <h4>Wyświetlanie</h4>
                <p>Elementy posortowanej tablicy wyświetlane oddzielone przecinkami.</p>
              </div>
              <div className="explanation-card">
                <h4>Czytelność kodu</h4>
                <p>Nazwy zmiennych i metod są znaczące, kod sformatowany zgodnie z PEP 8.</p>
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

export default Egzamin9;