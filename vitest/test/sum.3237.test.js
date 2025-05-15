
import sum3237 from '../sum3237.js';
import { expect, test } from 'vitest';

test('adds 64 + 37 to equal 101 + offset 0.08148812468990607', () => {
  expect(sum3237(64, 37)).toBe(101 + 0.08148812468990607);
});
