import './rozwiazania.css';

function Egzamin8() {
  return (
    <div className="page-container exams-section">
      <div className="page-content">
        <h2 className="page-title">Rozwiązanie – Egzamin INF.04 2022 czerwiec</h2>
        <p className="page-subtitle">
          Wyszukiwanie liniowe z wartownikiem – tablica 50 liczb pseudolosowych
        </p>

        <div className="solution-container">
          {/* WSTĘP */}
          <section className="solution-section">
            <h3 className="section-heading">Opis zadania</h3>
            <p>
              Należy zaimplementować program w Pythonie, który:
            </p>
            <ul className="requirements-list">
              <li>Tworzy tablicę co najmniej 50 liczb całkowitych pseudolosowych z zakresu 1–100.</li>
              <li>Wyszukuje pierwsze wystąpienie podanej z klawiatury wartości metodą z wartownikiem.</li>
              <li>Wypełnianie tablicy i przeszukiwanie w osobnych funkcjach.</li>
              <li>Funkcja przeszukująca zwraca indeks znalezionego elementu lub informację o braku.</li>
              <li>Wyświetla tablicę (liczby oddzielone przecinkami) oraz wynik wyszukiwania.</li>
            </ul>
          </section>

          {/* WYJAŚNIENIA KROK PO KROKU */}
          <section className="solution-section">
            <h3 className="section-heading">Wyjaśnienie krok po kroku</h3>
            <p>
              Poniższy kod implementuje wyszukiwanie liniowe z wartownikiem. Na końcu tablicy (pod indeksem n) wstawiamy szukaną wartość,
              aby pętla zawsze zakończyła działanie. Po znalezieniu sprawdzamy, czy indeks jest mniejszy niż rozmiar tablicy – jeśli tak,
              element istnieje; w przeciwnym razie (trafiliśmy na wartownika) – brak elementu.
            </p>
            <div className="code-block">
              <pre>{`import random

def wypelnij_tablice(rozmiar):
    """Tworzy tablicę o podanym rozmiarze, wypełnioną losowymi liczbami 1..100."""
    return [random.randint(1, 100) for _ in range(rozmiar)]

def szukaj_z_wartownikiem(tablica, x):
    """
    Wyszukuje pierwsze wystąpienie x w tablicy metodą z wartownikiem.
    Zwraca indeks znalezionego elementu lub -1, jeśli nie znaleziono.
    """
    n = len(tablica)
    # Tworzymy nową tablicę z wartownikiem na końcu
    tab_z_wartownikiem = tablica + [x]
    i = 0
    while tab_z_wartownikiem[i] != x:
        i += 1
    if i < n:
        return i
    else:
        return -1

def main():
    rozmiar = 50
    tablica = wypelnij_tablice(rozmiar)
    
    print("Tablica:", ", ".join(map(str, tablica)))
    
    try:
        x = int(input("Podaj liczbę do wyszukania: "))
    except ValueError:
        print("Błędna wartość.")
        return
    
    indeks = szukaj_z_wartownikiem(tablica, x)
    if indeks != -1:
        print(f"Liczba {x} została znaleziona pod indeksem {indeks}.")
    else:
        print(f"Liczba {x} nie występuje w tablicy.")

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
                <h4>Funkcja <code>wypelnij_tablice</code></h4>
                <p>Generuje listę 50 liczb pseudolosowych (1–100) – rozmiar zgodny z wymaganiem (co najmniej 50).</p>
              </div>
              <div className="explanation-card">
                <h4>Funkcja <code>szukaj_z_wartownikiem</code></h4>
                <p>Tworzy kopię tablicy z dodanym wartownikiem (szukana wartość na końcu). Pętla while działa do momentu znalezienia x. Zwraca indeks lub -1.</p>
              </div>
              <div className="explanation-card">
                <h4>Wartownik</h4>
                <p>Zapewnia, że pętla zawsze się zakończy – nie trzeba dodatkowego sprawdzania zakresu. Po znalezieniu porównanie i <code>i &lt; n</code> decyduje o sukcesie.</p>
              </div>
              <div className="explanation-card">
                <h4>Wyświetlanie tablicy</h4>
                <p>Elementy oddzielone przecinkami, zgodnie z wymaganiem.</p>
              </div>
              <div className="explanation-card">
                <h4>Komunikacja z użytkownikiem</h4>
                <p>Program pyta o wartość, wyświetla tablicę i czytelny komunikat o wyniku wyszukiwania.</p>
              </div>
              <div className="explanation-card">
                <h4>Czytelność kodu</h4>
                <p>Nazwy funkcji i zmiennych są znaczące, kod sformatowany zgodnie z PEP 8.</p>
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

export default Egzamin8;