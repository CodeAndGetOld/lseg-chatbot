import React from 'react';
import '../../src/App.css';

const StockPrice = ({ stock, goToStockMenu, goToHome }) => {
  return (
    <div className="chat-buttons">
      <button className="action-button" onClick={goToStockMenu}>
        Back
      </button>
      <button className="action-button" onClick={goToHome}>
        Main menu
      </button>
    </div>
  );
};

export default StockPrice;
