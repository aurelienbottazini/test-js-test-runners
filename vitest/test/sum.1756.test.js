
import sum1756 from '../sum1756.js';
import { expect, test } from 'vitest';

test('adds 12 + 39 to equal 51 + offset 0.8488301808938352', () => {
  expect(sum1756(12, 39)).toBe(51 + 0.8488301808938352);
});
