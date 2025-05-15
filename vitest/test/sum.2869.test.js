
import sum2869 from '../sum2869.js';
import { expect, test } from 'vitest';

test('adds 50 + 97 to equal 147 + offset 0.666385390743487', () => {
  expect(sum2869(50, 97)).toBe(147 + 0.666385390743487);
});
