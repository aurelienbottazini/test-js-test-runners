
import sum3896 from '../sum3896.js';
import { expect, test } from 'vitest';

test('adds 92 + 45 to equal 137 + offset 0.5685869492782575', () => {
  expect(sum3896(92, 45)).toBe(137 + 0.5685869492782575);
});
