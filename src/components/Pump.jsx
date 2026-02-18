import React from 'react';

// Компонент принимает "пропсы" (входящие данные)
function Pump({ type, amount, onRefuel }) {
  return (
    <div className="pump-card" style={{ border: '1px dashed #555', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
      <h3 style={{ color: '#ffd700' }}>Колонка: {type}</h3>
      <p style={{ fontSize: '20px' }}>Остаток: <strong>{amount.toFixed(2)} л</strong></p>
      
      <button 
        onClick={() => onRefuel(type, 10)}
        className="button button--small"
        style={{ cursor: 'pointer', padding: '8px 16px' }}
      >
        Заправить 10л
      </button>
    </div>
  );
}

export default Pump;
