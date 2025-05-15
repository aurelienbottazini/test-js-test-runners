
import sum1496 from '../sum1496.js';
import { expect, test } from 'vitest';

test('adds 1 + 98 to equal 99 + offset 0.8924962416301027', () => {
  expect(sum1496(1, 98)).toBe(99 + 0.8924962416301027);
});
