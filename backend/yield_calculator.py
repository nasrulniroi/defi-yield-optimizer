#!/usr/bin/env python3
"""Calculate optimal yield strategies."""
import json

def calculate_apy(apr, compounds_per_year=365):
    return ((1 + apr/compounds_per_year) ** compounds_per_year - 1) * 100

def compare_strategies(strategies):
    return sorted(strategies, key=lambda s: s.get("apy", 0), reverse=True)
