
import sum1839 from '../sum1839.js';
import { expect, test } from 'vitest';

test('adds 53 + 50 to equal 103 + offset 0.06618465228504689', () => {
  expect(sum1839(53, 50)).toBe(103 + 0.06618465228504689);
});
