import React from "react";

export default function CoinRow({ coin, onClick }) {
  return (
    <tr onClick={onClick} style={{ cursor: "pointer" }}>
      <td>{coin.rank ?? "—"}</td>
      <td>
        <img src={coin.image} alt={coin.name} width="20" style={{ verticalAlign: "middle", marginRight: "5px" }} />
        {coin.name} ({coin.symbol})
      </td>
      <td>{coin.current_price != null ? `$${coin.current_price.toFixed(2)}` : "N/A"}</td>
      <td style={{ color: coin.price_change_percentage_24h >= 0 ? "green" : "red" }}>
        {coin.price_change_percentage_24h != null ? `${coin.price_change_percentage_24h.toFixed(2)}%` : "N/A"}
      </td>
      <td>{coin.market_cap != null ? `$${coin.market_cap.toLocaleString()}` : "N/A"}</td>
      <td>{coin.total_volume != null ? `$${coin.total_volume.toLocaleString()}` : "N/A"}</td>
    </tr>
  );
}


