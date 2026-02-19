import React from 'react';

// Разбираем пропсы: type (название), amount (литры), onRefuel (функция клика)
function Pump({ type, amount, onRefuel }) {
  
  // Определяем, критический ли остаток (меньше 50л)
  const isLow = amount < 50;

  return (
    // Применяем основной класс и динамический класс для "аварии"
    <div className={`pump-card ${isLow ? 'pump-card--danger' : ''}`}>
      <h3 className="pump-card__title">Колонка: {type}</h3>
      <p className="pump-card__amount">
        Остаток: <strong>{amount.toFixed(2)} л</strong>
      </p>
      
      <button 
        onClick={() => onRefuel(type, 10)}
        className="pump-card__button"
      >
        Заправить 10л
      </button>
    </div>
  );
}

export default Pump;
