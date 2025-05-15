
import sum3049 from '../sum3049.js';
import { expect, test } from 'vitest';

test('adds 82 + 10 to equal 92 + offset 0.20551144933158105', () => {
  expect(sum3049(82, 10)).toBe(92 + 0.20551144933158105);
});
