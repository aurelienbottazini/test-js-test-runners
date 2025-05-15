
import sum1325 from '../sum1325.js';
import { expect, test } from 'vitest';

test('adds 24 + 29 to equal 53 + offset 0.48304308138935903', () => {
  expect(sum1325(24, 29)).toBe(53 + 0.48304308138935903);
});
