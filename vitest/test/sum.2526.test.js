
import sum2526 from '../sum2526.js';
import { expect, test } from 'vitest';

test('adds 31 + 3 to equal 34 + offset 0.7764411636754311', () => {
  expect(sum2526(31, 3)).toBe(34 + 0.7764411636754311);
});
