import { useState } from 'react';
import './css/Nauka.css';

function Nauka() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="nauka-container">
      <h1 className="nauka-title">Nauka do Egzaminu Praktycznego INF.04</h1>
      <p className="nauka-subtitle">Przykłady zadań podobne do tych z arkuszy CKE</p>

      <div className="categories-grid">
        <div className={`category-card ${selectedCategory === 'web' ? 'active' : ''}`} 
             onClick={() => setSelectedCategory('web')}>
          <h3>Aplikacja Webowa</h3>
          <p>Najczęściej wybierana kategoria na egzaminie</p>
        </div>

        <div className={`category-card ${selectedCategory === 'mobile' ? 'active' : ''}`} 
             onClick={() => setSelectedCategory('mobile')}>
          <h3>Aplikacja Mobilna</h3>
        </div>

        <div className={`category-card ${selectedCategory === 'desktop' ? 'active' : ''}`} 
             onClick={() => setSelectedCategory('desktop')}>
          <h3>Aplikacja Desktopowa</h3>
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
          {selectedCategory === 'mobile' && (
  <div className="materials-section">
    <h2>Aplikacja Mobilna – Android (Java + XML)</h2>
    <p>Najczęściej spotykane elementy na egzaminie: aktywność, layout, obsługa kliknięć, intencje, Toast.</p>

    <h3>1. Aktywność główna (MainActivity.java)</h3>
    <pre><code>{`package com.example.aplikacja;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private TextView textView;
    private Button przycisk;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        textView = findViewById(R.id.textView);
        przycisk = findViewById(R.id.przycisk);

        przycisk.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String tekst = textView.getText().toString();
                Toast.makeText(MainActivity.this, "Kliknięto: " + tekst, Toast.LENGTH_SHORT).show();
            }
        });
    }
}`}</code></pre>

    <h3>2. Layout (activity_main.xml)</h3>
    <pre><code>{`<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="20dp"
    android:gravity="center">

    <TextView
        android:id="@+id/textView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Witaj w aplikacji"
        android:textSize="24sp"
        android:textColor="#00ff9d" />

    <Button
        android:id="@+id/przycisk"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Kliknij mnie"
        android:layout_marginTop="20dp" />
</LinearLayout>`}</code></pre>

    <h3>3. Przechodzenie między ekranami (Intencje)</h3>
    <pre><code>{`// W MainActivity – otwarcie DrugiejAktywności
Intent intent = new Intent(MainActivity.this, SecondActivity.class);
intent.putExtra("klucz", "wartość");
startActivity(intent);

// Odebranie danych w SecondActivity
String dane = getIntent().getStringExtra("klucz");`}</code></pre>

    <h3>4. Wyświetlanie komunikatu (Toast)</h3>
    <pre><code>{`Toast.makeText(getApplicationContext(), "Komunikat", Toast.LENGTH_LONG).show();`}</code></pre>

    <h3>5. Lista elementów (ListView / RecyclerView – uproszczony przykład)</h3>
    <pre><code>{`String[] lista = {"Element 1", "Element 2", "Element 3"};
ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, lista);
ListView listView = findViewById(R.id.listView);
listView.setAdapter(adapter);`}</code></pre>

    <p><strong>Uwaga:</strong> Wszystkie powyższe elementy były wymagane w arkuszach CKE INF.04 (Android). Pamiętaj o dodaniu uprawnień w <code>AndroidManifest.xml</code>.</p>
  </div>
)}
          

        </div>
      )}

      {selectedCategory === 'desktop' && (
        <div className="materials-section">
          {selectedCategory === 'desktop' && (
  <div className="materials-section">
    <h2>Aplikacja Desktopowa – Java Swing (przykłady egzaminacyjne)</h2>
    <p>Najczęściej wymagane elementy: okno, przyciski, etykiety, pola tekstowe, obsługa zdarzeń, listy.</p>

    <h3>1. Główne okno z przyciskiem i etykietą</h3>
    <pre><code>{`import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class MainWindow extends JFrame {
    private JLabel label;
    private JButton button;

    public MainWindow() {
        setTitle("Moja aplikacja");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(null);

        label = new JLabel("Witaj w aplikacji");
        label.setBounds(50, 50, 200, 30);
        add(label);

        button = new JButton("Kliknij");
        button.setBounds(50, 100, 100, 30);
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                label.setText("Kliknięto!");
            }
        });
        add(button);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new MainWindow().setVisible(true);
        });
    }
}`}</code></pre>

    <h3>2. Obsługa pól tekstowych (JTextField) i komunikat (JOptionPane)</h3>
    <pre><code>{`JTextField textField = new JTextField();
textField.setBounds(50, 150, 150, 25);
add(textField);

JButton submit = new JButton("Pokaż");
submit.setBounds(50, 190, 100, 30);
submit.addActionListener(e -> {
    String tekst = textField.getText();
    JOptionPane.showMessageDialog(null, "Wpisałeś: " + tekst);
});
add(submit);`}</code></pre>

    <h3>3. Lista rozwijana (JComboBox)</h3>
    <pre><code>{`String[] opcje = {"Opcja 1", "Opcja 2", "Opcja 3"};
JComboBox<String> comboBox = new JComboBox<>(opcje);
comboBox.setBounds(50, 230, 150, 25);
comboBox.addActionListener(e -> {
    String wybor = (String) comboBox.getSelectedItem();
    JOptionPane.showMessageDialog(null, "Wybrano: " + wybor);
});
add(comboBox);`}</code></pre>

    <h3>4. Lista (JList) z przewijaniem</h3>
    <pre><code>{`DefaultListModel<String> model = new DefaultListModel<>();
model.addElement("Element 1");
model.addElement("Element 2");
model.addElement("Element 3");
JList<String> list = new JList<>(model);
JScrollPane scrollPane = new JScrollPane(list);
scrollPane.setBounds(50, 280, 150, 80);
add(scrollPane);`}</code></pre>

    <h3>5. Układ (BorderLayout) – przykład bardziej profesjonalny</h3>
    <pre><code>{`setLayout(new BorderLayout());
JPanel panel = new JPanel();
panel.add(new JLabel("Nazwa:"));
panel.add(new JTextField(10));
add(panel, BorderLayout.NORTH);
add(new JTextArea(), BorderLayout.CENTER);
add(new JButton("Zapisz"), BorderLayout.SOUTH);`}</code></pre>

    <p><strong>Wskazówka:</strong> Na egzaminie INF.04 często pojawia się konieczność stworzenia prostego okna z obsługą zdarzeń, walidacją danych i zapisem do pliku. Powyższe przykłady pokrywają większość wymaganych elementów.</p>

    <h3>Dodatkowo – przykład w C# (Windows Forms) dla porównania</h3>
    <pre><code>{`using System;
using System.Windows.Forms;

public class MainForm : Form
{
    private Label label;
    private Button button;
    private TextBox textBox;

    public MainForm()
    {
        label = new Label() { Text = "Witaj", Location = new System.Drawing.Point(50, 50) };
        button = new Button() { Text = "Kliknij", Location = new System.Drawing.Point(50, 100) };
        textBox = new TextBox() { Location = new System.Drawing.Point(50, 150), Width = 150 };
        
        button.Click += (sender, e) => {
            label.Text = textBox.Text;
        };
        
        Controls.Add(label);
        Controls.Add(button);
        Controls.Add(textBox);
    }
}`}</code></pre>
  </div>
)}
        </div>
      )}
    </div>
  );

  
}

export default Nauka;