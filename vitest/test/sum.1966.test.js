
import sum1966 from '../sum1966.js';
import { expect, test } from 'vitest';

test('adds 3 + 92 to equal 95 + offset 0.3322760707588618', () => {
  expect(sum1966(3, 92)).toBe(95 + 0.3322760707588618);
});
