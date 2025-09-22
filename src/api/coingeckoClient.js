const BASE_URL = import.meta.env.VITE_COINGECKO_BASE_URL;
const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY;

// Helper fetch function
async function fetchJson(url) {
  try {
    // Only include Pro header if API_KEY is set and non-empty
    const headers = API_KEY && API_KEY.trim() !== ""
      ? { "X-CG-Pro-API-Key": API_KEY }
      : { Accept: "application/json" };

    const res = await fetch(url, { headers });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`API Error ${res.status}: ${text}`);
    }

    return res.json();
  } catch (err) {
    console.error("Fetch failed:", err);
    throw err;
  }
}

// Get markets (All Coins view)
export async function getMarkets(page = 1, perPage = 25) {
  const params = new URLSearchParams({
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: perPage,
    page,
    sparkline: false,
    price_change_percentage: "24h",
  });

  return fetchJson(`${BASE_URL}/coins/markets?${params}`);
}

// Get trending coins (Highlights)
export async function getTrending() {
  return fetchJson(`${BASE_URL}/search/trending`);
}

// Get single coin details (optional)
export async function getCoinDetails(id) {
  if (!id) throw new Error("Coin ID is required");

  const params = new URLSearchParams({
    localization: false,
    tickers: false,
    market_data: true,
    community_data: false,
    developer_data: false,
    sparkline: false,
  });

  return fetchJson(`${BASE_URL}/coins/${id}?${params}`);
}

