import React from "react";

export default function HighlightsPanel({ coins }) {
  if (!coins || coins.length === 0) return null;

  const topGainers = [...coins].sort((a, b) => (b.price_change_percentage_24h ?? 0) - (a.price_change_percentage_24h ?? 0)).slice(0, 5);
  const topLosers = [...coins].sort((a, b) => (a.price_change_percentage_24h ?? 0) - (b.price_change_percentage_24h ?? 0)).slice(0, 5);
  const topVolume = [...coins].sort((a, b) => (b.total_volume ?? 0) - (a.total_volume ?? 0)).slice(0, 5);

  return (
    <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
      <div>
        <h3>Top Gainers</h3>
        <ul>{topGainers.map(c => <li key={c.id}>{c.name}: {(c.price_change_percentage_24h ?? 0).toFixed(2)}%</li>)}</ul>
      </div>
      <div>
        <h3>Top Losers</h3>
        <ul>{topLosers.map(c => <li key={c.id}>{c.name}: {(c.price_change_percentage_24h ?? 0).toFixed(2)}%</li>)}</ul>
      </div>
      <div>
        <h3>Highest Volume</h3>
        <ul>{topVolume.map(c => <li key={c.id}>{c.name}: ${(c.total_volume ?? 0).toLocaleString()}</li>)}</ul>
      </div>
    </div>
  );
}

