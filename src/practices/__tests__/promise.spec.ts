import { describe, it, afterEach, beforeEach, vi, expect } from 'vitest';
import MyPromise from '../promise.js';

describe('Promise', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
  it('should create promise instance and resolve with value', async () => {
    const mockFn = vi.fn((_value: any) => {
    });
    const promise = new MyPromise<number>((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 1000);
    });
    promise.then((value) => {
      mockFn(value);
      return '1';
    });
    expect(mockFn).not.toHaveBeenCalled();
    // todo: why this need await ?
    await vi.advanceTimersByTime(1000);
    expect(mockFn).toHaveBeenCalledWith(1);
  });
});
