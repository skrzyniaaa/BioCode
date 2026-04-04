import './rozwiazania.css';

function Egzamin6() {
  return (
    <div className="page-container exams-section">
      <div className="page-content">
        <h2 className="page-title">Rozwiązanie – Egzamin INF.04 2023 czerwiec</h2>
        <p className="page-subtitle">
          Sito Eratostenesa – znajdowanie liczb pierwszych w zakresie 2..100
        </p>

        <div className="solution-container">
          {/* WSTĘP */}
          <section className="solution-section">
            <h3 className="section-heading">Opis zadania</h3>
            <p>
              Należy zaimplementować program w Pythonie, który:
            </p>
            <ul className="requirements-list">
              <li>Realizuje algorytm sita Eratostenesa dla przedziału 2..100 (n = 100).</li>
              <li>Wypełnianie tablicy logicznej odbywa się w osobnej funkcji, która przyjmuje tablicę jako argument i nie zwraca wartości.</li>
              <li>Liczby pierwsze są wyświetlane na ekranie, rozdzielone separatorem (np. przecinkiem) i poprzedzone komunikatem.</li>
              <li>Kod jest czytelny, stosuje znaczące nazwy zmiennych i funkcji.</li>
            </ul>
          </section>

          {/* WYJAŚNIENIA KROK PO KROKU */}
          <section className="solution-section">
            <h3 className="section-heading">Wyjaśnienie krok po kroku</h3>
            <p>
              Poniższy kod realizuje algorytm sita Eratostenesa. Tablica logiczna <code>czy_pierwsza</code> przechowuje informację,
              czy dana liczba jest jeszcze kandydatem na pierwszą. Dla i od 2 do sqrt(n), jeśli liczba nie została wykreślona,
              to wykreślamy jej wielokrotności (od i*i). Na koniec wyświetlamy wszystkie liczby, które pozostały oznaczone jako true.
            </p>
            <div className="code-block">
              <pre>{`def wypelnij_sito(tablica, n):
    """
    Funkcja wypełnia tablicę zgodnie z algorytmem sita Eratostenesa.
    Argumenty:
        tablica – lista wartości logicznych (indeksy 0..n)
        n – górny zakres (100)
    Nie zwraca wartości – modyfikuje tablicę w miejscu.
    """
    # Zakładamy, że tablica ma długość n+1, a indeksy 0 i 1 są pomijane (ustawione na False)
    for i in range(2, n+1):
        if tablica[i]:  # jeśli liczba nie została wykreślona
            # Zaczynamy od i*i, bo mniejsze wielokrotności zostały już wykreślone przez mniejsze czynniki
            for j in range(i*i, n+1, i):
                tablica[j] = False

def main():
    n = 100
    # Tablica logiczna, początkowo wszystkie wartości True dla indeksów 0..n
    czy_pierwsza = [True] * (n + 1)
    # 0 i 1 nie są liczbami pierwszymi
    czy_pierwsza[0] = czy_pierwsza[1] = False

    # Wywołanie funkcji wypełniającej sito
    wypelnij_sito(czy_pierwsza, n)

    # Wyświetlenie wyników
    pierwsze = [str(i) for i in range(2, n+1) if czy_pierwsza[i]]
    print("Liczby pierwsze w zakresie od 2 do 100:")
    print(", ".join(pierwsze))

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
                <h4>Funkcja <code>wypelnij_sito</code></h4>
                <p>Przyjmuje tablicę logiczną i modyfikuje ją w miejscu (bez zwracania wartości). Zgodnie z wymaganiem.</p>
              </div>
              <div className="explanation-card">
                <h4>Algorytm sita</h4>
                <p>Dla każdej liczby i (od 2 do sqrt(n)), jeśli nie została wykreślona, wykreślamy jej wielokrotności (od i*i).</p>
              </div>
              <div className="explanation-card">
                <h4>Zakres pętli wewnętrznej</h4>
                <p>Zaczynamy od <code>i*i</code>, ponieważ mniejsze wielokrotności zostały już usunięte przez mniejsze czynniki.</p>
              </div>
              <div className="explanation-card">
                <h4>Tablica logiczna</h4>
                <p>Indeksy 0 i 1 ustawione na False (nie są pierwsze). Dla uproszczenia tablica ma rozmiar n+1, aby indeksować bezpośrednio liczbami.</p>
              </div>
              <div className="explanation-card">
                <h4>Wyświetlanie wyników</h4>
                <p>Liczby pierwsze zbierane są do listy, a następnie wyświetlane jako ciąg oddzielony przecinkami.</p>
              </div>
              <div className="explanation-card">
                <h4>Czytelność kodu</h4>
                <p>Nazwy zmiennych i funkcji są znaczące, kod jest sformatowany zgodnie z PEP 8.</p>
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

export default Egzamin6;