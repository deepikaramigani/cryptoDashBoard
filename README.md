# Crypto Dashboard React App

A modern cryptocurrency dashboard built with React.js and Vite. It displays real-time data for various coins, including highlights and a sortable table, using the CoinGecko API.

## Features
- Real-time cryptocurrency prices and market data
- Highlights panel for key metrics
- Sortable and filterable coins table
- Modular React component structure
- Custom hooks for data fetching
- Fast development with Vite

## Project Structure

```
crypto-dashboard/
├── .env                  # Environment variables (API keys, etc.)
├── .gitignore            # Git ignore rules
├── eslint.config.js      # ESLint configuration
├── index.html            # Main HTML file
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
├── public/
│   └── vite.svg          # Static assets
└── src/
    ├── App.jsx           # Main React component
    ├── App.css           # App styles
    ├── index.css         # Global styles
    ├── main.jsx          # Entry point
    ├── api/
    │   ├── adaptCoin.js          # Data adaptation utilities
    │   └── coingeckoClient.js    # CoinGecko API client
    ├── assets/
    │   └── react.svg             # Logo asset
    ├── components/
    │   ├── CoinRow.jsx           # Table row for a coin
    │   ├── CoinsTable.jsx        # Table of coins
    │   └── HighlightsPanel.jsx   # Highlights panel
    └── hooks/
        └── useCoins.js           # Custom hook for fetching coins
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd crypto-dashboard-react-js/crypto-dashboard
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App
Start the development server:
```sh
npm run dev
# or
yarn dev
```
The app will be available at `http://localhost:5173` (default Vite port).

### Building for Production
```sh
npm run build
# or
yarn build
```
The production-ready files will be in the `dist/` folder.

## Environment Variables
You can use a `.env` file to store environment variables (e.g., API keys). See `.env.example` if available.

## License
This project is licensed under the MIT License.

---
*Built with React, Vite, and ❤️*
