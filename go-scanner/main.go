package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"
)

type Config struct {
	RPCURL   string `json:"rpc_url"`
	ChainID  int    `json:"chain_id"`
	Interval int    `json:"interval_seconds"`
}

type BlockData struct {
	Number     uint64    `json:"number"`
	Timestamp  time.Time `json:"timestamp"`
	GasUsed    uint64    `json:"gas_used"`
	GasLimit   uint64    `json:"gas_limit"`
	TxCount    int       `json:"tx_count"`
}

func main() {
	config := Config{
		RPCURL:   getEnv("RPC_URL", "https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY"),
		ChainID:  1,
		Interval: 12,
	}

	log.Printf("Starting scanner for chain %d", config.ChainID)
	log.Printf("RPC: %s", config.RPCURL[:30]+"...")
	log.Printf("Interval: %ds", config.Interval)

	mux := http.NewServeMux()
	mux.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		json.NewEncoder(w).Encode(map[string]string{"status": "ok", "chain": fmt.Sprintf("%d", config.ChainID)})
	})
	mux.HandleFunc("/api/blocks", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]interface{}{"latest": nil, "status": "scanning"})
	})

	log.Println("Scanner API running on :8080")
	log.Fatal(http.ListenAndServe(":8080", mux))
}

func getEnv(key, def string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return def
}
