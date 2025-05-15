
import sum4912 from '../sum4912.js';
import { expect, test } from 'vitest';

test('adds 55 + 47 to equal 102 + offset 0.2654485357028543', () => {
  expect(sum4912(55, 47)).toBe(102 + 0.2654485357028543);
});
