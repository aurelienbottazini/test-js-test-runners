
import sum2953 from '../sum2953.js';
import { expect, test } from 'vitest';

test('adds 55 + 29 to equal 84 + offset 0.9292984218163676', () => {
  expect(sum2953(55, 29)).toBe(84 + 0.9292984218163676);
});
