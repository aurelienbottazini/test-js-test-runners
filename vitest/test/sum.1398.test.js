
import sum1398 from '../sum1398.js';
import { expect, test } from 'vitest';

test('adds 50 + 87 to equal 137 + offset 0.23977737238894747', () => {
  expect(sum1398(50, 87)).toBe(137 + 0.23977737238894747);
});
