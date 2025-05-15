
import sum3802 from '../sum3802.js';
import { expect, test } from 'vitest';

test('adds 31 + 9 to equal 40 + offset 0.046240845381804174', () => {
  expect(sum3802(31, 9)).toBe(40 + 0.046240845381804174);
});
