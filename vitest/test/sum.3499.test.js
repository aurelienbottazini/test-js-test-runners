
import sum3499 from '../sum3499.js';
import { expect, test } from 'vitest';

test('adds 28 + 6 to equal 34 + offset 0.26144183934555076', () => {
  expect(sum3499(28, 6)).toBe(34 + 0.26144183934555076);
});
