
import sum1856 from '../sum1856.js';
import { expect, test } from 'vitest';

test('adds 29 + 55 to equal 84 + offset 0.06154916220662221', () => {
  expect(sum1856(29, 55)).toBe(84 + 0.06154916220662221);
});
