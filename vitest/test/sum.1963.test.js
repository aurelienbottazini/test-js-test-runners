
import sum1963 from '../sum1963.js';
import { expect, test } from 'vitest';

test('adds 7 + 37 to equal 44 + offset 0.06697814276144698', () => {
  expect(sum1963(7, 37)).toBe(44 + 0.06697814276144698);
});
