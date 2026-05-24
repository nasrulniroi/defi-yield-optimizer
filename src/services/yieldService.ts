export class YieldService {
  private static instance: YieldService;

  static getInstance(): YieldService {
    if (!YieldService.instance) {
      YieldService.instance = new YieldService();
    }
    return YieldService.instance;
  }

  async getProtocols() {
    const response = await fetch('/api/protocols');
    const data = await response.json();
    return data.data;
  }

  async getYields() {
    const response = await fetch('/api/yields');
    const data = await response.json();
    return data.data;
  }

  async getPortfolio() {
    const response = await fetch('/api/portfolio');
    const data = await response.json();
    return data.data;
  }

  async calculateRebalance(amount: number) {
    const response = await fetch('/api/rebalance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount }),
    });
    const data = await response.json();
    return data.data;
  }

  async harvestRewards() {
    const response = await fetch('/api/harvest', { method: 'POST' });
    const data = await response.json();
    return data.data;
  }

  async calculateYield(principal: number, apy: number, years: number, frequency: string) {
    const response = await fetch(
      `/api/calculator?principal=${principal}&apy=${apy}&years=${years}&frequency=${frequency}`
    );
    const data = await response.json();
    return data.data;
  }

  async getAlerts() {
    const response = await fetch('/api/alerts');
    const data = await response.json();
    return data.data;
  }
}
