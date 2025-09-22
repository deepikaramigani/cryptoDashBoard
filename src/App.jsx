import React, { useState } from "react";
import { useCoins } from "./hooks/useCoins";
import CoinsTable from "./components/CoinsTable";
import HighlightsPanel from "./components/HighlightsPanel";
import "./App.css";


export default function App() {
  const { coins, loading, error, setPage, setQuery } = useCoins({ perPage: 25 });
  const [selected, setSelected] = useState(null);
  const [view, setView] = useState("all"); // "all" or "highlights"

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Crypto Dashboard</h1>
        <nav className="dashboard-nav">
          <button
            className={view === "all" ? "nav-btn active" : "nav-btn"}
            onClick={() => setView("all")}
          >
            All Coins
          </button>
          <button
            className={view === "highlights" ? "nav-btn active" : "nav-btn"}
            onClick={() => setView("highlights")}
          >
            Highlights
          </button>
        </nav>
        {view === "all" && (
          <input
            className="search-input"
            placeholder="Search coin..."
            onChange={(e) => setQuery(e.target.value)}
          />
        )}
      </header>

      {loading && <p className="loading-text">Loading...</p>}
      {error && <p className="error-text">Error: {error}</p>}

      {view === "all" && (
        <>
          <CoinsTable coins={coins} onSelect={setSelected} />
          <div className="button-container">
            <button className="load-more-btn" onClick={() => setPage((p) => p + 1)}>
              Load More
            </button>
          </div>
        </>
      )}

      {view === "highlights" && <HighlightsPanel coins={coins} />}

      {selected && view === "all" && (
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


