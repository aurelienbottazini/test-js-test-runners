
import sum1744 from '../sum1744.js';
import { expect, test } from 'vitest';

test('adds 94 + 42 to equal 136 + offset 0.2955206445336168', () => {
  expect(sum1744(94, 42)).toBe(136 + 0.2955206445336168);
});
