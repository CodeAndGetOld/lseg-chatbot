# Stock Chatbot Application

This is a simple React-based chatbot that allows users to select from one of three stock exchanges (London Stock Exchange, New York Stock Exchange, and NASDAQ), view a list of stocks from the selected exchange, and get the current price of any selected stock. The chatbot is designed with a conversational UI, where the user's messages are shown on the right side, and the bot's responses appear on the left side.

## Features

Select from three major stock exchanges.
View a list of popular stocks from the selected exchange.
Get the current stock price of a selected stock.
Navigate between the main menu and stock menus using a chatbot-style interface.

## Prerequisites

Before you begin, ensure you have the following software installed on your system:

Node.js (v12 or higher)
npm (comes with Node.js)
To verify that Node.js and npm are installed, run the following commands in your terminal:

node -v
npm -v
If they are not installed, you can download and install Node.js from <https://nodejs.org/>.

## Installation and Setup

1. Clone the Repository
First, clone the repository to your local machine:

git clone <https://github.com/CodeAndGetOld/lseg-chatbot.git>
cd lseg-chatbot
2. Install Dependencies
Next, install the required dependencies using npm. This will install React and all other necessary packages specified in the package.json file.

npm install
3. Start the Development Server
Once the dependencies are installed, you can start the development server:

npm start
This command will start the React development server. Once it's running, you can access the app at <http://localhost:3000> in your web browser.

## Usage

On the main screen, you will be prompted to select a stock exchange (London Stock Exchange, New York Stock Exchange, or NASDAQ).

After selecting a stock exchange, a list of five top stocks from that exchange will appear.

Select one of the stocks to view its current price.

You can either return to the main menu or go back to the list of stocks.

## Customization

If you want to customize the stock data or exchanges:

Update the stockData.js file in the src directory. This file contains the stock exchange and stock information in JSON format.

export default [
    {
        "code": "LSE",
        "stockExchange": "London Stock Exchange",
        "topStocks": [
            {
                "code": "CRDA",
                "stockName": "CRODA INTERNATIONAL PLC",
                "price": 4807.00
            },
            // more stocks here
        ]
    },
    // more exchanges here
];

## Troubleshooting

1. Issue: The development server does not start.
Make sure you're in the correct directory (cd lseg-chatbot).
Check that all dependencies are installed (npm install).
Ensure that Node.js and npm are installed and working correctly.
2. Issue: npm start says port 3000 is in use.
If port 3000 is already in use by another process, you can either kill that process or allow React to run on another port. When prompted, press Y to use a different port (e.g., localhost:3001).
