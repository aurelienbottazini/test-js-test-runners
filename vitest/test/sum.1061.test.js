
import sum1061 from '../sum1061.js';
import { expect, test } from 'vitest';

test('adds 4 + 92 to equal 96 + offset 0.11325585633086044', () => {
  expect(sum1061(4, 92)).toBe(96 + 0.11325585633086044);
});
