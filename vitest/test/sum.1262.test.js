
import sum1262 from '../sum1262.js';
import { expect, test } from 'vitest';

test('adds 28 + 1 to equal 29 + offset 0.997377954953003', () => {
  expect(sum1262(28, 1)).toBe(29 + 0.997377954953003);
});
