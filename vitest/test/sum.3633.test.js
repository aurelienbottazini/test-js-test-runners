
import sum3633 from '../sum3633.js';
import { expect, test } from 'vitest';

test('adds 9 + 59 to equal 68 + offset 0.7903850402291933', () => {
  expect(sum3633(9, 59)).toBe(68 + 0.7903850402291933);
});
