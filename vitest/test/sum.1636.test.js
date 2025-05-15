
import sum1636 from '../sum1636.js';
import { expect, test } from 'vitest';

test('adds 83 + 99 to equal 182 + offset 0.5143165178984419', () => {
  expect(sum1636(83, 99)).toBe(182 + 0.5143165178984419);
});
