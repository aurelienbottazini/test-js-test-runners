
import sum4234 from '../sum4234.js';
import { expect, test } from 'vitest';

test('adds 87 + 37 to equal 124 + offset 0.9267019421270306', () => {
  expect(sum4234(87, 37)).toBe(124 + 0.9267019421270306);
});
