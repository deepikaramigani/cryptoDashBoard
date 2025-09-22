import React from "react";

export default function HighlightsPanel({ coins }) {
  if (!coins || coins.length === 0) return null;

  const topGainers = [...coins].sort((a, b) => (b.price_change_percentage_24h ?? 0) - (a.price_change_percentage_24h ?? 0)).slice(0, 5);
  const topLosers = [...coins].sort((a, b) => (a.price_change_percentage_24h ?? 0) - (b.price_change_percentage_24h ?? 0)).slice(0, 5);
  const topVolume = [...coins].sort((a, b) => (b.total_volume ?? 0) - (a.total_volume ?? 0)).slice(0, 5);

  return (
    <div className="dashboard-container" style={{ marginTop: "2rem" }}>
      <div className="panel" style={{ flex: 1 }}>
        <h3>Top Gainers</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {topGainers.map(c => (
            <li key={c.id} style={{ marginBottom: 8 }}>
              <span className="highlight">{c.name}</span>: <span className="success">{(c.price_change_percentage_24h ?? 0).toFixed(2)}%</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="panel" style={{ flex: 1 }}>
        <h3>Top Losers</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {topLosers.map(c => (
            <li key={c.id} style={{ marginBottom: 8 }}>
              <span className="highlight">{c.name}</span>: <span className="danger">{(c.price_change_percentage_24h ?? 0).toFixed(2)}%</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="panel" style={{ flex: 1 }}>
        <h3>Highest Volume</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {topVolume.map(c => (
            <li key={c.id} style={{ marginBottom: 8 }}>
              <span className="highlight">{c.name}</span>: <span style={{ color: "var(--accent)" }}>${(c.total_volume ?? 0).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

