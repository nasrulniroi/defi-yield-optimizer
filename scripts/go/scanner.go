package main

import (
	"encoding/json"
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"os"
	"sync"
	"time"
)

// YieldData represents yield information for a DeFi pool
type YieldData struct {
	Protocol  string  `json:"protocol"`
	Pool      string  `json:"pool"`
	Chain     string  `json:"chain"`
	APY       float64 `json:"apy"`
	TVL       float64 `json:"tvl"`
	Risk      string  `json:"risk"`
	Status    string  `json:"status"`
	Timestamp string  `json:"timestamp"`
}

// Scanner scans DeFi protocols for yield opportunities
type Scanner struct {
	protocols []string
	results   []YieldData
	mu        sync.Mutex
}

// NewScanner creates a new Scanner instance
func NewScanner() *Scanner {
	return &Scanner{
		protocols: []string{"aave", "compound", "yearn", "convex"},
	}
}

// ScanAll scans all integrated protocols
func (s *Scanner) ScanAll() []YieldData {
	var wg sync.WaitGroup
	resultsChan := make(chan []YieldData, len(s.protocols))

	for _, protocol := range s.protocols {
		wg.Add(1)
		go func(p string) {
			defer wg.Done()
			data := s.scanProtocol(p)
			resultsChan <- data
		}(protocol)
	}

	go func() {
		wg.Wait()
		close(resultsChan)
	}()

	for data := range resultsChan {
		s.mu.Lock()
		s.results = append(s.results, data...)
		s.mu.Unlock()
	}

	return s.results
}

// scanProtocol scans a single protocol for yield data
func (s *Scanner) scanProtocol(protocol string) []YieldData {
	log.Printf("Scanning protocol: %s", protocol)

	mockData := map[string][]YieldData{
		"aave": {
			{Protocol: "Aave V3", Pool: "USDC", Chain: "ethereum", APY: 5.1, TVL: 2500000000, Risk: "low", Status: "active"},
			{Protocol: "Aave V3", Pool: "WETH", Chain: "ethereum", APY: 3.2, TVL: 3200000000, Risk: "low", Status: "active"},
			{Protocol: "Aave V3", Pool: "DAI", Chain: "ethereum", APY: 4.8, TVL: 1800000000, Risk: "low", Status: "active"},
		},
		"compound": {
			{Protocol: "Compound V3", Pool: "USDC", Chain: "ethereum", APY: 4.2, TVL: 1800000000, Risk: "low", Status: "active"},
			{Protocol: "Compound V3", Pool: "WETH", Chain: "ethereum", APY: 2.8, TVL: 2100000000, Risk: "low", Status: "active"},
		},
		"yearn": {
			{Protocol: "Yearn Finance", Pool: "WETH Vault", Chain: "ethereum", APY: 6.8, TVL: 800000000, Risk: "medium", Status: "active"},
			{Protocol: "Yearn Finance", Pool: "USDC Vault", Chain: "ethereum", APY: 7.3, TVL: 650000000, Risk: "medium", Status: "active"},
		},
		"convex": {
			{Protocol: "Convex Finance", Pool: "stETH-ETH", Chain: "ethereum", APY: 8.2, TVL: 1200000000, Risk: "medium", Status: "active"},
			{Protocol: "Convex Finance", Pool: "3pool", Chain: "ethereum", APY: 7.3, TVL: 900000000, Risk: "medium", Status: "active"},
		},
	}

	data := mockData[protocol]
	now := time.Now().Format(time.RFC3339)
	for i := range data {
		data[i].Timestamp = now
		data[i].APY += (rand.Float64()*0.2 - 0.1) // Slight randomization
	}

	return data
}

// FindBest returns the best yield opportunities
func (s *Scanner) FindBest(n int) []YieldData {
	s.mu.Lock()
	defer s.mu.Unlock()

	results := make([]YieldData, len(s.results))
	copy(results, s.results)

	for i := 0; i < len(results)-1; i++ {
		for j := i + 1; j < len(results); j++ {
			if results[j].APY > results[i].APY {
				results[i], results[j] = results[j], results[i]
			}
		}
	}

	if n > len(results) {
		n = len(results)
	}
	return results[:n]
}

func handleScan(w http.ResponseWriter, r *http.Request) {
	scanner := NewScanner()
	results := scanner.ScanAll()

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]interface{}{
		"data":      results,
		"count":     len(results),
		"timestamp": time.Now().Format(time.RFC3339),
	})
}

func handleBest(w http.ResponseWriter, r *http.Request) {
	scanner := NewScanner()
	scanner.ScanAll()
	best := scanner.FindBest(5)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]interface{}{
		"data":      best,
		"count":     len(best),
		"timestamp": time.Now().Format(time.RFC3339),
	})
}

func main() {
	if len(os.Args) > 1 && os.Args[1] == "serve" {
		http.HandleFunc("/api/scan", handleScan)
		http.HandleFunc("/api/best", handleBest)

		port := ":8080"
		fmt.Printf("Yield Scanner API running on %s\n", port)
		log.Fatal(http.ListenAndServe(port, nil))
		return
	}

	scanner := NewScanner()

	fmt.Println("=" + fmt.Sprintf("%50s", "="))
	fmt.Println("  DeFi Yield Scanner")
	fmt.Println("=" + fmt.Sprintf("%50s", "="))

	fmt.Println("\nScanning all protocols...")
	results := scanner.ScanAll()
	fmt.Printf("Found %d yield opportunities\n", len(results))

	fmt.Println("\nTop 5 Yield Opportunities:")
	best := scanner.FindBest(5)
	for i, y := range best {
		fmt.Printf("  %d. %s (%s) - APY: %.2f%%, TVL: $%.0fM\n",
			i+1, y.Protocol, y.Pool, y.APY, y.TVL/1e6)
	}

	fmt.Println("\n" + "=" + fmt.Sprintf("%50s", "="))
}
