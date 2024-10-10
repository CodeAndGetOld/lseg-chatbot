import React from 'react';

const HomeMenu = ({ onExchangeSelect }) => {
  return (
    <div className="chat-buttons">
      <button onClick={() => onExchangeSelect('LSE')}>London Stock Exchange</button>
      <button onClick={() => onExchangeSelect('NYSE')}>New York Stock Exchange</button>
      <button onClick={() => onExchangeSelect('NASDAQ')}>NASDAQ</button>
    </div>
  );
};

export default HomeMenu;
