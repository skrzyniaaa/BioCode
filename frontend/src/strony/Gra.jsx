function Gra() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h2 className="page-title">Resident Evil 3</h2>
        <p className="page-subtitle">hehe :3</p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <iframe
            src="https://www.retrogames.cc/embed/42155-resident-evil-3-nemesis-u.html"
            width="1000"
            height="800"
            frameBorder="0"
            allowFullScreen
            title="Resident Evil 3"
            style={{ maxWidth: '100%', borderRadius: '16px' }}
          ></iframe>
        </div>
        <button className="btn secondary" onClick={() => window.history.back()} style={{ marginTop: '30px' }}>
          Powrót
        </button>
      </div>
    </div>
  );
}

export default Gra;