import React from 'react';
import { EXCHANGE_TYPE } from '../constants/utils';

const HomeMenu = ({ onExchangeSelect }) => {
  return (
    <div className="chat-buttons">
      <button onClick={() => onExchangeSelect(EXCHANGE_TYPE.LSE)}>London Stock Exchange</button>
      <button onClick={() => onExchangeSelect(EXCHANGE_TYPE.NYSE)}>New York Stock Exchange</button>
      <button onClick={() => onExchangeSelect(EXCHANGE_TYPE.NASDAQ)}>NASDAQ</button>
    </div>
  );
};

export default HomeMenu;
