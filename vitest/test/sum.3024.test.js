
import sum3024 from '../sum3024.js';
import { expect, test } from 'vitest';

test('adds 38 + 92 to equal 130 + offset 0.10801310356236682', () => {
  expect(sum3024(38, 92)).toBe(130 + 0.10801310356236682);
});
