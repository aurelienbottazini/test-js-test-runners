
import sum3801 from '../sum3801.js';
import { expect, test } from 'vitest';

test('adds 49 + 49 to equal 98 + offset 0.47949069508833797', () => {
  expect(sum3801(49, 49)).toBe(98 + 0.47949069508833797);
});
