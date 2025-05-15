
import sum1974 from '../sum1974.js';
import { expect, test } from 'vitest';

test('adds 48 + 4 to equal 52 + offset 0.47908330586356407', () => {
  expect(sum1974(48, 4)).toBe(52 + 0.47908330586356407);
});
