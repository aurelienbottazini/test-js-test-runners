
import sum694 from '../sum694.js';
import { expect, test } from 'vitest';

test('adds 58 + 34 to equal 92 + offset 0.11954388839354835', () => {
  expect(sum694(58, 34)).toBe(92 + 0.11954388839354835);
});
