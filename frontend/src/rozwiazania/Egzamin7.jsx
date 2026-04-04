import './rozwiazania.css';

function Egzamin7() {
  return (
    <div className="page-container exams-section">
      <div className="page-content">
        <h2 className="page-title">Rozwiązanie – Egzamin INF.04 2023 styczeń</h2>
        <p className="page-subtitle">
          Algorytm Euklidesa – największy wspólny dzielnik (NWD)
        </p>

        <div className="solution-container">
          {/* WSTĘP */}
          <section className="solution-section">
            <h3 className="section-heading">Opis zadania</h3>
            <p>
              Należy zaimplementować program w Pythonie, który:
            </p>
            <ul className="requirements-list">
              <li>Implementuje algorytm Euklidesa (wersja z odejmowaniem lub modulo) do obliczania NWD dwóch liczb całkowitych dodatnich.</li>
              <li>Funkcja NWD przyjmuje dwa argumenty (a, b) i zwraca obliczoną wartość – bez operacji wejścia/wyjścia.</li>
              <li>Program główny wczytuje liczby, wywołuje funkcję i wyświetla wynik.</li>
              <li>Kontrola poprawności danych (liczby dodatnie).</li>
              <li>Nazwy zmiennych zgodne ze schematem blokowym (a, b, reszta itp.).</li>
            </ul>
          </section>

          {/* WYJAŚNIENIA KROK PO KROKU */}
          <section className="solution-section">
            <h3 className="section-heading">Wyjaśnienie krok po kroku</h3>
            <p>
              Poniższy kod implementuje algorytm Euklidesa w wersji z dzieleniem modulo (najszybsza).
              Funkcja <code>nwd(a, b)</code> oblicza NWD poprzez powtarzanie operacji: dopóki b ≠ 0, zamieniamy a na b, a b na a mod b.
            </p>
            <div className="code-block">
              <pre>{`def nwd(a, b):
    """
    Oblicza największy wspólny dzielnik (NWD) dwóch liczb całkowitych dodatnich.
    Algorytm Euklidesa w wersji z modulo.
    """
    while b != 0:
        reszta = a % b
        a = b
        b = reszta
    return a

def main():
    try:
        a = int(input("Podaj pierwszą liczbę całkowitą dodatnią: "))
        b = int(input("Podaj drugą liczbę całkowitą dodatnią: "))
        if a <= 0 or b <= 0:
            print("Liczby muszą być dodatnie.")
            return
        wynik = nwd(a, b)
        print(f"NWD({a}, {b}) = {wynik}")
    except ValueError:
        print("Błędna wartość. Podaj liczbę całkowitą.")

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
                <h4>Funkcja <code>nwd(a, b)</code></h4>
                <p>Implementacja algorytmu Euklidesa (wersja z modulo). Nie zawiera operacji I/O – tylko logika.</p>
              </div>
              <div className="explanation-card">
                <h4>Zmienne zgodne ze schematem</h4>
                <p>Użyto nazw <code>a</code>, <code>b</code>, <code>reszta</code> – zgodnie z typowym schematem blokowym.</p>
              </div>
              <div className="explanation-card">
                <h4>Warunek pętli</h4>
                <p><code>while b != 0</code> – kontynuujemy, dopóki druga liczba nie jest zerem.</p>
              </div>
              <div className="explanation-card">
                <h4>Obliczenie reszty</h4>
                <p><code>reszta = a % b</code> – następnie przesunięcie wartości: a = b, b = reszta.</p>
              </div>
              <div className="explanation-card">
                <h4>Kontrola poprawności</h4>
                <p>Program sprawdza, czy podane liczby są dodatnie. W przypadku błędu wyświetla komunikat.</p>
              </div>
              <div className="explanation-card">
                <h4>Program główny</h4>
                <p>Wczytuje dane, wywołuje funkcję <code>nwd</code>, wyświetla wynik. Komunikacja z użytkownikiem jest zrozumiała.</p>
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

export default Egzamin7;