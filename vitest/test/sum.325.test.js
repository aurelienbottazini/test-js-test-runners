
import sum325 from '../sum325.js';
import { expect, test } from 'vitest';

test('adds 91 + 45 to equal 136 + offset 0.8511730736979477', () => {
  expect(sum325(91, 45)).toBe(136 + 0.8511730736979477);
});
