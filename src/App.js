import React, { useState } from 'react';
import HomeMenu from './components/HomeMenu';
import StockMenu from './components/StockMenu';
import ActionButtons from './components/ActionButtons';
import stockData from './json/stockData';
import './App.css';
import { USER_TYPE, MENU, TEXTS } from './constants/utils';
import BotAvatar from '../src/assets/bot-avatar.png';
import UserAvatar from '../src/assets/user-avatar.png';

const App = () => {
  const [currentMenu, setCurrentMenu] = useState(MENU.HOME);
  const [selectedExchange, setSelectedExchange] = useState(null);
  const [stocks, setStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);
  const [messages, setMessages] = useState([
    {
      sender: USER_TYPE.BOT,
      text: TEXTS.GREETING,
    },
  ]);
  const [isBotMessageRendered, setIsBotMessageRendered] = useState(true);

  const handleExchangeSelect = (exchangeCode) => {
    setIsBotMessageRendered(false);
    const exchange = stockData.find((item) => item.code === exchangeCode);
    if (exchange) {
      setStocks(exchange.topStocks);
      setSelectedExchange(exchange.stockExchange);
      setCurrentMenu(MENU.STOCKS);

      // Immediately add the user message
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: USER_TYPE.USER, text: exchange.stockExchange },
      ]);

      // Add a fetching indicator first
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: USER_TYPE.BOT, text: TEXTS.FETCHING, isFetchingData: true },
        ]);

        // Delay bot response by 1000ms (or any desired delay) to simulate a real API call
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages.slice(0, -1), // Remove the 'Fetching data...' message
            {
              sender: USER_TYPE.BOT,
              text: (
                <>
                  Please select a stock from <strong>{exchange.stockExchange}</strong>:
                </>
              ),
            },
          ]);
          setIsBotMessageRendered(true);
        }, 1000); // Delay of 1000ms
      }, 500); // Slight delay before showing "Fetching data..." after user message
    }
  };

  const handleStockSelect = (stock) => {
    setIsBotMessageRendered(false);
    const randomFakeDelay = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;

    setSelectedStock(stock);
    setCurrentMenu(MENU.PRICE);

    // Immediately add the user message
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: USER_TYPE.USER, text: stock.stockName },
    ]);

    // Add a fetching indicator after user's message with a delay
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: USER_TYPE.BOT, text: TEXTS.FETCHING, isFetchingData: true }, // Temporary typing message
      ]);

      // Delay bot response to simulate a real data fetch (1000ms - 3000ms)
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1), // Remove the 'Fetching data...' message
          {
            sender: USER_TYPE.BOT,
            text: (
              <>
                Stock Price of <strong>{stock.stockName}</strong> is <strong>${stock.price}</strong>
              </>
            ),
          },
        ]);
        setIsBotMessageRendered(true);
      }, randomFakeDelay); // The actual delay for bot response
    }, 500); // Slight delay before showing "Fetching data..." after user message
  };

  const goToHome = () => {
    setCurrentMenu(MENU.HOME);
    setSelectedExchange(null);
    setSelectedStock(null);

    setMessages([{ sender: USER_TYPE.BOT, text: TEXTS.GREETING }]);
  };

  const goToStockMenu = () => {
    setCurrentMenu(MENU.STOCKS);
    setSelectedStock(null);

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        sender: USER_TYPE.BOT,
        text: (
          <>
            Please select a stock from <strong>{selectedExchange}</strong>:
          </>
        ),
      },
    ]);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">LSEG Chatbot</div>
      <div className="chat-body">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.sender}`}>
            <div className="message-avatar">
              {message.sender === USER_TYPE.USER ? (
                <img src={UserAvatar} alt="User Avatar" />
              ) : (
                <img src={BotAvatar} alt="Bot Avatar" />
              )}
            </div>
            <div className={`message-text ${message.isFetchingData ? 'fetching-data' : ''}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      {isBotMessageRendered && (
        <div className="chat-input">
          {currentMenu === MENU.HOME && <HomeMenu onExchangeSelect={handleExchangeSelect} />}
          {currentMenu === MENU.STOCKS && (
            <StockMenu stocks={stocks} onStockSelect={handleStockSelect} goToHome={goToHome} />
          )}
          {currentMenu === MENU.PRICE && selectedStock && (
            <ActionButtons goToStockMenu={goToStockMenu} goToHome={goToHome} />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
