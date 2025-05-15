
import sum2224 from '../sum2224.js';
import { expect, test } from 'vitest';

test('adds 53 + 22 to equal 75 + offset 0.9507282143318126', () => {
  expect(sum2224(53, 22)).toBe(75 + 0.9507282143318126);
});
