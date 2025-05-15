
import sum3673 from '../sum3673.js';
import { expect, test } from 'vitest';

test('adds 64 + 92 to equal 156 + offset 0.32060195282599013', () => {
  expect(sum3673(64, 92)).toBe(156 + 0.32060195282599013);
});
