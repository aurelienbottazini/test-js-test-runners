
import sum1094 from '../sum1094.js';
import { expect, test } from 'vitest';

test('adds 7 + 88 to equal 95 + offset 0.6454562349657967', () => {
  expect(sum1094(7, 88)).toBe(95 + 0.6454562349657967);
});
