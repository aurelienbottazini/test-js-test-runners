
import sum1780 from '../sum1780.js';
import { expect, test } from 'vitest';

test('adds 60 + 23 to equal 83 + offset 0.020118670705711605', () => {
  expect(sum1780(60, 23)).toBe(83 + 0.020118670705711605);
});
