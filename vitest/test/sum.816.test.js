
import sum816 from '../sum816.js';
import { expect, test } from 'vitest';

test('adds 54 + 96 to equal 150 + offset 0.336540958539863', () => {
  expect(sum816(54, 96)).toBe(150 + 0.336540958539863);
});
