
import sum3272 from '../sum3272.js';
import { expect, test } from 'vitest';

test('adds 82 + 85 to equal 167 + offset 0.5337772997058817', () => {
  expect(sum3272(82, 85)).toBe(167 + 0.5337772997058817);
});
