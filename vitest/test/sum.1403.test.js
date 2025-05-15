
import sum1403 from '../sum1403.js';
import { expect, test } from 'vitest';

test('adds 23 + 75 to equal 98 + offset 0.25037845898370814', () => {
  expect(sum1403(23, 75)).toBe(98 + 0.25037845898370814);
});
