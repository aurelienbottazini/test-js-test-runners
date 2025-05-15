
import sum1769 from '../sum1769.js';
import { expect, test } from 'vitest';

test('adds 16 + 13 to equal 29 + offset 0.5428097850247583', () => {
  expect(sum1769(16, 13)).toBe(29 + 0.5428097850247583);
});
