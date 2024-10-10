import React, { useState } from 'react';
import HomeMenu from './components/HomeMenu';
import StockMenu from './components/StockMenu';
import StockPrice from './components/StockPrice';
import stockData from './json/stockData';
import './App.css';

const App = () => {
  const [currentMenu, setCurrentMenu] = useState('home');
  const [selectedExchange, setSelectedExchange] = useState(null);
  const [stocks, setStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Please select a Stock Exchange.' },
  ]);

  // When a stock exchange is selected
  const handleExchangeSelect = (exchangeCode) => {
    const exchange = stockData.find((item) => item.code === exchangeCode);
    if (exchange) {
      setStocks(exchange.topStocks);
      setSelectedExchange(exchange.stockExchange);
      setCurrentMenu('stocks');

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: exchange.stockExchange },
        { sender: 'bot', text: `Please select a stock from ${exchange.stockExchange}:` },
      ]);
    }
  };

  const handleStockSelect = (stock) => {
    setSelectedStock(stock);
    setCurrentMenu('price');

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: stock.stockName },
      { sender: 'bot', text: `Stock Price of ${stock.stockName} is ${stock.price} USD.` },
    ]);
  };

  const goToHome = () => {
    setCurrentMenu('home');
    setSelectedExchange(null);
    setSelectedStock(null);

    setMessages([{ sender: 'bot', text: 'Please select a Stock Exchange.' }]);
  };

  const goToStockMenu = () => {
    setCurrentMenu('stocks');
    setSelectedStock(null);

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'bot', text: `Please select a stock from ${selectedExchange}:` },
    ]);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">LSEG Chatbot</div>
      <div className="chat-body">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.sender}`}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        {currentMenu === 'home' && <HomeMenu onExchangeSelect={handleExchangeSelect} />}
        {currentMenu === 'stocks' && (
          <StockMenu stocks={stocks} onStockSelect={handleStockSelect} goToHome={goToHome} />
        )}
        {currentMenu === 'price' && selectedStock && (
          <StockPrice stock={selectedStock} goToStockMenu={goToStockMenu} goToHome={goToHome} />
        )}
      </div>
    </div>
  );
};

export default App;
