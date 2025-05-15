
import sum2187 from '../sum2187.js';
import { expect, test } from 'vitest';

test('adds 69 + 9 to equal 78 + offset 0.812490987431633', () => {
  expect(sum2187(69, 9)).toBe(78 + 0.812490987431633);
});
