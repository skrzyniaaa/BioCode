import './rozwiazania.css';

function Egzamin2() {
  return (
    <div className="page-container exams-section">
      <div className="page-content">
        <h2 className="page-title">Rozwiązanie – Egzamin INF.04 2025 czerwiec</h2>
        <p className="page-subtitle">
          Loteria liczbowa – losowanie zestawów 6 liczb z zakresu 1–49
        </p>

        <div className="solution-container">
          <section className="solution-section">
            <h3 className="section-heading">Opis zadania</h3>
            <p>
              Należy zaimplementować program w Pythonie, który:
            </p>
            <ul className="requirements-list">
              <li>Wczytuje z klawiatury liczbę zestawów (n).</li>
              <li>Generuje n zestawów, każdy złożony z 6 unikalnych liczb całkowitych z zakresu 1–49.</li>
              <li>Wyświetla wszystkie zestawy.</li>
              <li>Zlicza i wyświetla, ile razy każda liczba od 1 do 49 wystąpiła we wszystkich zestawach.</li>
              <li>Używa funkcji do generowania liczb pseudolosowych.</li>
              <li>Przechowuje wyniki w dwuwymiarowej tablicy (n wierszy, 6 kolumn).</li>
              <li>Definiuje co najmniej dwie funkcje: wypełniającą tablicę oraz wyświetlającą wyniki.</li>
              <li>W programie nie stosuje zmiennych globalnych (podejście strukturalne).</li>
            </ul>
          </section>

          <section className="solution-section">
            <h3 className="section-heading">Wyjaśnienie krok po kroku</h3>
            <p>
              Poniższy kod realizuje wszystkie wymagania. Zastosowano funkcje z parametrami (bez zmiennych globalnych),
              listę list jako tablicę dwuwymiarową oraz moduł <code>random</code> do losowania.
            </p>
            <div className="code-block">
              <pre>{`import random

def wypelnij_tablice(liczba_zestawow):
    """
    Funkcja tworzy i wypełnia tablicę zestawów.
    Argument: liczba_zestawow (int) – ile zestawów wylosować.
    Zwraca: dwuwymiarową listę o wymiarach liczba_zestawow x 6.
    """
    tablica = []
    for _ in range(liczba_zestawow):
        zestaw = []
        while len(zestaw) < 6:
            liczba = random.randint(1, 49)
            if liczba not in zestaw:
                zestaw.append(liczba)
        zestaw.sort()
        tablica.append(zestaw)
    return tablica

def wyswietl_zestawy(tablica):
    """Wyświetla wszystkie zestawy w czytelnej formie."""
    print("\\nWylosowane zestawy:")
    for i, zestaw in enumerate(tablica, 1):
        print(f"Zestaw {i:2d}: {zestaw}")

def zlicz_wystapienia(tablica):
    """
    Zlicza wystąpienia każdej liczby od 1 do 49 we wszystkich zestawach.
    Argument: tablica – lista zestawów.
    Zwraca: listę zliczeń (indeks 0 odpowiada liczbie 1).
    """
    zliczenia = [0] * 49
    for zestaw in tablica:
        for liczba in zestaw:
            zliczenia[liczba - 1] += 1
    return zliczenia

def wyswietl_zliczenia(zliczenia):
    """Wyświetla statystyki wystąpień dla każdej liczby."""
    print("\\nStatystyka wystąpień liczb od 1 do 49:")
    for i, ile in enumerate(zliczenia, 1):
        print(f"Liczba {i:2d}: {ile}")

def main():
    try:
        n = int(input("Podaj liczbę zestawów do wylosowania: "))
        if n <= 0:
            print("Liczba zestawów musi być dodatnia.")
            return
    except ValueError:
        print("Błędna wartość. Podaj liczbę całkowitą.")
        return

    zestawy = wypelnij_tablice(n)
    wyswietl_zestawy(zestawy)
    zliczenia = zlicz_wystapienia(zestawy)
    wyswietl_zliczenia(zliczenia)

if __name__ == "__main__":
    main()
`}</pre>
            </div>
          </section>

          <section className="solution-section">
            <h3 className="section-heading">Kluczowe elementy</h3>
            <div className="explanation-grid">
              <div className="explanation-card">
                <h4>Brak zmiennych globalnych</h4>
                <p>Wszystkie dane przekazywane są przez argumenty funkcji, wyniki zwracane. Funkcja <code>main</code> pełni rolę sterującą.</p>
              </div>
              <div className="explanation-card">
                <h4>Generowanie zestawów</h4>
                <p>Pętla <code>while</code> zapewnia brak powtórzeń w zestawie. Użyto <code>random.randint(1,49)</code>.</p>
              </div>
              <div className="explanation-card">
                <h4>Dwuwymiarowa tablica</h4>
                <p>Lista list – odpowiednik tablicy n×6. Każdy wiersz to osobna lista z 6 liczbami.</p>
              </div>
              <div className="explanation-card">
                <h4>Zliczanie wystąpień</h4>
                <p>Lista <code>zliczenia</code> o długości 49 (indeksy 0–48). Dla liczby 1 zwiększamy komórkę 0, dla 2 – komórkę 1 itd.</p>
              </div>
              <div className="explanation-card">
                <h4>Walidacja danych</h4>
                <p>Program sprawdza, czy podana wartość jest liczbą całkowitą dodatnią. W przypadku błędu wyświetla komunikat.</p>
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

export default Egzamin2;