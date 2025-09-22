import React, { useState } from "react";
import { useCoins } from "./hooks/useCoins";
import CoinsTable from "./components/CoinsTable";
import HighlightsPanel from "./components/HighlightsPanel";
import "./App.css";

export default function App() {
  const { coins, loading, error, setPage, setQuery } = useCoins({ perPage: 25 });
  const [selected, setSelected] = useState(null);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Crypto Dashboard</h1>
        <input
          className="search-input"
          placeholder="Search coin..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </header>

      {loading && <p className="loading-text">Loading...</p>}
      {error && <p className="error-text">Error: {error}</p>}

      <CoinsTable coins={coins} onSelect={setSelected} />

      <div className="button-container">
        <button className="load-more-btn" onClick={() => setPage((p) => p + 1)}>
          Load More
        </button>
      </div>

      <HighlightsPanel coins={coins} />

      {selected && (
        <div className="coin-details">
          <h2>{selected.name}</h2>
          <p>Symbol: {selected.symbol.toUpperCase()}</p>
          <p>Price: ${selected.current_price}</p>
          <p>Market Cap: ${selected.market_cap?.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}


