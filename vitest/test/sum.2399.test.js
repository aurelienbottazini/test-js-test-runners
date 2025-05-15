
import sum2399 from '../sum2399.js';
import { expect, test } from 'vitest';

test('adds 29 + 35 to equal 64 + offset 0.3864901608677126', () => {
  expect(sum2399(29, 35)).toBe(64 + 0.3864901608677126);
});
