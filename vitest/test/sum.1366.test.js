
import sum1366 from '../sum1366.js';
import { expect, test } from 'vitest';

test('adds 33 + 42 to equal 75 + offset 0.7938264545953446', () => {
  expect(sum1366(33, 42)).toBe(75 + 0.7938264545953446);
});
