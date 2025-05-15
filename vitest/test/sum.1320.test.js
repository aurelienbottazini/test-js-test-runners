
import sum1320 from '../sum1320.js';
import { expect, test } from 'vitest';

test('adds 7 + 15 to equal 22 + offset 0.40986887543490036', () => {
  expect(sum1320(7, 15)).toBe(22 + 0.40986887543490036);
});
