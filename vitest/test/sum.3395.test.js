
import sum3395 from '../sum3395.js';
import { expect, test } from 'vitest';

test('adds 94 + 1 to equal 95 + offset 0.6977777782390655', () => {
  expect(sum3395(94, 1)).toBe(95 + 0.6977777782390655);
});
