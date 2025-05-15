
import sum248 from '../sum248.js';
import { expect, test } from 'vitest';

test('adds 44 + 40 to equal 84 + offset 0.6390981355845349', () => {
  expect(sum248(44, 40)).toBe(84 + 0.6390981355845349);
});
