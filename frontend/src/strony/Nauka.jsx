import { useState } from 'react';
import './css/Nauka.css';   // ← będziemy mieli osobny plik stylów

function Nauka() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="nauka-container">
      <h1 className="nauka-title">📚 Nauka do Egzaminu Praktycznego INF.04</h1>
      <p className="nauka-subtitle">Przykłady zadań podobne do tych z arkuszy CKE</p>

      <div className="categories-grid">
        <div className={`category-card ${selectedCategory === 'web' ? 'active' : ''}`} 
             onClick={() => setSelectedCategory('web')}>
          <h3>🌐 Aplikacja Webowa</h3>
          <p>Najczęściej wybierana kategoria na egzaminie</p>
        </div>

        <div className={`category-card ${selectedCategory === 'mobile' ? 'active' : ''}`} 
             onClick={() => setSelectedCategory('mobile')}>
          <h3>📱 Aplikacja Mobilna (PWA)</h3>
        </div>

        <div className={`category-card ${selectedCategory === 'desktop' ? 'active' : ''}`} 
             onClick={() => setSelectedCategory('desktop')}>
          <h3>💻 Aplikacja Desktopowa</h3>
        </div>
      </div>

      {/* ==================== APLIKACJA WEBOWA ==================== */}
      {selectedCategory === 'web' && (
        <div className="materials-section">
          <h2>Przykłady zadań z egzaminów INF.04 – Aplikacja Webowa</h2>

          <h3>1. Wstawianie i wyświetlanie zdjęcia (bardzo częste zadanie)</h3>
          <pre><code>{`// W React
import logo from './assets/projekt.jpg';

function Projekt() {
  return (
    <img 
      src={logo} 
      alt="Zrzut ekranu projektu" 
      className="projekt-zdjecie"
    />
  );
}`}</code></pre>

          <h3>2. Galeria zdjęć z opisami (typowe zadanie praktyczne)</h3>
          <pre><code>{`const projekty = [
  { id: 1, nazwa: "Sklep internetowy", img: "/assets/sklep.jpg", ocena: "5" },
  { id: 2, nazwa: "Portfolio", img: "/assets/portfolio.jpg", ocena: "4" }
];

return (
  <div className="galeria">
    {projekty.map(p => (
      <div key={p.id} className="karta-projektu">
        <img src={p.img} alt={p.nazwa} />
        <h4>{p.nazwa}</h4>
        <p>Ocena: {p.ocena}/5</p>
      </div>
    ))}
  </div>
);`}</code></pre>

          <h3>3. Formularz kontaktowy z walidacją (klasyczne zadanie CKE)</h3>
          <pre><code>{`const [form, setForm] = useState({ imie: '', email: '', wiadomosc: '' });

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

return (
  <form onSubmit={handleSubmit}>
    <input name="imie" value={form.imie} onChange={handleChange} required />
    <input name="email" type="email" value={form.email} onChange={handleChange} required />
    <textarea name="wiadomosc" value={form.wiadomosc} onChange={handleChange} />
    <button type="submit">Wyślij</button>
  </form>
);`}</code></pre>
        </div>
      )}

      {selectedCategory === 'mobile' && (
        <div className="materials-section">
          <h2>Aplikacja Mobilna / PWA</h2>
          <p>Przykłady: Responsywność, Install prompt, Service Worker</p>
          <p>(Na razie mniej przykładów – daj znać, to rozbuduję)</p>
        </div>
      )}

      {selectedCategory === 'desktop' && (
        <div className="materials-section">
          <h2>Aplikacja Desktopowa</h2>
          <p>Electron, Tauri – przykłady konfiguracji</p>
        </div>
      )}
    </div>
  );
}

export default Nauka;