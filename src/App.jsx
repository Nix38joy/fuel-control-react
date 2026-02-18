import React, { useState } from 'react';
import Pump from './components/Pump'; // 1. Импортируем нашу деталь
import './App.css';

function App() {
  const [fuelStorage, setFuelStorage] = useState({
    '92': 500, '95': 500, '98': 500, 'diesel': 500
  });

  // Универсальная функция заправки
  const handleRefuel = (type, liters) => {
    if (fuelStorage[type] >= liters) {
      setFuelStorage({
        ...fuelStorage,
        [type]: fuelStorage[type] - liters
      });
    } else {
      alert('Недостаточно топлива!');
    }
  };

  return (
    <div className="app-container" style={{ backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <h1>⛽ Fuel Control: Component Era</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '30px' }}>
        {/* 2. Используем компонент Pump для каждого вида топлива */}
        {Object.entries(fuelStorage).map(([type, amount]) => (
          <Pump 
            key={type} 
            type={type} 
            amount={amount} 
            onRefuel={handleRefuel} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;




