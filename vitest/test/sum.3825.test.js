
import sum3825 from '../sum3825.js';
import { expect, test } from 'vitest';

test('adds 94 + 37 to equal 131 + offset 0.6579502857551631', () => {
  expect(sum3825(94, 37)).toBe(131 + 0.6579502857551631);
});
