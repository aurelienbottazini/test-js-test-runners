
import sum3660 from '../sum3660.js';
import { expect, test } from 'vitest';

test('adds 84 + 3 to equal 87 + offset 0.9189834872380342', () => {
  expect(sum3660(84, 3)).toBe(87 + 0.9189834872380342);
});
