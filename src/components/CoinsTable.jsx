import React, { useState } from "react";
import CoinRow from "./CoinRow";

export default function CoinsTable({ coins, onSelect }) {
  const [sortKey, setSortKey] = useState("rank");
  const [sortDir, setSortDir] = useState("asc");

  function handleSort(key) {
    const dir = sortKey === key && sortDir === "asc" ? "desc" : "asc";
    setSortKey(key);
    setSortDir(dir);
  }

  const sortedCoins = [...coins].sort((a, b) => {
    const valA = a[sortKey] ?? 0;
    const valB = b[sortKey] ?? 0;
    return sortDir === "asc" ? valA - valB : valB - valA;
  });

  return (
    <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th onClick={() => handleSort("rank")} style={{ cursor: "pointer" }}>Rank</th>
          <th>Name</th>
          <th onClick={() => handleSort("current_price")} style={{ cursor: "pointer" }}>Price</th>
          <th onClick={() => handleSort("price_change_percentage_24h")} style={{ cursor: "pointer" }}>24h %</th>
          <th onClick={() => handleSort("market_cap")} style={{ cursor: "pointer" }}>Market Cap</th>
          <th onClick={() => handleSort("total_volume")} style={{ cursor: "pointer" }}>Volume</th>
        </tr>
      </thead>
      <tbody>
        {sortedCoins.map(c => <CoinRow key={c.id} coin={c} onClick={() => onSelect(c)} />)}
      </tbody>
    </table>
  );
}

