
import sum1453 from '../sum1453.js';
import { expect, test } from 'vitest';

test('adds 94 + 43 to equal 137 + offset 0.07177157115082833', () => {
  expect(sum1453(94, 43)).toBe(137 + 0.07177157115082833);
});
