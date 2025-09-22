
# Crypto Dashboard

A lightweight **React.js** application that displays live cryptocurrency market data using the [CoinGecko API](https://www.coingecko.com/api/documentations/v3).  

The dashboard includes:
- **All Coins Overview** (sortable, searchable table with pagination)
- **Highlights Section** (Top Gainers, Losers, Highest Volume, Trending)

---

## 🚀 Tech Stack

- **Framework:** React.js (Vite for bundling)
- **Styling:** CSS (App.css, index.css)
- **State & Data:** React Hooks + custom hooks (`useCoins`)
- **API Layer:** Axios-based client (`src/api/coingeckoClient.js`)
- **Utilities:** Adapter functions (`src/api/adaptCoin.js`)
- **Build Tool:** Vite
- **Hosting (optional):** Vercel / Netlify

---

## 🏗️ Project Structure

crypto-dashboard/
├── public/ # Static assets
├── src/
│ ├── api/ # API client & adapters
│ │ ├── coingeckoClient.js
│ │ └── adaptCoin.js
│ ├── components/ # UI components
│ │ ├── CoinRow.jsx
│ │ ├── CoinsTable.jsx
│ │ └── HighlightsPanel.jsx
│ ├── hooks/ # Custom hooks
│ │ └── useCoins.js
│ ├── assets/ # Images, SVGs (react.svg)
│ ├── App.jsx # Root app component
│ ├── App.css
│ ├── index.css
│ └── main.jsx # React entry point
├── .env # Local env variables (not committed)
├── .gitignore
├── package.json
└── README.md

---

## 🧩 Design Patterns Used

- **Repository Pattern** → `coingeckoClient.js` encapsulates API calls.  
- **Adapter Pattern** → `adaptCoin.js` normalizes API responses for UI use.  
- **Custom Hooks** → `useCoins.js` handles fetching, loading, and error states.  
- **Container-Presenter Pattern** → `App.jsx` manages state, while `CoinsTable` and `HighlightsPanel` handle display logic.  

**Why:** Ensures clear separation of concerns, easier testing, and avoids coupling UI directly to API response shapes.

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/crypto-dashboard.git
cd crypto-dashboard
2. Install dependencies
npm install

3. Environment Variables

Create a .env file in the project root:

cp .env.example .env


.env.example:

# CoinGecko API base URL
VITE_API_BASE_URL=https://api.coingecko.com/api/v3

# API key (optional, depending on endpoint usage)
VITE_COINGECKO_API_KEY=


⚠️ Never commit your real API keys. Only .env.example should be in Git.

4. Run the project
npm run dev


The app will be available at:
👉 http://localhost:5173

📌 Features

All Coins View

Rank, Name & Symbol (with icon), Current Price

24h Price Change (absolute + %)

Market Cap & Volume

Pagination / Infinite scroll

Search & Sorting

Row click → details view (modal/basic info)

Highlights Section

Top gainers (24h)

Top losers (24h)

Highest volume

Trending coins

Easy to extend with new highlight types

Resilience

Loading states with spinners/skeletons

Error states with retry

Empty states for no results

📌 Assumptions

Free CoinGecko API tier is enough for assignment.

Sorting & filtering handled client-side for simplicity.

React Query was not used to keep setup minimal (custom hooks instead).