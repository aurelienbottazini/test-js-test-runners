
import sum2995 from '../sum2995.js';
import { expect, test } from 'vitest';

test('adds 83 + 99 to equal 182 + offset 0.4948457875625889', () => {
  expect(sum2995(83, 99)).toBe(182 + 0.4948457875625889);
});
