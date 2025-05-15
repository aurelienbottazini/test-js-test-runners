
import sum1430 from '../sum1430.js';
import { expect, test } from 'vitest';

test('adds 51 + 72 to equal 123 + offset 0.30048792958370985', () => {
  expect(sum1430(51, 72)).toBe(123 + 0.30048792958370985);
});
