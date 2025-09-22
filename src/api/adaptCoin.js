export function adaptCoin(raw) {
  return {
    id: raw.id,
    symbol: raw.symbol?.toUpperCase() || "N/A",
    name: raw.name || "Unknown",
    image: raw.image || "",
    rank: raw.market_cap_rank ?? "-",
    current_price: raw.current_price ?? 0,
    price_change_24h: raw.price_change_24h ?? 0,
    price_change_percentage_24h: raw.price_change_percentage_24h ?? 0,
    market_cap: raw.market_cap ?? 0,
    total_volume: raw.total_volume ?? 0,
  };
}

