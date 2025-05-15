
import sum1945 from '../sum1945.js';
import { expect, test } from 'vitest';

test('adds 31 + 14 to equal 45 + offset 0.672722917279662', () => {
  expect(sum1945(31, 14)).toBe(45 + 0.672722917279662);
});
