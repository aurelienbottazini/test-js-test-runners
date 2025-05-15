
import sum2080 from '../sum2080.js';
import { expect, test } from 'vitest';

test('adds 60 + 90 to equal 150 + offset 0.5620039639265907', () => {
  expect(sum2080(60, 90)).toBe(150 + 0.5620039639265907);
});
