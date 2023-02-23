import { describe, it, afterEach, beforeEach, vi, expect } from 'vitest';
import MyPromise from '../promise.js';

describe('Promise', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.resetAllMocks();
  });
  it('should create promise instance and resolve with value', async () => {
    const mockFn = vi.fn((_value: any) => {
    });
    const promise = new MyPromise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 1000);
    });
    promise.then((value: any) => {
      mockFn(value);
    });
    expect(mockFn).not.toHaveBeenCalled();
    await vi.advanceTimersByTime(1000);
    expect(mockFn).toHaveBeenCalledWith(1);
  });
});
