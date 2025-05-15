
import sum1444 from '../sum1444.js';
import { expect, test } from 'vitest';

test('adds 64 + 37 to equal 101 + offset 0.7375258539745528', () => {
  expect(sum1444(64, 37)).toBe(101 + 0.7375258539745528);
});
