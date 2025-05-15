
import sum1783 from '../sum1783.js';
import { expect, test } from 'vitest';

test('adds 47 + 91 to equal 138 + offset 0.11419994237060482', () => {
  expect(sum1783(47, 91)).toBe(138 + 0.11419994237060482);
});
