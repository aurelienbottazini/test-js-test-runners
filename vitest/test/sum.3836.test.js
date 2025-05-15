
import sum3836 from '../sum3836.js';
import { expect, test } from 'vitest';

test('adds 22 + 91 to equal 113 + offset 0.07177946012472747', () => {
  expect(sum3836(22, 91)).toBe(113 + 0.07177946012472747);
});
