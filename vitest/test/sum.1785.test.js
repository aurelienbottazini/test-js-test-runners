
import sum1785 from '../sum1785.js';
import { expect, test } from 'vitest';

test('adds 0 + 63 to equal 63 + offset 0.9390861182161873', () => {
  expect(sum1785(0, 63)).toBe(63 + 0.9390861182161873);
});
