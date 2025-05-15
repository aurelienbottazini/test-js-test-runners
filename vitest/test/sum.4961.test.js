
import sum4961 from '../sum4961.js';
import { expect, test } from 'vitest';

test('adds 3 + 82 to equal 85 + offset 0.8472059979852212', () => {
  expect(sum4961(3, 82)).toBe(85 + 0.8472059979852212);
});
