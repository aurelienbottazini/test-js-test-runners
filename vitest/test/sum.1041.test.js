
import sum1041 from '../sum1041.js';
import { expect, test } from 'vitest';

test('adds 37 + 2 to equal 39 + offset 0.47480405693002414', () => {
  expect(sum1041(37, 2)).toBe(39 + 0.47480405693002414);
});
