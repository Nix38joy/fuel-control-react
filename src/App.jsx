import React, { useState } from 'react';
import Pump from './components/Pump';
import './App.css';

function App() {
  const [fuelStorage, setFuelStorage] = useState({
    '92': 500, '95': 500, '98': 500, 'diesel': 500
  });

  const [orders, setOrders] = useState([]);

  const addOrder = (type) => {
    const newOrder = {
      id: Date.now(),
      type: type,
      liters: 10,
      status: 'waiting'
    };

    setOrders([...orders, newOrder]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">⛽ Fuel Control: React Era</h1>
      </header>
      
      <main className="app-main">
        <div className="pumps-grid">
          {Object.entries(fuelStorage).map(([type, amount]) => (
            <Pump 
              key={type} 
              type={type} 
              amount={amount} 
              onRefuel={addOrder} 
            />
          ))}
        </div>

        <section className="orders-section" style={{ marginTop: '40px' }}>
          <h2>Очередь заказов ({orders.length})</h2>
          <div className="orders-list">
            {orders.map(order => (
              <div key={order.id} className="order-item fade-in" style={{ padding: '10px', borderBottom: '1px solid #333' }}>
                🚗 Машина: {order.type} — {order.liters}л [{order.status}]
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;






