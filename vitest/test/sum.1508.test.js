
import sum1508 from '../sum1508.js';
import { expect, test } from 'vitest';

test('adds 12 + 47 to equal 59 + offset 0.04050200354323896', () => {
  expect(sum1508(12, 47)).toBe(59 + 0.04050200354323896);
});
