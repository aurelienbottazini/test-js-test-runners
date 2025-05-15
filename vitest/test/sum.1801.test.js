
import sum1801 from '../sum1801.js';
import { expect, test } from 'vitest';

test('adds 11 + 2 to equal 13 + offset 0.35612633983406206', () => {
  expect(sum1801(11, 2)).toBe(13 + 0.35612633983406206);
});
