
import sum3233 from '../sum3233.js';
import { expect, test } from 'vitest';

test('adds 77 + 56 to equal 133 + offset 0.481068274401258', () => {
  expect(sum3233(77, 56)).toBe(133 + 0.481068274401258);
});
