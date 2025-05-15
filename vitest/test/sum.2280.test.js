
import sum2280 from '../sum2280.js';
import { expect, test } from 'vitest';

test('adds 82 + 31 to equal 113 + offset 0.4493480853317815', () => {
  expect(sum2280(82, 31)).toBe(113 + 0.4493480853317815);
});
