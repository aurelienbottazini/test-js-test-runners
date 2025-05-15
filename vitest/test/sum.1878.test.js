
import sum1878 from '../sum1878.js';
import { expect, test } from 'vitest';

test('adds 10 + 76 to equal 86 + offset 0.3459809448822033', () => {
  expect(sum1878(10, 76)).toBe(86 + 0.3459809448822033);
});
