
import sum3137 from '../sum3137.js';
import { expect, test } from 'vitest';

test('adds 25 + 32 to equal 57 + offset 0.40911703958202306', () => {
  expect(sum3137(25, 32)).toBe(57 + 0.40911703958202306);
});
