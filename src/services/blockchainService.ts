export class BlockchainService {
  private static instance: BlockchainService;
  private provider: any = null;

  static getInstance(): BlockchainService {
    if (!BlockchainService.instance) {
      BlockchainService.instance = new BlockchainService();
    }
    return BlockchainService.instance;
  }

  async connect(): Promise<string> {
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      const accounts = await (window as any).ethereum.request({
        method: 'eth_requestAccounts',
      });
      return accounts[0];
    }
    throw new Error('No wallet found');
  }

  async getBalance(address: string): Promise<string> {
    if (!this.provider) throw new Error('Not connected');
    return '0';
  }

  async getChainId(): Promise<number> {
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      const chainId = await (window as any).ethereum.request({
        method: 'eth_chainId',
      });
      return parseInt(chainId, 16);
    }
    return 1;
  }

  async switchChain(chainId: number): Promise<void> {
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      await (window as any).ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      });
    }
  }

  async estimateGas(to: string, data: string): Promise<string> {
    return '150000';
  }

  async sendTransaction(to: string, value: string, data: string): Promise<string> {
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      const tx = await (window as any).ethereum.request({
        method: 'eth_sendTransaction',
        params: [{ to, value, data }],
      });
      return tx;
    }
    throw new Error('No wallet found');
  }
}
