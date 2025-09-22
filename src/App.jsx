import React, { useState } from "react";
import { useCoins } from "./hooks/useCoins";
import CoinsTable from "./components/CoinsTable";
import HighlightsPanel from "./components/HighlightsPanel";

export default function App() {
  const { coins, loading, error, setPage, setQuery } = useCoins({ perPage: 25 });
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h1>Crypto Dashboard</h1>
      <input
        placeholder="Search coin..."
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "0.5rem", marginBottom: "1rem", width: "300px" }}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <CoinsTable coins={coins} onSelect={setSelected} />
      <button
        onClick={() => setPage((p) => p + 1)}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
      >
        Load More
      </button>
      <HighlightsPanel coins={coins} />
      {selected && (
        <div style={{ marginTop: "2rem", padding: "1rem", border: "1px solid #ccc" }}>
          <h2>{selected.name}</h2>
          <p>Symbol: {selected.symbol.toUpperCase()}</p>
          <p>Price: ${selected.current_price}</p>
          <p>Market Cap: ${selected.market_cap?.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}

