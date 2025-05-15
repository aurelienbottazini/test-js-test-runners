
import sum1889 from '../sum1889.js';
import { expect, test } from 'vitest';

test('adds 53 + 10 to equal 63 + offset 0.25179539010666396', () => {
  expect(sum1889(53, 10)).toBe(63 + 0.25179539010666396);
});
