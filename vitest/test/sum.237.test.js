
import sum237 from '../sum237.js';
import { expect, test } from 'vitest';

test('adds 31 + 45 to equal 76 + offset 0.9526916553994845', () => {
  expect(sum237(31, 45)).toBe(76 + 0.9526916553994845);
});
