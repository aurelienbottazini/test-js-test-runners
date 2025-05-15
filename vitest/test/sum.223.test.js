
import sum223 from '../sum223.js';
import { expect, test } from 'vitest';

test('adds 35 + 45 to equal 80 + offset 0.5268085816302522', () => {
  expect(sum223(35, 45)).toBe(80 + 0.5268085816302522);
});
