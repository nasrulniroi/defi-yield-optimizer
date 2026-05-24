export class AppError extends Error {
  public code: string;
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, code: string, statusCode: number = 500, isOperational: boolean = true) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, 'VALIDATION_ERROR', 400);
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(`${resource} not found`, 'NOT_FOUND', 404);
  }
}

export class NetworkError extends AppError {
  constructor(message: string = 'Network request failed') {
    super(message, 'NETWORK_ERROR', 503);
  }
}

export class BlockchainError extends AppError {
  constructor(message: string) {
    super(message, 'BLOCKCHAIN_ERROR', 500);
  }
}

export class InsufficientBalanceError extends AppError {
  constructor() {
    super('Insufficient balance', 'INSUFFICIENT_BALANCE', 400);
  }
}

export class SlippageExceededError extends AppError {
  constructor(expected: number, actual: number) {
    super(`Slippage exceeded: expected ${expected}%, got ${actual}%`, 'SLIPPAGE_EXCEEDED', 400);
  }
}

export function isAppError(error: unknown): error is AppError {
  return error instanceof AppError;
}

export function handleError(error: unknown): { message: string; code: string } {
  if (isAppError(error)) {
    return { message: error.message, code: error.code };
  }
  if (error instanceof Error) {
    return { message: error.message, code: 'UNKNOWN_ERROR' };
  }
  return { message: 'An unknown error occurred', code: 'UNKNOWN_ERROR' };
}
