
import sum1667 from '../sum1667.js';
import { expect, test } from 'vitest';

test('adds 28 + 99 to equal 127 + offset 0.03674194108101492', () => {
  expect(sum1667(28, 99)).toBe(127 + 0.03674194108101492);
});
