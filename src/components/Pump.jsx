import React from 'react';

// Компонент принимает "пропсы" (входящие данные)
function Pump({ type, amount, onRefuel }) {
  return (
    <div className="pump-card" style={{ border: '1px dashed #555', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
      <h3 style={{ color: '#ffd700' }}>Колонка: {type}</h3>
      <p style={{ fontSize: '20px' }}>Остаток: <strong>{amount.toFixed(2)} л</strong></p>
      
    <button 
  onClick={() => onRefuel(type, 10)}
  style={{ 
    marginTop: '20px', 
    padding: '12px 24px', 
    fontSize: '16px', 
    cursor: 'pointer',
    backgroundColor: amount < 50 ? '#ff4d4d' : 'transparent', 
    color: amount < 50 ? '#fff' : '#00ff00',
    borderColor: amount < 50 ? '#ff4d4d' : '#00ff00',
    borderRadius: '30px',         // Закругленные края
    fontWeight: 'bold',
    textTransform: 'uppercase',
    transition: 'all 0.3s ease',  // Плавная анимация
    boxShadow: '0 0 10px rgba(0, 255, 0, 0.2)' // Легкое свечение
  }}
>
  Заправить 10л
</button>
    </div>
  );
}

export default Pump;
