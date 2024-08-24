import "./style.css";
import React, { useState, useEffect } from "react";

function App() {

  useEffect(() => {
    // Sayıların yer alacağı .hero konteynerini seç
    const container = document.querySelector('.hero');
    const numberCount = 100; // Sayıların toplam sayısı

    // Belirlenen sayı adedinde sayılar oluştur
    for (let i = 0; i < numberCount; i++) {
      // Yeni bir sayı elementi oluştur
      const number = document.createElement('div');
      number.className = 'number'; // CSS sınıfı ekle
      number.textContent = Math.floor(Math.random() * 10); // 0-9 arası rastgele bir sayı ata

      // Sayının rastgele bir pozisyonda ve animasyon süresinde olmasını sağla
      number.style.left = `${Math.random() * 100}vw`; // Sol pozisyonu rastgele belirle
      number.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`; // Animasyon süresi rastgele belirle

      container.appendChild(number); // Sayıyı konteynıra ekle
    }
  }, []); // Boş bağımlılık dizisi ile component mount olduğunda çalışır

  const [minVal, setMinVal] = useState(0); // Minimum değer için state
  const [maxVal, setMaxVal] = useState(10); // Maksimum değer için state
  const [randomNum, setRandomNum] = useState(0); // Rastgele sayı için state

  // Rastgele bir sayı üret ve state'e ata
  const generateRandomNumber = () => {
    const min = Number(minVal); // Minimum değeri sayıya dönüştür
    const max = Number(maxVal); // Maksimum değeri sayıya dönüştür
    
    // Minimum ve maksimum değerler arasında rastgele bir sayı üret
    setRandomNum(Math.floor(Math.random() * (max - min + 1) + min));
  }

  return (
    <div className="hero">
      <div className="container">
        <div className="randomNumber">
          <p>Random Number : <span>{randomNum}</span></p> {/* Rastgele sayıyı göster */}
        </div>
        
        <div className="numberContainer">
          <div>
            <p>Min: </p>
            <input
              type="number"
              value={minVal}
              onChange={val => setMinVal(val.target.value)} // Minimum değeri güncelle
            />
          </div>
          <div>
            <p>Max: </p>
            <input
              type="number"
              value={maxVal}
              onChange={val => setMaxVal(val.target.value)} // Maksimum değeri güncelle
            />
          </div>
        </div>

        <button onClick={generateRandomNumber}>Get a random number</button> {/* Rastgele sayı üret butonu */}
      </div>
    </div>
  );
}

export default App;