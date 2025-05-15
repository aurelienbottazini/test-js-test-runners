
import sum3549 from '../sum3549.js';
import { expect, test } from 'vitest';

test('adds 22 + 97 to equal 119 + offset 0.8050214115885697', () => {
  expect(sum3549(22, 97)).toBe(119 + 0.8050214115885697);
});
