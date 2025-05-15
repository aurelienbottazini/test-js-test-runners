
import sum2254 from '../sum2254.js';
import { expect, test } from 'vitest';

test('adds 80 + 54 to equal 134 + offset 0.38665927988300275', () => {
  expect(sum2254(80, 54)).toBe(134 + 0.38665927988300275);
});
