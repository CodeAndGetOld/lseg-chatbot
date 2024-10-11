import React from 'react';
import '../../src/App.css';

const ActionButtons = ({ goToStockMenu, goToHome }) => {
  return (
    <div className="chat-buttons">
      <button className="action-button" onClick={goToStockMenu}>
        Back to stocks
      </button>
      <button className="action-button" onClick={goToHome}>
        Main menu
      </button>
    </div>
  );
};

export default ActionButtons;
