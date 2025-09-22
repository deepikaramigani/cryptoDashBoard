import { useState, useEffect } from "react";
import { adaptCoin } from "../api/adaptCoin";
import { getMarkets } from "../api/coingeckoClient";

export function useCoins({ perPage = 25, initialPage = 1 }) {
  const [page, setPage] = useState(initialPage);
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let cancelled = false;
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getMarkets(page, perPage);
        if (!cancelled) {
          const adapted = data.map(adaptCoin);
          setCoins(prev => page === 1 ? adapted : [...prev, ...adapted]);
        }
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchData();
    return () => (cancelled = true);
  }, [page, perPage]);

  const filtered = query
    ? coins.filter(c => (c.name + " " + c.symbol).toLowerCase().includes(query.toLowerCase()))
    : coins;

  return { coins: filtered, loading, error, setPage, setQuery };
}

