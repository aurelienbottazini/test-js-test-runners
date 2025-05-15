
import sum754 from '../sum754.js';
import { expect, test } from 'vitest';

test('adds 86 + 51 to equal 137 + offset 0.8121230110122624', () => {
  expect(sum754(86, 51)).toBe(137 + 0.8121230110122624);
});
