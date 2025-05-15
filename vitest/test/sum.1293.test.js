
import sum1293 from '../sum1293.js';
import { expect, test } from 'vitest';

test('adds 63 + 45 to equal 108 + offset 0.972299969952366', () => {
  expect(sum1293(63, 45)).toBe(108 + 0.972299969952366);
});
