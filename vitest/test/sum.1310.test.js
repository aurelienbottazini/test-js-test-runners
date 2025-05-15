
import sum1310 from '../sum1310.js';
import { expect, test } from 'vitest';

test('adds 41 + 12 to equal 53 + offset 0.46321204132595784', () => {
  expect(sum1310(41, 12)).toBe(53 + 0.46321204132595784);
});
