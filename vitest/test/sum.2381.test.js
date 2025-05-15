
import sum2381 from '../sum2381.js';
import { expect, test } from 'vitest';

test('adds 16 + 18 to equal 34 + offset 0.09587649754134242', () => {
  expect(sum2381(16, 18)).toBe(34 + 0.09587649754134242);
});
