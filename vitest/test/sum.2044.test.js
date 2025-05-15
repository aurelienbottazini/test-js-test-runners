
import sum2044 from '../sum2044.js';
import { expect, test } from 'vitest';

test('adds 12 + 42 to equal 54 + offset 0.047963294703807224', () => {
  expect(sum2044(12, 42)).toBe(54 + 0.047963294703807224);
});
