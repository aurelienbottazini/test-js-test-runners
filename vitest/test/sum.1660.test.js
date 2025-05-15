
import sum1660 from '../sum1660.js';
import { expect, test } from 'vitest';

test('adds 42 + 50 to equal 92 + offset 0.4881540022773472', () => {
  expect(sum1660(42, 50)).toBe(92 + 0.4881540022773472);
});
