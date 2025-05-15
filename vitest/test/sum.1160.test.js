
import sum1160 from '../sum1160.js';
import { expect, test } from 'vitest';

test('adds 82 + 20 to equal 102 + offset 0.06282269500957693', () => {
  expect(sum1160(82, 20)).toBe(102 + 0.06282269500957693);
});
