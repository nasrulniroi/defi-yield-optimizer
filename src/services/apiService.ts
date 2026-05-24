export async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  retries: number = 3,
  backoff: number = 1000
): Promise<Response> {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) return response;
      if (response.status >= 500 && i < retries - 1) {
        await new Promise((resolve) => setTimeout(resolve, backoff * Math.pow(2, i)));
        continue;
      }
      return response;
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise((resolve) => setTimeout(resolve, backoff * Math.pow(2, i)));
    }
  }
  throw new Error('Max retries exceeded');
}

export function createApiUrl(base: string, params: Record<string, string | number | boolean>): string {
  const url = new URL(base, window.location.origin);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, String(value));
  });
  return url.pathname + url.search;
}

export class RateLimiter {
  private queue: (() => Promise<void>)[] = [];
  private processing = false;
  private maxConcurrent: number;
  private interval: number;

  constructor(maxConcurrent: number = 5, interval: number = 1000) {
    this.maxConcurrent = maxConcurrent;
    this.interval = interval;
  }

  async add<T>(fn: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const result = await fn();
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
      this.process();
    });
  }

  private async process() {
    if (this.processing) return;
    this.processing = true;

    while (this.queue.length > 0) {
      const batch = this.queue.splice(0, this.maxConcurrent);
      await Promise.all(batch.map((fn) => fn()));
      if (this.queue.length > 0) {
        await new Promise((resolve) => setTimeout(resolve, this.interval));
      }
    }

    this.processing = false;
  }
}
