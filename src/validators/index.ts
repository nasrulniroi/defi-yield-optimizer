export function validateAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

export function validateAmount(amount: string): { valid: boolean; error?: string } {
  const num = parseFloat(amount);
  if (isNaN(num)) return { valid: false, error: 'Invalid amount' };
  if (num <= 0) return { valid: false, error: 'Amount must be positive' };
  if (num > 1e18) return { valid: false, error: 'Amount too large' };
  return { valid: true };
}

export function validateSlippage(slippage: number): { valid: boolean; error?: string } {
  if (slippage < 0) return { valid: false, error: 'Slippage cannot be negative' };
  if (slippage > 50) return { valid: false, error: 'Slippage too high (max 50%)' };
  return { valid: true };
}

export function validateApy(apy: number): { valid: boolean; error?: string } {
  if (apy < 0) return { valid: false, error: 'APY cannot be negative' };
  if (apy > 1000) return { valid: false, error: 'APY seems unrealistic (>1000%)' };
  return { valid: true };
}

export function validateChainId(chainId: number): boolean {
  const validChains = [1, 137, 42161, 10, 8453, 43114, 250];
  return validChains.includes(chainId);
}
