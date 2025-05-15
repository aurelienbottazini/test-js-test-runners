
import sum2934 from '../sum2934.js';
import { expect, test } from 'vitest';

test('adds 82 + 39 to equal 121 + offset 0.8619248170604844', () => {
  expect(sum2934(82, 39)).toBe(121 + 0.8619248170604844);
});
