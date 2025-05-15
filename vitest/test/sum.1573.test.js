
import sum1573 from '../sum1573.js';
import { expect, test } from 'vitest';

test('adds 18 + 98 to equal 116 + offset 0.23241685737099382', () => {
  expect(sum1573(18, 98)).toBe(116 + 0.23241685737099382);
});
