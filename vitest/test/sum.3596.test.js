
import sum3596 from '../sum3596.js';
import { expect, test } from 'vitest';

test('adds 24 + 77 to equal 101 + offset 0.8513899006059378', () => {
  expect(sum3596(24, 77)).toBe(101 + 0.8513899006059378);
});
