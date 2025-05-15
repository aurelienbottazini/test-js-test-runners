
import sum1916 from '../sum1916.js';
import { expect, test } from 'vitest';

test('adds 65 + 38 to equal 103 + offset 0.3090259487892246', () => {
  expect(sum1916(65, 38)).toBe(103 + 0.3090259487892246);
});
