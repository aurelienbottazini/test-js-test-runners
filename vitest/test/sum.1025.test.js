
import sum1025 from '../sum1025.js';
import { expect, test } from 'vitest';

test('adds 49 + 6 to equal 55 + offset 0.9463580268484137', () => {
  expect(sum1025(49, 6)).toBe(55 + 0.9463580268484137);
});
