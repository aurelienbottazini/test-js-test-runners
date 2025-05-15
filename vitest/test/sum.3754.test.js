
import sum3754 from '../sum3754.js';
import { expect, test } from 'vitest';

test('adds 26 + 16 to equal 42 + offset 0.03947369804733758', () => {
  expect(sum3754(26, 16)).toBe(42 + 0.03947369804733758);
});
