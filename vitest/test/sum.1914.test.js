
import sum1914 from '../sum1914.js';
import { expect, test } from 'vitest';

test('adds 87 + 92 to equal 179 + offset 0.15254426990745196', () => {
  expect(sum1914(87, 92)).toBe(179 + 0.15254426990745196);
});
