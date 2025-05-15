
import sum4689 from '../sum4689.js';
import { expect, test } from 'vitest';

test('adds 53 + 83 to equal 136 + offset 0.7400959594978499', () => {
  expect(sum4689(53, 83)).toBe(136 + 0.7400959594978499);
});
