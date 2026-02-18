import React, { useState } from 'react'

function App() {
  // Инициализируем состояние
  const [fuelStorage, setFuelStorage] = useState({
    '92': 500,
    '95': 500,
    '98': 500,
    'diesel': 500
  });

  return (
    <div style={{ backgroundColor: '#1a1a1a', color: '#ffffff', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>⛽ Fuel Control: React Era</h1>
      
      <div style={{ marginTop: '20px', border: '1px solid #444', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ color: '#ffd700' }}>Остатки в резервуарах:</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {Object.entries(fuelStorage).map(([type, amount]) => (
            <li key={type} style={{ fontSize: '24px', marginBlock: '15px', borderBottom: '1px solid #333', pb: '10px' }}>
              {type}: <span style={{ color: '#00ff00' }}>{amount.toFixed(2)} л</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;



