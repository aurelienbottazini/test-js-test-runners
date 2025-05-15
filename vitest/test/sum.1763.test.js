
import sum1763 from '../sum1763.js';
import { expect, test } from 'vitest';

test('adds 8 + 2 to equal 10 + offset 0.20219709101026984', () => {
  expect(sum1763(8, 2)).toBe(10 + 0.20219709101026984);
});
