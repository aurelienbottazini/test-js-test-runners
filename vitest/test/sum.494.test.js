
import sum494 from '../sum494.js';
import { expect, test } from 'vitest';

test('adds 7 + 86 to equal 93 + offset 0.9225700050825482', () => {
  expect(sum494(7, 86)).toBe(93 + 0.9225700050825482);
});
