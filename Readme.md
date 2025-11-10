# IKEA Bot

This is a bot that checks the stock of IKEA items and sends a message to a Telegram channel when the stock is available.

## Installation

1. Clone the repository
2. Install the dependencies with `npm install`
3. Create a `.env` file with the following variables:
   - `TELEGRAM_BOT_TOKEN`: the token of the Telegram bot
   - `TELEGRAM_CHAT_ID`: the ID of the Telegram channel
4. Run the bot with `npm start`

## Configuration

The bot will check the stock of the items listed in `index.js`. You can add or remove items from this list as needed.
