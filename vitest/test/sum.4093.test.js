
import sum4093 from '../sum4093.js';
import { expect, test } from 'vitest';

test('adds 44 + 37 to equal 81 + offset 0.4997880840873744', () => {
  expect(sum4093(44, 37)).toBe(81 + 0.4997880840873744);
});
