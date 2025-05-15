
import sum1886 from '../sum1886.js';
import { expect, test } from 'vitest';

test('adds 28 + 72 to equal 100 + offset 0.5629859434079724', () => {
  expect(sum1886(28, 72)).toBe(100 + 0.5629859434079724);
});
