#!/usr/bin/env python3
"""
DeFi Yield Optimizer - Impermanent Loss Calculator
Calculates impermanent loss for liquidity positions.
"""

import math
from typing import Dict, Tuple

def calculate_impermanent_loss(
    initial_price_a: float,
    initial_price_b: float,
    current_price_a: float,
    current_price_b: float,
    initial_value: float = 10000,
) -> Dict:
    """Calculate impermanent loss for a liquidity position."""
    
    price_ratio_initial = initial_price_a / initial_price_b
    price_ratio_current = current_price_a / current_price_b
    price_change = price_ratio_current / price_ratio_initial
    
    il_multiplier = 2 * math.sqrt(price_change) / (1 + price_change)
    il_percent = (il_multiplier - 1) * 100
    
    holding_value = initial_value
    lp_value = initial_value * il_multiplier
    
    token_a_holding = (initial_value / 2) / initial_price_a
    token_b_holding = (initial_value / 2) / initial_price_b
    
    sqrt_price_change = math.sqrt(price_change)
    token_a_lp = token_a_holding * (1 - (1 - 1/sqrt_price_change) / 2)
    token_b_lp = token_b_holding * (1 + (1 - sqrt_price_change) / 2)
    
    lp_value_actual = token_a_lp * current_price_a + token_b_lp * current_price_b
    
    return {
        'il_percent': il_percent,
        'il_value': lp_value - holding_value,
        'holding_value': holding_value,
        'lp_value': lp_value_actual,
        'difference': lp_value_actual - holding_value,
        'price_change_a': ((current_price_a - initial_price_a) / initial_price_a) * 100,
        'price_change_b': ((current_price_b - initial_price_b) / initial_price_b) * 100,
        'token_a_holding': token_a_holding,
        'token_b_holding': token_b_holding,
        'token_a_lp': token_a_lp,
        'token_b_lp': token_b_lp,
    }


def print_il_report(result: Dict, pair: str):
    """Print a formatted IL report."""
    print(f"\n  Impermanent Loss Report - {pair}")
    print("  " + "-" * 40)
    print(f"  IL Percentage: {result['il_percent']:.4f}%")
    print(f"  IL Value: ${result['il_value']:.2f}")
    print(f"  Holding Value: ${result['holding_value']:.2f}")
    print(f"  LP Value: ${result['lp_value']:.2f}")
    print(f"  Difference: ${result['difference']:.2f}")
    print(f"  Price Change A: {result['price_change_a']:.2f}%")
    print(f"  Price Change B: {result['price_change_b']:.2f}%")


def main():
    print("=" * 50)
    print("  Impermanent Loss Calculator")
    print("=" * 50)
    
    scenarios = [
        ("ETH/USDC", 2000, 1, 3000, 1, 10000),
        ("ETH/USDC", 2000, 1, 1500, 1, 10000),
        ("ETH/USDC", 2000, 1, 5000, 1, 10000),
        ("stETH/ETH", 2000, 2000, 2100, 2050, 10000),
    ]
    
    for pair, price_a, price_b, current_a, current_b, value in scenarios:
        result = calculate_impermanent_loss(price_a, price_b, current_a, current_b, value)
        print_il_report(result, pair)
    
    print("\n" + "=" * 50)


if __name__ == '__main__':
    main()
