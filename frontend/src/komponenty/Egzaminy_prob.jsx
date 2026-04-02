const Egzaminy_prob = () => {
  return (
    <div className="exam-list-container">
      <h2 className="section-title">📋 Egzaminy próbne</h2>
      <div className="exam-cards">
        <div className="exam-card">
          <h3>Egzamin 1</h3>
          <p>Matematyka - poziom podstawowy</p>
          <button className="btn-exam">Rozpocznij</button>
        </div>
        <div className="exam-card">
          <h3>Egzamin 2</h3>
          <p>Język polski - poziom podstawowy</p>
          <button className="btn-exam">Rozpocznij</button>
        </div>
        <div className="exam-card">
          <h3>Egzamin 3</h3>
          <p>Język angielski - poziom podstawowy</p>
          <button className="btn-exam">Rozpocznij</button>
        </div>
      </div>
    </div>
  );
};

export default Egzaminy_prob;