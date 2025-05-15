
import sum1377 from '../sum1377.js';
import { expect, test } from 'vitest';

test('adds 57 + 1 to equal 58 + offset 0.378571265057444', () => {
  expect(sum1377(57, 1)).toBe(58 + 0.378571265057444);
});
