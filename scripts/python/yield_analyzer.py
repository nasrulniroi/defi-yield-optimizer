#!/usr/bin/env python3
"""
DeFi Yield Optimizer - Yield Analyzer
Fetches and analyzes yield data across DeFi protocols.
"""

import json
import sys
import time
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from dataclasses import dataclass, asdict
from pathlib import Path

@dataclass
class YieldData:
    protocol: str
    pool: str
    chain: str
    apy: float
    tvl: float
    timestamp: str
    risk_score: float
    il_risk: bool

class YieldAnalyzer:
    """Analyzes yield opportunities across DeFi protocols."""
    
    PROTOCOLS = ['aave', 'compound', 'yearn', 'convex']
    
    def __init__(self, output_dir: str = './data'):
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(parents=True, exist_ok=True)
        self.yields: List[YieldData] = []
    
    def fetch_yields(self) -> List[YieldData]:
        """Fetch yield data from all integrated protocols."""
        print(f"[{datetime.now()}] Fetching yield data...")
        
        mock_data = [
            YieldData("Aave V3", "USDC", "ethereum", 5.1, 2500000000, datetime.now().isoformat(), 2.1, False),
            YieldData("Aave V3", "WETH", "ethereum", 3.2, 3200000000, datetime.now().isoformat(), 1.8, False),
            YieldData("Aave V3", "DAI", "ethereum", 4.8, 1800000000, datetime.now().isoformat(), 2.0, False),
            YieldData("Compound V3", "USDC", "ethereum", 4.2, 1800000000, datetime.now().isoformat(), 2.3, False),
            YieldData("Compound V3", "WETH", "ethereum", 2.8, 2100000000, datetime.now().isoformat(), 1.9, False),
            YieldData("Yearn Finance", "WETH Vault", "ethereum", 6.8, 800000000, datetime.now().isoformat(), 4.5, False),
            YieldData("Yearn Finance", "USDC Vault", "ethereum", 7.3, 650000000, datetime.now().isoformat(), 4.2, False),
            YieldData("Convex Finance", "stETH-ETH", "ethereum", 8.2, 1200000000, datetime.now().isoformat(), 5.1, True),
            YieldData("Convex Finance", "3pool", "ethereum", 7.3, 900000000, datetime.now().isoformat(), 4.8, False),
        ]
        
        self.yields = mock_data
        return mock_data
    
    def analyze(self) -> Dict:
        """Analyze yield data and generate insights."""
        if not self.yields:
            self.fetch_yields()
        
        analysis = {
            'timestamp': datetime.now().isoformat(),
            'total_protocols': len(set(y.protocol for y in self.yields)),
            'total_pools': len(self.yields),
            'total_tvl': sum(y.tvl for y in self.yields),
            'average_apy': sum(y.apy for y in self.yields) / len(self.yields),
            'highest_apy': max(self.yields, key=lambda y: y.apy),
            'lowest_risk': min(self.yields, key=lambda y: y.risk_score),
            'best_risk_adjusted': max(self.yields, key=lambda y: y.apy / y.risk_score),
            'protocol_breakdown': {},
        }
        
        for protocol in self.PROTOCOLS:
            protocol_yields = [y for y in self.yields if protocol in y.protocol.lower()]
            if protocol_yields:
                analysis['protocol_breakdown'][protocol] = {
                    'pools': len(protocol_yields),
                    'avg_apy': sum(y.apy for y in protocol_yields) / len(protocol_yields),
                    'total_tvl': sum(y.tvl for y in protocol_yields),
                    'max_apy': max(y.apy for y in protocol_yields),
                }
        
        return analysis
    
    def find_optimal_allocation(self, total_amount: float, risk_tolerance: str = 'moderate') -> List[Dict]:
        """Find optimal fund allocation based on risk tolerance."""
        risk_multipliers = {
            'conservative': 0.5,
            'moderate': 1.0,
            'aggressive': 2.0,
        }
        
        multiplier = risk_multipliers.get(risk_tolerance, 1.0)
        
        scored_pools = []
        for y in self.yields:
            risk_adj_score = y.apy / (y.risk_score * multiplier)
            scored_pools.append({
                'pool': y,
                'score': risk_adj_score,
            })
        
        scored_pools.sort(key=lambda x: x['score'], reverse=True)
        
        allocations = []
        remaining = total_amount
        for sp in scored_pools[:4]:
            allocation = min(remaining * 0.4, remaining)
            allocations.append({
                'protocol': sp['pool'].protocol,
                'pool': sp['pool'].pool,
                'allocation': allocation,
                'percentage': (allocation / total_amount) * 100,
                'expected_apy': sp['pool'].apy,
                'risk_score': sp['pool'].risk_score,
            })
            remaining -= allocation
            if remaining <= 0:
                break
        
        return allocations
    
    def save_results(self, analysis: Dict, filename: str = 'analysis.json'):
        """Save analysis results to file."""
        filepath = self.output_dir / filename
        with open(filepath, 'w') as f:
            json.dump(analysis, f, indent=2, default=str)
        print(f"Results saved to {filepath}")
    
    def print_report(self, analysis: Dict):
        """Print a formatted analysis report."""
        print("\n" + "=" * 60)
        print("  DeFi Yield Optimizer - Analysis Report")
        print("=" * 60)
        print(f"\n  Generated: {analysis['timestamp']}")
        print(f"  Protocols: {analysis['total_protocols']}")
        print(f"  Total Pools: {analysis['total_pools']}")
        print(f"  Total TVL: ${analysis['total_tvl']:,.0f}")
        print(f"  Average APY: {analysis['average_apy']:.2f}%")
        
        print("\n  Protocol Breakdown:")
        for protocol, data in analysis.get('protocol_breakdown', {}).items():
            print(f"    {protocol}:")
            print(f"      Pools: {data['pools']}")
            print(f"      Avg APY: {data['avg_apy']:.2f}%")
            print(f"      Max APY: {data['max_apy']:.2f}%")
            print(f"      TVL: ${data['total_tvl']:,.0f}")
        
        print("\n" + "=" * 60)


def main():
    analyzer = YieldAnalyzer()
    
    print("Fetching yield data from DeFi protocols...")
    analyzer.fetch_yields()
    
    print("Analyzing yield opportunities...")
    analysis = analyzer.analyze()
    
    analyzer.print_report(analysis)
    analyzer.save_results(analysis)
    
    print("\nFinding optimal allocation for $100,000 (moderate risk)...")
    allocations = analyzer.find_optimal_allocation(100000, 'moderate')
    for a in allocations:
        print(f"  {a['protocol']} ({a['pool']}): ${a['allocation']:,.0f} ({a['percentage']:.1f}%) - Expected APY: {a['expected_apy']}%")
    
    print("\nDone!")


if __name__ == '__main__':
    main()
