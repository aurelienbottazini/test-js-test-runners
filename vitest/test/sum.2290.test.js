
import sum2290 from '../sum2290.js';
import { expect, test } from 'vitest';

test('adds 16 + 58 to equal 74 + offset 0.3078943419333311', () => {
  expect(sum2290(16, 58)).toBe(74 + 0.3078943419333311);
});
