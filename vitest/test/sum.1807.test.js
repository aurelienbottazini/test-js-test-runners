
import sum1807 from '../sum1807.js';
import { expect, test } from 'vitest';

test('adds 63 + 14 to equal 77 + offset 0.8845105641170748', () => {
  expect(sum1807(63, 14)).toBe(77 + 0.8845105641170748);
});
