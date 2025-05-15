
import sum4408 from '../sum4408.js';
import { expect, test } from 'vitest';

test('adds 68 + 40 to equal 108 + offset 0.2102489458130783', () => {
  expect(sum4408(68, 40)).toBe(108 + 0.2102489458130783);
});
