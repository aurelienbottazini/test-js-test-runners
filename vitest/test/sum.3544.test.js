
import sum3544 from '../sum3544.js';
import { expect, test } from 'vitest';

test('adds 96 + 35 to equal 131 + offset 0.725752485830929', () => {
  expect(sum3544(96, 35)).toBe(131 + 0.725752485830929);
});
