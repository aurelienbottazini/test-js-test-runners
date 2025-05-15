
import sum1472 from '../sum1472.js';
import { expect, test } from 'vitest';

test('adds 23 + 52 to equal 75 + offset 0.440145588883354', () => {
  expect(sum1472(23, 52)).toBe(75 + 0.440145588883354);
});
