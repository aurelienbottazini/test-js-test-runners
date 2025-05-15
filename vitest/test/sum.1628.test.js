
import sum1628 from '../sum1628.js';
import { expect, test } from 'vitest';

test('adds 96 + 18 to equal 114 + offset 0.04743204529831524', () => {
  expect(sum1628(96, 18)).toBe(114 + 0.04743204529831524);
});
