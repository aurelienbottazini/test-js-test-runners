
import sum1895 from '../sum1895.js';
import { expect, test } from 'vitest';

test('adds 75 + 77 to equal 152 + offset 0.0018909014724463047', () => {
  expect(sum1895(75, 77)).toBe(152 + 0.0018909014724463047);
});
