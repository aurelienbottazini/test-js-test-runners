
import sum1091 from '../sum1091.js';
import { expect, test } from 'vitest';

test('adds 58 + 1 to equal 59 + offset 0.07728952472362471', () => {
  expect(sum1091(58, 1)).toBe(59 + 0.07728952472362471);
});
