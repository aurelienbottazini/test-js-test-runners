
import sum1736 from '../sum1736.js';
import { expect, test } from 'vitest';

test('adds 90 + 9 to equal 99 + offset 0.34044321206399264', () => {
  expect(sum1736(90, 9)).toBe(99 + 0.34044321206399264);
});
