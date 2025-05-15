
import sum3305 from '../sum3305.js';
import { expect, test } from 'vitest';

test('adds 86 + 71 to equal 157 + offset 0.7883399350561429', () => {
  expect(sum3305(86, 71)).toBe(157 + 0.7883399350561429);
});
