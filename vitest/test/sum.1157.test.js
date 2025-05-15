
import sum1157 from '../sum1157.js';
import { expect, test } from 'vitest';

test('adds 56 + 68 to equal 124 + offset 0.20321751621233086', () => {
  expect(sum1157(56, 68)).toBe(124 + 0.20321751621233086);
});
