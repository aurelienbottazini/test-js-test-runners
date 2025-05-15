
import sum2940 from '../sum2940.js';
import { expect, test } from 'vitest';

test('adds 39 + 75 to equal 114 + offset 0.360076425468448', () => {
  expect(sum2940(39, 75)).toBe(114 + 0.360076425468448);
});
