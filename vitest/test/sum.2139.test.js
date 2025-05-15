
import sum2139 from '../sum2139.js';
import { expect, test } from 'vitest';

test('adds 50 + 3 to equal 53 + offset 0.22674044378701008', () => {
  expect(sum2139(50, 3)).toBe(53 + 0.22674044378701008);
});
