
import sum1595 from '../sum1595.js';
import { expect, test } from 'vitest';

test('adds 30 + 50 to equal 80 + offset 0.5383432237919293', () => {
  expect(sum1595(30, 50)).toBe(80 + 0.5383432237919293);
});
