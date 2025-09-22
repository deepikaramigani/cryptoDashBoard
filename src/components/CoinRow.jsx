import React from "react";


export default function CoinRow({ coin, onClick }) {
  return (
    <tr className="coin-row" onClick={onClick} style={{ cursor: "pointer" }}>
      <td>{coin.rank ?? "—"}</td>
      <td style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <img src={coin.image} alt={coin.name} width="22" height="22" style={{ borderRadius: "50%", background: "#fff", marginRight: 8 }} />
        <span style={{ fontWeight: 600, color: "var(--accent)" }}>{coin.name}</span>
        <span style={{ color: "var(--text-muted)", marginLeft: 4, fontSize: 13 }}>({coin.symbol})</span>
      </td>
      <td style={{ fontWeight: 500 }}>{coin.current_price != null ? `$${coin.current_price.toLocaleString()}` : "N/A"}</td>
      <td className={coin.price_change_percentage_24h >= 0 ? "success" : "danger"}>
        {coin.price_change_percentage_24h != null ? `${coin.price_change_percentage_24h.toFixed(2)}%` : "N/A"}
      </td>
      <td>{coin.market_cap != null ? `$${coin.market_cap.toLocaleString()}` : "N/A"}</td>
      <td>{coin.total_volume != null ? `$${coin.total_volume.toLocaleString()}` : "N/A"}</td>
    </tr>
  );
}


