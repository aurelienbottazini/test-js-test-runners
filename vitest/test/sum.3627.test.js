
import sum3627 from '../sum3627.js';
import { expect, test } from 'vitest';

test('adds 27 + 55 to equal 82 + offset 0.6019810824307653', () => {
  expect(sum3627(27, 55)).toBe(82 + 0.6019810824307653);
});
