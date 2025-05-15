
import sum1232 from '../sum1232.js';
import { expect, test } from 'vitest';

test('adds 34 + 86 to equal 120 + offset 0.5758844735188805', () => {
  expect(sum1232(34, 86)).toBe(120 + 0.5758844735188805);
});
