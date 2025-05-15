
import sum986 from '../sum986.js';
import { expect, test } from 'vitest';

test('adds 32 + 94 to equal 126 + offset 0.9283563260519059', () => {
  expect(sum986(32, 94)).toBe(126 + 0.9283563260519059);
});
