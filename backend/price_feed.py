#!/usr/bin/env python3
"""Data fetcher and processor."""
import requests, json, time
from datetime import datetime, timedelta

API_BASE = "https://api.coingecko.com/api/v3"

def fetch_market_data(vs_currency="usd", per_page=50):
    """Fetch market data from CoinGecko."""
    try:
        r = requests.get(f"{API_BASE}/coins/markets", params={"vs_currency": vs_currency, "per_page": per_page, "sparkline": True}, timeout=15)
        return r.json() if r.status_code == 200 else []
    except Exception as e:
        print(f"Error: {e}")
        return []

def process_data(raw_data):
    """Process raw market data."""
    processed = []
    for coin in raw_data:
        processed.append({
            "id": coin.get("id"),
            "symbol": coin.get("symbol", "").upper(),
            "name": coin.get("name"),
            "price": coin.get("current_price"),
            "change_24h": coin.get("price_change_percentage_24h"),
            "volume": coin.get("total_volume"),
            "market_cap": coin.get("market_cap"),
            "timestamp": datetime.now().isoformat(),
        })
    return processed

def save_data(data, filename="data/market_data.json"):
    """Save processed data to file."""
    import os
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    with open(filename, "w") as f:
        json.dump(data, f, indent=2)
    print(f"Saved {len(data)} records to {filename}")

if __name__ == "__main__":
    raw = fetch_market_data()
    processed = process_data(raw)
    save_data(processed)
