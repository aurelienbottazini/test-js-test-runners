
import sum2088 from '../sum2088.js';
import { expect, test } from 'vitest';

test('adds 53 + 2 to equal 55 + offset 0.3609865698381052', () => {
  expect(sum2088(53, 2)).toBe(55 + 0.3609865698381052);
});
