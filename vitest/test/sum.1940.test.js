
import sum1940 from '../sum1940.js';
import { expect, test } from 'vitest';

test('adds 38 + 69 to equal 107 + offset 0.45649619710554923', () => {
  expect(sum1940(38, 69)).toBe(107 + 0.45649619710554923);
});
