
import sum1052 from '../sum1052.js';
import { expect, test } from 'vitest';

test('adds 92 + 15 to equal 107 + offset 0.8525090365512192', () => {
  expect(sum1052(92, 15)).toBe(107 + 0.8525090365512192);
});
