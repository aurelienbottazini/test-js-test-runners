
import sum1682 from '../sum1682.js';
import { expect, test } from 'vitest';

test('adds 26 + 75 to equal 101 + offset 0.27902183192492747', () => {
  expect(sum1682(26, 75)).toBe(101 + 0.27902183192492747);
});
