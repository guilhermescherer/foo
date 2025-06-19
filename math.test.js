import { describe, it, expect } from 'vitest';
import MathOperations from './math.js';

describe('MathOperations class', () => {
  const math = new MathOperations();

  it('should correctly sum two numbers', () => {
    expect(math.sum(2, 3)).toBe(5);
  });

  it('should correctly subtract two numbers', () => {
    expect(math.subtract(10, 4)).toBe(6);
  });
});
