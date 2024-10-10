import React from 'react';
import '../../src/App.css';

const StockMenu = ({ stocks, onStockSelect, goToHome }) => {
  return (
    <div className="chat-buttons">
      {stocks.map((stock, index) => (
        <button key={index} onClick={() => onStockSelect(stock)}>
          {stock.stockName}
        </button>
      ))}
      <button className="action-button" onClick={goToHome}>
        Main menu
      </button>
    </div>
  );
};

export default StockMenu;
