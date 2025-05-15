
import sum2291 from '../sum2291.js';
import { expect, test } from 'vitest';

test('adds 37 + 55 to equal 92 + offset 0.7868514189278623', () => {
  expect(sum2291(37, 55)).toBe(92 + 0.7868514189278623);
});
