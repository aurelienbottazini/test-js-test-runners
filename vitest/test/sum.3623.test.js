
import sum3623 from '../sum3623.js';
import { expect, test } from 'vitest';

test('adds 81 + 53 to equal 134 + offset 0.005482953894255127', () => {
  expect(sum3623(81, 53)).toBe(134 + 0.005482953894255127);
});
