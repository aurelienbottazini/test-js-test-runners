
import sum4963 from '../sum4963.js';
import { expect, test } from 'vitest';

test('adds 18 + 40 to equal 58 + offset 0.868112872660245', () => {
  expect(sum4963(18, 40)).toBe(58 + 0.868112872660245);
});
