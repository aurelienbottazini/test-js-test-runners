
import sum1884 from '../sum1884.js';
import { expect, test } from 'vitest';

test('adds 55 + 72 to equal 127 + offset 0.4418019374995127', () => {
  expect(sum1884(55, 72)).toBe(127 + 0.4418019374995127);
});
