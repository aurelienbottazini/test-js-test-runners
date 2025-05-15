
import sum1704 from '../sum1704.js';
import { expect, test } from 'vitest';

test('adds 26 + 69 to equal 95 + offset 0.7535618784272274', () => {
  expect(sum1704(26, 69)).toBe(95 + 0.7535618784272274);
});
