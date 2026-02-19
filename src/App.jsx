import React, { useState } from 'react';
import Pump from './components/Pump'; 
import './App.css';

function App() {
  const [fuelStorage, setFuelStorage] = useState({
    '92': 500, '95': 500, '98': 500, 'diesel': 500
  });

  // Логика заправки
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
    /* БЫЛО: style={{ backgroundColor: '#1a1a1a', ... }} */
    /* СТАЛО: className="app-container" */
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">⛽ Fuel Control: React Era</h1>
      </header>
      
      <main className="app-main">
        {/* БЫЛО: style={{ display: 'grid', ... }} */}
        {/* СТАЛО: className="pumps-grid" */}
        <div className="pumps-grid">
          {Object.entries(fuelStorage).map(([type, amount]) => (
            <Pump 
              key={type} 
              type={type} 
              amount={amount} 
              onRefuel={handleRefuel} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;





