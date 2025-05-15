
import sum4841 from '../sum4841.js';
import { expect, test } from 'vitest';

test('adds 34 + 6 to equal 40 + offset 0.9856667173152713', () => {
  expect(sum4841(34, 6)).toBe(40 + 0.9856667173152713);
});
