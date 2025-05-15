
import sum1544 from '../sum1544.js';
import { expect, test } from 'vitest';

test('adds 83 + 6 to equal 89 + offset 0.7518999610802316', () => {
  expect(sum1544(83, 6)).toBe(89 + 0.7518999610802316);
});
