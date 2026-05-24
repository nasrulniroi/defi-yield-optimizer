#!/usr/bin/env python3
"""
DeFi Yield Optimizer - Portfolio Tracker
Tracks portfolio performance and calculates metrics.
"""

import json
from datetime import datetime, timedelta
from typing import Dict, List
from dataclasses import dataclass

@dataclass
class Position:
    protocol: str
    pool: str
    deposited: float
    current_value: float
    entry_date: str
    auto_compound: bool
    
    @property
    def pnl(self) -> float:
        return self.current_value - self.deposited
    
    @property
    def pnl_percent(self) -> float:
        return (self.pnl / self.deposited) * 100 if self.deposited > 0 else 0


class PortfolioTracker:
    """Tracks and analyzes DeFi portfolio performance."""
    
    def __init__(self):
        self.positions: List[Position] = []
        self.transactions: List[Dict] = []
    
    def add_position(self, position: Position):
        self.positions.append(position)
    
    def get_total_value(self) -> float:
        return sum(p.current_value for p in self.positions)
    
    def get_total_pnl(self) -> float:
        return sum(p.pnl for p in self.positions)
    
    def get_total_pnl_percent(self) -> float:
        total_deposited = sum(p.deposited for p in self.positions)
        return (self.get_total_pnl() / total_deposited * 100) if total_deposited > 0 else 0
    
    def get_protocol_breakdown(self) -> Dict[str, float]:
        breakdown = {}
        for p in self.positions:
            if p.protocol in breakdown:
                breakdown[p.protocol] += p.current_value
            else:
                breakdown[p.protocol] = p.current_value
        return breakdown
    
    def get_risk_score(self) -> float:
        if not self.positions:
            return 0
        risk_scores = {'Aave': 2, 'Compound': 2, 'Yearn': 4, 'Convex': 5}
        total_value = self.get_total_value()
        weighted_risk = sum(
            risk_scores.get(p.protocol, 3) * (p.current_value / total_value)
            for p in self.positions
        )
        return weighted_risk
    
    def generate_report(self) -> Dict:
        return {
            'total_value': self.get_total_value(),
            'total_pnl': self.get_total_pnl(),
            'total_pnl_percent': self.get_total_pnl_percent(),
            'positions_count': len(self.positions),
            'protocols_count': len(set(p.protocol for p in self.positions)),
            'protocol_breakdown': self.get_protocol_breakdown(),
            'risk_score': self.get_risk_score(),
            'auto_compound_positions': sum(1 for p in self.positions if p.auto_compound),
        }


def main():
    tracker = PortfolioTracker()
    
    positions = [
        Position("Convex", "stETH-ETH", 28000, 32450, "2024-01-15", True),
        Position("Aave", "USDC", 25000, 25420, "2024-02-01", True),
        Position("Yearn", "WETH", 15000, 18200, "2024-01-20", True),
        Position("Compound", "DAI", 14000, 15310, "2024-03-01", False),
    ]
    
    for pos in positions:
        tracker.add_position(pos)
    
    report = tracker.generate_report()
    
    print("\n" + "=" * 50)
    print("  Portfolio Report")
    print("=" * 50)
    print(f"  Total Value: ${report['total_value']:,.2f}")
    print(f"  Total PNL: ${report['total_pnl']:,.2f} ({report['total_pnl_percent']:.2f}%)")
    print(f"  Positions: {report['positions_count']}")
    print(f"  Protocols: {report['protocols_count']}")
    print(f"  Risk Score: {report['risk_score']:.1f}/10")
    print(f"  Auto-Compound: {report['auto_compound_positions']}/{report['positions_count']}")
    print("\n  Protocol Breakdown:")
    for protocol, value in report['protocol_breakdown'].items():
        print(f"    {protocol}: ${value:,.2f}")
    print("=" * 50)


if __name__ == '__main__':
    main()
