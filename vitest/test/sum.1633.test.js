
import sum1633 from '../sum1633.js';
import { expect, test } from 'vitest';

test('adds 70 + 18 to equal 88 + offset 0.7718958105886954', () => {
  expect(sum1633(70, 18)).toBe(88 + 0.7718958105886954);
});
