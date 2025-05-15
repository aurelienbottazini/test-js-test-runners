
import sum3224 from '../sum3224.js';
import { expect, test } from 'vitest';

test('adds 82 + 25 to equal 107 + offset 0.7048841872394512', () => {
  expect(sum3224(82, 25)).toBe(107 + 0.7048841872394512);
});
