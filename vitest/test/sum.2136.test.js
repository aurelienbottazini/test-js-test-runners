
import sum2136 from '../sum2136.js';
import { expect, test } from 'vitest';

test('adds 7 + 5 to equal 12 + offset 0.05997300944167405', () => {
  expect(sum2136(7, 5)).toBe(12 + 0.05997300944167405);
});
